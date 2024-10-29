"use client";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <div className="bg-background w-full h-full ">
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-4 py-3">
        {children}
      </div>
      <div className="absolute bottom-0" >
        
    </div>          
        
    </div>);
}  


