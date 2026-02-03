"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/types";

interface OperationalEnsoProps {
  dict: Dictionary;
}

export default function OperationalEnso({ dict }: OperationalEnsoProps) {
  const { operationalEnso } = dict;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <div>
            <p className="mb-6 font-heading text-lg font-semibold tracking-wider text-accent">
              {operationalEnso.badge}
            </p>

            <h2 className="mb-8 font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {operationalEnso.title.split(' ').map((word, i) => (
                <span key={i}>
                  {word}
                  {(i === 1 || i === 3) && <br />}
                  {' '}
                </span>
              ))}
            </h2>

            <p className="mb-6 text-xl leading-relaxed text-neutral-300">
              {operationalEnso.description}
            </p>

            <p className="font-heading text-2xl font-bold text-white">
              {operationalEnso.tagline}
            </p>
          </div>

          {/* Right: Ensō Circle with Hover Text */}
          <div className="relative flex items-center justify-center">
            <div
              className="relative aspect-square w-full max-w-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Ensō Circle */}
              <div className="relative h-full w-full">
                {/* Ensō Image */}
                <Image
                  src="/images/enso-nobg.png"
                  alt="Operational Ensō Circle"
                  fill
                  className={`object-contain transition-all duration-700 ${isHovered ? "scale-105 blur-sm opacity-20" : "scale-100 blur-0 opacity-100"}`}
                  priority
                />

                {/* Center Text - Hidden by default, visible on hover */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <p className="mb-4 text-center text-sm font-light italic leading-relaxed text-neutral-400 sm:text-base lg:px-8">
                    {operationalEnso.definition}
                  </p>
                  <div className="mb-4 h-px w-12 bg-accent/30" />
                  <p className="text-center text-base font-medium leading-relaxed text-white sm:text-lg">
                    {operationalEnso.hover}
                  </p>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="mt-8 text-center">
                <p className="font-heading text-xl font-bold leading-tight sm:text-2xl">
                  {operationalEnso.bottom1}
                  <br />
                  {operationalEnso.bottom2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
