"use client"

import { useState } from "react"
import ResumeUpload from "@/app/components/ResumeUpload"

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    bio: "",
  })

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-4">
      <section className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 space-y-5">

        <h1 className="text-2xl font-bold">Your Profile</h1>

        <input
          placeholder="Full name"
          className="input"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="input"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Professional title"
          className="input"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          placeholder="Short bio"
          className="input min-h-[100px]"
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
        />

        <ResumeUpload />

        <button className="btn-primary w-full">
          Save Profile
        </button>

      </section>
    </main>
  )
}
