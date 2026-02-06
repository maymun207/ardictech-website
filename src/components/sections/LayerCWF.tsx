"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface LayerCWFProps {
    dict: Dictionary;
}

export default function LayerCWF({ dict }: LayerCWFProps) {
    const { cwf } = dict.architectureDetails;

    return (
        <SectionWrapper id="layer-cwf" dark className="bg-black py-24 sm:py-32 overflow-hidden relative">
            {/* Background radial glow */}
            <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />

            {/* Standardized Header to match Layer 1, 2, 3 */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10 mb-16 lg:mb-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                            Layer 4: Agent Native Eco-System
                        </span>
                    </div>

                    <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] max-w-4xl mx-auto">
                        {cwf.title}
                    </h2>

                    <p className="text-xl lg:text-2xl text-accent/80 font-medium italic tracking-wide mb-12">
                        {cwf.tagline}
                    </p>
                </motion.div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
                {/* Image Container with Zoom */}
                <div className="relative w-full aspect-[21/9] rounded-[48px] overflow-hidden border border-white/[0.08] shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-[#050505] group">
                    <Image
                        src="/images/AGENT NATIVE ECO-SYSTEM black .png"
                        alt="Agent Native Eco-System Diagram"
                        fill
                        className="object-cover opacity-90 transition-transform duration-1000 scale-[1.1] group-hover:scale-[1.15]"
                        priority
                    />

                    {/* Subtle overlay gradients */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>

                {/* Ecosystem Description below the image */}
                <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xl lg:text-3xl text-white font-bold leading-tight mb-8">
                            {cwf.description}
                        </p>
                        <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
                    </motion.div>
                </div>
            </div>

            {/* Decorative background grid elements */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </SectionWrapper>
    );
}
