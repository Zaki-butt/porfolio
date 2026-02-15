"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const technologies = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "AWS",
  "Framer Motion",
  "Git",
  "Prisma",
];

export function TechStack() {
  return (
    <Section id="tech-stack">
      <div className="flex flex-col gap-8">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold tracking-tight"
        >
            Tech Stack
        </motion.h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-muted/50 hover:bg-muted transition-colors cursor-default border-muted-foreground/10 border">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
