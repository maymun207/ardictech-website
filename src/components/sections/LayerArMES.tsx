"use client";

import { useState } from "react";
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { X } from "lucide-react";

interface LayerArMESProps {
    dict: Dictionary;
}

export default function LayerArMES({ dict }: LayerArMESProps) {
    const { armes } = dict.architectureDetails;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <SectionWrapper id="layer-armes" dark className="bg-[#020202] !py-32 overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Image Content - Stacked layout on the left */}
                    <div className="flex flex-col gap-12 lg:gap-16 lg:order-1 order-2 lg:pt-20">
                        {/* 1. ArMES Traceability Interface */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[80px]" />

                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                                <NextImage
                                    src="/images/armes-traceability.png"
                                    alt="ArMES Traceability Interface"
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-1000"
                                />

                                {/* Floating ID badge */}
                                <div className="absolute top-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] text-secondary font-bold tracking-[0.2em] uppercase">DPP Status</span>
                                        <span className="text-white text-xs font-mono">ID: AR-T88291-C</span>
                                        <div className="mt-2 h-1 w-full bg-secondary/20 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-secondary"
                                                animate={{ width: ["0%", "100%"] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Digital Passport Flow Diagram (NEW) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                zIndex: 50,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            transition={{ duration: 1, delay: 0.3 }}
                            onClick={() => setIsExpanded(true)}
                            className="relative cursor-pointer group/arch lg:pt-16"
                        >
                            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)] bg-[#050505] transition-all duration-500 group-hover/arch:border-secondary/40 group-hover/arch:shadow-[0_0_60px_rgba(0,209,255,0.1)]">
                                <NextImage
                                    src="/images/armes-digital-passport-flow.jpeg"
                                    alt="Digital Passport Flow Architecture"
                                    fill
                                    className="object-contain p-0 transition-transform duration-700 scale-110 group-hover/arch:scale-125"
                                />
                            </div>

                            {/* Interaction Label */}
                            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover/arch:opacity-100 transition-opacity whitespace-nowrap">
                                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase">Click to Expand (400%)</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:order-2 order-1 lg:sticky lg:top-32"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-bold tracking-[0.2em] uppercase">
                                Layer 2: The Digital Passport
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                            {armes.title}
                        </h2>

                        <p className="text-xl text-secondary/80 font-medium mb-8 italic tracking-wide">
                            {armes.tagline}
                        </p>

                        <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12 max-w-2xl">
                            {armes.description}
                        </p>

                        <div className="space-y-4">
                            {armes.steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="relative pl-10 pb-6 border-l border-white/5 last:pb-0"
                                >
                                    <div className="absolute left-[-5px] top-1 h-2.5 w-2.5 rounded-full bg-secondary border border-black" />
                                    <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                                    <p className="text-neutral-400 text-sm font-light">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Fullscreen Overlay (400%) */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setIsExpanded(false)}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(false);
                            }}
                        >
                            <X size={40} strokeWidth={1} />
                        </motion.button>

                        {/* Expanded Image Container */}
                        <motion.div
                            initial={{ scale: 0.3, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.3, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full h-full max-w-[98vw] max-h-[92vh] select-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <NextImage
                                src="/images/armes-digital-passport-flow.jpeg"
                                alt="Digital Passport Flow Architecture Expanded"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 font-mono text-xs tracking-widest uppercase">
                            Click anywhere to minimize
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
}
