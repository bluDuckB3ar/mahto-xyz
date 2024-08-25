"use client"
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function PageLayout({
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
      <div className="absolute bottom-0 center flex-auto" />
      <Footer />
    </div>          
        </div>


  );
}

