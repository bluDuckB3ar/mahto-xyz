// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background px-4 py-4 shadow-md">
      <div className="max-w-screen-sm mx-auto flex flex-col items-center">
        
        <div className="flex gap-4 hidden md:flex">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-black">
            LinkedIn
          </a>
          <a href="https://mastodon.social" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 text-black">
            Mastodon
          </a>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-black text-black">
            Vercel
          </a>
          <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 text-black">
            Figma
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black text-black">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
