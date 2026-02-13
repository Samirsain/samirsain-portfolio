"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, GitMerge } from "lucide-react";

const experience = [
    {
        role: "Founder & Lead Developer",
        company: "Zenviq Agency",
        date: "2025 - Present",
        log: "Leading a digital agency; Delivered Next.js & AI solutions; Managing full project lifecycles.",
        type: "merge",
    },
    {
        role: "Full Stack Developer",
        company: "Freelance",
        date: "2019 - Present",
        log: "Created websites, tools, and smart solutions; Solved real problems for global clients.",
        type: "pr",
    },
    {
        role: "Full Stack Development",
        company: "Ducat Institute",
        date: "2023 - 2024",
        log: "Mastered Python, JS, and modern tech; Strengthened foundations in digital engineering.",
        type: "commit",
    },
    {
        role: "Bachelor of Computer Applications",
        company: "BCA Undergraduate",
        date: "2025 - Present",
        log: "Pursuing academic excellence in computer sciences alongside professional development.",
        type: "commit",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 border-b border-border bg-background">
            <div className="container max-w-4xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-baseline gap-12 mb-20">
                    <div className="md:w-1/3">
                        <span className="mono-label mb-4 block">Sequence of Events</span>
                        <h2 className="text-4xl font-bold tracking-tight text-dense">
                            Professional <br />
                            <span className="text-muted-foreground">Log History</span>
                        </h2>
                    </div>
                    <p className="md:w-2/3 text-muted-foreground text-lg leading-relaxed">
                        A chronological trace of professional contributions and technical achievements across different engineering environments.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="border border-border rounded overflow-hidden">
                        <div className="bg-muted/50 p-3 border-b border-border flex items-center justify-between">
                            <span className="mono-label !text-muted-foreground">history.log</span>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-border" />
                                <div className="w-2 h-2 rounded-full bg-border" />
                            </div>
                        </div>

                        <div className="divide-y divide-border">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center hover:bg-muted/10 transition-colors"
                                >
                                    <div className="flex items-center gap-4 md:w-1/4">
                                        {item.type === "merge" && <GitMerge className="w-4 h-4 text-purple-500" />}
                                        {item.type === "pr" && <GitPullRequest className="w-4 h-4 text-green-500" />}
                                        {item.type === "commit" && <GitCommit className="w-4 h-4 text-blue-500" />}
                                        <span className="mono-label !text-foreground font-bold">{item.date}</span>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold mb-1">{item.role}</h3>
                                        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-mono">{item.company}</p>
                                        <p className="text-sm text-muted-foreground font-mono leading-relaxed bg-muted/30 p-2 rounded border border-border/50">
                                            <span className="text-primary mr-2 opacity-50">&gt;</span>
                                            {item.log}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
