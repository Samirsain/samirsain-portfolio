import type { Metadata } from "next";
import { Suspense } from "react";
import type { BreadcrumbList, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { PostList } from "@/features/blog/components/post-list";
import { PostListWithSearch } from "@/features/blog/components/post-list-with-search";
import { PostSearchInput } from "@/features/blog/components/post-search-input";
import { getAllPosts } from "@/features/blog/data/posts";

export const metadata: Metadata = {
  title: "Blog – Samir Sain",
  description: "In-depth guides on React, Next.js, and modern web development.",
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
        name: "Blog",
        item: `${SITE_INFO.url}/blog`,
      },
    ],
  };
}

import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel";

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <Panel className="min-h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
        <p className="mt-2 font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </PanelHeader>

      <div className="screen-line-after p-2">
        <Suspense
          fallback={
            <div className="flex h-9 w-full rounded-lg border border-input shadow-xs dark:bg-input/30" />
          }
        >
          <PostSearchInput />
        </Suspense>
      </div>

      <div className="p-4">
        <Suspense fallback={<PostList posts={allPosts} />}>
          <PostListWithSearch posts={allPosts} />
        </Suspense>
      </div>

      <div className="h-4" />
    </Panel>
  );
}
