"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

function Hero() {
  const phoneNumber = "+917970613165";
  const message =
    "Hi Ravi, I came across your portfolio and would like to connect regarding an opportunity.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="container mx-auto px-4 pt-20  md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <p className="mb-3 text-sm md:text-3xl font-medium text-primary">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ravi Kishan <span className="text-primary">Kumar</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
            Full Stack Developer
          </h2>

          <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
            I build modern, responsive, and user-friendly web applications using
            React, Next.js, Node.js, Express, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer"   className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2 cursor-pointer"
              >
                <FaWhatsapp className="size-5" />
                Chat on WhatsApp
                <ArrowRight className="size-4" />
              </Button>
            </Link>

            <Link
              href="https://github.com/RaviKishan24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 cursor-pointer"
              >
                <FaGithub className="size-5" />
                GitHub
                <ArrowRight className="size-4" />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ravi-kishan-kumar-746047343"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 cursor-pointer"
              >
                <FaLinkedin className="size-5" />
                LinkedIn
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/HeroImage.svg"
              alt="Ravi Kishan Kumar - Full Stack Developer"
              width={500}
              height={500}
              priority
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
