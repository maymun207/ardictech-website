"use client";

import { useState } from "react";
import Image from "next/image";
import type { Dictionary } from "@/types";

interface OperationalEnsoProps {
  dict: Dictionary;
}

export default function OperationalEnso({ dict }: OperationalEnsoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Text Content */}
          <div>
            <p className="mb-6 font-heading text-lg font-semibold uppercase tracking-wider text-accent">
              Operational Ensō:
            </p>
            
            <h2 className="mb-8 font-heading text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
              COMPLETE AND
              <br />
              INCOMPLETE
              <br />
              AT THE SAME TIME
            </h2>

            <p className="mb-6 text-xl leading-relaxed text-neutral-300">
              Real Transformation is not a one-time project; It is is a living circle!
            </p>

            <p className="font-heading text-2xl font-bold text-white">
              Alive, Evolving and Always in Motion.
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
                  className="object-contain"
                  priority
                />

                {/* Center Text - Hidden by default, visible on hover */}
                <div
                  className={`absolute inset-0 flex items-center justify-center p-12 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-center text-base italic leading-relaxed text-white sm:text-lg">
                    Enso is a hand-drawn circle in Japanese Zen art, simple shape with a deep message: presence, clarity, and the idea that everything is connected.
                  </p>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="mt-8 text-center">
                <p className="font-heading text-xl font-bold uppercase leading-tight sm:text-2xl">
                  NOT STATIC PERFECTION
                  <br />
                  BUT DYNAMIC PRECISION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
