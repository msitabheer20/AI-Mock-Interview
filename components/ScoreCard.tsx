"use client";
import React, { useState } from 'react';
import { Star, StarHalf } from 'lucide-react';

interface Description {
    short: string;
    full: string;
}

interface Feedback {
    short: string;
    full: string;
}

interface ScoreCardProps {
    id: number;
    title: string;
    score: number;
    description: Description;
    feedback: Feedback;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ id, title, score, description, feedback }) => {
    const [expandedSections, setExpandedSections] = useState<{
        [key: string]: boolean
    }>({});

    const toggleExpanded = (section: 'description' | 'feedback') => {
        const key = `${id}-${section}`;
        setExpandedSections(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };
  
    // Check if a section is expanded
    const isExpanded = (section: 'description' | 'feedback') => {
        const key = `${id}-${section}`;
        return expandedSections[key] || false;
    };

    // Render stars based on score
    const renderStars = (score: number, size: number = 20) => {
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
        <div className="card-border">
            <div className="card p-5">
                <h3 className="font-medium text-white mb-3">{title}</h3>
                <div className="flex items-center gap-2 mb-4">
                    {renderStars(score, 20)}
                    <span className="text-sm font-medium text-light-100">{score}/5.0</span>
                </div>

                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-medium text-primary-100">Description</h4>
                        <p className="text-sm text-light-100 mt-1">
                            {isExpanded('description') ? description.full : description.short}
                        </p>
                        <button
                            className="text-sm text-primary-200 mt-2 hover:text-primary-100"
                            onClick={() => toggleExpanded('description')}
                        >
                            {isExpanded('description') ? 'Show Less' : 'Read More'}
                        </button>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-primary-100">Feedback</h4>
                        <p className="text-sm text-light-100 mt-1">
                            {isExpanded('feedback') ? feedback.full : feedback.short}
                        </p>
                        <button
                            className="text-sm text-primary-200 mt-2 hover:text-primary-100"
                            onClick={() => toggleExpanded('feedback')}
                        >
                            {isExpanded('feedback') ? 'Show Less' : 'Read More'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoreCard;
