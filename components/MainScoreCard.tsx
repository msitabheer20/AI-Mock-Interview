import { Calendar, Clock } from "lucide-react";
import React from "react";
import RenderStars from "./RenderStars";

// totalScore: 3.8,
//             role: "GTM Systems Manager",
//             sessionLength: "18:42 min",
//             date: "Mar 12, 2025",
//             positionTitle: "Senior GTM Specialist at Microsoft",
//             persona: {
//                 name: "Ethan Patel",
//                 role: "GTM SYSTEMS MANAGER",
//                 image: "/avatars/avatar5.jpg"
//             }

interface MainScoreCardProps {
    totalScore: number;
    role: string;
    sessionLength: string;
    date: string;
    positionTitle: string;
}

const MainScoreCard: React.FC<MainScoreCardProps> = ({ totalScore, role, sessionLength, date, positionTitle }) => {
    return (
        <div className="card-border w-full mb-8">
        <div className="card p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-medium text-white">Total score average:</h2>
              </div>
              <div className="flex items-center gap-2">
                <RenderStars score={totalScore} />
                <span className="text-lg font-medium text-primary-100">{totalScore}/5.0</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary-100">{role}</h3>
              <p className="text-sm text-light-400">{positionTitle}</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-2">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-light-400" />
                <span className="text-sm text-light-100">Session Length: {sessionLength}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-light-400" />
                <span className="text-sm text-light-100">Interview Date: {date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MainScoreCard;
