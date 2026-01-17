import Button from '@/components/dodad/Button';
import Link from 'next/link';

const links = [
  { href: "/", label: "" },
  { href: "/about", label: "about", fontSize: "text-xl" },
  { href: "/blog", label: "blog", fontSize: "text-xl" },
  { href: "/interests", label: "interests", fontSize: "text-xl" },
  { href: "/contact", label: "contact", fontSize: "text-xl" },
  { href: "/support", label: "support", fontSize: "text-xl" },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-duckBlue font-mono">
      <div className="w-full max-w-2xl p-16">
        <div className="">
          <h1 className="text-xl mb-8">
            <span className='text-duckBlue'>
              <span></span><span className='text-duckBlue'>mahto.xyz</span>
            </span>
          </h1>
          <div className="flex flex-col gap-6">
            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="block">
                <Button className={`w-full p-4 text-left text-duckBlue text-4xl  border-duckBlue ${link.fontSize}`}>
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
