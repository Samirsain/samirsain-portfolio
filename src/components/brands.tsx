"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Wrench,
    Globe,
    ShoppingCart,
    GraduationCap,
    Code2,
    Layers
} from "lucide-react";

const brands = [
    { name: "GitAGPT", icon: Code2, type: "AI Developer Tool" },
    { name: "FixSwift", icon: Wrench, type: "Repair Management System" },
    { name: "Nexus Creations", icon: Globe, type: "Agency Website" },
    { name: "ShremaX Industries", icon: ShoppingCart, type: "E-commerce" },
    { name: "Nishulk Shikshapathshala", icon: GraduationCap, type: "Online School" },
    { name: "Zenviq", icon: Layers, type: "Digital Agency" }, // Added for variety
    { name: "Credify", icon: Cpu, type: "Fintech Platform" }, // Added for variety
];

export function Brands() {
    return (
        <section className="w-full bg-background border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="text-center mb-10">
                    <p className="text-sm font-bold text-muted-foreground/70 tracking-[0.2em] uppercase">
                        Trusted by Builders & Brands
                    </p>
                </div>

                <div className="relative w-full overflow-hidden select-none group">
                    {/* Gradient Fade Effects */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

                    {/* Marquee Track */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                            className="flex gap-12 md:gap-20 items-center min-w-max px-4"
                        >
                            {[...brands, ...brands].map((brand, i) => (
                                <div
                                    key={`${brand.name}-${i}`}
                                    className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group/brand"
                                >
                                    <div className="p-2 rounded-lg bg-muted/50 group-hover/brand:bg-primary/10 transition-colors">
                                        <brand.icon className="w-6 h-6 md:w-8 md:h-8 group-hover/brand:text-primary transition-colors" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg md:text-xl font-bold tracking-tight text-foreground whitespace-nowrap">
                                            {brand.name}
                                        </span>
                                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60 hidden md:block">
                                            {brand.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
