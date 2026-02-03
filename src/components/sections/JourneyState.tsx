"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/types";
// Local utility for tailwind class merging
const cn = (...classes: (string | undefined | null | boolean)[]) => classes.filter(Boolean).join(' ');

interface JourneyStateProps {
  dict: Dictionary;
}

const HOTSPOT_ZONES = [
  {
    id: 'searcher',
    left: '21.5%',
    top: '80%',
    width: '22%',
    height: '14%',
    cardPos: 'top',
    label: 'Node A'
  },
  {
    id: 'pilot-prisoner',
    left: '74%',
    top: '41.5%',
    width: '22%',
    height: '14%',
    cardPos: 'top',
    label: 'Pilot Purgatory'
  },
  {
    id: 'restart',
    left: '74%',
    top: '6%',
    width: '22%',
    height: '14%',
    cardPos: 'bottom',
    label: 'Node E'
  },
];

export default function JourneyState({ dict }: JourneyStateProps) {
  const { journeyState } = dict;
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="journey-state" className="relative overflow-hidden bg-black pb-32 pt-24 text-white">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Horizontal Split */}
        <div className="mb-24 grid gap-16 lg:grid-cols-[380px_1fr] lg:items-start">
          {/* Column 1: The Question */}
          <div className="relative group lg:sticky lg:top-32">
            <h2 className="font-heading text-6xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl tracking-tighter">
              {journeyState.question.split(' ').map((word, i) => (
                <span key={i} className="block transition-transform duration-500 group-hover:translate-x-2">
                  {word}
                </span>
              ))}
            </h2>
            <div className="mt-8 h-1 w-24 bg-accent/50" />
            <p className="mt-12 text-lg text-neutral-400 max-w-[300px] leading-relaxed">
              Hover over the <span className="text-accent font-bold">specific labels</span> (Node A, Pilot Purgatory, Node E) to uncover the hidden costs of each state.
            </p>
          </div>

          {/* Column 2: Title + Interactive Map Area */}
          <div className="flex flex-col lg:pt-4">
            <h3 className="mb-8 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
              {journeyState.title}
            </h3>

            <div className="relative group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/journey-flow-v3.png"
                  alt="Journey to Digitalization Flow"
                  width={1600}
                  height={900}
                  className={cn(
                    "h-auto w-full transition-all duration-1000 contrast-[1.3] brightness-[1.25] saturate-[1.4]",
                    hoveredNode ? "opacity-40 scale-[1.01] grayscale blur-[1px]" : "opacity-100"
                  )}
                  style={{
                    maskImage: 'radial-gradient(ellipse 95% 95% at center, black 90%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 95% 95% at center, black 90%, transparent 100%)'
                  }}
                  priority
                  unoptimized
                />

                {/* Micro-Vignettes - Minimal to hide only the very edges */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black to-transparent" />
                </div>

                {/* Hotspot Hover Zones (Invisible Hit-boxes) */}
                <div className="absolute inset-0 z-20">
                  {HOTSPOT_ZONES.map((zone) => (
                    <div
                      key={zone.id}
                      style={{
                        left: zone.left,
                        top: zone.top,
                        width: zone.width,
                        height: zone.height
                      }}
                      className="absolute group/hotspot cursor-help"
                      onMouseEnter={() => setHoveredNode(zone.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      {/* Subtly indicate the hotspot on hover */}
                      <div className={cn(
                        "absolute inset-0 rounded-xl border border-accent/0 transition-all duration-500",
                        hoveredNode === zone.id ? "border-accent/40 bg-accent/5" : "bg-transparent"
                      )} />

                      {/* Floating Card for Map */}
                      <div className={cn(
                        "absolute left-1/2 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/90 p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-500 z-50",
                        zone.cardPos === 'bottom' ? 'top-full mt-6' : 'bottom-full mb-6',
                        hoveredNode === zone.id ? "visible translate-y-0 opacity-100 scale-100" : "invisible translate-y-4 opacity-0 scale-95"
                      )}>
                        {/* Status Badge */}
                        <div className="mb-3 flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">Diagnostic Insight</span>
                        </div>

                        <h4 className="mb-2 text-xl font-bold text-white tracking-tight">
                          {journeyState.states.find(s => s.id === zone.id)?.title}
                        </h4>

                        <p className="text-sm leading-relaxed text-neutral-300">
                          {journeyState.states.find(s => s.id === zone.id)?.description}
                        </p>

                        {/* Connection Arrow */}
                        <div className={cn(
                          "absolute left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-white/10 bg-black/90",
                          zone.cardPos === 'bottom' ? "-top-2 border-t border-l" : "-bottom-2 border-b border-r"
                        )} />

                        {/* Decorative glow line */}
                        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ambient Glows */}
                <div className="absolute inset-0 pointer-events-none opacity-50">
                  <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] bg-accent/10 blur-[120px] animate-pulse" />
                  <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] animate-pulse delay-1000" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sync Grid: Assessment Cards at bottom */}
        <div className="grid gap-6 md:grid-cols-3">
          {journeyState.states.map((state, idx) => (
            <div
              key={state.id}
              onMouseEnter={() => setHoveredNode(state.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className={cn(
                "group relative overflow-hidden rounded-2xl border transition-all duration-500 p-8 cursor-default",
                hoveredNode === state.id
                  ? "border-accent/60 bg-white/[0.07] scale-[1.02] shadow-[0_0_30px_rgba(var(--accent-rgb),0.1)]"
                  : "border-white/10 bg-white/[0.03] backdrop-blur-xl"
              )}
            >
              <div className={cn(
                "absolute -right-8 -top-8 w-24 h-24 rounded-full blur-3xl transition-opacity duration-700",
                hoveredNode === state.id ? "opacity-30" : "opacity-0",
                idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-purple-500' : 'bg-emerald-500'
              )} />

              <div className="flex items-center gap-3 mb-6">
                <span className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold border transition-colors duration-500",
                  hoveredNode === state.id ? "bg-accent text-black border-accent" : "bg-white/5 text-accent/80 border-white/10"
                )}>
                  0{idx + 1}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent/60 font-medium">
                  State Analysis
                </span>
              </div>

              <h4 className="mb-3 text-2xl font-bold text-white tracking-tight">
                {state.title}
              </h4>
              <p className={cn(
                "text-base leading-relaxed transition-colors duration-500",
                hoveredNode === state.id ? "text-neutral-100" : "text-neutral-400"
              )}>
                {state.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
