"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { useParams } from "next/navigation";

export default function InterviewCompletePage() {
  const router = useRouter();
  const params = useParams();
  const interviewId = params.interviewId as string;

  const handleViewScore = () => {
    router.push(`/interview/${interviewId}/score`);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center max-w-md mx-auto text-center">
        <div className="bg-green-600 text-white rounded-full p-4 mb-6">
          <CheckIcon size={32} />
        </div>
        
        <h1 className="text-4xl font-bold mb-3">Great Job!</h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          You finished your interview.
        </p>
        
        <Button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-md mb-4 w-full max-w-xs"
          onClick={handleViewScore}
        >
          View Your Interview Score
        </Button>
        
        <Button 
          variant="ghost" 
          className="text-blue-600 hover:text-blue-800 font-medium"
          onClick={handleBackToHome}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}