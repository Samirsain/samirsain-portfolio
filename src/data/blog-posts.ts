export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    slug: string;
    content: string;
    readingTime: string;
    author: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: "Mastering Next.js 15: The Future of Web Architecture",
        excerpt: "A deep dive into the latest features of Next.js 15, including Server Actions, PPR, and advanced caching strategies for high-performance apps.",
        date: "Feb 10, 2026",
        category: "Engineering",
        slug: "mastering-nextjs-15",
        readingTime: "8 min read",
        author: "Samir Sain",
        content: `
# Mastering Next.js 15: The Future of Web Architecture

Next.js 15 marks a significant milestone in the evolution of the React ecosystem. With its focus on performance, developer experience, and scalability, it's becoming the go-to framework for modern web applications.

## Key Features in Next.js 15

1. **Server Actions**: Streamlined data mutations without the boilerplate of traditional APIs.
2. **Partial Prerendering (PPR)**: Combining the best of static and dynamic rendering globally.
3. **Advanced Caching**: More granular control over how your data is served and revalidated.

### Why Architecture Matters

In high-performance SaaS applications, every millisecond counts. By leveraging the advanced patterns in Next.js 15, we can build systems that are not only fast but also incredibly resilient.

### Conclusion

The transition to Next.js 15 is more than just an upgrade; it's a paradigm shift in how we think about digital engineering.
        `
    },
    {
        title: "Building Scalable AI Systems with TypeScript",
        excerpt: "How to integrate large language models into your technical stack while maintaining type safety and sub-second response times.",
        date: "Feb 05, 2026",
        category: "AI & Tech",
        slug: "scalable-ai-typescript",
        readingTime: "12 min read",
        author: "Samir Sain",
        content: `
# Building Scalable AI Systems with TypeScript

AI is no longer just a buzzword; it's a core component of modern software. Integrating AI into your systems requires a careful balance of flexibility and type safety.

## The TypeScript Advantage

TypeScript provides the guardrails needed when working with the often-unpredictable nature of AI model responses. By defining clear interfaces, we can build reliable agentic systems.

### Performance at Scale

Scaling AI features requires efficient prompt engineering and clever caching strategies. In this post, we explore how to maintain sub-second response times even under heavy load.
        `
    },
    {
        title: "The Art of Premium UI/UX: Design Systems that Scale",
        excerpt: "Exploring the intersection of minimalism and technical excellence in modern product design. Why small details define the elite experiences.",
        date: "Jan 28, 2026",
        category: "Design",
        slug: "premium-ui-ux-design-systems",
        readingTime: "6 min read",
        author: "Samir Sain",
        content: `
# The Art of Premium UI/UX: Design Systems that Scale

Premium design isn't just about how it looks; it's about how it feels. A truly elite user experience is born from the harmonious blend of aesthetics and technical precision.

## Minimalism as a Strategy

Whitespace is not empty space; it's a powerful tool for focus. By stripping away the unnecessary, we highlight what truly matters to the user.

### Micro-animations

Small, subtle transitions provide feedback and personality to an application. We explore how to use Framer Motion to create interactions that feel alive.
        `
    },
    {
        title: "Clean Code vs. Fast Code: Finding the Perfect Balance",
        excerpt: "In the fast-paced world of startups, technical debt is inevitable. Learn how to maintain a high velocity without compromising system integrity.",
        date: "Jan 15, 2026",
        category: "Engineering",
        slug: "clean-vs-fast-code",
        readingTime: "10 min read",
        author: "Samir Sain",
        content: `
# Clean Code vs. Fast Code

The age-old debate in software engineering: should we build it 'right' or build it 'now'?

## Pragmatic Engineering

The best engineers know that the answer is usually somewhere in the middle. We discuss patterns like 'Refactor as you go' and how to identify critical paths that require high-purity code.
        `
    },
    {
        title: "SaaS Infrastructure: From MVP to Global Scale",
        excerpt: "A comprehensive guide to building cloud-native infrastructure that grows with your user base. From Vercel to AWS and beyond.",
        date: "Jan 02, 2026",
        category: "Infrastructure",
        slug: "saas-infrastructure-scaling",
        readingTime: "15 min read",
        author: "Samir Sain",
        content: `
# SaaS Infrastructure: From MVP to Global Scale

Building a SaaS is hard. Scaling it is harder.

## Leveling Up

We start with the simplest architecture that works and gradually introduce complexity like load balancing, database replication, and edge computing as the traffic demands it.
        `
    }
];
