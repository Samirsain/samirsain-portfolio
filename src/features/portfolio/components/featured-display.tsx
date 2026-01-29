"use client";

import { Rss, Sparkles, TrendingUp, Zap } from "lucide-react";

import DisplayCards from "@/components/ui/display-cards";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const featuredCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Zennova AI",
    description: "Premium Visual Generation",
    date: "Jan 2026",
    href: "https://zennova-ai.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <TrendingUp className="size-4 text-blue-300" />,
    title: "Zenviq Agency",
    description: "Digital Agency Solutions",
    date: "Jan 2025",
    href: "https://zenviq.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-blue-300" />,
    title: "Credify",
    description: "Modern Fintech Platform",
    date: "Dec 2024",
    href: "https://credify-fintech.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2576&auto=format&fit=crop",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Rss className="size-4 text-blue-300" />,
    title: "Journal",
    description: "My latest thoughts and technical guides",
    date: "Latest Posts",
    href: "/blog",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    className:
      "[grid-area:stack] translate-x-36 translate-y-30 hover:translate-y-20",
  },
];

export function FeaturedDisplay() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Featured</PanelTitle>
      </PanelHeader>
      <div className="flex flex-col items-center justify-center px-4 py-24 sm:px-0">
        <DisplayCards cards={featuredCards} />
      </div>
    </Panel>
  );
}
