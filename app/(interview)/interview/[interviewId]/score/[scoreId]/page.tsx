"use client";

import React from 'react';
import { ArrowLeft, Star, StarHalf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from 'lucide-react';
import { mockInterviewResults } from '@/constants/index';
import { useParams, useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import ScoreCard from '@/components/ScoreCard';
import MainScoreCard from '@/components/MainScoreCard';

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

    return (
        <div className="root-layout">
            <div className="flex flex-col gap-4">
                <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-primary-200 hover:text-primary-100 w-fit"
                    onClick={() => router.push("/")}
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Button>
                
                <h1 className="text-2xl font-semibold text-light-100 mb-6">Mock Interview Results</h1>
            </div>

            {/* Main score card */}
            <MainScoreCard
                totalScore={interviewInfo.totalScore}
                role={interviewInfo.role}
                sessionLength={interviewInfo.sessionLength}
                date={interviewInfo.date}
                positionTitle={interviewInfo.positionTitle}
            />

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
                        onClick={() => router.push(`/interview/${interviewId}`)}
                    >
                        Practice Again
                    </Button>
                </div>
                <div className="flex justify-center mt-4">
                    {/* Removed the bottom Back to Home button since we already have one at the top */}
                </div>
            </div>
        </div>
    );
}