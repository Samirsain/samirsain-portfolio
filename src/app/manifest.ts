import type { MetadataRoute } from "next";

import { META_THEME_COLORS, SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "/icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "/icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    theme_color: META_THEME_COLORS.light,
    background_color: META_THEME_COLORS.light,
  };
}
