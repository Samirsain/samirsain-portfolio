"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { PaperAirplaneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WHATSAPP_NUMBER = "919352410667";

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Hi Samir! 👋\n\n*Name:* ${name}\n*Email:* ${email}\n\n*Requirement:*\n${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="contact" className="py-16 border-b border-border bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        <div className="lg:w-1/2">
                            <span className="mono-label mb-4 block">Communication</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dense mb-8">
                                Initialize <span className="text-muted-foreground">Contact</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
                                I am committed to creating meaningful digital experiences. Reach out for project inquiries, collaboration, or technical consulting.
                            </p>

                            <div className="space-y-4 mb-12">
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="p-4 rounded border border-border bg-muted/30 flex items-center justify-between group hover:border-primary transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <ChatBubbleLeftRightIcon className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm font-medium">WhatsApp Direct</span>
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-all">+91 9352410667</span>
                                </a>
                                <a href="https://in.linkedin.com/in/samirsain" target="_blank" className="p-4 rounded border border-border bg-muted/30 flex items-center justify-between group hover:border-primary transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <Linkedin className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm font-medium">LinkedIn Profile</span>
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-all">samirsain</span>
                                </a>
                                <a href="https://github.com/Samirsain" target="_blank" className="p-4 rounded border border-border bg-muted/30 flex items-center justify-between group hover:border-primary transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <Github className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm font-medium">GitHub Repository</span>
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-all">Samirsain</span>
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="border border-border rounded overflow-hidden">
                                <div className="bg-muted/50 p-3 border-b border-border flex items-center">
                                    <div className="flex gap-1.5 mr-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-border" />
                                    </div>
                                    <span className="mono-label !text-muted-foreground">message_router.ts</span>
                                </div>
                                <div className="p-8 bg-background">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Your Name</label>
                                                <Input
                                                    placeholder="Your name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                    className="bg-muted/20 border-border rounded h-11 focus:border-primary focus:ring-0 transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Email</label>
                                                <Input
                                                    type="email"
                                                    placeholder="Your email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    className="bg-muted/20 border-border rounded h-11 focus:border-primary focus:ring-0 transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground ml-1">Project Requirement</label>
                                            <Textarea
                                                placeholder="Describe your project requirement..."
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                required
                                                className="bg-muted/20 border-border rounded min-h-[120px] focus:border-primary focus:ring-0 transition-colors resize-none"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full h-12 rounded bg-primary text-background font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity gap-2"
                                        >
                                            Send via WhatsApp <PaperAirplaneIcon className="w-3 h-3" />
                                        </Button>
                                        <p className="text-[10px] text-muted-foreground/50 text-center">
                                            Your details will be sent directly to my WhatsApp for a faster response.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
