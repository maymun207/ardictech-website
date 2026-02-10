"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface LayerArAIProps {
    dict: Dictionary;
}

export default function LayerArAI({ dict }: LayerArAIProps) {
    const { arai } = dict.architectureDetails;

    return (
        <SectionWrapper id="layer-arai" dark className="bg-black !py-32 overflow-hidden relative">
            {/* Dynamic background particles/glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -z-10 animate-pulse" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                                Layer 3: Cognitive Center
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                            {arai.title}
                        </h2>

                        <p className="text-xl text-accent/80 font-medium mb-8 italic tracking-wide">
                            {arai.tagline}
                        </p>

                        <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12 max-w-2xl">
                            {arai.description}
                        </p>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative lg:pt-20"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-square border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                            <NextImage
                                src="/images/arai-intelligence.png"
                                alt="ArAI Cognitive Interface"
                                fill
                                className="object-cover"
                            />

                            {/* Animated scanning lines */}
                            <motion.div
                                className="absolute left-0 right-0 h-[2px] bg-accent/50 z-20"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Data points overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <div className="flex gap-4 mb-4">
                                    <div className="px-3 py-1 rounded-md bg-accent/20 border border-accent/40 backdrop-blur-md">
                                        <span className="text-accent text-[10px] font-bold tracking-widest uppercase">Anomaly detected</span>
                                    </div>
                                    <div className="px-3 py-1 rounded-md bg-white/10 border border-white/20 backdrop-blur-md">
                                        <span className="text-white text-[10px] font-bold tracking-widest uppercase">Optimizing</span>
                                    </div>
                                </div>
                                <div className="font-mono text-[10px] text-neutral-500 space-y-1">
                                    <p>BATCH_ID: #GF-9921</p>
                                    <p>CORRELATION: 0.998</p>
                                    <p>PRESCRIPTION: FLOW_RED_5PCT</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Row: 3 Cards Side by Side */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {arai.points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-accent/40 group transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                        >
                            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-accent/10 border border-accent/20 mb-6 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                                <span className="text-sm font-bold font-mono">0{i + 1}</span>
                            </div>
                            <h3 className="text-white font-bold text-xl mb-4">{point.title}</h3>
                            <p className="text-neutral-400 text-base leading-relaxed font-light">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
