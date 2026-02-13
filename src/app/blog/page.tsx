"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRightIcon, CalendarIcon, UserIcon, ClockIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export default function BlogListing() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container max-w-4xl mx-auto px-4 md:px-6">
                    <header className="mb-20 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 glass"
                        >
                            <span className="mono-label !text-primary">Insights & Research</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter text-dense text-gradient mb-6"
                        >
                            Digital <br />
                            <span className="text-muted-foreground/40 italic">Engineering Log</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
                        >
                            Technical deep dives, architectural insights, and perspectives on the future of digital products.
                        </motion.p>
                    </header>

                    <div className="grid grid-cols-1 gap-12">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative glass-card p-8 md:p-12 rounded-[2rem] border-border/50 hover:border-primary/20 transition-all duration-500"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-2 text-muted-foreground/60 text-[10px] items-center font-mono uppercase tracking-[0.1em]">
                                                <CalendarIcon className="w-3 h-3" />
                                                <span>{post.date}</span>
                                                <span className="mx-1">•</span>
                                                <ClockIcon className="w-3 h-3" />
                                                <span>{post.readingTime}</span>
                                            </div>
                                        </div>

                                        <Link href={`/blog/${post.slug}`}>
                                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors cursor-pointer">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        <Link href={`/blog/${post.slug}`}>
                                            <Button variant="ghost" className="px-0 h-auto font-bold uppercase tracking-widest text-[10px] hover:bg-transparent group/link flex items-center gap-2">
                                                Read Article
                                                <ArrowRightIcon className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function Button({ children, className, variant, ...props }: any) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center transition-all",
                variant === "ghost" ? "hover:text-primary bg-transparent text-muted-foreground" : "",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
