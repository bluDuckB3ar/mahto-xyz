import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div className="bg-background">
         
            {children}
        </div>
      </body>
    </html>
  );
}

