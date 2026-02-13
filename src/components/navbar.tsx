"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Github, Linkedin } from "lucide-react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={cn(
                "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center",
                isScrolled ? "top-4 px-4" : "top-0"
            )}
        >
            <div
                className={cn(
                    "container mx-auto px-6 h-14 flex items-center justify-between transition-all duration-500",
                    isScrolled
                        ? "glass border-white/5 rounded-full max-w-5xl shadow-2xl"
                        : "bg-transparent border-transparent max-w-7xl pt-4"
                )}
            >
                <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 flex items-center justify-center text-primary transition-all"
                    >
                        <Logo className="h-7 w-auto" />
                    </motion.div>
                    <span className="font-bold text-sm sm:text-lg tracking-tight uppercase font-mono">
                        SAMIR<span className="text-muted-foreground font-light"> SAIN</span><span className="text-primary/50 font-light">.dev</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-border/20 bg-muted/10 backdrop-blur-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-full transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-1 mr-2 text-muted-foreground">
                        <Link href="https://github.com" target="_blank">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                    <Github className="w-4 h-4" />
                                </Button>
                            </motion.div>
                        </Link>
                        <ModeToggle />
                    </div>


                    <Link href="/#contact">
                        <Button
                            size="sm"
                            className="h-9 rounded-full px-6 text-[10px] font-bold uppercase tracking-widest bg-primary text-background hover:opacity-90 transition-all shadow-lg hover:shadow-primary/20"
                        >
                            Connect
                        </Button>
                    </Link>

                    {/* Mobile Menu Trigger */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full glass border-border/20">
                                    <Bars3Icon className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full sm:w-[420px] bg-background border-l border-border/30 p-0">
                                <div className="flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-border/20">
                                        <div className="flex items-center gap-2">
                                            <Logo className="h-6 w-auto text-primary" />
                                            <span className="font-bold text-sm tracking-tight uppercase font-mono">
                                                SAMIR<span className="text-muted-foreground font-light"> SAIN</span>
                                            </span>
                                        </div>
                                        <ModeToggle />
                                    </div>

                                    {/* Nav Items */}
                                    <div className="flex-1 px-8 py-8">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/50 mb-6">Menu</p>
                                        <div className="flex flex-col">
                                            {navItems.map((item, i) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="group flex items-center justify-between py-4 border-b border-border/15 hover:border-primary/30 transition-all"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-[10px] font-mono text-muted-foreground/40 tabular-nums">
                                                            {String(i + 1).padStart(2, "0")}
                                                        </span>
                                                        <span className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all text-sm">
                                                        →
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="px-8 pb-8 space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Link href="https://github.com/Samirsain" target="_blank" className="w-11 h-11 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                                                <Github className="w-4 h-4" />
                                            </Link>
                                            <Link href="https://in.linkedin.com/in/samirsain" target="_blank" className="w-11 h-11 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                                                <Linkedin className="w-4 h-4" />
                                            </Link>
                                        </div>
                                        <Link href="/#contact">
                                            <Button className="w-full h-12 rounded-full bg-primary text-background font-bold uppercase tracking-[0.2em] text-[11px] hover:opacity-90 transition-all shadow-lg hover:shadow-primary/20">
                                                Let&apos;s Connect
                                            </Button>
                                        </Link>
                                        <p className="text-[9px] text-muted-foreground/30 uppercase tracking-[0.2em] text-center">
                                            © 2026 SAMIRSAIN.DEV
                                        </p>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
