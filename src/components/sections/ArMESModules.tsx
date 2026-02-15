"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Info, X } from "lucide-react";

interface ArMESModulesProps {
    modules: {
        name: string;
        description: string;
    }[];
}

export default function ArMESModules({ modules }: ArMESModulesProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-12 md:py-24 relative z-10">
            <div className="text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    11 Interconnected Modules
                </h3>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                    A comprehensive suite giving you power to manage every step of your production lifecycle.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 md:gap-y-24 gap-x-4 max-w-6xl mx-auto px-4 relative justify-items-center">
                {modules.map((module, i) => (
                    <div key={i} className={cn(
                        "relative transition-transform duration-500",
                        // Base / Small mobile (2 columns)
                        "max-md:[&:nth-child(2n)]:translate-y-12",
                        // Tablet (3 columns)
                        "md:max-lg:[&:nth-child(3n+2)]:translate-y-12",
                        // Desktop (4 columns)
                        "lg:[&:nth-child(4n+2)]:translate-y-12",
                        "lg:[&:nth-child(4n+4)]:translate-y-12"
                    )}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, zIndex: 50 }}
                            onHoverStart={() => setHoveredIndex(i)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            onClick={() => setExpandedIndex(i)}
                            className={cn(
                                "relative w-40 h-44 md:w-48 md:h-52 flex flex-col items-center justify-start pt-10 md:pt-14 p-4 text-center group cursor-pointer",
                                // Honeycomb shape using clip-path
                                "bg-white/[0.03] backdrop-blur-sm border-0",
                                // Custom polygon clip-path for hexagon
                                "clip-hexagon shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                            )}
                            style={{
                                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            }}
                        >
                            {/* Border Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                            {/* Active Border Effect */}
                            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300" />

                            <div className="absolute inset-[1px] bg-[#0A0A0A] -z-10" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75% , 50% 100%, 0% 75%, 0% 25%)" }} />

                            {/* Fixed Position Number Circle */}
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-xs font-bold border border-secondary/20 mb-3 group-hover:bg-secondary group-hover:text-black transition-all duration-300 shrink-0">
                                {i + 1}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 w-full px-2">
                                <span className="text-sm md:text-base font-medium text-neutral-200 group-hover:text-white transition-colors leading-tight line-clamp-3">
                                    {module.name}
                                </span>
                            </div>

                            {/* Click to Expand Label */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                                <span className="text-secondary text-[8px] font-bold tracking-widest uppercase">Click to Expand</span>
                            </div>
                        </motion.div>

                        {/* Hover Card */}
                        <AnimatePresence>
                            {hoveredIndex === i && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-72 p-5 bg-[#0D0D0D] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100] pointer-events-none backdrop-blur-xl"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                            <Info size={16} />
                                        </div>
                                        <h4 className="text-white font-bold text-sm">{module.name}</h4>
                                    </div>
                                    <p className="text-neutral-400 text-[11px] leading-relaxed">
                                        {module.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D0D0D] border-r border-b border-white/10 rotate-45" />

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-secondary/5 rounded-2xl -z-10 blur-xl" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Expanded Overlay */}
            <AnimatePresence>
                {expandedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
                        onClick={() => setExpandedIndex(null)}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setExpandedIndex(null);
                            }}
                        >
                            <X size={40} strokeWidth={1} />
                        </motion.button>

                        {/* Expanded Content Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative max-w-3xl w-full bg-[#0D0D0D]/50 border border-white/10 p-8 md:p-16 rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.8)] backdrop-blur-md select-none"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-10 border border-secondary/20 shadow-[0_0_30px_rgba(0,209,255,0.1)]">
                                    <span className="text-3xl font-bold">{expandedIndex + 1}</span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                    {modules[expandedIndex].name}
                                </h3>

                                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mb-12 opacity-50" />

                                <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
                                    {modules[expandedIndex].description}
                                </p>
                            </div>

                            {/* Decorative background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 rounded-full blur-[100px] -z-10" />
                        </motion.div>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 font-mono text-xs tracking-widest uppercase">
                            Click anywhere to minimize
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Background Glow */}
            <div className="absolute inset-0 -z-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}
