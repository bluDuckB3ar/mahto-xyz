

import { FaLinkedin, FaTwitter, FaGithub, FaMastodon, FaMedium } from 'react-icons/fa';
import './page.css';

const socialMediaLinks = [
  { url: 'https://www.linkedin.com/in/brennan-mahto', label: 'LinkedIn', icon: FaLinkedin },
  { url: 'https://twitter.com/duckb3ar', label: 'Twitter', icon: FaTwitter },
  { url: 'https://github.com/bluDuckb3ar', label: 'GitHub', icon: FaGithub },
  { url: 'https://mastodon.social/@duckb3ar', label: 'Mastodon', icon: FaMastodon },
  { url: 'https://medium.com/@duckb3ar', label: 'Medium', icon: FaMedium },
];

const BlogPage = () => {
  return (
    <div className='blog-page'>
      <div className='blog-post f'>
        <h1>Hello World</h1>
        <p className='date'>December 1st , 2024</p>
        <div className='content'>
          <p>Welcome to my blog! This is my first post. Stay tuned for more updates.</p>
        </div>
        <div className='social-media'>
          {socialMediaLinks.map((link) => (
            <a key={link.label} href={link.url} target='_blank' rel='noopener noreferrer'>
              <link.icon />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;