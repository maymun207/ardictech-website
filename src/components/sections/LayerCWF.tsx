"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { X } from "lucide-react";

interface LayerCWFProps {
    dict: Dictionary;
}

export default function LayerCWF({ dict }: LayerCWFProps) {
    const { cwf } = dict.architectureDetails;
    const [isExpanded, setIsExpanded] = useState(false);

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
                {/* Image Container with Zoom & Click to Expand (300%) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    onClick={() => setIsExpanded(true)}
                    className="relative w-full aspect-[21/9] rounded-[48px] overflow-hidden border border-white/[0.08] shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-[#050505] group cursor-zoom-in"
                >
                    <Image
                        src="/images/AGENT NATIVE ECO-SYSTEM black .png"
                        alt="Agent Native Eco-System Diagram"
                        fill
                        className="object-cover opacity-90 transition-transform duration-1000 scale-[1.1] group-hover:scale-[1.15]"
                        priority
                    />

                    {/* Interaction Label */}
                    <div className="absolute top-8 right-8 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Click to Expand (300%)</span>
                    </div>

                    {/* Subtle overlay gradients */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </motion.div>

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

            {/* Fullscreen Overlay (300% / Direct View) */}
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
                            className="relative w-full h-full max-w-[95vw] max-h-[85vh] select-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src="/images/AGENT NATIVE ECO-SYSTEM black .png"
                                alt="Agent Native Eco-System Diagram Expanded"
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

            {/* Decorative background grid elements */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </SectionWrapper>
    );
}
