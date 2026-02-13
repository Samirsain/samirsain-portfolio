"use client";

import { motion, Variants } from "framer-motion";
import { WindowIcon, Square3Stack3DIcon, MagnifyingGlassIcon, ServerStackIcon, ShieldCheckIcon, GlobeAltIcon, CommandLineIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: WindowIcon,
        skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "TanStack"],
        bg: "bg-blue-500/5",
        text: "text-blue-500"
    },
    {
        title: "Backend & Systems",
        icon: ServerStackIcon,
        skills: ["Node.js & Bun", "Python & PHP", "Java", "MySQL & MongoDB", "Redis", "Git & Docker"],
        bg: "bg-green-500/5",
        text: "text-green-500"
    },
    {
        title: "Design & AI",
        icon: Square3Stack3DIcon,
        skills: ["Figma & Photoshop", "AI API Integration", "Next.js 15 Expert", "AI Content Tools", "UI/UX Architecture", "Web Scraping"],
        bg: "bg-purple-500/5",
        text: "text-purple-500"
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    }
};

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-muted/20 relative">
            <div className="container max-w-4xl mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 glass"
                    >
                        <CommandLineIcon className="w-3 h-3 text-primary" />
                        <span className="mono-label !text-primary">Technical Stack</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-dense text-gradient mb-6">
                        The Stack <br />
                        <span className="text-muted-foreground/40 italic">I Master</span>
                    </h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 md:p-10 rounded-[3rem] border-border/50 group"
                        >
                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110", category.bg)}>
                                <category.icon className={cn("w-7 h-7", category.text)} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-6">{category.title}</h3>
                            <ul className="space-y-4">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-3 group/item">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors" />
                                        <span className="text-sm font-medium text-muted-foreground group-hover/item:text-foreground transition-colors">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Marquee Section */}
                <div className="mt-20 pt-16 border-t border-border/50 overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    <div className="flex whitespace-nowrap animate-marquee-reverse">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-16 px-8">
                                {[
                                    "TypeScript", "JavaScript", "Python", "PHP", "Java",
                                    "Node.js", "Bun", "React", "Next.js", "Laravel",
                                    "MySQL", "MongoDB", "Redis", "Docker", "Figma",
                                    "Tailwind CSS", "Framer Motion", "TanStack", "shadcn/ui",
                                    "Photoshop", "AI API", "UI Architecture", "Web Scraping"
                                ].map((tool) => (
                                    <span key={tool} className="text-3xl font-black uppercase tracking-tighter text-muted-foreground/10 hover:text-primary/20 transition-colors cursor-default">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
