"use client";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, Star, Trophy } from "lucide-react";

const stats = [
  { label: "Total Stars", value: "128", icon: Star },
  { label: "Commits (2025)", value: "453", icon: GitCommit },
  { label: "PRs Merged", value: "67", icon: GitPullRequest },
  { label: "Contributed to", value: "12 Repos", icon: Trophy },
];

export function GitHubStats() {
  return (
    <Section id="github" className="bg-muted/10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold tracking-tight"
            >
                Open Source
            </motion.h2>
            <p className="text-muted-foreground">My contributions and activity on GitHub.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center justify-center p-6 gap-2 text-center hover:bg-muted/50 transition-colors">
                <stat.icon className="h-6 w-6 text-muted-foreground mb-1" />
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Simulated Activity Graph */}
        <Card className="p-6 overflow-hidden">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Contribution Activity</span>
                    <span className="text-xs text-muted-foreground">Last 30 days</span>
                </div>
                <div className="flex gap-1 items-end h-24 w-full justify-between opacity-50">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${Math.random() * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.02, duration: 0.5 }}
                            className="bg-primary/20 hover:bg-primary/60 rounded-sm flex-1 min-w-[4px] transition-colors"
                        />
                    ))}
                </div>
            </div>
        </Card>
      </div>
    </Section>
  );
}
