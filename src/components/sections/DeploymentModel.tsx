"use client";

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
                {/* Background Glows */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

                {/* Title Section */}
                <div className="mb-24 text-center">
                    <h2 className="font-heading text-4xl font-bold sm:text-5xl lg:text-6xl text-white tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 uppercase leading-tight">
                        {deploymentModel.title}
                    </h2>
                    <div className="mx-auto h-[1px] w-24 bg-accent" />
                </div>

                <div className="relative grid gap-0 md:grid-cols-2 border border-white/5 rounded-[3rem] bg-neutral-900/20 backdrop-blur-3xl overflow-hidden">
                    {/* Vertical Divider Line with Pulse Node */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full blur-[4px] animate-pulse" />
                    </div>

                    {/* Left Path: Existing Stack */}
                    <div className="group p-12 md:p-20 transition-all duration-700 hover:bg-accent/[0.02] flex flex-col">
                        <div className="relative z-10 flex-1 flex flex-col">
                            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 w-fit">
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
                                    <h4 className="mb-6 font-heading text-sm font-bold tracking-[0.2em] text-accent/80 uppercase">
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

                                <div className="pt-10 border-t border-white/5 mt-auto">
                                    <p className="text-sm italic text-neutral-500 leading-relaxed max-w-sm">
                                        {deploymentModel.existingStack.idealFor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Path: Clean State */}
                    <div className="group p-12 md:p-20 transition-all duration-700 hover:bg-secondary/[0.02] border-t md:border-t-0 md:border-l border-white/5 flex flex-col">
                        <div className="relative z-10 flex-1 flex flex-col">
                            <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-8 w-fit">
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
                                    <h4 className="mb-6 font-heading text-sm font-bold tracking-[0.2em] text-secondary/80 uppercase">
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

                                <div className="pt-10 border-t border-white/5 mt-auto">
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
                    <div className="absolute inset-0 bg-accent/5 blur-[80px] rounded-full -z-10" />
                    <div className="flex flex-col items-center py-20 px-8 rounded-[3rem] border border-white/5 bg-neutral-900/40 backdrop-blur-2xl">
                        <h4 className="mb-16 font-heading text-sm font-bold tracking-[0.5em] text-accent uppercase text-center">
                            {deploymentModel.ourApproach.title}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-y-12 gap-x-16 max-w-5xl">
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
