import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-20">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/img2.jpg')" // put image in /public
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Next Opportunity 💼
            </h1>

            <p className="text-gray-600 max-w-xl mb-6">
              Discover jobs, connect with companies, and build your future —
              all in one place.
            </p>

            {/* Search Bar */}
            <div className="flex max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search jobs, companies, skills..."
                className="flex-1 px-4 py-3 outline-none"
              />
              <button className="bg-green-500 px-6 text-white font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
