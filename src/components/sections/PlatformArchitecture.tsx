"use client";

import Image from "next/image";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface PlatformArchitectureProps {
  dict: Dictionary;
}

export default function PlatformArchitecture({ dict }: PlatformArchitectureProps) {
  return (
    <SectionWrapper id="architecture" className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Left: Ensō Approach Image */}
        <div className="relative">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/Enso-approach.png"
              alt="The Ensō Approach - Connect & enhance, don't replace"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right: Platform Layers Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full">
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
    </SectionWrapper>
  );
}
