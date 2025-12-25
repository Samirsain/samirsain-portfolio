import type { Metadata } from "next";
import type { BreadcrumbList, WithContext } from "schema-dts";

import { Button } from "@/components/ui/button";
import { SITE_INFO, SPONSORSHIP_URL } from "@/config/site";
import sponsors from "@/features/sponsors/sponsors.json";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sponsors – Samir Sain",
  description:
    "Grateful for the support that helps me grow and maintain high-quality projects.",
};

function getPageJsonLd(): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_INFO.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sponsors",
        item: `${SITE_INFO.url}/sponsors`,
      },
    ],
  };
}

export default function Page() {
  return (
    <div className="min-h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Sponsors</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="screen-line-before screen-line-after relative py-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge" />
          <div className="border-l border-edge" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sponsors.map((item) => (
            <a
              key={item.name}
              className={cn(
                "flex min-h-20 items-center justify-center gap-4 hover:bg-accent2",
                "max-sm:screen-line-before max-sm:screen-line-after",
                "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
              )}
              href={item.homepage}
              target="_blank"
              rel="noopener sponsored"
            >
              <div
                className="[&_svg]:pointer-events-none [&_svg]:h-6 [&_svg]:w-auto"
                role="img"
                aria-label={`${item.name} logo`}
                dangerouslySetInnerHTML={{ __html: item.logo }}
              />
            </a>
          ))}

          {Array.from({ length: Math.max(0, 6 - sponsors.length) }).map(
            (_, i) => (
              <PlaceholderLogo key={`placeholder-${i}`} />
            )
          )}
        </div>
      </div>

      <div className="flex justify-center p-2">
        <Button asChild>
          <a href={SPONSORSHIP_URL} target="_blank" rel="noopener noreferrer">
            Become a Sponsor
          </a>
        </Button>
      </div>

      <div className="screen-line-before h-4" />
    </div>
  );
}

function PlaceholderLogo() {
  return (
    <div
      className={cn(
        "flex min-h-20",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      aria-hidden
    />
  );
}
