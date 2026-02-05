"use client";

import NextImage from "next/image";
import type { Dictionary } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface DeploymentModelProps {
    dict: Dictionary;
}

export default function DeploymentModel({ dict }: DeploymentModelProps) {
    const { deploymentModel } = dict;

    return (
        <SectionWrapper id="deployment-model" dark className="bg-black !py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl relative">
                {/* Background Glows removed for pure black aesthetic */}

                {/* Title Section */}
                <div className="mb-24 text-center">
                    <h2 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-white tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-tight">
                        {deploymentModel.title}
                    </h2>
                    <p className="text-xl text-neutral-400 font-light mb-8 tracking-wider uppercase">
                        {deploymentModel.subtitle}
                    </p>
                    <div className="mx-auto h-[1px] w-24 bg-accent" />
                </div>

                <div className="relative grid gap-0 md:grid-cols-2 bg-black overflow-hidden">
                    {/* Vertical Divider removed for pure black aesthetic */}

                    {/* Left Path: Existing Stack */}
                    <div className="group p-12 md:p-20 transition-all duration-700 hover:bg-white/[0.01] flex flex-col bg-black">
                        <div className="relative z-10 flex-1 flex flex-col">
                            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] mb-8 w-fit">
                                Path A
                            </span>

                            {/* Grouped Header & Description for Perfect Alignment */}
                            <div className="md:min-h-[16rem] lg:min-h-[14rem] flex flex-col">
                                <h3 className="mb-6 font-heading text-4xl font-bold text-white group-hover:text-accent transition-colors duration-500">
                                    {deploymentModel.existingStack.title}
                                </h3>
                                <p className="mb-12 text-xl leading-relaxed text-neutral-400 font-light max-w-md">
                                    {deploymentModel.existingStack.description}
                                </p>
                            </div>

                            <div className="space-y-10 flex-1 flex flex-col">
                                <div className="flex-1">
                                    <h4 className="mb-6 font-heading text-sm font-bold tracking-[0.2em] text-accent/80">
                                        {deploymentModel.existingStack.subtitle}
                                    </h4>
                                    <ul className="space-y-5">
                                        {deploymentModel.existingStack.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-4 text-neutral-300 group/item">
                                                <div className="h-px w-4 bg-accent/30 group-hover/item:w-8 transition-all duration-500" />
                                                <span className="text-lg font-light">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-10 mt-auto">
                                    <p className="text-sm italic text-neutral-500 leading-relaxed max-w-sm">
                                        {deploymentModel.existingStack.idealFor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Path: Clean State */}
                    <div className="group p-12 md:p-20 transition-all duration-700 hover:bg-white/[0.01] flex flex-col bg-black">
                        <div className="relative z-10 flex-1 flex flex-col">
                            <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-bold tracking-[0.2em] mb-8 w-fit">
                                Path B
                            </span>

                            {/* Grouped Header & Description for Perfect Alignment */}
                            <div className="md:min-h-[16rem] lg:min-h-[14rem] flex flex-col">
                                <h3 className="mb-6 font-heading text-4xl font-bold text-white group-hover:text-secondary transition-colors duration-500">
                                    {deploymentModel.cleanState.title}
                                </h3>
                                <p className="mb-12 text-xl leading-relaxed text-neutral-400 font-light max-w-md">
                                    {deploymentModel.cleanState.description}
                                </p>
                            </div>

                            <div className="space-y-10 flex-1 flex flex-col">
                                <div className="flex-1">
                                    <h4 className="mb-6 font-heading text-sm font-bold tracking-[0.2em] text-secondary/80">
                                        {deploymentModel.cleanState.subtitle}
                                    </h4>
                                    <ul className="space-y-5">
                                        {deploymentModel.cleanState.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-4 text-neutral-300 group/item">
                                                <div className="h-px w-4 bg-secondary/30 group-hover/item:w-8 transition-all duration-500" />
                                                <span className="text-lg font-light">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-10 mt-auto">
                                    <p className="text-sm italic text-neutral-500 leading-relaxed max-w-sm">
                                        {deploymentModel.cleanState.idealFor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Integrated Approach Footer */}
                <div className="mt-32 relative">
                    <div className="flex flex-col items-center py-20 px-8 bg-black">
                        <h4 className="mb-16 font-heading text-sm font-bold tracking-[0.5em] text-accent text-center">
                            {deploymentModel.ourApproach.title}
                        </h4>
                        {/* Architecture Image Integration - Moved above items for better flow */}
                        <div className="relative w-full max-w-4xl mx-auto mb-20 bg-black">
                            <div className="relative overflow-hidden bg-black">
                                <NextImage
                                    src="/images/platform-architecture.jpg"
                                    alt="Ardictech 4-Layer Architecture"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-y-12 gap-x-16 max-w-5xl mb-20">
                            {deploymentModel.ourApproach.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-6 group">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-accent/20 text-accent text-xs font-bold group-hover:bg-accent group-hover:text-black transition-all duration-500">
                                        {i + 1}
                                    </span>
                                    <span className="text-xl italic font-light text-neutral-200 group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
