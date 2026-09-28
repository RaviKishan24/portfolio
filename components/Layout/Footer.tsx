"use client";

import { Button } from "@/components/ui/button";
import { Mail, Heart, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const email = "Ravikishankumar71@gmail.com";

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand + Socials */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-primary">
              Ravi Kishan Kumar
            </h3>

            <p className="mb-6 max-w-sm text-muted-foreground">
              Full-Stack MERN Developer crafting responsive, production-ready
              web applications with a focus on clean code and real-world
              problem solving.
            </p>

            <div className="flex gap-3">
              <Button variant="outline" size="icon" >
                <a
                  href="https://github.com/RaviKishan24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-colors hover:border-primary hover:text-primary"
                >
                  <FaGithub className="size-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon" >
                <a
                  href="https://www.linkedin.com/in/ravi-kishan-kumar-746047343"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-colors hover:border-primary hover:text-primary"
                >
                  <FaLinkedin className="size-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon" >
                <a
                  href="https://wa.me/917970613165"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="transition-colors hover:border-primary hover:text-primary"
                >
                  <FaWhatsapp className="size-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon" >
                <a
                  href={`mailto:${email}`}
                  aria-label="Email"
                  className="transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-3.5 shrink-0" />
                India
              </li>

              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-3.5 shrink-0" />
                  {email}
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/917970613165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <FaWhatsapp className="size-3.5 shrink-0" />
                  +91 79706 13165
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className=" flex flex-col items-center justify-between gap-4 border-b py-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ravi Kishan Kumar. All rights reserved.
          </p>

          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with
            <Heart className="size-4 text-red-500" />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}