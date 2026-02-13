"use client";

import { motion } from "framer-motion";
import { CpuChipIcon, BoltIcon, ShieldCheckIcon, ArrowPathIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export function About() {
    return (
        <section id="about" className="py-20 border-b border-border bg-background relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1.5px,transparent_0)] bg-[size:32px_32px] pointer-events-none" />

            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span className="mono-label !text-primary transform translate-y-[0.5px]">About Me</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-dense mb-6 text-gradient leading-[1.1]">
                            Crafting Digital<br />
                            <span className="text-muted-foreground/40 italic">Excellence</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                            <p>
                                I&apos;m <strong className="text-foreground">Samir Sain</strong>, a Senior Full Stack Developer & SaaS Architect with <strong className="text-foreground">5+ years</strong> of experience building high-performance web applications. A self-taught programmer driven by the pursuit of scalable, elegant code that delivers real business impact.
                            </p>
                            <p>
                                As a freelancer and founder of <strong className="text-foreground">Zenviq</strong>, I turn complex requirements into production-grade digital products — from MVPs to global-scale SaaS platforms. Every project is built with sub-second performance, clean architecture, and premium design at its core.
                            </p>
                            <p>
                                My stack revolves around <strong className="text-foreground">Next.js, TypeScript, and AI-driven systems</strong>. I don&apos;t just build products — I engineer experiences that set new standards for reliability and design.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-3">
                            {[
                                { icon: BoltIcon, label: "Experience", value: "5+ Years" },
                                { icon: ShieldCheckIcon, label: "Education", value: "BCA & Full Stack" },
                                { icon: CpuChipIcon, label: "Products", value: "20+ Shipped" },
                                { icon: ArrowPathIcon, label: "Agency", value: "Zenviq Founder" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass-card p-5 rounded-[1.5rem] border-border/40"
                                >
                                    <item.icon className="w-5 h-5 text-primary mb-3" />
                                    <p className="mono-label !text-foreground font-bold mb-0.5">{item.label}</p>
                                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 w-full max-w-xl"
                    >
                        <div className="relative group p-1 bg-gradient-to-br from-primary/20 via-border to-transparent rounded-[2.5rem] shadow-2xl">
                            <div className="relative bg-background rounded-[2.4rem] overflow-hidden p-8 border border-white/5 shadow-inner">
                                {/* Glass Overlay */}
                                <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />

                                <div className="relative font-mono text-xs leading-relaxed space-y-4">
                                    <div className="flex items-center gap-2 mb-8 border-b border-border/50 pb-4">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-50" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-50" />
                                        </div>
                                        <div className="h-4 w-px bg-border/50 mx-2" />
                                        <span className="text-[10px] text-muted-foreground flex items-center gap-2">
                                            <CommandLineIcon className="w-3 h-3" />
                                            samirsain.ts
                                        </span>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-blue-400"><span className="text-purple-400">class</span> <span className="text-yellow-400">Engineer</span> {'{'}</p>
                                        <p className="pl-6 text-gray-400">readonly <span className="text-blue-400">name</span> = <span className="text-green-400">&apos;Samir Sain&apos;</span>;</p>
                                        <p className="pl-6 text-gray-400">readonly <span className="text-blue-400">focus</span> = [<span className="text-green-400">&apos;Architecture&apos;</span>, <span className="text-green-400">&apos;Design&apos;</span>];</p>
                                        <p className="pl-6 text-gray-400">
                                            <span className="text-purple-400">public</span> <span className="text-yellow-400">build</span>(vision: <span className="text-blue-400">Vision</span>) {'{'}
                                        </p>
                                        <p className="pl-12 text-gray-400">
                                            <span className="text-purple-400">return</span> <span className="text-purple-400">new</span> <span className="text-yellow-400">Product</span>({'{'}
                                        </p>
                                        <p className="pl-18 text-gray-400">scalability: <span className="text-orange-400">&apos;Sub-second&apos;</span>,</p>
                                        <p className="pl-18 text-gray-400">aesthetics: <span className="text-orange-400">&apos;Premium&apos;</span>,</p>
                                        <p className="pl-18 text-gray-400">reliability: <span className="text-orange-400">0.9999</span></p>
                                        <p className="pl-12 text-gray-400">{'}'});</p>
                                        <p className="pl-6 text-gray-400">{'}'}</p>
                                        <p className="text-blue-400">{'}'}</p>
                                    </div>

                                    <div className="pt-8 flex flex-col gap-2">
                                        <div className="flex items-center gap-3">
                                            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "95%" }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className="h-full bg-primary"
                                                />
                                            </div>
                                            <span className="text-[10px] mono-label">95%</span>
                                        </div>
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">System Health Optimized</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
