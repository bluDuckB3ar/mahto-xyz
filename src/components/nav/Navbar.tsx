// Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { allPages } from "contentlayer/generated";
import Button from "@/components/dodad/Button";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const links = [
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
    { href: "/interests", label: "Interests" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  // Sort blog posts by date (newest first)
  const sortedPosts = [...allPages].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Filter posts based on search query
  const filteredPosts = sortedPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, handleScroll]);

  return (
    <nav className={`px-2 py-22 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between max-w-screen-lg mx-auto">
        <div className="text-medium my-2 bold text-duckBlue2">
          mahto.xyz
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden gap-10 md:flex items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button className="w-2 text-sm border-2 text-duckBlue2">
                {link.label}
              </Button>
            </Link>
          ))}
          
          {/* Search Button */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-duckBlue hover:text-duckYellow transition"
            aria-label="Search blog posts"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMobileMenuClick}
          className="md:hidden p-2 text-duckBlue"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-12 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="3"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Search Dropdown */}
      {searchOpen && (
        <div className="mt-4 max-w-screen-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search posts by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-black border-2 border-duckBlue text-duckBlue2 placeholder-duckGray focus:outline-none focus:border-duckYellow"
              autoFocus
            />
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {filteredPosts.length > 0 ? (
              <div className="space-y-2">
                {filteredPosts.map((post) => (
                  <Link key={post.slugAsParams} href={`/blog/${post.slugAsParams}`}>
                    <div
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="p-3 border border-duckBlue hover:bg-duckBlue/10 cursor-pointer transition text-duckBlue2 hover:text-duckYellow"
                    >
                      <div className="font-bold text-duckBlue">{post.title}</div>
                      <div className="text-sm text-duckGray">{post.description}</div>
                      <div className="text-xs text-duckPurple mt-1">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center text-duckGray py-4">
                {searchQuery ? "No posts found" : "Start typing to search..."}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center justify-center mt-12 md:hidden space-y-12">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button className="px-16 text-sm">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
