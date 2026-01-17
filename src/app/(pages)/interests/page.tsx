"use client";

import { groupedInterests } from "@/lib/interestsData";
import { InterestCard } from "@/components/interests/InterestCard";
import Button from "@/components/dodad/Button";
import Link from "next/link";

export default function InterestsPage() {
  const categoryOrder = [
    "YouTubers",
    "Podcasts",
    "Places I Go",
    "Places I Plan to Go",
    "Education",
    "Projects",
  ];

  const sortedCategories = categoryOrder.filter((cat) => groupedInterests[cat]);

  return (
    <div className="min-h-screen bg-black text-duckBlue2 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button className="mb-8 px-4 py-2 text-sm">← Back</Button>
          </Link>

          <h1 className="text-5xl font-bold text-duckBlue mb-4">Interests & Inspirations</h1>
          <p className="text-lg text-duckGray">
            A collection of creators, places, and projects that inspire and influence my journey
          </p>
          <hr className="my-8 border-duckYellow" />
        </div>

        {/* Content */}
        <div className="space-y-12">
          {sortedCategories.map((category) => (
            <section key={category}>
              <h2 className="text-3xl font-bold text-duckBlue mb-6 border-b-2 border-duckPurple pb-2">
                {category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {groupedInterests[category].map((interest, idx) => (
                  <InterestCard key={`${category}-${idx}`} interest={interest} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-8 border-t-2 border-duckYellow">
          <h3 className="text-2xl font-bold text-duckBlue mb-4">Why These Interests?</h3>
          <div className="space-y-4 text-duckBlue2">
            <p>
              These creators and spaces have shaped my perspective on technology, security, creativity, and community. From educational content to entertainment, they represent the intersection of innovation and storytelling.
            </p>
            <p>
              Whether it's learning from hacker conferences like DEFCON, enjoying the creativity of makers, or diving into immersive podcasts, these interests drive my passion for continuous learning and exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
