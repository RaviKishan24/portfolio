import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravi Kishan Kumar | MERN Stack Developer",
  description:
    "Portfolio of Ravi Kishan Kumar, a MERN Stack Developer specializing in React, Node.js, Express.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}