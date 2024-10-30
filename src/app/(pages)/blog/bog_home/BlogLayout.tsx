// src/app/(pages)/blog/layout.tsx
const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <header className="py-8">
    <h1 className="text-4xl font-bold text-duckYellow">Blog</h1>
    </header>
    <main>{children}</main>
  </div>
);

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, author }) => (
  <div className="border rounded-lg p-4 shadow-md">
  <h2 className="text-2xl font-bold mb-2">{title}</h2>
  <p className="text-gray-600 mb-4">{excerpt}</p>
  <div className="text-sm text-gray-500">
    <span>{date}</span> | <span>{author}</span>
  </div>
  </div>
);

export default BlogLayout;