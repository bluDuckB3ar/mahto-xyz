// Navbar.tsx
"use client";
import { useState, useEffect } from "react";

import Button from "@/components/dodad/Button";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

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
        <div className="hidden gap-10 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button className="w-2 text-sm border-2  text-duckBlue2">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
        <Button
          className="md:hidden"
          onClick={handleMobileMenuClick}
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
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center justify-center mt-12 md:hidden space-y-12">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button className="px-16  text-sm">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
