"use client";

import { useState } from "react";
import { Plus, Target, Zap, Clock } from "lucide-react";
import type { Dictionary } from "@/types";

interface ValueFirstProps {
  dict: Dictionary;
}

interface ValueCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: string;
  metric: string;
  metricLabel: string;
  description: string;
}

export default function ValueFirst({ dict }: ValueFirstProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const valueCards: ValueCard[] = [
    {
      id: "hidden-losses",
      icon: <Plus className="h-6 w-6" />,
      title: "Eliminate Hidden Losses",
      category: "PERFORMANCE OPTIMIZATION",
      metric: "30%",
      metricLabel: "TARGET THROUGHPUT",
      description:
        "Expose the 'Hidden Factory' by surfacing micro-stops and speed losses that paper logs miss. Typically recovers $8M-$12M in previously dark data loss.",
    },
    {
      id: "quality-drift",
      icon: <Target className="h-6 w-6" />,
      title: "Reduce Quality Drift",
      category: "YIELD MAXIMIZATION",
      metric: "22%",
      metricLabel: "YIELD IMPROVEMENT",
      description:
        "Identify and eliminate quality variations before they impact yield. Real-time monitoring surfaces defects that traditional QC processes miss, typically improving yield by 15-25%.",
    },
    {
      id: "energy-bom",
      icon: <Zap className="h-6 w-6" />,
      title: "Optimize Energy BOM",
      category: "RESOURCE INTENSITY",
      metric: "28%",
      metricLabel: "ENERGY REDUCTION",
      description:
        "Reduce energy consumption and material waste through intelligent resource allocation. Typically achieves 20-30% reduction in energy costs and 10-15% reduction in material waste.",
    },
    {
      id: "lead-times",
      icon: <Clock className="h-6 w-6" />,
      title: "Sync Lead Times",
      category: "OPERATIONAL AGILITY",
      metric: "32%",
      metricLabel: "LEAD TIME REDUCTION",
      description:
        "Synchronize production schedules with demand signals to eliminate bottlenecks and reduce lead times. Typically reduces lead times by 25-35% while improving on-time delivery.",
    },
  ];

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Where should{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              digital deliver
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              value first?
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-neutral-300">
            Respect your legacy. Reinvent your factory. We identify addressable
            losses using your existing data before proposing architecture.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black p-6 transition-all duration-500 ${
                hoveredCard === card.id
                  ? "scale-105 border-accent shadow-2xl shadow-accent/20"
                  : "hover:border-neutral-700"
              }`}
            >
              {/* Icon */}
              <div
                className={`mb-4 inline-flex rounded-lg p-3 transition-colors ${
                  hoveredCard === card.id
                    ? "bg-accent/20 text-accent"
                    : "bg-neutral-800 text-neutral-400"
                }`}
              >
                {card.icon}
              </div>

              {/* Title and Category */}
              <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                {card.category}
              </p>

              {/* Hover Content */}
              <div
                className={`mt-6 transition-all duration-500 ${
                  hoveredCard === card.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-l-2 border-accent pl-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-neutral-400">
                    Live Diagnostic Benchmarking
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-neutral-300">
                    {card.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      {card.metric}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
                    {card.metricLabel}
                  </p>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${
                  hoveredCard === card.id ? "opacity-100" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-xl border-2 border-accent px-8 py-4 transition-all hover:scale-105 hover:border-accent-light hover:bg-accent/5 hover:shadow-2xl hover:shadow-accent/20"
          >
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-accent bg-clip-text text-lg font-bold uppercase tracking-wide text-transparent">
              Request Executive Assessment
            </span>
            <span className="text-accent transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
