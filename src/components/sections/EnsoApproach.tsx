"use client";

import Image from "next/image";
import { Layers, Shield, MessageSquare, Zap, ArrowRight } from "lucide-react";
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
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-heading text-xs font-semibold tracking-widest text-accent">
              {ensoApproach.badge}
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mb-6 font-heading text-[2.75rem] font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
          {ensoApproach.title}
        </h2>

        {/* Description */}
        <p className="mb-12 text-base leading-relaxed text-neutral-400 lg:text-lg lg:max-w-2xl">
          {ensoApproach.description}
        </p>

        {/* Feature Cards Grid - Full Width */}
        <div className="mb-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ensoApproach.features.map((feature) => {
              const Icon = icons[feature.id] || Layers;
              return (
                <a
                  key={feature.id}
                  href={featureLinks[feature.id] || "#"}
                  className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-neutral-900/60"
                >
                  {/* Icon and Title Row */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-105">
                      <Icon className="h-6 w-6 stroke-[2.5]" />
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
        </div>

        {/* CTA Button */}
        <div>
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
      </div>
    </section>
  );
}
