import React from 'react';
import './page.css';

export default async function BlogPage() {
  const messages = [
 "Sorry for the inconvenience, but this page is still under construction.",
  "Please check back later for updates.",
  "Thank you for your patience.",
  "Sorry for the inconvenience, but this page is still under construction.",
  "Please check back later for updates.",
  "Thank you for your patience.",
  "Sorry for the inconvenience, but this page is still under construction.",
  "Please check back later for updates.",
  "Thank you for your patience.",
  "Sorry for the inconvenience, but this page is still under construction.",
  "Please check back later for updates.",
  "Thank you for your patience.",
  "ok fine... I'll stop now.",
  "you can go now.",
  "bye.",
  "I said bye.",
  "why are you still here?",
  "I'm done.",
  "I'm really done.",
  "I'm really really done.",
  "I'm really really really done.",
  "I'm really really really really done.",
  "I'm really really really really really done.",
  "I'm really really really really really really done.",
  "quak.",
  "quak.",
  "quak.",
  "quak.",
  "quak.",
  "quak.",
  "quak.",
  "quak.",
  "quak."

  ];

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex overflow-hidden text-doto space-x-8 group">
            <div className="flex font-extrabold font-doto space-x-8 animate-loop-scroll whitespace-nowrap">
              {messages.map((message, index) => (
                <span key={index} className="text-doto text-3xl font-doto md:text-2xl text-duckBlue">
                  {message}
                </span>
              ))}
            </div>
          </div>
          <p className="text-lg text-white">
            Welcome to my blog! Here you can find all my latest posts.
          </p>
        </div>
      </div>
      <hr className="my-8 border-duckYellow" />
    </div>
  );
}