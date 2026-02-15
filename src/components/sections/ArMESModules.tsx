"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ArMESModulesProps {
    modules: string[];
}

export default function ArMESModules({ modules }: ArMESModulesProps) {
    // Honeycomb layout configuration
    // We want a layout that looks like:
    //   1 2 3
    //  4 5 6 7
    //   8 9 10 11 (or similar)
    // Actually, user image had:
    //     1 
    //   10 2 
    //  9 7 3 
    // 11 8 5 4
    //     6 
    // But for responsiveness, a flex/grid approach with negative margins is safer.

    // We'll use a CSS Grid approach with offset rows for a true honeycomb effect
    // OR a flex wrap with negative margins.

    // Let's try a responsive flex-wrap with negative margins to interlock them.

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

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-6xl mx-auto px-4">
                {modules.map((module, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        className={cn(
                            "relative w-40 h-44 md:w-48 md:h-52 flex flex-col items-center justify-center p-4 text-center group cursor-pointer",
                            // Honeycomb shape using clip-path
                            "bg-white/[0.03] backdrop-blur-sm border-0",
                            // Custom polygon clip-path for hexagon
                            "clip-hexagon shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        )}
                        style={{
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                            marginTop: (i % 2 === 1) ? "2rem" : "0", // Stagger effect attempt 1
                        }}
                    >
                        {/* Border Gradient Overlay (simulated via inset shadow or another div) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                        {/* Active Border Effect */}
                        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-300" />

                        <div className="absolute inset-[1px] bg-[#0A0A0A] -z-10" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-xs font-bold border border-secondary/20 mb-2 group-hover:bg-secondary group-hover:text-black transition-colors">
                                {i + 1}
                            </div>
                            <span className="text-sm md:text-base font-medium text-neutral-200 group-hover:text-white transition-colors">
                                {module}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CSS for hexagon staggering if needed, but the margin approach is simpler for now */}
            <div className="absolute inset-0 -z-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}
