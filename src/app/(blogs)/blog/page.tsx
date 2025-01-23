"use client";

import React from 'react';
import './page.css';
import { allPages } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/mdx-comp';


export default function BlogPage() {
  const baseMessages = [
    'Welcome to my blog!',
    'Stay tuned for more updates.',
    'Check out my latest posts!',
  ];

  const messages = Array(12).fill(baseMessages).flat();

  return (
    <div className="max-w-4xl py-6 text-bold lg:py-10">
      <div className="flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex overflow-hidden text-doto space-x-8 group">
            <div className="flex font-extrabold  font-doto space-x-8 animate-loop-scroll whitespace-nowrap">
              {messages.map((message, index) => (
                <span key={index} className="text-doto text-3xl font-doto md:text-2xl text-duckBlue">
                  {message}
                </span>
              ))}
            </div>
          </div>
          <hr className="my-8 border-duckYellow" />
          <div className="text-balance text-justify font-sans">
            {allPages.map((doc) => (
              <div key={doc.slugAsParams}>
                <h1 className="font-bold text-4xl text-duckBlue">{doc.title}</h1>
                <h2 className="text-center text-sm">{doc.description}</h2>
                <Mdx code={doc.body.code} />
                <hr className="my-8 border-duckYellow" />
              </div>
            ))}
          </div>
          <button
            className="mt-4 px-4 py-2 text-duckBlue text-center align-middle font-extrabold border-l-duckBlue"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Scroll to Top
          </button>
        </div>
      </div>
    </div>
  );
}