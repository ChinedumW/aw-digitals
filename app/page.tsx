"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import AuthForm from "./components/Authforms";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "Who is AWLink for?",
    answer:
      "AWLink is designed for professionals, job seekers, employers, and businesses looking to connect, hire, or grow their careers in a trusted digital workspace.",
  },
  {
    question: "Can I use AWLink to find skilled workers?",
    answer:
      "Yes. Employers and companies can discover verified professionals across multiple industries, review profiles, and connect directly with talent that fits their business needs.",
  },
  {
    question: "Is AWLink suitable for job seekers?",
    answer:
      "Absolutely. Job seekers can build a professional profile, upload resumes, showcase skills, and connect with companies actively looking for talent.",
  },
  {
    question: "Does AWLink support learning or career growth?",
    answer:
      "Yes. AWLink helps professionals grow by connecting them with opportunities, industry insights, and future learning or training resources.",
  },
];

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section
        id="signup"
        className="flex flex-col lg:flex-row items-center justify-center gap-12 py-12 px-4 sm:px-8 lg:px-20"
      >
        <AuthForm />

        <div className="flex justify-center w-full lg:w-auto">
          <Image
            src="/undraw_connection_ts3f.svg"
            alt="Professional working illustration"
            width={500}
            height={500}
            priority
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
      </section>

      {/* HIRER SECTION */}
      <section className="bg-gray-200 w-full py-16">
        <div className="flex flex-col lg:flex-row gap-10 px-4 sm:px-8 lg:px-20">
          {/* TEXT */}
          <div className="text-black max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Hire verified talent for your business needs
            </h2>
            <p className="mt-4">
              Discover professionals with the skills and experience your company
              requires
            </p>
          </div>

          {/* TAGS */}
          <div className="text-black flex flex-wrap gap-4 lg:w-2/3">
            {/* ALWAYS VISIBLE */}
            {[
              "SoftWare Developer",
              "UI/UX Designer",
              "Enterprenuer",
              "Plumber",
              "Mobile App Developer",
              "Grapics Design",
              "Tailor",
              "Web Developer",
              "Photographer",
              "Content Creator",
              "Lawyer",
              "HealthCare",
              "CyberSecurity Analyst",
              "Agriculture & LiveStock",
            ].map((item) => (
              <span
                key={item}
                className="border rounded-3xl p-3.5 text-sm font-bold hover:bg-gray-300 duration-300"
              >
                {item}
              </span>
            ))}

            {/* SHOW MORE */}
            {showMore && (
              <>
                {[
                  "Data Analyst",
                  "Product Manager",
                  "Digital Marketer",
                  "DevOps Engineer",
                  "Data Analyst",
                  "Product Manager",
                ].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="border rounded-3xl p-3.5 text-sm font-bold hover:bg-gray-300 duration-300"
                  >
                    {item}
                  </span>
                ))}
              </>
            )}

            {/* TOGGLE BUTTON */}
            {!showMore ? (
              <div
                onClick={() => setShowMore(true)}
                className="flex border rounded-3xl hover:bg-gray-300 duration-300 cursor-pointer"
              >
                <span className="py-3 pl-3 flex text-sm font-bold">
                  Show More
                </span>
                <img
                  width="30"
                  height="24"
                  className="mr-1 mt-1 mb-1.5"
                  src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
                  alt="expand-arrow--v1"
                />
              </div>
            ) : (
              <div
                onClick={() => setShowMore(false)}
                className="flex border rounded-3xl hover:bg-gray-300 duration-300 cursor-pointer"
              >
                <span className="py-3 pl-3 flex text-sm font-bold">
                  Show Less
                </span>
                <img
                  width="30"
                  height="24"
                  className="mr-1 mt-1 mb-1.5 rotate-180"
                  src="https://img.icons8.com/material-rounded/24/expand-arrow--v1.png"
                  alt="collapse-arrow"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* JOB SEEKER SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 py-12 px-4 sm:px-8 lg:px-20">
        <div className="text-center">
          <h2 className="text-xl sm:text-4xl font-bold text-green-500 mb-7">
            I’m looking for a job
          </h2>

          <a
            href="#signup"
            className="inline-block px-6 py-3 rounded-full border font-bold text-sm hover:bg-gray-100 duration-300"
          >
            Upload your profile
          </a>
        </div>

        <div className="flex justify-center w-full lg:w-auto">
          <Image
            src="/Job-hunt2.svg"
            alt="Professional working illustration"
            width={500}
            height={500}
            priority
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
      </section>

      <section
        className="relative w-full bg-center bg-cover py-24"
        style={{
          backgroundImage: "url('/img2.jpg')",
        }}
      >
        {/* Soft gray overlay for blending */}
        <div className="absolute inset-0 bg-[#f6f7f9]/90"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-4">
              Who is AWLink for?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              AWLink is built for anyone navigating their professional journey —
              from hiring the right talent to finding meaningful career
              opportunities.
            </p>
          </div>

          {/* RIGHT FAQ DROPDOWNS */}
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition"
                  >
                    <span className="font-semibold text-black">
                      {item.question}
                    </span>
                    <span
                      className={`transform transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="w-full bg-green-400 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* BRAND */}
            <div>
              <h3 className="text-xl font-bold text-black">AWLink</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-sm">
                Connecting verified professionals with businesses and
                opportunities worldwide.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-sm font-semibold text-black mb-4">
                Platform
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition">
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Hire Talent
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="text-sm font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} AWLink. All rights reserved.
            </p>

            <p className="text-xs text-gray-500">
              Built for professionals, powered by trust.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
