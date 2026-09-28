"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "DamsAlpha",
    duration: "July 2026 — Present",
    location: "On Site",
    points: [
      "Developed responsive, production-grade UIs using React.js and Tailwind CSS, improving consistency across pages.",
      "Migrated legacy CSS to Tailwind CSS, reducing style duplication and speeding up new feature development.",
      "Built reusable React components and shipped new features, following Git-based PR workflows for code review.",
      "Collaborated using GitHub Actions and CI/CD pipelines to automate builds and streamline deployments.",
    ],
    tech: ["React.js", "Tailwind CSS", "Git", "GitHub Actions", "CI/CD"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 py-10 md:py-15">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Work <span className="text-primary">Experience</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
          Where I&apos;ve applied what I build to real, shipped work.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto "
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-10 sm:pl-14"
          >
            {/* timeline line + dot */}
            <div className="absolute left-3 top-2 h-full w-px bg-border sm:left-5" />
            <div className="absolute left-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-primary sm:left-3.5 sm:size-5">
              <Briefcase className="size-2.5 text-primary-foreground sm:size-3" />
            </div>

            <Card className="!p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-primary sm:text-base">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:items-end sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    <span className="mt-2 size-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;
