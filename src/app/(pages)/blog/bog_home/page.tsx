import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaMastodon, FaMedium } from 'react-icons/fa';
import BlogLayout from './BlogLayout';
import { BlogCard } from './BlogCard';

const socialMediaLinks = [
  { url: 'https://linkedin.com', label: 'LinkedIn', icon: FaLinkedin },
  { url: 'https://twitter.com', label: 'Twitter', icon: FaTwitter },
  { url: 'https://github.com', label: 'GitHub', icon: FaGithub },
  { url: 'https://mastodon.social', label: 'Mastodon', icon: FaMastodon },
  { url: 'https://medium.com', label: 'Medium', icon: FaMedium },
];

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      slug: 'getting-started-with-next-js',
      title: 'Getting Started with Next.js',
      date: '2024-03-24',
      category: 'Web Development',
      excerpt: 'Learn how to build modern web applications with Next.js...',
      content: '...',
      tags: ['nextjs', 'react', 'webdev']
    },
    // Add more posts
  ];

  return (
    <BlogLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="flex flex-col px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex-grow">
          <h1 className="text-4xl font-bold text-center text-duckYellow mb-8">
            Welcome to My Blog
          </h1>
          <div className="rounded-lg shadow-md">
            <div className="p-6 text-center text-3xl leading-relaxed">
              <p className="text-duckBlue mb-4">
                Welcome to my blog! Here you’ll find articles on various topics.
              </p>
              <p className="text-duckBlue mb-4">Now if I only had them available ...</p>
              <p className="text-duckBlue mb-6">Until then, check out my socials from below:</p>
              <div className="flex justify-center">
                {socialMediaLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-duckBlue2 hover:text-duckYellow transition-colors duration-300 text-4xl"
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  tags: string[];
}