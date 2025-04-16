"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Clock, X } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function InterviewSessionPage() {
  const router = useRouter();
  const params = useParams();
  const [isAISpeaking, setIsAISpeaking] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      timestamp: "01:04"
    },
    {
      sender: "ai",
      content: "What are the most popular products or services we offer and how do they contribute to our revenue?",
      timestamp: "01:04"
    },
    {
      sender: "user",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      timestamp: "01:05"
    },
    {
      sender: "user",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      timestamp: "01:05"
    },
    {
      sender: "ai",
      content: "What are the biggest challenges facing our industry and how can we adapt to them?",
      timestamp: "01:20"
    },
    {
      sender: "user",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "01:25"
    }
  ]);
  const [timer, setTimer] = useState(260); // 4:20 in seconds

  useEffect(() => {
    const speakingInterval = setInterval(() => {
      setIsAISpeaking(prev => !prev);
    }, 3000);

    const timerInterval = setInterval(() => {
      setTimer(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(speakingInterval);
      clearInterval(timerInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col h-screen bg-dark-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <div>
          <h1 className="font-bold text-lg text-white">Product Designer at Google</h1>
          <div className="flex items-center gap-1 text-light-400 text-sm">
            <Mic size={14} />
            <span>Audio Interview with Mia Carter</span>
          </div>
        </div>
        <Button onClick={() => router.push(`/interview/${params.interviewId}/done`)} className="btn-disconnect cursor-pointer">End Call</Button>
      </header>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel - AI profile */}
        <div className="w-1/2 p-6 blue-gradient-dark flex flex-col items-center justify-center border-r border-gray-800">
          <div className="relative mb-6">
            <div className={`absolute -inset-4 rounded-full ${isAISpeaking ? 'animate-ripple' : ''}`}>
              <div className={`border-2 border-primary-200 rounded-full w-full h-full ${isAISpeaking ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute inset-0 border-2 border-primary-100 rounded-full ${isAISpeaking ? 'animate-ripple-delay' : 'opacity-0'}`}></div>
              <div className={`absolute inset-0 border-2 border-primary-100 rounded-full ${isAISpeaking ? 'animate-ripple-delay-more' : 'opacity-0'}`}></div>
            </div>
            <div className="rounded-full blue-gradient p-1 relative z-10 border-2 border-primary-200/50 shadow-lg">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <Image 
                  src="/avatars/avatar1.jpg" 
                  alt="Mia Carter" 
                  className="object-cover w-full h-full"
                  width={128}
                  height={128}
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-primary-200 p-1 rounded-full shadow">
                <Mic size={18} className="text-dark-100" />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-1 text-primary-100">Mia Carter</h2>
          <p className="text-light-100 mb-8">Revenue Operations Director</p>

          <div className="w-full max-w-xs">
            <div className="h-2 bg-dark-200 rounded-full mb-2">
              <div className="h-full bg-primary-200 rounded-full" style={{ width: `${(timer / 360) * 100}%` }}></div>
            </div>
            <div className="flex justify-center items-center text-light-100">
              <Clock size={16} className="mr-1" />
              <span>{formatTime(timer)}</span>
            </div>
          </div>

          <div className="mt-auto flex space-x-4">
            <Button variant="outline" className="bg-dark-200 text-primary-200 border-gray-700 hover:bg-dark-300 flex items-center gap-2">
              <Mic />
              <span>Mute</span>
            </Button>
            <Button onClick={() => router.push(`/interview/${params.interviewId}/done`)} className="btn-disconnect">End Call</Button>
            <Button variant="outline" className="bg-dark-200 text-primary-200 border-gray-700 hover:bg-dark-300">Skip Question</Button>
          </div>
        </div>

        {/* Right panel - Chat */}
        <div className="w-1/2 flex flex-col dark-gradient">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'} mb-4`}>
                {message.sender === 'ai' && (
                  <Avatar className="h-8 w-8 mr-2 bg-primary-200">
                    <AvatarImage src="/avatars/avatar1.jpg" alt="AI" />
                    <AvatarFallback className="bg-primary-200 text-dark-100">MC</AvatarFallback>
                  </Avatar>
                )}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-light-100">
                      {message.sender === 'ai' ? 'Mia Carter' : 'You'}
                    </span>
                    <span className="text-xs text-light-400 ml-4">{message.timestamp}</span>
                  </div>
                  <div className={`p-3 rounded-lg max-w-md ${
                    message.sender === 'ai' 
                    ? 'bg-dark-200 border border-gray-800 text-light-100' 
                    : 'bg-primary-200'
                  }`}>
                    <p className={`text-sm ${message.sender === 'ai' ? '' : 'text-black font-medium'}`}>{message.content}</p>
                  </div>
                </div>
                {message.sender === 'user' && (
                  <Avatar className="h-8 w-8 ml-2 bg-primary-100">
                    <AvatarFallback className="bg-primary-100 text-dark-100">You</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>

          {/* Listening indicator */}
          <div className="p-4 bg-dark-200 border-t border-gray-800 flex items-center justify-center">
            <div className="flex items-center justify-center gap-2 text-light-100">
              <Mic className="text-primary-200" />
              <span>Listening...</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-primary-200 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-primary-200 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                <div className="w-2 h-2 bg-primary-200 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}