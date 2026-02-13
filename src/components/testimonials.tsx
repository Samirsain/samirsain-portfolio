"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Managing Director, Zen Solutions",
        quote: "Samir is an exceptional developer. His expertise in WordPress and Next.js helped us scale our digital presence across India significantly.",
    },
    {
        name: "Priya Das",
        role: "Marketing Head, E-com Hub",
        quote: "The AI tools Zenviq built for us have automated our content pipeline completely. Highly professional and always delivers on time.",
    },
    {
        name: "David Smith",
        role: "CEO, Global Retailers",
        quote: "From custom Shopify setups to complex web apps, Samir's technical precision and eye for detail are unmatched in the freelance market.",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-16 border-b border-border bg-muted/10">
            <div className="container max-w-4xl mx-auto px-4 md:px-6">
                <div className="text-center md:text-left mb-20">
                    <span className="mono-label mb-4 block">Feedback</span>
                    <h2 className="text-4xl font-bold tracking-tight text-dense max-w-xl">
                        Trusted by <span className="text-muted-foreground">Engineering Leaders</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded overflow-hidden">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background p-8 flex flex-col hover:bg-muted/20 transition-colors"
                        >
                            <Quote className="w-5 h-5 text-muted-foreground/30 mb-6" />
                            <p className="text-base text-foreground leading-relaxed italic mb-8 flex-1">
                                &ldquo;{item.quote}&rdquo;
                            </p>
                            <div className="pt-6 border-t border-border">
                                <p className="text-sm font-bold mb-1">{item.name}</p>
                                <p className="mono-label !text-muted-foreground !text-[9px] uppercase tracking-widest">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
