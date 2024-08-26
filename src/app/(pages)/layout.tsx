import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Logo from "@/public/logo.svg";

// Expanded links array for future use
const links = [
    { href: "/", label: "Home" },
 
];

export default function UnderConstructionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <div className="max-w-screen-xl mx-auto px-8 py-8">
                    {children}
                </div>
                <div className="text-center py-16">
                    <h1 className="text-2xl font-bold text-duckYellow mb-8">
                        We are under construction
                    </h1>
<div className="text-duckBlue2 text-lg mb-8 ">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <Button className="text-duckBlue2 flex items-center space-x-2">
                                    <Image src={Logo} alt="Logo" width={90} height={90} />
                                    <span>{link.label}</span>
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};