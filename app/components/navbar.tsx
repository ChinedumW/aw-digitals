"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-100 border-gray-200 font-serif">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image
              src="/1000075536.jpg"
              alt="AW Digitals Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>
              <span className="text-green-500">AW</span>Link
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">

            {/* FIND JOBS DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-green-600">
                Find Jobs <ChevronDown size={14} />
              </button>

              <div className="absolute left-0 top-full mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                <Link
                  href="/profile"
                  className="block px-5 py-3 text-sm hover:bg-gray-50"
                >
                  Apply Opportunities
                </Link>

                <Link
                  href="/hirer"
                  className="block px-5 py-3 text-sm hover:bg-gray-50"
                >
                  Find Workers
                </Link>
              </div>
            </div>

            <Link href="/companies" className="hover:text-green-600">
              Companies
            </Link>

            <Link href="/profile" className="hover:text-green-600">
              My Profile
            </Link>

            <Link href="/contact" className="hover:text-green-600">
              Contact
            </Link>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border bg-amber-50 rounded-md text-sm font-semibold">
              <Download size={16} /> Upload Resume
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-semibold">
              Sign Up
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* MOBILE CONTENT */}
        <div className="flex flex-col h-full p-6 text-sm text-gray-800">

          {/* FIND JOBS */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Find Jobs
            </p>

            <div className="flex flex-col gap-5">
              <Link href="/apply-opportunities" onClick={() => setOpen(false)}>
                Apply Opportunities
              </Link>

              <Link href="/find-workers" onClick={() => setOpen(false)}>
                Find Workers
              </Link>
            </div>
          </div>

          {/* MAIN LINKS */}
          <div className="flex flex-col gap-6 border-t pt-6">
            <Link href="/companies" onClick={() => setOpen(false)}>
              Companies
            </Link>

            <Link href="/profile" onClick={() => setOpen(false)}>
              My Profile
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-auto pt-6 border-t flex flex-col gap-4">
            <button className="flex items-center justify-center gap-2 w-full px-4 py-3 border rounded-lg bg-amber-50 font-semibold">
              <Download size={16} /> Upload Resume
            </button>

            <button className="w-full px-4 py-3 bg-green-500 text-white rounded-lg font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
