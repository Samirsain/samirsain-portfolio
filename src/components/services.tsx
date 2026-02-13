"use client";

import { motion } from "framer-motion";
import { BoltIcon, ShieldCheckIcon, RocketLaunchIcon, DevicePhoneMobileIcon, GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: CodeBracketIcon,
        title: "WordPress Development",
        desc: "8+ years of expertise in crafting high-performance WordPress solutions, custom themes, and scalable e-commerce ecosystems.",
        accent: "bg-blue-500/10 text-blue-500"
    },
    {
        icon: RocketLaunchIcon,
        title: "Next.js & Modern Apps",
        desc: "Building production-grade digital products with technical excellence. Specialists in high-performance SaaS and scalability.",
        accent: "bg-purple-500/10 text-purple-500"
    },
    {
        icon: BoltIcon,
        title: "AI & Automation",
        desc: "Integrating custom chatbots, AI content generators, and intelligent automation to optimize business processes and growth.",
        accent: "bg-green-500/10 text-green-500"
    }
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-background relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2" />

            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 glass"
                    >
                        <BoltIcon className="w-3 h-3 text-primary" />
                        <span className="mono-label !text-primary">Service Modules</span>
                    </motion.div>
                    <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-dense text-gradient">
                        Solving Complex <br />
                        <span className="text-muted-foreground/40 italic">Global Problems</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-12 rounded-[2.5rem] border-border/40 hover:bg-muted/10 transition-all duration-500 relative group overflow-hidden"
                        >
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                            <div className={`w-16 h-16 ${service.accent} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                                <service.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold tracking-tight mb-6">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                {service.desc}
                            </p>

                            <div className="mt-10 h-px w-full bg-gradient-to-r from-border/50 to-transparent" />
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Box */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 glass-card rounded-[3.5rem] p-12 md:p-20 border-primary/10 relative overflow-hidden flex flex-col items-center text-center"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000')] opacity-[0.03] mix-blend-overlay grayscale" />

                    <div className="relative z-10 max-w-3xl">
                        <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
                            Ready to accelerate your <br />
                            <span className="text-primary italic">next evolution?</span>
                        </h3>
                        <p className="text-xl text-muted-foreground mb-12 font-medium">
                            Accepting high-impact projects for 2025/2026. Let&apos;s build something that leaves an impact.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" className="h-16 px-12 rounded-full font-bold uppercase tracking-widest text-[11px] bg-primary text-background hover:scale-105 transition-transform shadow-2xl shadow-primary/30">
                                Initiate Connection
                            </Button>
                            <Button variant="outline" size="lg" className="h-16 px-12 rounded-full font-bold uppercase tracking-widest text-[11px] glass hover:bg-white/10 transition-colors border-white/20">
                                View Capabilities
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
