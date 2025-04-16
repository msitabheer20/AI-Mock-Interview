"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";

interface InterviewCardProps {
    id: string;
    image: string;
    name: string;
    role: string;
    description: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ id, image, name, role, description }) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/interview/${id}`);
    }

    return (
        <Card onClick={onClick} className="bg-gray-900 border-0 overflow-hidden shadow-md cursor-pointer">
            <CardContent className="p-4">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-base text-white">{name}</h3>
                        <p className="text-xs text-gray-300 font-semibold mb-2">
                            {role}
                        </p>
                        <p className="text-xs text-gray-400">{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default InterviewCard;