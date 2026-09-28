"use client";

import { motion } from "framer-motion";
import { technologies } from "@/Constants";
import { Card } from "../ui/card";
import Image from "next/image";

function Skills() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-15" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 md:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-primary">Skills</span> & Technologies
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-muted-foreground">
          Technologies and tools I use to build modern, responsive, and scalable
          web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-6 lg:gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
          >
            <Card className="group flex flex-col items-center justify-center gap-3 !p-5 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
              {" "}
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={48}
                height={48}
                className={`${tech.name === "Express.js" ? "invert brightness-0 invert" : ""}transition-transform duration-300 group-hover:scale-110`}
                
              />
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
                {tech.name}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
