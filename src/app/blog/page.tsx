import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaMastodon, FaMedium } from 'react-icons/fa';
import Navbar from '../../components/nav/Navbar';

const socialMediaLinks = [
  { url: 'https://linkedin.com', label: 'LinkedIn', icon: FaLinkedin },
  { url: 'https://twitter.com', label: 'Twitter', icon: FaTwitter },
  { url: 'https://github.com', label: 'GitHub', icon: FaGithub },
  { url: 'https://mastodon.social', label: 'Mastodon', icon: FaMastodon },
  { url: 'https://medium.com', label: 'Medium', icon: FaMedium },
];

const BlogPage = () => {
  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-8">
    <Navbar />

      <div className=" flex-grow">
        <h1 className="text-4xl font-bold text-center text-duckYellow mb-8">
          Welcome to My Blog
        </h1>

        <div className=" rounded-lg shadow-md ">
          {/* Add background and shadow */}
          <div className="p-6 text-center text-3xl leading-relaxed">
            {/* Adjust text size */}
            <p className="text-duckBlue mb-4">
              Welcome to my blog! Here you’ll find articles on various topics.
            </p>
            <p className="text-duckBlue mb-4">Now if I only had them available ...</p>
            <p className="text-duckBlue mb-6">Until then, check out my socials from below:</p>
         
           <div className="flex justify-center ">
        {/* Add padding */}
        {socialMediaLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-duckBlue2 hover:text-duckYellow transition-colors duration-300 text-4xl"
            // Adjust icon size
          >
            {React.createElement(link.icon)}
          </a>
        ))}
      </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default BlogPage;