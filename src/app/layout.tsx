import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/nav/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "duckb3ar",
  description: "not a quak house but a quak home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-duckBlue bg-background`}>
        <div className="bg-background" style={{ minHeight: "100vh", position: "relative" }}>
          {children}
          <div className="absolute bottom-0 w-full">
        
          </div>
        </div>
      </body>
    </html>
  );
}
