"use client";
import GithubStats from "@/components/GithubStats";
import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";

import { motion } from "framer-motion";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* Github Streak section */}
      <section className="container mx-auto px-4 py-10 md:py-15">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Github <span className="text-primary">Activity</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         <GithubStats username="RaviKishan24" />
        </motion.div>
      </section>
      
      <Contact/>
    </main>
  );
}
