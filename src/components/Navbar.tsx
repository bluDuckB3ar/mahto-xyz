// src/components/Navbar.tsx
import { useState } from "react";
import Button from "@/components/Button";

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-background px-2 py-2 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-duckBlue2 text-sm font-semibold">
          duckb3ar
        </div>
        <div className="hidden md:flex gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-duckBlue2 hover:text-duckBlue1"
            >
              {link.label}
            </a>
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
            <a
              key={link.href}
              href={link.href}
              className="text-duckBlue2 hover:text-duckBlue1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}