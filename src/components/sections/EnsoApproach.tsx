"use client";

import Image from "next/image";
import { Layers, Shield, MessageSquare, Zap, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/types";
import Button from "@/components/ui/Button";

interface EnsoApproachProps {
  dict: Dictionary;
}

const features = [
  {
    id: "architecture",
    icon: Layers,
    title: "4-Layer Architecture",
    description: "From edge to insight, a complete stack built for manufacturing reality.",
    href: "#platform",
  },
  {
    id: "overlay",
    icon: Shield,
    title: "Non-Disruptive Overlay",
    description: "Connect and enhance — never replace your existing systems.",
    href: "#platform",
  },
  {
    id: "cwf",
    icon: MessageSquare,
    title: "Chat With Your Factory",
    description: "Ask questions in natural language. Get answers with charts.",
    href: "#features",
  },
  {
    id: "time-to-value",
    icon: Zap,
    title: "Time to Value: Weeks",
    description: "Proof of value in 8-12 weeks, not years of consulting.",
    href: "#roi",
  },
];

export default function EnsoApproach({ dict }: EnsoApproachProps) {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-accent">
              The Ensō Approach
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-6 font-heading text-[2.75rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
          Connect & enhance — don&apos;t replace
        </h2>

        {/* Description */}
        <p className="mb-12 text-base leading-relaxed text-neutral-400 lg:text-lg lg:max-w-2xl">
          Our intelligence wrapper reads from your existing systems through secure
          APIs, building a unified data lake without disrupting operations.
        </p>

        {/* Cards and Image Grid - Aligned */}
        <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* LEFT: Feature Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <a
                  key={feature.id}
                  href={feature.href}
                  className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-neutral-900/60"
                >
                  {/* Icon and Title Row */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-105">
                      <Icon className="h-7 w-7 stroke-[2.5]" />
                    </div>
                    <h3 className="font-heading text-lg font-bold leading-tight text-white">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
                    {feature.description}
                  </p>
                </a>
              );
            })}
          </div>

          {/* RIGHT: Platform Layers Image */}
          <div className="flex items-stretch justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              <Image
                src="/images/platform-layers.png"
                alt="ARDICTECH Unified Intelligence Platform - 4 Layer Architecture"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <Button
            href="#platform"
            variant="ghost"
            size="lg"
            className="group border-2 border-accent bg-transparent text-accent transition-all duration-300 hover:bg-accent hover:text-black"
          >
            Learn Our Approach
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
