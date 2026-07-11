import Link from "next/link";
import ExperienceCard from "@/components/shared/ExperienceCard";

export default function Home() {
  return (
    <main className="min-h-screen">
    <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h1 className="text-5xl font-bold">Derrick</h1>

      <p className="mt-4 text-xl">
        Full-Stack Developer.</p>
      </section>

      
        <h2 className= "mt-20 text-3xl font-semibold">
          Choose Your Experience</h2>

        <div className= "mt-10 grid gap-8 md:grid-cols-2">
          <ExperienceCard
            title="Career Experience"
            description="Explore my projects, technical skills, resume, and accomplishments in the world of software development."
            href="/developer"
          />
          <ExperienceCard
            title="Client Experience"
            description="Learn how I help businesses solve problems through custom software solutions."
            href="/business"
          />
        </div>
    </main>
  );
}