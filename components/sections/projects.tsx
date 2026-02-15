"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing products, orders, and analytics.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    image: "/project-1.png", // Placeholder
    demo: "#",
    github: "#",
    colSpan: "md:col-span-2",
  },
  {
    title: "Task Management App",
    description: "Real-time task collaboration tool with drag-and-drop kanban boards.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "/project-2.png", // Placeholder
    demo: "#",
    github: "#",
    colSpan: "md:col-span-1",
  },
  {
    title: "AI Content Generator",
    description: "SaaS platform leveraging OpenAI API to generate marketing copy.",
    tags: ["OpenAI", "Next.js", "Edge Functions"],
    image: "/project-3.png", // Placeholder
    demo: "#",
    github: "#",
    colSpan: "md:col-span-1",
  },
    {
    title: "Portfolio Website",
    description: "Minimalist portfolio (this site) built with performance and design in mind.",
    tags: ["Next.js", "Framer Motion", "Tailwind 4"],
    image: "/project-4.png", // Placeholder
    demo: "#",
    github: "#",
    colSpan: "md:col-span-2",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-col gap-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Featured Projects</h2>
            <p className="text-muted-foreground">A selection of my recent work.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={project.colSpan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col overflow-hidden group">
                <div className="relative aspect-video bg-muted/50 overflow-hidden">
                    {/* Placeholder for actual image */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 group-hover:scale-105 transition-transform duration-500">
                        <Layers className="size-12" />
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px] px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                  
                  <div className="mt-auto flex gap-3 pt-2">
                    <Button size="sm" variant="outline" className="w-full gap-2" asChild>
                        <Link href={project.demo} target="_blank">
                             <ExternalLink className="h-3.5 w-3.5" /> Demo
                        </Link>
                    </Button>
                     <Button size="sm" variant="outline" className="w-full gap-2" asChild>
                        <Link href={project.github} target="_blank">
                             <Github className="h-3.5 w-3.5" /> Code
                        </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
