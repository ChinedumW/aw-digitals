export default function SearchInput({ value, onChange }: any) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search applicants..."
      className="w-full border rounded-lg px-4 py-2"
    />
  )
}
