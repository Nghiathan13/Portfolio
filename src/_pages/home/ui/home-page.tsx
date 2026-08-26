"use client";

import { TooltipProvider } from "@/shared/ui";
import { Header } from "./header";
import { Hero } from "./hero";
import { About } from "./about";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Contact } from "./contact";
import { Footer } from "./footer";

export function HomePage() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}
