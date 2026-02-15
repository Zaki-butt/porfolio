"use client";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

const experience = [
  {
    company: "Tech Startup Inc.",
    role: "Junior Software Engineer",
    period: "2023 - Present",
    description: "Developing responsive React applications and maintaining Node.js microservices. Improved site performance by 20%.",
    skills: ["React", "Node.js", "AWS"],
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "2022 - 2023",
    description: "Built custom websites for local businesses using Next.js and Tailwind CSS. Managed end-to-end delivery.",
    skills: ["Next.js", "Tailwind", "Design"],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <div className="flex flex-col gap-8">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold tracking-tight"
        >
            Work Experience
        </motion.h2>

        <div className="flex flex-col gap-6 relative border-l border-border ml-3 pl-8 py-2">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border border-border bg-background flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-medium">{job.role}</h3>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <div className="text-base text-muted-foreground/90 font-medium">{job.company}</div>
                <p className="text-sm text-muted-foreground max-w-2xl">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
