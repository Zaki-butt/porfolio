"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <Section id="hero" className="flex min-h-[80vh] flex-col justify-center">
      <div className="flex max-w-3xl flex-col gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Building scalable, <br />
          <span className="text-muted-foreground">user-centric web apps.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          I&apos;m a Software Engineer with a passion for modern design and performance.
          Currently focusing on Next.js and TypeScript ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4"
        >
          <Link href="#projects">
            <Button size="lg" className="gap-2">
              View Work <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://github.com" target="_blank">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-4 w-4" /> GitHub
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
