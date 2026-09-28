"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Server, Database, Download } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "React.js, Next.js, Redux Toolkit, and Tailwind CSS for responsive and reusable user interfaces.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Node.js, Express.js, RESTful APIs, and JWT authentication for secure and scalable applications.",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "MongoDB and MySQL for schema design, queries, and database-driven application development.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-10 md:py-15">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          About <span className="text-primary">Me</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
          A quick look at who I am, what I build, and where I&apos;m headed.
        </p>
      </motion.div>

      {/* Main content */}
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-5 lg:col-span-3"
        >
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m{" "}
            <span className="font-semibold text-foreground">
              Ravi Kishan Kumar
            </span>{" "}
            , a Full-Stack MERN Developer who enjoys turning ideas into
            responsive and production-ready web applications. I work across the
            stack, from building clean and reusable React interfaces to
            developing RESTful APIs and database-driven backends with JWT
            authentication.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Currently, I&apos;m a{" "}
            <span className="font-medium text-foreground">
              Frontend Developer Intern at DamsAlpha
            </span>
            , where I work with React.js and Tailwind CSS, migrate legacy CSS,
            and contribute to features through Git-based PR workflows and GitHub
            Actions CI/CD. I hold a{" "}
            <span className="font-medium text-foreground">
              B.Tech in Computer Science & Engineering
            </span>{" "}
            with an 8.25 CGPA from Ludhiana College of Engineering & Technology.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Beyond MERN, I&apos;m currently strengthening my skills in{" "}
            <span className="font-medium text-foreground">
              Java, Spring Boot, and SQL
            </span>{" "}
            to build a stronger backend foundation and grow into a well-rounded
            software engineer capable of solving real-world problems across the
            stack.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Outside of my internship, I&apos;ve built and deployed several{" "}
            <span className="font-medium text-foreground">
              full-stack projects
            </span>{" "}
            — including a MERN-based sports e-commerce platform, a family tree
            visualizer, and a CRUD dashboard — each one pushing me to write
            cleaner code and think more like a product owner, not just a
            developer.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            My long-term goal is to move beyond typical web development into
            deeper{" "}
            <span className="font-medium text-foreground">
              systems-level work
            </span>{" "}
            — exploring areas like AI, robotics, and OS-level programming — so I
            can build software that solves real engineering problems, not just
            business ones.
          </p>
        </motion.div>

        {/* Right highlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="group flex flex-col gap-3 !p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-md">
                  <div className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="text-sm font-semibold sm:text-base">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
