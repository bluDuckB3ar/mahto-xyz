// Navbar.tsx
"use client";
import { useState } from "react";

import Button from "@/components/Button";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/support", label: "Support" },
  ];

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-background px-2 py-2 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-duckBlue2 text-sm font-semibold">
          duckb3ar
        </div>
        <div className="hidden md:flex gap-10 ">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button className="w-2 border-2 text-sm text-duckBlue">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
        <Button
          className="md:hidden text-duckBlue2"
          onClick={handleMobileMenuClick}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center space-y-7 mt-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button className="w-full text-sm text-duckBlue2 ">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

