"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Headphones, MessageSquare, ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

export default function InterviewSetupPage() {
  const router = useRouter();
  const params = useParams();
  const interviewId = params.interviewId as string;
  const [micPermission, setMicPermission] = useState(false);

  const requestMicrophoneAccess = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicPermission(true);
    } catch (error) {
      console.error("Microphone access denied:", error);
    }
  };

  const handleStartInterview = () => {
    if (micPermission) {
      router.push(`/interview/${interviewId}/start`);
    } else {
      requestMicrophoneAccess();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 text-blue-600" 
          onClick={() => router.push("/")}
        >
          <ArrowLeft size={16} />
          Home
        </Button>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">How to Get the Best Experience</h1>
        <p className="text-gray-500">Follow these tips for a productive conversation for interview</p>
      </div>

      <div className="space-y-4 mb-10">
        <Card>
          <CardContent className="flex items-center gap-4 p-2">
            <div className="bg-slate-100 rounded-full p-4">
              <Mic className="text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-semibold text-lg">Audio Setup</h2>
                <Badge variant="outline" className="bg-blue-100 text-blue-600 text-xs">Required</Badge>
              </div>
              <p className="text-gray-500 text-sm">Grant microphone permissions to start the conversations</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-2">
            <div className="bg-slate-100 rounded-full p-4">
              <Headphones className="text-gray-600" />
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-1">Headphones</h2>
              <p className="text-gray-500 text-sm">Not required, but headphones are recommended for the best experience.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-2">
            <div className="bg-slate-100 rounded-full p-4">
              <MessageSquare className="text-gray-600" />
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-1">Speak Naturally</h2>
              <p className="text-gray-500 text-sm">Talk like you would in real life. Interrupt, change topics, or ask for speech tips like a real conversation.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button 
          className="flex items-center cursor-pointer gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          onClick={handleStartInterview}
        >
          Start Interview
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}