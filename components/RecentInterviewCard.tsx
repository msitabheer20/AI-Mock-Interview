import { Eye } from "lucide-react";
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface RecentInterviewCardProps {
    persona: string;
    companyTitle: string;
    duration: string;
    date: string;
    preview: string;
    score?: number;
    image: string;
    disabled?: boolean;
    role: string;
}

const RecentInterviewCard: React.FC<RecentInterviewCardProps> = ({ persona, companyTitle, duration, date, preview, score, image, disabled, role }) => {
    return (
        <div
            className="bg-gray-800 border-0 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-md hover:bg-gray-750 transition-colors"
        >
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-600">
                    <img
                        src={image}
                        alt={persona}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{persona}</span>
                        <span className="text-gray-300 text-sm">
                            · {role}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-300 text-sm">
                            {companyTitle}
                        </span>
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-300">
                        <div className="flex items-center gap-1">
                            <Clock size={14} className="text-gray-300" />
                            <span>Duration: {duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-gray-300" />
                            <span>Date: {date}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-300">
                        <Eye size={14} className="text-gray-300" />
                        <span>Quick preview: {preview}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end gap-4 sm:min-w-[150px]">
                {disabled ? (
                    <div className="text-sm text-gray-300">
                        Scoring was disabled for this session
                    </div>
                ) : (
                    <div className="text-sm font-medium text-white">
                        Score: <span className="text-amber-500">★</span>{" "}
                        {score}/5.0
                    </div>
                )}
                <Button
                    variant="outline"
                    className="text-blue-400 border-blue-400 hover:bg-gray-700 hover:text-blue-300 transition-colors"
                >
                    Open Interview
                </Button>
            </div>
        </div>
    )
}

export default RecentInterviewCard;