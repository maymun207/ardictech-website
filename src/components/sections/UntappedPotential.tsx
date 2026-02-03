"use client";

import { useState } from "react";
import { Database, Activity, AlertTriangle, TrendingUp } from "lucide-react";
import type { Dictionary } from "@/types";

interface UntappedPotentialProps {
  dict: Dictionary;
}

export default function UntappedPotential({ dict }: UntappedPotentialProps) {
  const { untappedPotential } = dict;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const icons: Record<string, React.ReactNode> = {
    "dark-data": <Database className="h-6 w-6" />,
    "reactive-maintenance": <Activity className="h-6 w-6" />,
    "quality-escapes": <AlertTriangle className="h-6 w-6" />,
    "oee-uplift": <TrendingUp className="h-6 w-6" />,
  };

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Headlines */}
          <div>
            <h2 className="font-heading text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              <span className="text-neutral-600">{untappedPotential.title1}</span>
              <br />
              <span className="text-neutral-600">{untappedPotential.title2}</span>
              <br />
              <span className="text-white">{untappedPotential.title3}</span>
            </h2>
          </div>

          {/* Right: Metrics */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="lg:text-right">
              <div className="mb-4 font-heading text-6xl font-bold leading-none sm:text-7xl lg:text-8xl">
                <div className="flex items-baseline">
                  <span>$</span>
                  <span>48M-</span>
                </div>
                <div className="flex items-baseline">
                  <span>$</span>
                  <span>73M</span>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-4 text-sm font-medium tracking-wider text-neutral-400">
                <span>{untappedPotential.payback}</span>
                <span className="text-accent">•</span>
                <span>{untappedPotential.roi}</span>
              </div>
              <div className="inline-block border border-neutral-700 px-4 py-2 text-xs font-medium tracking-wider text-neutral-400">
                {untappedPotential.annualLoss}
              </div>
            </div>
          </div>
        </div>

        {/* Loss Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {untappedPotential.cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${hoveredCard === card.id
                ? "border-blue-500 bg-gradient-to-br from-blue-900 to-blue-950 shadow-2xl shadow-blue-500/20"
                : "border-neutral-800 bg-gradient-to-br from-neutral-900 to-black"
                }`}
            >
              {/* Default Card Content */}
              <div
                className={`p-6 transition-opacity duration-500 ${hoveredCard === card.id ? "opacity-0" : "opacity-100"
                  }`}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex rounded-lg bg-neutral-800 p-3 text-accent">
                  {icons[card.id] || <Database className="h-6 w-6" />}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xs font-bold tracking-wider text-neutral-400">
                  {card.title}
                </h3>

                {/* Range */}
                <p className="mb-4 text-3xl font-bold">{card.range}</p>

                {/* Category */}
                <p className="text-xs font-medium tracking-wider text-accent">
                  {card.category}
                </p>
              </div>

              {/* Hover Quote Content */}
              <div
                className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${hoveredCard === card.id ? "opacity-100" : "opacity-0"
                  }`}
              >
                <p className="text-center text-lg italic leading-relaxed text-white">
                  &ldquo;{card.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
