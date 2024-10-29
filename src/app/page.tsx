import Image from 'next/image';
import Logo from "@/public/logo.png";
import Button from '@/components/dodad/Button';
import Link from 'next/link';

const links = [
  { href: "/", label: "" },
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" },
  { href: "/support", label: "support" },
  { href: "/contact", label: "contact" },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="left-0 right-0 text-center my-20 text-duckBlue2">
        Mahto.xyz
        <div className="flex flex-wrap gap-16 mt-20">
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="flex-1 basis-[calc(50%-2rem)]">
              <Button className="w-full p-16 text-center text-duckBlue2">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
