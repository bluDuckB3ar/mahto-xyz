import Link from 'next/link';
import { motion } from 'framer-motion';
export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
    tags: string[];
  }
  

export const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <motion.article 
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <Link href={`/blog/${post.slug}`} passHref>
      <div className="p-6">
        <span className="text-sm text-blue2">{post.date}</span>
        <h2 className="text-2xl font-bold text-duckPurple mt-2">{post.title}</h2>
        <span className="inline-block bg-duckBlue-100 text-blue2 rounded-full px-3 py-1 text-sm my-2">
          {post.category}
        </span>
        <p className="text-gray-600 mt-2">{post.excerpt}</p>
        <div className="flex gap-2 mt-4">
          {post.tags.map((tag: string) => (
            <span key={tag} className="text-xs bg-gray-100 rounded-full px-2 py-1">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  </motion.article>
);