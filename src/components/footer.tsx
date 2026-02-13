"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-20 bg-background border-t border-border/50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <Logo className="h-7 w-auto text-primary" />
                            <span className="font-bold text-lg tracking-tight uppercase font-mono">
                                SAMIR<span className="text-muted-foreground font-light"> SAIN</span><span className="text-primary/50 font-light">.dev</span>
                            </span>
                        </div>
                        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed mb-8">
                            I am Samir Sain, a passionate self-taught coder building products that matter and help businesses grow. Available for high-impact digital solutions.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/Samirsain" },
                                { icon: Linkedin, href: "https://in.linkedin.com/in/samirsain" },
                                { icon: Twitter, href: "https://x.com/codexmir" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    className="w-10 h-10 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="mono-label mb-6">Navigation</p>
                        <ul className="space-y-4">
                            {["About", "Skills", "Services", "Projects", "Blog"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/#${item.toLowerCase()}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <p className="mono-label mb-6">Stay updated</p>
                        <p className="text-sm text-muted-foreground mb-4">
                            Get the latest news and updates.
                        </p>
                        <div className="flex flex-col gap-3">
                            <Input
                                placeholder="Enter your email"
                                className="bg-muted/30 border-border/50 h-10 text-sm focus:border-primary/50 transition-colors"
                            />
                            <Button className="w-full h-10 rounded bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background font-bold uppercase text-[10px] tracking-widest transition-all">
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="flex justify-end h-full items-end pb-2">
                            <button
                                onClick={scrollToTop}
                                className="w-12 h-12 rounded-full glass border border-border/50 flex items-center justify-center hover:bg-primary hover:text-background transition-all"
                            >
                                <ArrowUpIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-mono">
                        &copy; {currentYear} SAMIRSAIN.DEV // ALL RIGHTS RESERVED
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-[10px] text-muted-foreground/40 hover:text-foreground uppercase tracking-widest transition-colors font-bold">Privacy</Link>
                        <Link href="#" className="text-[10px] text-muted-foreground/40 hover:text-foreground uppercase tracking-widest transition-colors font-bold">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
