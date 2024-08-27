// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background px-4 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="text-duckBlue2 text-sm font-semibold mb-4">
          &copy; 2023 Your Company
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
          <a href="https://mastodon.social" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
            Mastodon
          </a>
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            Vercel
          </a>
          <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
            Figma
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;