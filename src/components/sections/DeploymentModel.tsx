"use client";

import NextImage from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface DeploymentModelProps {
    dict: Dictionary;
}

export default function DeploymentModel({ dict }: DeploymentModelProps) {
    const { deploymentModel, platform } = dict;
    const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

    const layer4 = platform.layers.find(l => l.id === "cwf");
    const layer3 = platform.layers.find(l => l.id === "arai");
    const layer2 = platform.layers.find(l => l.id === "armes");
    const layer1 = platform.layers.find(l => l.id === "iot-ignite");

    const activeLayerData =
        hoveredLayer === "layer-4" ? layer4 :
            hoveredLayer === "layer-3" ? layer3 :
                hoveredLayer === "layer-2" ? layer2 :
                    hoveredLayer === "layer-1" ? layer1 : null;

    return (
        <SectionWrapper id="deployment-model" dark className="bg-black !pt-16 !pb-32 overflow-hidden">
            <div className="mx-auto max-w-7xl relative">
                {/* Title Section */}
                <div className="mb-24 text-center">
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 px-5 py-2 mb-8">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        <span className="font-heading text-xs font-semibold tracking-widest text-accent uppercase">
                            {deploymentModel.subtitle}
                        </span>
                    </div>
                    <h2 className="font-heading text-4xl font-bold sm:text-5xl lg:text-7xl text-white leading-[1.1] tracking-tight">
                        {deploymentModel.title}
                    </h2>
                    <div className="mx-auto mt-12 h-[1px] w-24 bg-accent/30" />
                </div>

                {/* Integrated Approach Section */}
                <div className="mt-12 relative">
                    <div className="flex flex-col items-center pb-20 px-8 bg-black text-center">
                        <div className="relative w-full max-w-4xl mx-auto">
                            <div
                                className="relative overflow-hidden bg-black rounded-2xl border border-white/5"
                                onMouseLeave={() => setHoveredLayer(null)}
                            >
                                <NextImage
                                    src="/images/platform-architecture-v4.jpeg"
                                    alt="Ardictech 4-Layer Architecture"
                                    width={1200}
                                    height={800}
                                    className={`w-full h-auto object-contain transition-all duration-700 ${hoveredLayer ? "opacity-30 grayscale-[0.5] blur-[2px]" : "opacity-100"}`}
                                    priority
                                />

                                {/* Hotspots for Layers */}
                                <div
                                    className="absolute top-[5%] left-[5%] w-[50%] h-[20%] cursor-pointer z-20"
                                    onMouseEnter={() => setHoveredLayer("layer-4")}
                                />
                                <div
                                    className="absolute top-[25%] left-[5%] w-[50%] h-[18%] cursor-pointer z-20"
                                    onMouseEnter={() => setHoveredLayer("layer-3")}
                                />
                                <div
                                    className="absolute top-[45%] left-[5%] w-[50%] h-[18%] cursor-pointer z-20"
                                    onMouseEnter={() => setHoveredLayer("layer-2")}
                                />
                                <div
                                    className="absolute top-[68%] left-[5%] w-[50%] h-[18%] cursor-pointer z-20"
                                    onMouseEnter={() => setHoveredLayer("layer-1")}
                                />

                                {/* Tooltip Overlay */}
                                <AnimatePresence>
                                    {hoveredLayer && activeLayerData && (
                                        <motion.div
                                            key={hoveredLayer}
                                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                            className="absolute left-[58%] z-30 w-80 p-6 bg-black border border-accent/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                                            style={{
                                                top: hoveredLayer === "layer-4" ? "2%" :
                                                    hoveredLayer === "layer-3" ? "22%" :
                                                        hoveredLayer === "layer-2" ? "42%" : "62%"
                                            }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
                                                    <span className="text-accent text-xs font-bold uppercase tracking-widest">{activeLayerData.number}</span>
                                                </div>
                                                <h5 className="text-white font-heading font-bold text-lg">{activeLayerData.name}</h5>
                                            </div>
                                            <p className="text-accent/80 text-sm font-medium mb-2 italic tracking-wide">
                                                &ldquo;{activeLayerData.metaphor}&rdquo;
                                            </p>
                                            <p className="text-neutral-400 text-sm leading-relaxed font-light">
                                                {activeLayerData.description}
                                            </p>

                                            {/* Decorative element */}
                                            <div className="absolute -left-2 top-8 w-2 h-2 bg-accent rotate-45 border border-white/10" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </SectionWrapper>
    );
}
