"use client"
import { useParams } from 'next/navigation';

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug;

  const blogPosts: { [key: string]: { title: string; content: string } } = {
    "first-blog-post": { title: "First Blog Post", content: "This is the content of the first blog post." },
    "second-blog-post": { title: "Second Blog Post", content: "This is the content of the second blog post." },
  };

  // Ensure slug is a string and exists in blogPosts
  const post = typeof slug === 'string' && slug in blogPosts ? 
  
  blogPosts[slug] : undefined;

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
