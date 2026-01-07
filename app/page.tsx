"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import AuthForm from "./components/Authforms";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

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

      <section className="w-full bg-gray-50 py-24">
        
      </section>
    </main>
  );
}
