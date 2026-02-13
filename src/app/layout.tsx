import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Samir Sain | Senior Full Stack Developer & SaaS Architect",
    template: "%s | Samir Sain"
  },
  description: "Senior Full Stack Developer & SaaS Architect crafting high-performance web apps, scalable systems, and AI-powered solutions with technical excellence.",
  keywords: [
    "Samir Sain",
    "Full Stack Developer",
    "SaaS Architect",
    "Web Development",
    "Digital Marketing",
    "SEO Optimization",
    "AI Automation",
    "Meta Ads",
    "Google Ads",
    "WordPress Developer",
    "Shopify Developer",
    "Next.js Expert",
    "Freelance Developer India"
  ],
  authors: [{ name: "Samir Sain" }],
  creator: "Samir Sain",
  metadataBase: new URL("https://samirsain.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    "max-image-preview": "large",
  },
  openGraph: {
    title: "Samir Sain | Senior Full Stack Developer & SaaS Architect",
    description: "Senior Full Stack Developer & SaaS Architect crafting high-performance web apps, scalable systems, and AI-powered solutions with technical excellence.",
    type: "website",
    url: "https://samirsain.com",
    siteName: "Samir Sain Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/samir-sain.jpg",
        width: 1200,
        height: 630,
        alt: "Samir Sain - Senior Full Stack Developer & SaaS Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samir Sain | Senior Full Stack Developer & SaaS Architect",
    description: "Senior Full Stack Developer & SaaS Architect crafting high-performance web apps, scalable systems, and AI-powered solutions with technical excellence.",
    creator: "@codexmir",
    images: ["/samir-sain.jpg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Samir Sain",
    "jobTitle": "Senior Full Stack Developer & SaaS Architect",
    "url": "https://samirsain.com",
    "image": "https://samirsain.com/samir-sain.jpg",
    "sameAs": [
      "https://github.com/Samirsain",
      "https://in.linkedin.com/in/samirsain",
      "https://x.com/codexmir"
    ],
    "description": "Full Stack Developer & SaaS Architect building high-performance web apps, scalable systems, and AI solutions.",
    "worksFor": {
      "@type": "Organization",
      "name": "Zenviq",
      "url": "https://samirsain.com"
    },
    "knowsAbout": ["Next.js", "React", "TypeScript", "SaaS Architecture", "Full Stack Development", "AI Integration"]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Samir Sain Portfolio",
    "url": "https://samirsain.com",
    "description": "Full Stack Developer & SaaS Architect building high-performance web apps and AI-powered digital products."
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://samirsain.com"
      }
    ]
  }
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ScrollProgress />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="relative min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

