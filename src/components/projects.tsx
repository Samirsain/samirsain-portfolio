"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRightIcon, RocketLaunchIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Zennova AI",
        category: "AI Generation Platform",
        desc: "A premium visual generation platform that turns ideas into stunning content including art, music, and text-to-video.",
        tags: ["Next.js 15", "TypeScript", "AI APIs", "Tailwind CSS"],
        image: "/project-showcase/zennova.png",
        stats: { speed: "High-speed", models: "Bleeding-edge" },
        color: "from-blue-500/20 to-cyan-500/10",
        link: "https://zennova-ai.vercel.app/"
    },
    {
        title: "Zenviq Agency",
        category: "Digital Agency Solutions",
        desc: "Comprehensive digital agency solutions including AI chatbots, automation tools, and modern web application development.",
        tags: ["Next.js 14", "TypeScript", "AI Integration", "WordPress"],
        image: "/project-showcase/zenviq.png",
        stats: { support: "24/7", tools: "10+ Free" },
        color: "from-violet-500/20 to-purple-500/10",
        link: "https://zenviq.vercel.app/"
    },
    {
        title: "Credify",
        category: "Modern Fintech Platform",
        desc: "Fintech platform for effortless finance management featuring AI-driven insights, expense tracking, and card management.",
        tags: ["Next.js", "TypeScript", "AI driven", "Tailwind CSS"],
        image: "/project-showcase/credify.png",
        stats: { security: "Seamless", mode: "Dark Theme" },
        color: "from-emerald-500/20 to-green-500/10",
        link: "https://credify-fintech.vercel.app/"
    },
    {
        title: "Typewriters Voice",
        category: "Home Decor E-commerce",
        desc: "A trendy Shopify store selling affordable wall art and home decor accessories with a focus on modern aesthetics.",
        tags: ["Shopify", "Liquid", "E-commerce", "SEO"],
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200",
        stats: { catalog: "500+", growth: "20%" },
        color: "from-orange-500/20 to-rose-500/10",
        link: "https://typewritersvoice.com/"
    }
];

function SlideIndicator({
    index,
    total,
    progress,
}: {
    index: number;
    total: number;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
    const scaleX = useTransform(
        progress,
        [index / total, (index + 1) / total],
        [0, 1]
    );

    return (
        <motion.div
            className="h-1 rounded-full bg-primary/20 overflow-hidden"
            style={{ width: 40 }}
        >
            <motion.div
                className="h-full bg-primary rounded-full"
                style={{ scaleX, transformOrigin: "left" }}
            />
        </motion.div>
    );
}

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${(projects.length - 1) * 100}%`]
    );

    return (
        <section id="projects" className="relative bg-background">
            {/* Section Header */}
            <div className="container max-w-4xl mx-auto px-4 md:px-6 pt-16 pb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 glass"
                        >
                            <RocketLaunchIcon className="w-3 h-3 text-primary" />
                            <span className="mono-label !text-primary">
                                Featured Case Studies
                            </span>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-dense text-gradient mb-6 leading-none">
                            High Impact <br />
                            <span className="text-muted-foreground/40 italic">
                                Deployments
                            </span>
                        </h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link href="#">
                            <Button
                                variant="ghost"
                                className="rounded-full px-8 py-6 border border-border/50 hover:bg-muted font-bold uppercase tracking-widest text-[10px] group"
                            >
                                View Full Archive
                                <ArrowUpRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                ref={containerRef}
                style={{ height: `${projects.length * 100}vh` }}
            >
                <div className="sticky top-0 h-screen overflow-hidden">
                    {/* Progress Bar */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-[2px] bg-primary/80 z-50 origin-left"
                        style={{ scaleX: scrollYProgress }}
                    />

                    {/* Cards Track */}
                    <motion.div
                        className="flex h-full"
                        style={{ x }}
                    >
                        {projects.map((project, i) => (
                            <div
                                key={project.title}
                                className="min-w-full h-full flex items-center justify-center px-4 md:px-12 lg:px-20"
                            >
                                <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                                    {/* Project Image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="lg:col-span-7 relative"
                                    >
                                        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl group">
                                            {/* Gradient Overlay */}
                                            <div
                                                className={`absolute inset-0 z-10 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply`}
                                            />
                                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                            {/* Image */}
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={1200}
                                                height={750}
                                                loading="lazy"
                                                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                                            />

                                            {/* Category Badge */}
                                            <div className="absolute top-6 left-6 z-20">
                                                <div className="glass px-4 py-1.5 rounded-full border border-white/20 shadow-xl">
                                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                                                        {project.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Hover Actions */}
                                            <div className="absolute bottom-6 right-6 z-20 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                                <Button
                                                    size="icon"
                                                    className="rounded-full w-10 h-10 glass border border-white/20"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    className="rounded-full w-10 h-10 glass border border-white/20"
                                                >
                                                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Project Info */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.2,
                                        }}
                                        className="lg:col-span-5"
                                    >
                                        {/* Project Counter */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <span className="text-6xl font-black text-primary/10 leading-none">
                                                {String(i + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>
                                            <div className="h-px flex-1 bg-border/50" />
                                            <span className="mono-label">
                                                {String(i + 1).padStart(
                                                    2,
                                                    "0"
                                                )}{" "}
                                                / {String(projects.length).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-gradient">
                                            {project.title}
                                        </h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                            {project.desc}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-10">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-px bg-border/50 border border-border/50 rounded-2xl overflow-hidden">
                                            {Object.entries(
                                                project.stats
                                            ).map(([label, value]) => (
                                                <div
                                                    key={label}
                                                    className="bg-background/80 p-5 flex flex-col gap-1"
                                                >
                                                    <p className="mono-label !text-muted-foreground/60">
                                                        {label}
                                                    </p>
                                                    <p className="text-xl font-black tracking-tight">
                                                        {value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                        {projects.map((project, i) => (
                            <SlideIndicator
                                key={project.title}
                                index={i}
                                total={projects.length}
                                progress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
