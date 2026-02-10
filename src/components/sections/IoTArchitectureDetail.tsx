"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

const sectors = [
    {
        id: 1,
        title: "Connectivity",
        subtitle: "Node / Things",
        image: "/images/iot-tour-sector-1.jpg",
    },
    {
        id: 2,
        title: "Edge",
        subtitle: "The Gateway",
        image: "/images/iot-tour-sector-2.jpg",
    },
    {
        id: 3,
        title: "Logic",
        subtitle: "Edge Logic",
        image: "/images/iot-tour-sector-3.jpg",
    },
    {
        id: 4,
        title: "Cloud",
        subtitle: "Integration",
        image: "/images/iot-tour-sector-4.jpg",
    },
];

export default function IoTArchitectureDetail() {
    const [activeSector, setActiveSector] = useState(sectors[0]);

    return (
        <div className="w-full h-full bg-black flex flex-col md:flex-row overflow-hidden select-none">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/10 bg-black/40 backdrop-blur-md z-10">
                <div className="p-8">
                    <h3 className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-12">
                        IoT-Ignite Technical Architecture
                    </h3>
                    <div className="space-y-4">
                        {sectors.map((sector) => (
                            <button
                                key={sector.id}
                                onMouseEnter={() => setActiveSector(sector)}
                                onClick={() => setActiveSector(sector)}
                                className={`w-full group relative flex flex-col items-start p-5 rounded-xl transition-all duration-500 border ${activeSector.id === sector.id
                                    ? "bg-accent/10 border-accent/40 shadow-[0_0_30px_rgba(0,209,255,0.1)]"
                                    : "bg-transparent border-transparent hover:bg-white/5"
                                    }`}
                            >
                                <span className={`text-[10px] font-mono mb-1 transition-colors ${activeSector.id === sector.id ? "text-accent" : "text-neutral-500"
                                    }`}>
                                    0{sector.id}
                                </span>
                                <span className={`text-sm font-bold tracking-wider transition-colors ${activeSector.id === sector.id ? "text-white" : "text-neutral-400 group-hover:text-neutral-200"
                                    }`}>
                                    {sector.subtitle}
                                </span>

                                {activeSector.id === sector.id && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full shadow-[0_0_15px_rgba(0,209,255,0.8)]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-auto p-8 opacity-40">
                    <p className="text-[9px] uppercase tracking-[0.2em] font-light leading-relaxed">
                        Hover or click a sector to explore the technical depth of the IoT Ignite stack.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow relative bg-black flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSector.id}
                        initial={{ opacity: 0, scale: 0.98, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 1.02, x: -20 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="relative w-full h-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5"
                    >
                        <NextImage
                            src={activeSector.image}
                            alt={activeSector.title}
                            fill
                            className="object-contain"
                            priority
                        />

                        {/* Overlay hint */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none opacity-60" />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
