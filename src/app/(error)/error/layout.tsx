"use client";
import Navbar from "@/components/nav/Navbar";


export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <div className="bg-background w-full  ">
     <Navbar />
      <div className="max-w-screen-lg font-doto  mx-auto px-4 ">
        {children}
      </div>
 
        
   
       
        
    </div>);
}  


