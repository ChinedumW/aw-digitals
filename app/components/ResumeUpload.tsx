"use client"

import { useState } from "react"

export default function ResumeUpload() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <div className="border-2 border-dashed rounded-lg p-5 text-center">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        id="resume"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <label htmlFor="resume" className="cursor-pointer">
        <p className="font-medium">Upload resume</p>
        <p className="text-sm text-gray-500">PDF or DOC</p>
      </label>

      {file && (
        <p className="mt-2 text-sm text-green-600">
          {file.name}
        </p>
      )}
    </div>
  )
}
