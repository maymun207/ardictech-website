"use client";

import Image from "next/image";
import { Layers, Shield, MessageSquare, Zap, ArrowRight, Cog } from "lucide-react";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types";
import Button from "@/components/ui/Button";

interface EnsoApproachProps {
  dict: Dictionary;
}

export default function EnsoApproach({ dict }: EnsoApproachProps) {
  const { ensoApproach } = dict;

  const icons: Record<string, any> = {
    "architecture": Layers,
    "overlay": Shield,
    "cwf": MessageSquare,
    "time-to-value": Zap,
  };

  const featureLinks: Record<string, string> = {
    "architecture": "#platform",
    "overlay": "#platform",
    "cwf": "#features",
    "time-to-value": "#roi",
  };

  return (
    <section className="relative overflow-hidden bg-black pt-20 pb-10 text-white lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Left: Heading & Description */}
          <div>
            <div className="mb-8 rotate-0">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="font-heading text-xs font-semibold tracking-widest text-accent uppercase">
                  {ensoApproach.badge}
                </span>
              </div>
            </div>

            <h2 className="mb-8 font-heading text-[2.75rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem] text-white">
              {ensoApproach.title}
            </h2>

            <p className="mb-12 text-base leading-relaxed text-neutral-400 lg:text-lg">
              {ensoApproach.description}
            </p>

            <Button
              href="#platform"
              variant="primary"
              size="lg"
              className="group"
            >
              {ensoApproach.cta}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right: The 4 Implementation Steps (Slide 2) */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-[100px] group-hover:bg-accent/10 transition-colors" />

            <h3 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-12 flex items-center gap-4">
              Implementation Model
              <div className="h-[1px] flex-grow bg-white/10" />
            </h3>

            <div className="space-y-8">
              {ensoApproach.items.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="flex items-start gap-6 group/item"
                >
                  <div className="h-10 w-10 shrink-0 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-accent group-hover/item:border-accent/40 group-hover/item:bg-accent/10 transition-all">
                    <span className="text-xs font-mono font-bold">0{i + 1}</span>
                  </div>
                  <p className="text-white text-lg font-medium leading-tight pt-2">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards Grid (Existing Features) */}
        <div className="mb-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ensoApproach.features.map((feature, i) => {
              const Icon = icons[feature.id] || Layers;
              return (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={feature.id}
                  href={featureLinks[feature.id] || "#"}
                  className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-neutral-900/60"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-105">
                      <Icon className="h-6 w-6 stroke-[2.5]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold leading-tight text-white">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
                    {feature.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
