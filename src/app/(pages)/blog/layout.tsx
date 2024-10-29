
// src/app/(pages)/blog/components/BlogLayout.tsx
export const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-8">
        <h1 className="text-4xl font-bold text-duckYellow">Blog</h1>
      </header>
      <main>{children}</main>
    </div>
);
    