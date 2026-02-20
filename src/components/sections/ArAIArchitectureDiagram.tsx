"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";
import {
    Database, Server, Share2, Network, Cpu, Lightbulb,
    Settings, Bot, Zap, Globe, Lock, Shield, Layers, Code, Play
} from "lucide-react";

const pillars = [
    {
        id: "ingestion",
        title: "Ingestion & Memory",
        color: "from-cyan-500/20 to-blue-600/20",
        borderColor: "border-cyan-500/30",
        glowColor: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
        iconColor: "text-cyan-400",
        sections: [
            {
                title: "Data Sources",
                items: ["S3, Kafka, PostgreSQL, etc.", "Third-Party APIs", "External Data Sources"]
            },
            {
                title: "Data Lakehouse",
                items: [
                    "BRONZE / SILVER / GOLD",
                    "Apache Atlas & Delta Lake",
                    "Apache Hudi & Spark",
                    "Presto",
                    "dbt Transformations"
                ]
            }
        ]
    },
    {
        id: "orchestration",
        title: "Orchestration",
        color: "from-emerald-500/20 to-green-600/20",
        borderColor: "border-emerald-500/30",
        glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
        iconColor: "text-emerald-400",
        sections: [
            {
                title: "Workflow Orchestrator",
                items: ["Task Routing", "Event processing", "State management"]
            },
            {
                title: "LangGraph Agent Orchestration",
                items: [
                    "Agent Registry",
                    "Shared state management",
                    "MCP (Model Context Protocol)"
                ]
            }
        ]
    },
    {
        id: "cognition",
        title: "Cognition",
        color: "from-purple-500/20 to-fuchsia-600/20",
        borderColor: "border-purple-500/30",
        glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
        iconColor: "text-purple-400",
        sections: [
            {
                title: "Advance Reasoning Layer",
                items: [
                    "Knowledge graph",
                    "Contextual Reasoning Engine",
                    "Semantic analysis",
                    "Probabilistic Inference engine",
                    "Causal Reasoning module"
                ]
            },
            {
                title: "External Models",
                items: ["Qwen2.5", "DeepSeek", "Google Gemini", "ChatGPT (OpenAI)"]
            }
        ]
    },
    {
        id: "action",
        title: "Action",
        color: "from-orange-500/20 to-amber-600/20",
        borderColor: "border-orange-500/30",
        glowColor: "shadow-[0_0_30px_rgba(249,115,22,0.15)]",
        iconColor: "text-orange-400",
        sections: [
            {
                title: "Agent Execution Layer",
                items: [
                    "LLM Agents",
                    "Specialized Agents",
                    "Task-specific Executors"
                ]
            },
            {
                title: "System Interfaces",
                items: [
                    "API Calls & Webhooks",
                    "Database Operations",
                    "UI Updates"
                ]
            }
        ]
    }
];

// Helper to render decorative connection lines
const ConnectionLine = ({ className }: { className?: string }) => (
    <div className={`hidden lg:block absolute h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent ${className}`} />
);

export default function ArAIArchitectureDiagram() {
    return (
        <div className="w-full relative py-6 md:py-8 px-4 md:px-8 font-mono bg-[#050505] overflow-hidden rounded-3xl border border-white/5">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col items-center">
                <div className="mb-4 text-center">
                    <h2 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">ArAI SYSTEM ARCHITECTURE</h2>
                    <p className="text-neutral-400 text-xs md:text-base mb-6 max-w-3xl mx-auto">Advanced AI-Driven Enterprise Platform integrating discrete data silos into a unified Cognitive Engine for real-time factory intelligence.</p>

                    {/* Visual Representative Image */}
                    <div className="relative w-full max-w-4xl mx-auto aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,209,255,0.1)] bg-[#050505] group mb-6">
                        <NextImage
                            src="/images/arai-architecture-v2.jpeg"
                            alt="ArAI Architecture Visualization"
                            fill
                            className="object-contain"
                            priority
                        />
                        {/* Subtle inner shadow overlay */}
                        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                    </div>
                </div>

                <div className="w-full mb-4">
                    <h3 className="text-accent text-sm md:text-base font-bold tracking-[0.2em] uppercase text-center xl:text-left">Architecture Layer Details</h3>
                    <div className="h-[1px] w-full max-w-[200px] mx-auto xl:mx-0 bg-accent/30 mt-3 hidden xl:block" />
                </div>

                {/* Interactive Legend / Code-Based Pillars */}
                <div className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-4 lg:gap-2 xl:gap-8 relative min-h-[500px]">

                    {/* Horizontal connection lines for desktop */}
                    <ConnectionLine className="top-1/3 left-1/4 right-1/4 z-0" />
                    <ConnectionLine className="top-2/3 left-1/4 right-1/4 z-0" />

                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`flex-1 flex flex-col relative group`}
                        >
                            {/* Pillar Container */}
                            <div className={`h-full bg-gradient-to-b ${pillar.color} border ${pillar.borderColor} ${pillar.glowColor} rounded-2xl p-4 xl:p-5 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] z-10 relative overflow-hidden flex flex-col`}>

                                {/* Diagonal subtle lines inside pillar */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_20px)] pointer-events-none"></div>

                                <div className="text-center mb-3 relative z-10">
                                    <h3 className={`text-base md:text-sm lg:text-base font-bold tracking-widest uppercase ${pillar.iconColor} drop-shadow-md`}>
                                        {pillar.title}
                                    </h3>
                                    <div className={`h-1 w-8 mx-auto mt-2 rounded-full bg-current opacity-50 ${pillar.iconColor}`} />
                                </div>

                                <div className="flex-1 flex flex-col gap-3 relative z-10">
                                    {pillar.sections.map((section, sIdx) => (
                                        <motion.div
                                            key={sIdx}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 + (index * 0.1) + (sIdx * 0.1) }}
                                            className="bg-black/40 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-colors"
                                        >
                                            <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                                                <Layers className={`w-4 h-4 ${pillar.iconColor}`} />
                                                {section.title}
                                            </h4>
                                            <ul className="space-y-2">
                                                {section.items.map((item, iIdx) => (
                                                    <li key={iIdx} className="flex items-start text-xs md:text-sm text-neutral-300 gap-2">
                                                        <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 bg-current ${pillar.iconColor}`} />
                                                        <span className="leading-snug">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Animated Data Particles */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${pillar.iconColor} overflow-hidden`}>
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: index * 0.5 }}
                                        className="w-1/2 h-full bg-white blur-[2px]"
                                    />
                                </div>
                            </div>

                            {/* Connecting arrows between pillars (Desktop) */}
                            {index < pillars.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-[1.8rem] xl:-right-[2.5rem] w-8 xl:w-12 items-center justify-center z-20 text-white/30">
                                    <motion.div
                                        animate={{ x: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
