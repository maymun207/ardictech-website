"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface LayerArMESProps {
    dict: Dictionary;
}

export default function LayerArMES({ dict }: LayerArMESProps) {
    const { armes } = dict.architectureDetails;

    return (
        <SectionWrapper id="layer-armes" dark className="bg-[#020202] !py-32 overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Image Content - Swapped to Left for alternating layout */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative lg:order-1 order-2"
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

                        {/* Path visualization decoration */}
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 opacity-20">
                            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10C10 50 190 50 190 90C190 130 10 130 10 170" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>
                        </div>
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
        </SectionWrapper>
    );
}
