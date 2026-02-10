"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface PlatformArchitectureProps {
    dict: Dictionary;
}

export default function PlatformArchitecture({ dict }: PlatformArchitectureProps) {
    const { platform } = dict;

    return (
        <SectionWrapper id="platform-architecture" dark className="bg-black !py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                            {platform.title}
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
                            {platform.subtitle}
                        </p>
                        <div className="h-1 w-20 bg-accent rounded-full mx-auto mt-8" />
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full scale-75" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="relative z-10 mx-auto max-w-5xl"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
                            <Image
                                src="/images/platform-architecture-v2.png"
                                alt="ARDICTECH 4-Layer Manufacturing Intelligence Architecture"
                                fill
                                className="object-contain p-8 md:p-12 hover:scale-[1.02] transition-transform duration-700"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Grid of Layer descriptions below the image */}
                <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {platform.layers.map((layer, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 transition-all duration-500"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase">
                                    {layer.number}
                                </span>
                                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:scale-110 transition-transform">
                                    <div className="w-4 h-4 text-accent" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                {layer.name}
                            </h3>
                            <p className="text-xs text-accent/80 font-medium mb-4 uppercase tracking-wider">
                                {layer.metaphor}
                            </p>
                            <p className="text-neutral-400 text-sm font-light leading-relaxed">
                                {layer.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
