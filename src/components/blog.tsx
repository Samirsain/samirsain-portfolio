"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { ArrowRightIcon, CalendarIcon, ClockIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export function Blog() {
    // Show only the latest 3 posts on the landing page
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog" className="py-24 border-b border-border bg-muted/5 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 glass"
                        >
                            <BookOpenIcon className="w-3 h-3 text-primary" />
                            <span className="mono-label !text-primary">Featured Insights</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-dense">
                            Digital <br />
                            <span className="text-muted-foreground">Engineering Log</span>
                        </h2>
                    </div>
                    <Link href="/blog">
                        <motion.button
                            whileHover={{ x: 5 }}
                            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:opacity-80 transition-all"
                        >
                            View All Articles
                            <ArrowRightIcon className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </motion.button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {featuredPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass-card p-6 md:p-8 rounded-[2rem] border-border/50 hover:border-primary/20 transition-all duration-500 hover:bg-muted/10"
                        >
                            <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row gap-6 md:items-center">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-bold uppercase tracking-widest rounded-full">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-muted-foreground/60 text-[9px] font-mono uppercase tracking-[0.1em]">
                                            <CalendarIcon className="w-3 h-3" />
                                            <span>{post.date}</span>
                                            <span className="mx-1">•</span>
                                            <ClockIcon className="w-3 h-3" />
                                            <span>{post.readingTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1 max-w-2xl">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border/50 group-hover:border-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
                                    <ArrowRightIcon className="w-4 h-4" />
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
