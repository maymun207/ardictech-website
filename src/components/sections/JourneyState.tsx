"use client";

import Image from "next/image";
import type { Dictionary } from "@/types";

interface JourneyStateProps {
  dict: Dictionary;
}

export default function JourneyState({ dict }: JourneyStateProps) {
  const states = [
    {
      id: "searcher",
      title: "THE SEARCHER",
      description: "Overwhelmed by buzzwords (AI, IIoT, 4.0) but unsure where to start.",
    },
    {
      id: "pilot-prisoner",
      title: "THE PILOT PRISONER",
      description: "Successful pilot that failed to scale. 70% of initiatives die here.",
    },
    {
      id: "restart",
      title: "THE RESTART",
      description: "Tried, failed, burned budget. Now skeptical of 'blackbox' solutions.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header - Side by Side */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
          {/* Left: Main Question */}
          <div>
            <h2 className="font-heading text-5xl font-bold uppercase leading-tight sm:text-6xl lg:text-7xl">
              Which
              <br />
              State
              <br />
              Are
              <br />
              You
              <br />
              In?
            </h2>
          </div>

          {/* Right: Title + State Cards */}
          <div>
            <h3 className="mb-8 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
              The Path to Digitalization is Rarely Straight
            </h3>

            {/* Three State Cards */}
            <div className="grid gap-6 md:grid-cols-3">
              {states.map((state) => (
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
        <div className="relative mt-8">
          <div className="relative mx-auto max-w-6xl">
            <Image
              src="/images/journey-flow.png"
              alt="Journey to Digitalization Flow"
              width={1600}
              height={600}
              className="h-auto w-full"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
