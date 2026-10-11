"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Database, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import { hero } from "@/content/home";

const nodes = [
  { Icon: FileText, label: "Documents", x: "8%", y: "18%", d: 0 },
  { Icon: Database, label: "Your data", x: "70%", y: "10%", d: 1 },
  { Icon: Bot, label: "AI agents", x: "76%", y: "68%", d: 2 },
  { Icon: Sparkles, label: "Insights", x: "6%", y: "70%", d: 3 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mb-5 inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            {hero.titleStart} <span className="gradient-text">{hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </Link>
          </motion.div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {hero.badges.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Animated visual: floating nodes connected to a core */}
        <div className="relative mx-auto aspect-square w-full max-w-md" role="img" aria-label="Illustration: documents and data flowing into AI agents to produce insights">
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="hg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="rgb(var(--brand))" />
                <stop offset="100%" stopColor="rgb(var(--accent))" />
              </linearGradient>
            </defs>
            {[[60, 90], [290, 60], [310, 290], [50, 300]].map(([x, y], i) => (
              <line key={i} x1="200" y1="200" x2={x} y2={y} stroke="url(#hg)" strokeWidth="2" strokeDasharray="6 8" opacity="0.7">
                <animate attributeName="stroke-dashoffset" from="0" to="-56" dur="3s" repeatCount="indefinite" />
              </line>
            ))}
            <circle cx="200" cy="200" r="70" fill="none" stroke="url(#hg)" strokeWidth="1.5" opacity="0.4" />
            <circle cx="200" cy="200" r="105" fill="none" stroke="url(#hg)" strokeWidth="1" opacity="0.2" />
          </svg>
          <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-gradient-to-br from-brand to-accent text-white shadow-2xl shadow-brand/40 animate-float">
            <Bot className="h-12 w-12" aria-hidden="true" />
          </div>
          {nodes.map(({ Icon, label, x, y, d }) => (
            <motion.div
              key={label}
              className="glass absolute flex items-center gap-2 px-3 py-2 text-xs font-medium"
              style={{ left: x, top: y }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: d * 0.6, ease: "easeInOut" }}
            >
              <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
