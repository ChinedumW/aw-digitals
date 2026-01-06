import Navbar from "@/app/components/navbar";
import Image from "next/image";
import AuthForm from "./components/Authforms";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-4 sm:px-8 lg:px-20">
      <Navbar />

      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
        {/* FORM */}
        <AuthForm />

        {/* IMAGE */}
        <div className="lg:flex justify-center">
          <Image
            src="/undraw_connection_ts3f.svg"
            alt="Professional working illustration"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </main>
  );
}
