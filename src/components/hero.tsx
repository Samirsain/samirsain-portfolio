"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon, CommandLineIcon, GlobeAltIcon, CpuChipIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
};

export function Hero() {
    const { scrollY } = useScroll();
    const spotlightX = useTransform(scrollY, [0, 800], [0, 300]);
    const spotlightY = useTransform(scrollY, [0, 800], [-100, 200]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-30" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Cinematic Spotlight */}
            <motion.div
                initial={{ x: -600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    x: spotlightX,
                    y: spotlightY,
                    background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
                    mixBlendMode: "soft-light" as const,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
            />

            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8 glass"
                        >
                            <SparklesIcon className="w-3 h-3 text-primary animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Founder & Lead Developer @ Zenviq</span>
                            <div className="h-3 w-px bg-primary/20" />
                            <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">v5.0.0</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 text-dense text-gradient"
                        >
                            Engineering <br />
                            <span className="text-muted-foreground/40 italic">Modern</span> Solutions
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            I am <span className="text-foreground font-black italic">Samir Sain</span>, a passionate self-taught coder with 5+ years of hands-on experience in building modern digital solutions and meaningful digital experiences.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
                        >
                            <Button size="lg" className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px] bg-primary text-background hover:opacity-90 transition-all shadow-2xl shadow-primary/20 w-full sm:w-auto">
                                Explore Projects
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-[10px] border-border hover:bg-muted transition-all glass w-full sm:w-auto">
                                Documentation
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 relative"
                    >
                        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto group">
                            {/* Profile Image with Glassy Stack */}
                            <div className="absolute -inset-10 border border-primary/10 rounded-full pointer-events-none animate-spin-slow opacity-20" />
                            <div className="absolute -inset-4 border border-border/50 rounded-full pointer-events-none group-hover:border-primary/50 transition-all duration-700 glass" />

                            <div className="relative w-full h-full rounded-full overflow-hidden bg-muted border-4 border-background shadow-2xl transition-all duration-700">
                                <Image
                                    src="/samir-sain.jpg"
                                    alt="Samir Sain"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-top scale-[1.1] group-hover:scale-125 transition-transform duration-700 brightness-110 grayscale-[30%] group-hover:grayscale-0"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 ml-0" />

                                {/* Status Badge */}
                                <div className="absolute top-6 right-6">
                                    <div className="glass px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Active</span>
                                    </div>
                                </div>

                                {/* Info Card Overlay */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-auto max-w-[85%]">
                                    <div className="glass-card px-6 py-3 rounded-full flex items-center gap-4 border-white/10 bg-black/40 backdrop-blur-md whitespace-nowrap">
                                        <div>
                                            <p className="text-xs font-bold text-white uppercase tracking-widest mb-0.5">Samir Sain</p>
                                            <p className="text-[10px] text-white/60 uppercase tracking-widest">System Architect</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                            <CommandLineIcon className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-xl border-white/10"
                            >
                                <CpuChipIcon className="w-8 h-8 text-primary" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -left-6 px-6 py-3 glass rounded-full flex items-center gap-3 shadow-xl border-white/10"
                            >
                                <GlobeAltIcon className="w-5 h-5 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Global Reach</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Info Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { icon: CommandLineIcon, title: "Engineered Systems", desc: "Building core architecture that scales with your growth." },
                        { icon: SparklesIcon, title: "Premium Design", desc: "User interfaces that define the next generation of SaaS." },
                        { icon: CpuChipIcon, title: "Deep Optimization", desc: "Performance tuning at every layer of the digital stack." }
                    ].map((item, i) => (
                        <div
                            key={item.title}
                            className="glass-card p-8 rounded-[2rem] hover:bg-muted/10 transition-all duration-300 border-border/50 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-3">{item.title}</h2>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
