"use client";

import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { Database, Zap, Shield, Cpu } from "lucide-react";

interface WrapperStrategyProps {
    dict: Dictionary;
}

export default function WrapperStrategy({ dict }: WrapperStrategyProps) {
    const { deploymentModel } = dict;
    const { wrapperStrategy } = deploymentModel;

    return (
        <SectionWrapper id="wrapper-strategy" dark className="bg-[#050505] overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6"
                    >
                        {wrapperStrategy.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-accent text-xl font-medium italic mb-8"
                    >
                        {wrapperStrategy.subtitle}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-400 text-lg max-w-3xl mx-auto leading-relaxed"
                    >
                        {wrapperStrategy.description}
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square max-w-lg mx-auto w-full flex items-center justify-center p-8 bg-[#0A0A0A] rounded-[40px] border border-white/5 shadow-2xl overflow-hidden group"
                    >
                        {/* Animated Grid Lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

                        {/* The "Wrapper" Circle */}
                        <div className="relative w-full h-full border-2 border-dashed border-accent/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent rounded-full blur-sm animate-pulse" />
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary rounded-full blur-sm animate-pulse" />
                        </div>

                        {/* Central Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-48 h-48 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl p-[1px]">
                                <div className="w-full h-full bg-[#0D0D0D] rounded-3xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                                    <Cpu className="w-12 h-12 text-accent mb-4" />
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">Intelligent Wrapper</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Legacy Data Points */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    x: [0, i % 2 === 0 ? 10 : -10, 0],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    delay: i * 0.5
                                }}
                                className="absolute p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md"
                                style={{
                                    top: `${20 + (i * 12)}%`,
                                    left: `${10 + (i * 15)}%`,
                                    zIndex: 0
                                }}
                            >
                                <Database className="w-4 h-4 text-neutral-500" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        {wrapperStrategy.features.map((feature: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
                            >
                                <div className="flex gap-6 items-start">
                                    <div className={`p-4 rounded-2xl ${i === 0 ? "bg-accent/10" : "bg-secondary/10"} border ${i === 0 ? "border-accent/20" : "border-secondary/20"}`}>
                                        {i === 0 ? <Zap className="w-6 h-6 text-accent" /> : <Shield className="w-6 h-6 text-secondary" />}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-neutral-400 leading-relaxed font-light">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
