"use client";

import { useState } from "react";
import { Wifi, Factory, Brain, MessageCircle, ChevronDown } from "lucide-react";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

interface PlatformOverviewProps {
  dict: Dictionary;
}

const layerIcons = [
  <Wifi key="wifi" className="h-6 w-6" />,
  <Factory key="factory" className="h-6 w-6" />,
  <Brain key="brain" className="h-6 w-6" />,
  <MessageCircle key="chat" className="h-6 w-6" />,
];

const layerGradients = [
  "from-accent to-accent-dark",
  "from-primary to-primary-dark",
  "from-secondary to-secondary-dark",
  "from-primary-light to-primary",
];

export default function PlatformOverview({ dict }: PlatformOverviewProps) {
  const { platform } = dict;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="platform">
      <SectionHeading title={platform.title} subtitle={platform.subtitle} />

      <div className="mt-12 space-y-4">
        {platform.layers.map((layer, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={layer.id}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center gap-4 p-6 text-left"
                aria-expanded={isExpanded}
                aria-controls={`platform-layer-${layer.id}`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${layerGradients[index]}`}
                >
                  {layerIcons[index]}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-neutral-900">
                    {layer.name}
                  </h3>
                  <p className="text-sm text-neutral-500">{layer.tagline}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-neutral-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`platform-layer-${layer.id}`}
                role="region"
                className={`grid transition-all duration-300 ${
                  isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-neutral-100 px-6 pb-6 pt-4">
                    <p className="leading-relaxed text-neutral-600">
                      {layer.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {layer.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-neutral-700"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
