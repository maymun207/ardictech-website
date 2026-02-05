"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface LayerCWFProps {
    dict: Dictionary;
}

export default function LayerCWF({ dict }: LayerCWFProps) {
    const { cwf } = dict.architectureDetails;

    return (
        <SectionWrapper id="layer-cwf" dark className="bg-[#030303] !py-32 overflow-hidden relative">
            <div className="mx-auto max-max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Image Content - Left for alternating */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:order-1 order-2 relative"
                    >
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] animate-pulse" />

                        <div className="relative rounded-3xl overflow-hidden aspect-[9/16] max-w-[320px] mx-auto border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
                            <NextImage
                                src="/images/cwf-chat.png"
                                alt="CWF Chat Interface"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating chat bubbles decoration */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-1/4 -right-12 p-4 bg-accent/10 backdrop-blur-xl border border-accent/30 rounded-2xl max-w-[180px]"
                        >
                            <p className="text-white text-xs font-light">"Is production line 4 hitting the target OEE?"</p>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-1/4 -left-12 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl max-w-[180px]"
                        >
                            <p className="text-accent text-xs font-bold">"Yes. Current OEE is 94%."</p>
                        </motion.div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:order-2 order-1"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                                Layer 4: Conversational Interface
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                            {cwf.title}
                        </h2>

                        <p className="text-xl text-accent/80 font-medium mb-8 italic tracking-wide">
                            {cwf.tagline}
                        </p>

                        <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12 max-w-2xl">
                            {cwf.description}
                        </p>

                        {/* Legacy vs Ardictech Comparison */}
                        <div className="grid grid-cols-1 gap-6 mb-12">
                            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="flex flex-col md:flex-row gap-8">
                                    {/* Legacy */}
                                    <div className="flex-1">
                                        <p className="text-neutral-500 text-[10px] font-bold tracking-widest uppercase mb-4">{cwf.comparison.legacy.label}</p>
                                        <p className="text-white text-3xl font-bold mb-4">{cwf.comparison.legacy.value}</p>
                                        <p className="text-neutral-400 text-sm font-light leading-snug">{cwf.comparison.legacy.steps}</p>
                                    </div>

                                    <div className="hidden md:block w-px bg-white/5" />

                                    {/* Ardictech */}
                                    <div className="flex-1">
                                        <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-4">{cwf.comparison.ardictech.label}</p>
                                        <p className="text-accent text-3xl font-bold mb-4">{cwf.comparison.ardictech.value}</p>
                                        <p className="text-neutral-300 text-sm font-light leading-snug">{cwf.comparison.ardictech.steps}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {cwf.features.map((feature, i) => (
                                <div key={i} className="px-4 py-2 rounded-lg bg-accent/5 border border-accent/20 text-accent text-sm font-medium">
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
