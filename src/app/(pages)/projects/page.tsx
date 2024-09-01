import Link from 'next/link';

const ProjectsPage = () => {
  const blogPosts = [
    { title: "First Blog Post", date: "2023-01-01", category: "Category A", slug: "first-blog-post" },
    { title: "Second Blog Post", date: "2023-02-15", category: "Category B", slug: "second-blog-post" },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>Date: {post.date}</p>
            <p>Category: {post.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;