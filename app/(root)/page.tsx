import RecentInterviewCard from "@/components/RecentInterviewCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Eye } from "lucide-react";
import React from "react";

const personas = [
  {
    name: "Mia Carter",
    role: "REVENUE OPERATIONS DIRECTOR",
    description: "Strategic and analytical, excelling in optimizing sales processes and cross-functional collaboration.",
    image: "/avatars/avatar1.jpg",
  },
  {
    name: "Isabelle Tran",
    role: "SALES ENABLEMENT MANAGER",
    description: "Encouraging and engaging, great for refining coaching skills and delivering impactful training sessions.",
    image: "/avatars/avatar2.jpg",
  },
  {
    name: "Liam Bennett",
    role: "DEAL DESK MANAGER",
    description: "Sharp and detail-oriented, ideal for mastering pricing strategies and contract negotiations.",
    image: "/avatars/avatar4.jpg",
  },
  {
    name: "Ethan Patel",
    role: "GTM SYSTEMS MANAGER",
    description: "Tech-savvy and solutions-driven, perfect for fine-tuning automation workflows and CRM best practices.",
    image: "/avatars/avatar5.jpg",
  },
  {
    name: "Noah Chambers",
    role: "REVENUE ANALYTICS MANAGER",
    description: "Data-focused and insightful, great for interpreting revenue trends and making data-driven recommendations.",
    image: "/avatars/avatar6.jpg",
  },
  {
    name: "Dhruv Patel",
    role: "SENIOR TECHNICAL LEAD",
    description: "Focused on technical excellence and innovation, great for refining technical interview skills and problem-solving.",
    image: "/avatars/avatar1.jpg",
  },
];

const recentInterviews = [
  {
    index: 0,
    persona: "Mia Carter",
    role: "Revenue Operations Director",
    companyTitle: "Lead Optimization Engineer at Google",
    duration: "15:24 min",
    date: "Mar 15, 2025",
    preview: "Pellentesque ut rhoncus nibh. Sed interdum ultricorper libero, semper lacus susd...",
    score: 4.5,
    image: "/avatars/avatar1.jpg",
  },
  {
    index: 1,
    persona: "Isabelle Tran",
    role: "Revenue Analytics Manager",
    companyTitle: "Senior Marketing Agent at Airbnb",
    duration: "15:24 min",
    date: "Mar 15, 2025",
    preview: "Nunc sed diam sit amet orci cursus vulputate. Nulla pretium ut sapien in cursus.",
    disabled: true,
    image: "/avatars/avatar2.jpg",
  },
  {
    index: 2,
    persona: "Isabelle Tran",
    role: "Sales Enablement Manager",
    companyTitle: "Lead Optimization Engineer at Warpchase",
    duration: "15:24 min",
    date: "Mar 15, 2025",
    preview: "Mauris accumsan arcu at lacinia interdum. Sed id gravida sem. Vestibulum gravida...",
    score: 4.5,
    image: "/avatars/avatar2.jpg",
  },
  {
    index: 3,
    persona: "Mia Carter",
    role: "Revenue Operations Director",
    companyTitle: "Lead Optimization Engineer at Donquadtech",
    duration: "15:24 min",
    date: "Mar 15, 2025",
    preview: "Pellentesque consequat euismod nisl in tincidunt. Donec commodo eros et erat pra...",
    score: 4.5,
    image: "/avatars/avatar1.jpg",
  },
  {
    index: 4,
    persona: "Mia Carter",
    role: "Revenue Operations Director",
    companyTitle: "Senior Marketing Agent at Condax",
    duration: "15:24 min",
    date: "Mar 15, 2025",
    preview: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac tu...",
    score: 4.5,
    image: "/avatars/avatar1.jpg",
  },
];

const Page = () => {
  return (
    <div className="container mx-auto p-6 max-w-7xl">

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">RevOps Interview Personas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona, index) => (
            <Card key={index} className="bg-gray-900 border-0 overflow-hidden shadow-md">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={persona.image}
                      alt={persona.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-white">{persona.name}</h3>
                    <p className="text-xs text-gray-300 font-semibold mb-2">
                      {persona.role}
                    </p>
                    <p className="text-xs text-gray-400">{persona.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Interviews</h2>
          <Button variant="link" className="text-blue-600">
            View All
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {recentInterviews.map((interview, index) => (
            <RecentInterviewCard  {...interview} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
