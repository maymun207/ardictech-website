"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface CWFConversationProps {
    dict: Dictionary;
}

export default function CWFConversation({ dict }: CWFConversationProps) {
    const { cwf } = dict.architectureDetails;

    return (
        <SectionWrapper id="cwf-conversation" dark className="bg-[#020202] py-24 sm:py-32 overflow-hidden relative">
            {/* Dynamic background particles/glows matches Layer 3 */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] -z-10 animate-pulse" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Text Content - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                                LAYER 4: THE VOICE
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                            {cwf.title.split('|').map((line: string, i: number) => (
                                <span key={i} className="block">{line}</span>
                            ))}
                        </h2>

                        <p className="text-xl text-accent/80 font-medium mb-8 italic tracking-wide">
                            {cwf.tagline}
                        </p>

                        <p className="text-xl text-neutral-400 font-light leading-relaxed mb-12 max-w-2xl">
                            {cwf.description}
                        </p>

                        <div className="space-y-6">
                            {cwf.points.map((point: any, i: number) => (
                                <div key={i} className="relative pl-6">
                                    <div className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                                    <p className="text-lg leading-relaxed">
                                        <span className="text-white font-bold text-[#E879F9]">{point.title}:</span>{" "}
                                        <span className="text-neutral-300 font-light">{point.description}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Content - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1.1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative flex flex-col items-end"
                    >
                        {/* Tablet Image - Expand on Hover */}
                        <div className="relative w-[115%] max-w-none z-10 mt-16 -mr-8 lg:-mr-16 hover:z-[60] hover:scale-110 transition-all duration-500 cursor-zoom-in">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src="/images/cwf-conversation-v2.jpg"
                                    alt="CWF: Chat With Your Factory Interface"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Mobile Image - Expand on Hover */}
                        <div
                            className="relative w-[88%] -mt-12 -mr-12 z-20 rotate-12 hover:z-[60] hover:scale-110 transition-all duration-500 origin-center drop-shadow-2xl cursor-zoom-in"
                        >
                            <div className="aspect-[3/4] relative">
                                <Image
                                    src="/images/cwf-mobile.jpg"
                                    alt="CWF Mobile Interface"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px] -z-10" />
                        <div className="absolute top-1/2 -left-10 w-40 h-40 bg-[#E879F9]/10 rounded-full blur-[80px] -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-[60px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
