"use client";

import { useEffect } from "react";

import { useSound } from "@/hooks/use-sound";

export function PortfolioSoundEffect() {
    const playUnlockSound = useSound("/audio/ui-sounds/unlock.wav");

    useEffect(() => {
        // Play sound after a small delay when component mounts
        const timer = setTimeout(() => {
            playUnlockSound(0.5); // 50% volume
        }, 500);

        return () => clearTimeout(timer);
    }, [playUnlockSound]);

    return null;
}
