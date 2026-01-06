"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-50 text-gray-700 font-serif">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-bold">
            <Image
              src="/1000075536.jpg"
              alt="AW Digitals Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <a href="/"><span className="text-green-500">AW</span>Digital</a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <Link href="/findJobs">Find Jobs</Link>
            <Link href="/about">Companies</Link>
            <Link href="/services">My Profile</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border bg-amber-50 shadow rounded-sm text-sm font-semibold">
              <Download size={16} /> Upload Resume
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-sm text-sm font-semibold">
              Sign Up
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-5 p-6 text-sm font-semibold">
          <Link href="/" onClick={() => setOpen(false)} >Find Jobs</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Companies</Link>
          <Link href="/services" onClick={() => setOpen(false)}>My Profile</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <div className="mt-6 flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border bg-amber-50 rounded-sm">
              <Download size={16} /> Upload Resume
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
