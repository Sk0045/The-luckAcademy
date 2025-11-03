"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Add your login logic here (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1b1f3b] to-[#2b2f5b] px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-yellow-400 text-center mb-6">
          The Luck Academy
        </h1>
        <h2 className="text-xl text-center text-white mb-6">Login to your account</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@luckacademy.com"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-300">
            <Link href="#" className="hover:text-yellow-400 transition">
              Forgot password?
            </Link>
            <Link href="/signup" className="hover:text-yellow-400 transition">
              Create account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-yellow-400 text-[#1b1f3b] font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-6">
          © {new Date().getFullYear()} The Luck Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
}
