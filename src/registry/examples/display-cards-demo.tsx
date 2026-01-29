"use client";

import { Sparkles, TrendingUp, Zap } from "lucide-react";

import DisplayCards from "@/components/ui/display-cards";

const defaultCards = [
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Zennova AI",
    description: "Premium Visual Generation Platform",
    date: "Jan 2026",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <TrendingUp className="size-4 text-blue-300" />,
    title: "Zenviq Agency",
    description: "Innovative Digital Agency Solutions",
    date: "Jan 2025",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-blue-300" />,
    title: "Credify",
    description: "Modern Fintech & Finance Dashboard",
    date: "Dec 2024",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2576&auto=format&fit=crop",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}
