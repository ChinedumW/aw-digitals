"use client"

import { useState } from "react"
import ApplicantCard from "@/app/components/ApplicantCard"
import SearchInput from "@/app/components/SearchInput"

const applicants = [
  { id: 1, name: "Sarah Johnson", role: "Frontend Dev", email: "sarah@mail.com" },
  { id: 2, name: "Mike Chen", role: "Backend Dev", email: "mike@mail.com" },
  { id: 3, name: "Aisha Bello", role: "UI Designer", email: "aisha@mail.com" },
]

export default function HirerPage() {
  const [query, setQuery] = useState("")

  const filtered = applicants.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.role.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gray-50 pt-24 px-4">
      <section className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-2xl font-bold">Applicants</h1>

        <SearchInput value={query} onChange={setQuery} />

        <div className="grid gap-4">
          {filtered.map((a) => (
            <ApplicantCard key={a.id} applicant={a} />
          ))}

          {filtered.length === 0 && (
            <p className="text-gray-500">No applicants found.</p>
          )}
        </div>

      </section>
    </main>
  )
}
