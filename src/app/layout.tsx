import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Organization, Person, WebSite, WithContext } from "schema-dts";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/features/portfolio/data/user";
import { fontMono, fontSans } from "@/lib/fonts";

function getStructuredData() {
  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_INFO.url}#person`,
    name: USER.displayName,
    givenName: USER.firstName,
    familyName: USER.lastName,
    url: SITE_INFO.url,
    image: USER.avatar,
    jobTitle: USER.jobTitle,
    description: USER.bio,
    gender: USER.gender,
    knowsAbout: [
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Web Development",
      "SEO",
      "WordPress Development",
    ],
    sameAs: [
      "https://github.com/samirsain",
      "https://x.com/codexmir",
      SITE_INFO.url,
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_INFO.url}#organization`,
      name: "Zenviq Digital Agency",
    },
  };

  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_INFO.url}#organization`,
    name: "Zenviq Digital Agency",
    url: SITE_INFO.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_INFO.url}/icon.png`,
      width: "512",
      height: "512",
    },
    image: `${SITE_INFO.url}/icon.png`,
    description:
      "Professional digital agency specializing in modern web development, Next.js applications, and SEO optimization services.",
    founder: {
      "@type": "Person",
      "@id": `${SITE_INFO.url}#person`,
      name: USER.displayName,
    },
    sameAs: ["https://github.com/samirsain", "https://x.com/codexmir"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_INFO.url}#website`,
    name: `${USER.displayName} | ${USER.jobTitle}`,
    alternateName: [USER.username, "Zenviq"],
    url: SITE_INFO.url,
    description: SITE_INFO.description,
    publisher: {
      "@type": "Person",
      "@id": `${SITE_INFO.url}#person`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_INFO.url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return [personSchema, organizationSchema, websiteSchema];
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
    }
  } catch (_) {}

  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://samirsain.com"),
  alternates: {
    canonical: "https://samirsain.com",
  },
  title: {
    template: `%s | ${USER.displayName}`,
    default: `${USER.displayName} | ${USER.jobTitle} & Founder of Zenviq Digital Agency`,
  },
  description:
    "Samir Sain is a Full Stack Developer and founder of Zenviq Digital Agency, specializing in modern web development with Next.js, React, and SEO optimization. 5+ years of experience building premium digital solutions in India.",
  keywords: [
    "Samir Sain",
    "Full Stack Developer",
    "Zenviq Digital Agency",
    "Next.js Developer",
    "React Developer",
    "Web Development India",
    "SEO Expert",
    "WordPress Developer",
    "Digital Agency India",
    "TypeScript Developer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  publisher: USER.displayName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_INFO.url,
    siteName: `${USER.displayName} | Zenviq Digital Agency`,
    title: `${USER.displayName} | ${USER.jobTitle} & Founder of Zenviq Digital Agency`,
    description:
      "Full Stack Developer specializing in Next.js, React, and modern web development. Founder of Zenviq Digital Agency with 5+ years of experience.",
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: `${USER.displayName} - Full Stack Developer`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${USER.displayName} | ${USER.jobTitle}`,
    description:
      "Full Stack Developer & Founder of Zenviq Digital Agency. Building modern web solutions with Next.js & React.",
    creator: "@codexmir",
    images: [SITE_INFO.ogImage],
  },
  verification: {
    google: "ziDZd_lijC0FXqCM7zawWTZ5IXuosqWYbzNhYhSXNfI",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = getStructuredData();

  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />

        {/* Structured Data - Person, Organization, and Website */}
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        ))}
      </head>

      <body>
        <Providers>
          <NuqsAdapter>{children}</NuqsAdapter>
        </Providers>
      </body>
    </html>
  );
}
