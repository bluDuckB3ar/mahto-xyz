import DuckButton from '@/components/DuckButton';
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
    <html>
      <body>
        <div className="flex items-center justify-center min-h-screen">
          <div className="space-y-4 w-1/2">
            <div className="mt-10">
              <div className="flex flex-col h-12 items-center text-center align-middle underline-offset-0 undsm:flex-col lg:flex-row">
                <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
                <h1 className="text-4xl font-bold text-white">
                  mahto.xyz
                </h1>
                <div className="flex flex-wrap gap-16 mt-20">
                  {links.slice(1).map((link) => (
                    <Link key={link.href} href={link.href} className="flex-1 basis-[calc(50%-2rem)]">
                      <DuckButton className="w-full p-16 text-center text-duckBlue2">
                        {link.label}
                      </DuckButton>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
