export default function ApplicantCard({ applicant }: any) {
  return (
    <div className="bg-white rounded-lg p-4 shadow flex justify-between">
      <div>
        <p className="font-semibold">{applicant.name}</p>
        <p className="text-sm text-gray-500">{applicant.role}</p>
        <p className="text-xs text-gray-400">{applicant.email}</p>
      </div>
      <button className="text-green-600 text-sm font-medium">
        View
      </button>
    </div>
  )
}
