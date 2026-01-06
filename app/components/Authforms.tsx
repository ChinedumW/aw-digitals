"use client";

import { useState } from "react";

export default function AuthForm() {
  const [role, setRole] = useState<"seeker" | "hirer">("seeker");

  return (
    <div className="w-full max-w-md bg-gray-50 rounded-2xl shadow-xl p-6 sm:p-8 mt-10">
      {/* ROLE SWITCH */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
        <button
          onClick={() => setRole("seeker")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
            role === "seeker"
              ? "bg-green-400 shadow text-gray-900"
              : "text-gray-500"
          }`}
        >
          Job Seeker
        </button>
        <button
          onClick={() => setRole("hirer")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition ${
            role === "hirer"
              ? "bg-green-400 shadow text-gray-900"
              : "text-gray-500"
          }`}
        >
          Hirer
        </button>
      </div>

      {/* HEADER */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
        {role === "seeker"
          ? "Find your next opportunity"
          : "Hire the right talent"}
      </h2>

      <p className="text-sm text-gray-500 mt-1 mb-6">
        {role === "seeker"
          ? "Create an account to apply for jobs."
          : "Create an account to start hiring."}
      </p>

      {/* FORM */}
      <form className="space-y-4">
        {role === "seeker" ? (
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none"
          />
        ) : (
          <input
            type="text"
            placeholder="Company name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none"
          />
        )}

        <input
          type="email"
          placeholder="Email address"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-green-400 outline-none"
        />

        <button
          type="submit"
          className="w-full py-2.5 bg-green-500 text-white rounded-xl text-sm font-medium hover:bg-green-600 transition"
        >
          {role === "seeker" ? "Create account" : "Create company account"}
        </button>
      </form>

      {/* DIVIDER */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">OR</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* GOOGLE */}
      <button className="flex items-center justify-center gap-3 w-full px-4 py-2.5 bg-white border border-gray-300 rounded-full hover:shadow-md transition">
        
        <span className="text-sm font-medium text-gray-700">
          Continue with Google
        </span>
      </button>

      {/* FOOTER */}
      <p className="text-xs text-gray-500 mt-5 text-center leading-relaxed">
        By continuing, you agree to AwDigitals’{" "}
        <span className="text-blue-600 cursor-pointer">User Agreement</span>,{" "}
        <span className="text-blue-600 cursor-pointer">Privacy Policy</span>, and{" "}
        <span className="text-blue-600 cursor-pointer">Cookie Policy</span>.
      </p>
    </div>
  );
}
