"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "David K.",
        role: "Engineer @ Raycast",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
        quote: "I've never seen such a robust API wrapped in such a beautiful interface. It handles our massive scale without breaking a sweat. Truly impressive work.",
        stars: 5,
    },
    {
        name: "Elena R.",
        role: "Product Designer @ Stripe",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
        quote: "The attention to detail is unparalleled. It feels like the tool was designed specifically for my workflow. The animation primitives are buttery smooth.",
        stars: 5,
    },
    {
        name: "Marcus J.",
        role: "Frontend Lead @ Vercel",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
        quote: "Simply the best component library I've used in years. The customizability allows us to maintain our brand identity without fighting the framework.",
        stars: 4,
    },
    {
        name: "Sarah L.",
        role: "CTO @ Linear",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        quote: "We reduced our shipping time by 40% after integrating this system. The documentation is crystal clear and the community support is fantastic.",
        stars: 5,
    },
];

function StarIcon({ filled }: { filled: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={filled ? "currentColor" : "none"}
            stroke={filled ? "currentColor" : "currentColor"}
            strokeWidth={filled ? "0" : "1.5"}
            className={`w-3.5 h-3.5 ${filled ? "text-yellow-500" : "text-muted-foreground/30"}`}
        >
            <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"
            />
        </svg>
    );
}

function VerifiedBadge() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 text-muted-foreground/50"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="9 11 12 14 22 4" />
        </svg>
    );
}

function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
    return (
        <div className="w-[320px] md:w-[360px] shrink-0 p-6 rounded-[24px] border border-border bg-card/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group/card shadow-sm">
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border border-border object-cover bg-muted"
                    />
                    <div>
                        <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                        <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">{item.role}</p>
                    </div>
                </div>
                <VerifiedBadge />
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground font-medium mb-6">
                &ldquo;{item.quote}&rdquo;
            </p>

            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < item.stars} />
                ))}
            </div>
        </div>
    );
}

export function Testimonials() {
    // Triple the items for a really long seamless scroll
    const allItems = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="relative py-12 w-full overflow-hidden border-y border-border/50 bg-background/50">
            {/* Background Ambient Glows - Subtle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Background Masking Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex overflow-hidden">
                <motion.div
                    className="flex gap-5 px-2.5"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        duration: 40, // Slower for better readability
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {allItems.map((item, index) => (
                        <TestimonialCard key={`${item.name}-${index}`} item={item} />
                    ))}
                </motion.div>
            </div>

            {/* Status Label to match website structural style */}
            <div className="mt-8 text-center">
                <span className="mono-label !text-[9px] opacity-40">Trusted by Global Engineering Teams</span>
            </div>
        </section>
    );
}
