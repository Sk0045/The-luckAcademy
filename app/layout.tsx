import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Luck Academy",
  description: "You can apply for your favorite courses and learn with experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f5f5] min-h-screen font-sans`}
      >
        {/* Navbar is always visible */}
        <Navbar />

        {/* Adds spacing so content doesn't hide behind fixed navbar */}
        <main className="pt-20 px-6 md:px-12 lg:px-20">{children}</main>

        {/* Optional footer */}
        <footer className="bg-[#1b1f3b] text-gray-300 text-center py-4 mt-12">
          <p>© {new Date().getFullYear()} The Luck Academy. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
