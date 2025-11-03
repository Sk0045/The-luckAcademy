"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#252a4a] text-yellow-400 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          The Luck Academy
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/courses" className="hover:text-white transition">Courses</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/login" className="hover:text-white transition">Login</Link>
          <Link
            href="/signup"
            className="bg-yellow-400 text-[#1b1f3b] px-4 py-1 rounded-md hover:bg-yellow-300 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1b1f3b] flex flex-col items-center space-y-4 py-6 text-sm font-semibold">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/courses" onClick={() => setOpen(false)}>Courses</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link
            href="/signup"
            className="bg-yellow-400 text-[#1b1f3b] px-4 py-1 rounded-md hover:bg-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
