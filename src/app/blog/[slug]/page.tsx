"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export default function BlogPostDetail() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-40 px-6 text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="container max-w-3xl mx-auto px-4 md:px-6">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12 group"
                    >
                        <ArrowLeftIcon className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                        Back to Articles
                    </Link>

                    <header className="mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 glass"
                        >
                            <span className="mono-label !text-primary">{post.category}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-dense mb-8"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-6 text-muted-foreground/60 text-[10px] font-mono uppercase tracking-[0.1em] border-y border-border/30 py-6"
                        >
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="w-3 h-3" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="w-3 h-3" />
                                <span>{post.readingTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>By {post.author}</span>
                            </div>
                        </motion.div>
                    </header>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert prose-primary max-w-none"
                    >
                        {/* 
                            Note: In a real app we'd use a markdown renderer here.
                            For this demo, we'll format the basic markdown content.
                        */}
                        <div className="text-muted-foreground leading-relaxed space-y-8 text-lg">
                            {post.content.split('\n\n').map((paragraph, i) => {
                                if (paragraph.startsWith('# ')) {
                                    return <h1 key={i} className="text-3xl font-bold text-foreground mt-12 mb-4">{paragraph.replace('# ', '')}</h1>;
                                }
                                if (paragraph.startsWith('## ')) {
                                    return <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                                }
                                if (paragraph.startsWith('### ')) {
                                    return <h3 key={i} className="text-xl font-bold text-foreground mt-6 mb-2">{paragraph.replace('### ', '')}</h3>;
                                }
                                if (paragraph.match(/^\d\./)) {
                                    return (
                                        <div key={i} className="pl-4 space-y-2">
                                            {paragraph.split('\n').map((line, j) => (
                                                <p key={j} className="flex gap-2">
                                                    <span className="font-bold text-primary">{line.match(/^\d\./)?.[0]}</span>
                                                    {line.replace(/^\d\.\s*/, '')}
                                                </p>
                                            ))}
                                        </div>
                                    );
                                }
                                return <p key={i}>{paragraph}</p>;
                            })}
                        </div>
                    </motion.div>

                    <footer className="mt-20 pt-12 border-t border-border/30">
                        <div className="glass-card p-10 rounded-[2rem] border-border/50 text-center">
                            <h3 className="text-xl font-bold mb-4">Want more insights?</h3>
                            <p className="text-muted-foreground mb-8">Follow my journey as I build the next generation of digital products.</p>
                            <div className="flex justify-center gap-4">
                                <Link
                                    href="https://x.com/codexmir"
                                    target="_blank"
                                    className="px-6 py-2 rounded-full border border-border/50 hover:bg-muted font-bold uppercase tracking-widest text-[10px] transition-all"
                                >
                                    Follow on X
                                </Link>
                                <Link
                                    href="/#contact"
                                    className="px-6 py-2 rounded-full bg-primary text-background font-bold uppercase tracking-widest text-[10px] hover:opacity-90 transition-all"
                                >
                                    Work with me
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>

            <Footer />
        </div>
    );
}
