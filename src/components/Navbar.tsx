// Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
  ];

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-background px-4 py-3 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-duckBlue2 text-lg font-semibold">
          duckb3ar
        </Link>
        <div className="hidden md:flex gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button 
                className={`px-3 py-2 text-sm ${
                  pathname === link.href 
                    ? 'bg-duckBlue text-white' 
                    : 'text-duckBlue hover:bg-duckBlue/10'
                }`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
        <Button
          className="md:hidden text-duckBlue2"
          onClick={handleMobileMenuClick}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-stretch mt-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button 
                className={`w-full text-sm py-2 ${
                  pathname === link.href 
                    ? 'bg-duckBlue text-white' 
                    : 'text-duckBlue2 hover:bg-duckBlue/10'
                }`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}