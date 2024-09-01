// Navbar.tsx
"use client";
import { useState } from "react";

import DuckButton from "@/components/DuckButton";
import Link from "next/link";

/**
 * Represents the Navbar component.
 * 
 * The Navbar component displays a navigation bar with links to different pages.
 * It includes a mobile menu that can be toggled to show or hide the links on smaller screens.
 */
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
    <nav className="bg-background px-2 py-2  shadow-md">
      <div className="max-w-screen-xl my-auto mx-auto flex justify-between items-center">
        <div className="text-duckBlue2 text-sm font-semibold">
mahto.xyz        </div>
        <div className="hidden md:flex gap-6 ">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <DuckButton className="w-2 border-2 text-sm text-duckBlue">
                {link.label}
              </DuckButton>
            </Link>
          ))}
        </div>
        <DuckButton
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
        </DuckButton>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <DuckButton className="w-full text-sm text-duckBlue2 ">
                {link.label}
              </DuckButton>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

