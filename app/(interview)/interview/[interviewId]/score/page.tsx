"use client";

import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from 'lucide-react';
import { mockInterviewResults } from '@/constants/index';
import { useParams, useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import ScoreCard from '@/components/ScoreCard';

export default function MockInterviewResults() {
  const params = useParams();
  const router = useRouter();
  const interviewId = params.interviewId as string;
  
  // Find the interview result with the matching ID
  const interviewResult = mockInterviewResults.find(result => result.id === interviewId);
  
  // If no matching interview is found, use the first one as fallback (for demo purposes)
  const resultData = interviewResult || mockInterviewResults[0];
  
  // If there are no interviews at all, show 404
  if (!resultData) {
    return notFound();
  }
  
  // Log warning if using fallback
  if (!interviewResult) {
    console.warn(`Interview with ID ${interviewId} not found, using fallback interview`);
  }
  
  const { interviewInfo, scoreCategories, summaryFeedback } = resultData;
  
  // Render stars based on score
  const renderStars = (score: number, size: number = 24) => {
    const fullStars = Math.floor(score);
    const hasHalfStar = score % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex text-primary-200">
        {Array(fullStars).fill(0).map((_, i) => (
          <Star key={`full-${i}`} size={size} fill="currentColor" />
        ))}
        {hasHalfStar && <StarHalf size={size} fill="currentColor" />}
        {Array(emptyStars).fill(0).map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-dark-200" />
        ))}
      </div>
    );
  };

  return (
    <div className="root-layout">
      <h1 className="text-2xl font-semibold text-light-100 mb-6">Mock Interview Results</h1>
      
      {/* Main score card */}
      <div className="card-border w-full mb-8">
        <div className="card p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-medium text-white">Total score average:</h2>
              </div>
              <div className="flex items-center gap-2">
                {renderStars(interviewInfo.totalScore)}
                <span className="text-lg font-medium text-primary-100">{interviewInfo.totalScore}/5.0</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary-100">{interviewInfo.role}</h3>
              <p className="text-sm text-light-400">{interviewInfo.positionTitle}</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-light-400" />
                <span className="text-sm text-light-100">Session Length: {interviewInfo.sessionLength}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-light-400" />
                <span className="text-sm text-light-100">Interview Date: {interviewInfo.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Score categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {scoreCategories.map((category) => (
          <ScoreCard 
            key={category.id}
            id={category.id}
            title={category.title}
            score={category.score}
            description={category.description}
            feedback={category.feedback}
          />
        ))}
      </div>
      
      {/* Pagination dots - could represent multiple pages of feedback */}
      <div className="flex justify-center gap-2 mb-8">
        <div className="w-8 h-2 bg-primary-200 rounded-full"></div>
        <div className="w-2 h-2 bg-light-600 rounded-full"></div>
      </div>
      
      {/* Feedback summary */}
      <div className="card-border w-full mb-8">
        <div className="card p-6">
          <h3 className="font-medium text-white mb-4">Feedback Summary</h3>
          <p className="text-light-100">{summaryFeedback}</p>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="section-feedback">
        <div className="buttons">
          <Button 
            variant="outline" 
            className="btn-secondary"
            onClick={() => router.push(`/interview/${interviewId}/review`)}
          >
            Open Interview
          </Button>
          <Button 
            className="btn-primary"
            onClick={() => router.push(`/interview/${interviewId}/start`)}
          >
            Practice Again
          </Button>
        </div>
        <div className="flex justify-center mt-4">
          <Button 
            variant="link" 
            className="text-primary-200 hover:text-primary-100"
            onClick={() => router.push('/')}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}