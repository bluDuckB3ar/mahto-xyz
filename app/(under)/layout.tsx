"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import Logo from "../public/logo.svg";
const links = [
    { href: "/", label: "" },
];
export default function UnderLayout({
    children,

}: Readonly<{
    children: React.ReactNode;
}>) {
    return (


        <div className="bg-background w-full h-screen ">
            <Navbar />
            <div className="max-w-screen-xl mx-auto px-4 py-8">

                {children}

            </div>
            <div className="center align-middle text-duckYellow flex-auto text-center ">
            <h1> We are under construction </h1>
            <div
             className="flex flex-col h-24 items-center  lg:flex-row sm:mt-8">
          
            {links.slice(0, 1).map((link) => (
              <Link key={link.href} href={link.href} className="flex-1 basis-[calc(50%-2rem)]">
                <div className="flex justify-center h-1/2">
                
                  <Button className=" text-duckBlue2">
                    <Image src={Logo} alt="Logo" width={80} height={80} className="w-20" />
                    {link.label}
                    <div className="p-2 text-center">
                    go back?
                    </div>
                  </Button>
                </div>
              </Link>
            ))}
               
                
                
                <div className="absolute bottom-0 center flex-auto ">
                    <Footer />
                </div>
            </div>
        </div>
</div>
    );
}

