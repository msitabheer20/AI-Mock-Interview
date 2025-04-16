import InterviewCard from "@/components/InterviewCard";
import RecentInterviewCard from "@/components/RecentInterviewCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { recentInterviews, personas } from "@/constants";

const Page = () => {
  return (
    <div className="container mx-auto p-6 max-w-7xl">

      {/* Interview Personas */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">DevOps Interview Personas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((persona, index) => (
            <InterviewCard key={index} {...persona} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Interviews</h2>
          <Button variant="link" className="text-blue-600">
            View All
          </Button>
        </div>

        {/* Recent Interviews List */}
        <div className="flex flex-col gap-4">
          {recentInterviews.map((interview, index) => (
            <RecentInterviewCard key={index} {...interview} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
