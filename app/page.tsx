import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { GitHubStats } from "@/components/sections/github-stats";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <div className="w-full space-y-24 pb-24">
        <TechStack />
        <Projects />
        <Experience />
        <GitHubStats />
      </div>
      <Contact />
    </main>
  );
}
