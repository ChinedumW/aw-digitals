import Navbar from "@/app/components/navbar";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] pt-24 px-4 sm:px-6 lg:px-12">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img2.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-6xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 mt-20">
            Find Your Next Opportunity
          </h1>

          <p className="text-gray-800 text-sm max-w-2xl">
            Discover thousands of job listings from top companies around the
            world.
          </p>

          {/* SEARCH */}
          <div className="flex flex-col sm:flex-row rounded-lg max-w-3xl bg-gray-200 mt-6 p-2 gap-2">
            <div className="flex w-full bg-white rounded-lg shadow overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-3 my-3 h-5 w-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <input
                className="flex-1 px-4 py-3 text-sm outline-none"
                placeholder="Search jobs, companies, skills..."
              />
            </div>

            <button className="bg-green-500 px-6 py-3 text-white text-sm font-medium rounded-lg flex items-center justify-center hidden sm:flex">
              <Search className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
