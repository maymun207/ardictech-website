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
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header matching the Layer style */}
                <div className="text-center relative z-10 mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <span className="px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase">
                                Conversational Interface
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                            CWF: Chat With Your Factory
                        </h2>

                        <p className="text-xl lg:text-2xl text-accent/80 font-medium italic tracking-wide max-w-4xl mx-auto">
                            {cwf.tagline}
                        </p>
                    </motion.div>
                </div>

                {/* Main Visual Content */}
                <div className="relative mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] bg-[#050505] group"
                    >
                        <div className="aspect-[16/8.5] relative">
                            <Image
                                src="/images/cwf page image.png"
                                alt="CWF: Chat With Your Factory Interface"
                                fill
                                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-[1.02]"
                                priority
                            />
                        </div>

                        {/* Subtle bottom gradient overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Floating accents */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-[60px]" />
                </div>

                {/* Features description */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {cwf.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/40 transition-all duration-500 text-center"
                        >
                            <h3 className="text-white font-bold text-lg">{feature}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
