"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Interest } from "@/lib/interestsData";

interface InterestCardProps {
  interest: Interest;
}

export function InterestCard({ interest }: InterestCardProps) {
  const content = (
    <div className="p-4 border-2 border-duckBlue hover:border-duckYellow transition bg-black hover:bg-duckBlue/5 group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-duckBlue group-hover:text-duckYellow transition">
            {interest.title}
          </h3>
          <p className="text-sm text-duckBlue2 mt-2">{interest.description}</p>
        </div>
        {interest.link && (
          <ExternalLink className="w-5 h-5 text-duckPurple ml-2 flex-shrink-0 group-hover:text-duckYellow transition" />
        )}
      </div>
    </div>
  );

  if (interest.link) {
    return (
      <a href={interest.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
