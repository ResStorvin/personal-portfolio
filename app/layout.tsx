import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-950">
        <Navbar />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
