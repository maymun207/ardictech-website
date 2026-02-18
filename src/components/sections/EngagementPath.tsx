"use client";

import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight, Presentation, Wallet, Rocket, CheckCircle2 } from "lucide-react";

interface EngagementPathProps {
    dict: Dictionary;
}

export default function EngagementPath({ dict }: EngagementPathProps) {
    const { deploymentModel } = dict;
    const { engagementPath } = deploymentModel;
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const icons = [Presentation, Wallet, Rocket, CheckCircle2];
    const colors = ["text-accent", "text-secondary", "text-[#E879F9]", "text-green-400"];
    const glowColors = ["shadow-accent/40", "shadow-secondary/40", "shadow-[#E879F9]/40", "shadow-green-400/40"];

    return (
        <SectionWrapper id="engagement-path" dark className="bg-black relative overflow-hidden">
            {/* Background decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,209,255,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6"
                    >
                        {engagementPath.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-secondary text-xl font-bold tracking-[0.2em] uppercase mb-8"
                    >
                        {engagementPath.subtitle}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-400 text-lg max-w-4xl mx-auto leading-relaxed font-light"
                    >
                        {engagementPath.description}
                    </motion.p>
                </div>

                {/* Main Infographic Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-6xl mx-auto mb-20 bg-[#050505] rounded-[40px] border border-white/5 p-4 shadow-2xl group"
                >
                    <div className="relative aspect-[1200/540] rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                        <Image
                            src="/milestones.jpeg"
                            alt="De-risked Engagement Path Milestones"
                            fill
                            className="object-contain"
                            priority
                        />
                        {/* Overlay to bridge the gaps */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                {/* Interactive Hover Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {engagementPath.steps.map((step: any, i: number) => {
                        const Icon = icons[i];
                        const isHovered = hoveredIdx === i;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                onMouseEnter={() => setHoveredIdx(i)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                className={`relative p-8 rounded-[32px] border transition-all duration-500 cursor-default h-full flex flex-col ${isHovered
                                        ? `bg-white/[0.05] border-white/20 ${glowColors[i]} shadow-2xl scale-[1.02] z-20`
                                        : "bg-white/[0.02] border-white/5 z-10"
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${colors[i]}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-white/30 font-mono text-sm font-bold">0{i + 1}</span>
                                </div>

                                <h4 className={`text-xl font-bold text-white mb-2 transition-colors ${isHovered ? colors[i] : ""}`}>
                                    {step.title}
                                </h4>

                                <span className={`text-xs font-bold tracking-widest uppercase mb-4 ${colors[i]}`}>
                                    {step.duration}
                                </span>

                                <p className="text-neutral-400 text-sm leading-relaxed font-light flex-1">
                                    {step.description}
                                </p>

                                {/* Hover Detail Expansion */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-6 pt-6 border-t border-white/10"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full ${colors[i]} animate-pulse`} />
                                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Active Verification Step</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Standard CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 text-center"
                >
                    <Button
                        href="#contact"
                        variant="primary"
                        size="lg"
                    >
                        Book an Executive Workshop
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
