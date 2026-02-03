"use client";

import Image from "next/image";
import type { Dictionary } from "@/types";

interface JourneyStateProps {
  dict: Dictionary;
}

export default function JourneyState({ dict }: JourneyStateProps) {
  const { journeyState } = dict;

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Side by Side */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
          {/* Left: Main Question */}
          <div>
            <h2 className="font-heading text-5xl font-bold uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
              {journeyState.question.split(' ').map((word, i, arr) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* Right: Title + State Cards */}
          <div>
            <h3 className="mb-8 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
              {journeyState.title}
            </h3>

            {/* Three State Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {journeyState.states.map((state) => (
                <div
                  key={state.id}
                  className="border-l-2 border-accent bg-gradient-to-br from-neutral-900 to-black p-6"
                >
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-neutral-400">
                    {state.title}
                  </h4>
                  <p className="text-base leading-relaxed text-neutral-300">
                    {state.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Flow Visualization */}
        <div className="relative -mt-40 lg:ml-[332px]">
          <div className="relative max-w-4xl">
            <Image
              src="/images/journey-flow.png"
              alt="Journey to Digitalization Flow"
              width={1600}
              height={600}
              className="h-auto w-full opacity-90 transition-all duration-700 hover:opacity-100"
              style={{
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
              }}
              priority
              unoptimized
            />

            {/* Hotspots Overlay */}
            <div className="absolute inset-0 z-20">
              {/* Node A Area */}
              <div className="absolute left-[15%] bottom-[25%] h-20 w-20 cursor-help rounded-full group">
                <div className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
                <div className="invisible absolute bottom-full left-1/2 mb-4 w-48 -translate-x-1/2 rounded-lg border border-accent/20 bg-black/90 p-3 text-xs backdrop-blur-md group-hover:visible">
                  <p className="font-bold text-accent uppercase mb-1">Node A</p>
                  <p className="text-neutral-300">Exploration and ROI definition phase.</p>
                </div>
              </div>

              {/* Node B Area */}
              <div className="absolute left-[40%] bottom-[15%] h-20 w-20 cursor-help rounded-full group">
                <div className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
                <div className="invisible absolute bottom-full left-1/2 mb-4 w-48 -translate-x-1/2 rounded-lg border border-accent/20 bg-black/90 p-3 text-xs backdrop-blur-md group-hover:visible">
                  <p className="font-bold text-accent uppercase mb-1">Node B</p>
                  <p className="text-neutral-300">Business case and budgeting.</p>
                </div>
              </div>

              {/* Node C Area */}
              <div className="absolute left-[55%] top-[25%] h-20 w-20 cursor-help rounded-full group">
                <div className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
                <div className="invisible absolute bottom-full left-1/2 mb-4 w-48 -translate-x-1/2 rounded-lg border border-accent/20 bg-black/90 p-3 text-xs backdrop-blur-md group-hover:visible">
                  <p className="font-bold text-accent uppercase mb-1">Node C</p>
                  <p className="text-neutral-300">Pilot execution and initial value proof.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
