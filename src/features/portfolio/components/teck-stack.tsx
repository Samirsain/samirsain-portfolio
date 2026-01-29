import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

// Map tech keys to devicon names
const DEVICON_MAP: Record<string, string> = {
  typescript: "typescript",
  js: "javascript",
  python: "python",
  php: "php",
  java: "java",
  nodejs: "nodejs",
  bun: "bun",
  react: "react",
  nextjs2: "nextjs",
  tailwindcss: "tailwindcss",
  "shadcn-ui": "react", // No shadcn icon, use react
  radixui: "react", // No radix icon, use react
  motion: "framermotion",
  tanstack: "react", // No tanstack icon, use react
  "mobx-state-tree": "mobx",
  redux: "redux",
  antd: "antdesign",
  "react-router": "reactrouter",
  "react-navigation": "react",
  loopback: "nodejs",
  laravel: "laravel",
  git: "git",
  docker: "docker",
  mysql: "mysql",
  mongodb: "mongodb",
  redis: "redis",
  figma: "figma",
  ps: "photoshop",
  chatgpt: "openai",
};

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            const deviconName = DEVICON_MAP[tech.key] || tech.key;
            const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconName}/${deviconName}-original.svg`;

            return (
              <li key={tech.key} className="flex">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={tech.title}
                    >
                      <Image
                        src={iconUrl}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                        className="transition-transform hover:scale-110"
                      />
                      <span className="sr-only">{tech.title}</span>
                    </a>
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
