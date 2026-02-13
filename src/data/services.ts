import {
    CodeBracketIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
    PresentationChartLineIcon,
    EnvelopeIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    SwatchIcon,
    ChatBubbleLeftRightIcon,
    ShareIcon,
    ChartBarIcon,
    PencilSquareIcon,
    LinkIcon,
    UserCircleIcon,
    CpuChipIcon,
    CursorArrowRaysIcon,
    DocumentTextIcon,
    ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline";

export const services = {
    // --- Web & Design ---
    "web-development": {
        title: "Web Development",
        icon: CodeBracketIcon,
        hero: {
            heading: "Custom Web Development That Drives Growth",
            subheading: "High-performance, scalable websites tailored to your business goals. We build digital experiences that convert visitors into customers.",
        },
        features: [
            { title: "Custom Solutions", description: "Tailor-made websites that perfectly match your brand identity and functional requirements." },
            { title: "Responsive Design", description: "Mobile-first approach ensuring perfect performance on all devices and screen sizes." },
            { title: "Fast Performance", description: "Optimized code for lightning-fast load times and superior Core Web Vitals scores." },
            { title: "Secure Architecture", description: "Implementation of best-in-class security protocols to protect your data and users." }
        ],
        process: [
            { step: "01", title: "Discovery", desc: "Analyzing your business needs." },
            { step: "02", title: "Design", desc: "Creating visual prototypes." },
            { step: "03", title: "Develop", desc: "Clean, efficient coding." },
            { step: "04", title: "Launch", desc: "Testing and deployment." }
        ],
        cta: "Build your digital foundation"
    },
    "wordpress-development": {
        title: "WordPress Development",
        icon: GlobeAltIcon,
        hero: {
            heading: "Top-Tier WordPress Solutions",
            subheading: "Harness the power of the world's most popular CMS. We create custom, easy-to-manage WordPress sites that scale with your business.",
        },
        features: [
            { title: "Custom Themes", description: "Unique designs built from scratch, not generic templates." },
            { title: "Plugin Development", description: "Custom functionality to extend WordPress capabilities." },
            { title: "WooCommerce", description: "Powerful e-commerce stores integrated seamlessly." },
            { title: "Speed Optimization", description: "Fine-tuning for maximum speed and performance." }
        ],
        process: [
            { step: "01", title: "Plan", desc: "Site architecture mapping." },
            { step: "02", title: "Build", desc: "Theme and plugin coding." },
            { step: "03", title: "Migrate", desc: "Content and data transfer." },
            { step: "04", title: "Train", desc: "Handover and tutorial." }
        ],
        cta: "Start your WordPress journey"
    },
    "shopify-development": {
        title: "Shopify Development",
        icon: DevicePhoneMobileIcon, // Using generic device icon for e-commerce
        hero: {
            heading: "High-Converting Shopify Stores",
            subheading: "Launch a beautiful, sales-optimized online store. We specialize in creating Shopify experiences that maximize revenue.",
        },
        features: [
            { title: "Store Setup", description: "Complete configuration from payments to shipping." },
            { title: "Custom Design", description: "Branded storefronts that stand out from the competition." },
            { title: "App Integration", description: "Connecting essential marketing and operation tools." },
            { title: "CRO Focus", description: "Designed to turn browsers into buyers." }
        ],
        process: [
            { step: "01", title: "Strategy", desc: "E-commerce goal setting." },
            { step: "02", title: "Design", desc: "Store interface creation." },
            { step: "03", title: "Setup", desc: "Product and app configuration." },
            { step: "04", title: "Launch", desc: "Go-live and support." }
        ],
        cta: "Scale your online sales"
    },
    "landing-page-design": {
        title: "Landing Page Design",
        icon: CursorArrowRaysIcon,
        hero: {
            heading: "Landing Pages That Convert",
            subheading: "Laser-focused pages designed for one purpose: Action. Increase your ad ROI with high-performance landing pages.",
        },
        features: [
            { title: "Conversion Design", description: "Layouts optimized for user flow and call-to-action visibility." },
            { title: "A/B Testing Ready", description: "Structures built to easily test headlines and offers." },
            { title: "Fast Loading", description: "Instant load times to prevent bounce rates." },
            { title: "Copywriting", description: "Persuasive text that compels visitors to act." }
        ],
        process: [
            { step: "01", title: "Analyze", desc: "Understanding the offer." },
            { step: "02", title: "Draft", desc: "Wireframing the flow." },
            { step: "03", title: "Design", desc: "Visuals and copy." },
            { step: "04", title: "Publish", desc: "Live integration." }
        ],
        cta: "Boost your conversion rates"
    },
    "figma-design": {
        title: "Figma UI/UX Design",
        icon: SwatchIcon,
        hero: {
            heading: "Pixel-Perfect UI/UX Design",
            subheading: "Visualize your product before coding. We create stunning, user-centric interfaces in Figma that developers love to build.",
        },
        features: [
            { title: "Prototyping", description: "Interactive mockups to validate flows." },
            { title: "Design Systems", description: "Scalable component libraries." },
            { title: "User Research", description: "Data-driven design decisions." },
            { title: "Developer Handoff", description: "Clean files ready for code." }
        ],
        process: [
            { step: "01", title: "Research", desc: "User needs analysis." },
            { step: "02", title: "Wireframe", desc: "Low-fidelity structure." },
            { step: "03", title: "Ui", desc: "High-fidelity visuals." },
            { step: "04", title: "Prototype", desc: "Interaction design." }
        ],
        cta: "Design your vision"
    },
    "branding-services": {
        title: "Branding Services",
        icon: UserCircleIcon,
        hero: {
            heading: "Build a Memorable Brand Identity",
            subheading: "More than just a logo. We craft cohesive brand experiences that resonate with your audience and build lasting trust.",
        },
        features: [
            { title: "Logo Design", description: "Unique, timeless marks." },
            { title: "Brand Guidelines", description: "Rules for consistency." },
            { title: "Voice & Tone", description: "Defining how you speak." },
            { title: "Visual Assets", description: "Business cards, letterheads, etc." }
        ],
        process: [
            { step: "01", title: "Workshop", desc: "Brand core definition." },
            { step: "02", title: "Explore", desc: "Visual direction concepts." },
            { step: "03", title: "Refine", desc: "Polishing the chosen identity." },
            { step: "04", title: "Guide", desc: "Creating the brand book." }
        ],
        cta: "Define your identity"
    },

    // --- Marketing & Ads ---
    "digital-marketing": {
        title: "Digital Marketing",
        icon: MegaphoneIcon,
        hero: {
            heading: "Integrated Digital Marketing Strategies",
            subheading: "Amplify your reach. We create holistic marketing campaigns that build awareness, engagement, and long-term brand equity.",
        },
        features: [
            { title: "Strategy Development", description: "Long-term roadmaps for growth." },
            { title: "Multi-Channel", description: "Coordinated presence across platforms." },
            { title: "Audience Targeting", description: "Reaching the right people." },
            { title: "Performance Tracking", description: "Clear ROI measurement." }
        ],
        process: [
            { step: "01", title: "Audit", desc: "Current state analysis." },
            { step: "02", title: "Plan", desc: "Campaign blueprint." },
            { step: "03", title: "Execute", desc: "Launching campaigns." },
            { step: "04", title: "optimize", desc: "Continuous improvement." }
        ],
        cta: "Grow your market share"
    },
    "social-media-management": {
        title: "Social Media Management",
        icon: ShareIcon,
        hero: {
            heading: "Engage Your Audience on Social",
            subheading: "Build a loyal community. We handle everything from content creation to community management across all major platforms.",
        },
        features: [
            { title: "Content Creation", description: "Eye-catching visuals and copy." },
            { title: "Scheduling", description: "Consistent posting calendar." },
            { title: "Community Mgmt", description: "Responding to comments and DMs." },
            { title: "Growth Strategy", description: "Tactics to increase followers." }
        ],
        process: [
            { step: "01", title: "Profile", desc: "Account optimization." },
            { step: "02", title: "Content", desc: "Creation and approval." },
            { step: "03", title: "Engage", desc: "Active management." },
            { step: "04", title: "Report", desc: "Monthly performance review." }
        ],
        cta: "Boost your social presence"
    },
    "meta-ads": {
        title: "Meta Ads (Facebook/Instagram)",
        icon: PresentationChartLineIcon,
        hero: {
            heading: "Targeted Meta Advertising",
            subheading: "Stop scrolling, start selling. High-converting Facebook and Instagram ad campaigns that find your ideal customers.",
        },
        features: [
            { title: "Audience Targeting", description: "Precise demographic and interest capabilities." },
            { title: "Creative Testing", description: "Finding the winning visuals and hooks." },
            { title: "Pixel Setup", description: "Accurate tracking and retargeting." },
            { title: "Scaling", description: "Increasing spend profitably." }
        ],
        process: [
            { step: "01", title: "Setup", desc: "Business Manager config." },
            { step: "02", title: "Creative", desc: "Ad design and copy." },
            { step: "03", title: "Launch", desc: "Campaign activation." },
            { step: "04", title: "Scale", desc: " optimizing winners." }
        ],
        cta: "Reach customers on social"
    },
    "google-ads": {
        title: "Google Ads (PPC)",
        icon: MagnifyingGlassIcon,
        hero: {
            heading: "Capture Intent with Google Ads",
            subheading: "Be there when they search. We manage high-ROI Search, Display, and Shopping campaigns that deliver ready-to-buy leads.",
        },
        features: [
            { title: "Keyword Research", description: "Finding high-intent search terms." },
            { title: "Ad Copywriting", description: "Compelling text that gets clicks." },
            { title: "Bid Management", description: "Maximizing budget efficiency." },
            { title: "Negative Keywords", description: "Filtering out bad traffic." }
        ],
        process: [
            { step: "01", title: "Structure", desc: "Campaign grouping." },
            { step: "02", title: "Setup", desc: "Keywords and ads." },
            { step: "03", title: "Launch", desc: "Going live." },
            { step: "04", title: "Refine", desc: "Quality Score improvement." }
        ],
        cta: "Get found on Google"
    },
    "analytics-reporting": {
        title: "Analytics & Reporting",
        icon: ChartBarIcon,
        hero: {
            heading: "Data-Driven Insights",
            subheading: "Move beyond guesswork. We set up comprehensive tracking and reporting so you know exactly where every dollar is going.",
        },
        features: [
            { title: "GA4 Setup", description: "Advanced Google Analytics configuration." },
            { title: "Custom Dashboards", description: "Easy-to-read Looker Studio reports." },
            { title: "Conversion Tracking", description: "Measuring what matters." },
            { title: "User Journey", description: "Understanding flow and drop-offs." }
        ],
        process: [
            { step: "01", title: "Audit", desc: "Checking current data." },
            { step: "02", title: "Setup", desc: "Implementing tags." },
            { step: "03", title: "Test", desc: "Verifying accuracy." },
            { step: "04", title: "Report", desc: "Regular insights." }
        ],
        cta: "Know your numbers"
    },

    // --- SEO & Content ---
    "seo-optimization": {
        title: "SEO Optimization",
        icon: MagnifyingGlassIcon,
        hero: {
            heading: "Dominate Search Results",
            subheading: "Long-term organic growth. Our comprehensive SEO strategies increase visibility and drive sustainable traffic.",
        },
        features: [
            { title: "Technical SEO", description: "Site health and speed optimization." },
            { title: "On-Page SEO", description: "Content and meta tag refinement." },
            { title: "Local SEO", description: "Ranking in your neighborhood." },
            { title: "Competitor Analysis", description: "Beating them at their game." }
        ],
        process: [
            { step: "01", title: "Audit", desc: "Full site review." },
            { step: "02", title: "Fix", desc: "Technical repairs." },
            { step: "03", title: "Content", desc: "Optimization." },
            { step: "04", title: "Grow", desc: "Authority building." }
        ],
        cta: "Climb the rankings"
    },
    "content-writing": {
        title: "Content Writing",
        icon: DocumentTextIcon,
        hero: {
            heading: "Content That Engages and Converts",
            subheading: "Words have power. We create blog posts, articles, and copy that speak to your audience and establish your authority.",
        },
        features: [
            { title: "Blog Posts", description: "SEO-optimized articles." },
            { title: "Website Copy", description: "Clear, persuasive page text." },
            { title: "Product Descriptions", description: "Ideally suited for sales." },
            { title: "Whitepapers", description: "In-depth thought leadership." }
        ],
        process: [
            { step: "01", title: "Research", desc: "Topic and keyword study." },
            { step: "02", title: "Outline", desc: "Structuring the piece." },
            { step: "03", title: "Write", desc: "Drafting the content." },
            { step: "04", title: "Edit", desc: "Polishing for perfection." }
        ],
        cta: "Tell your story"
    },
    "guest-posting": {
        title: "Guest Posting",
        icon: LinkIcon,
        hero: {
            heading: "Expand Your Reach with Guest Posting",
            subheading: "Get featured on top industry sites. Build authority and quality backlinks with our manual outreach service.",
        },
        features: [
            { title: "High DA Sites", description: "Placements on authoritative domains." },
            { title: "Niche Relevant", description: "Contextual links that matter." },
            { title: "Quality Content", description: "value-driven articles." },
            { title: "Manual Outreach", description: "Real relationships, no spam." }
        ],
        process: [
            { step: "01", title: "List", desc: "Identifying targets." },
            { step: "02", title: "Pitch", desc: "Proposing topics." },
            { step: "03", title: "Write", desc: "Creating the post." },
            { step: "04", title: "Live", desc: "Link verification." }
        ],
        cta: "Build authority now"
    },
    "link-building": {
        title: "Link Building",
        icon: LinkIcon,
        hero: {
            heading: "High-Quality Backlinks",
            subheading: "The fuel for SEO. We build safe, white-hat link profiles that signal trust to search engines.",
        },
        features: [
            { title: "Editorial Links", description: "Mentions in real articles." },
            { title: "Broken Link Building", description: "Fixing the web to your benefit." },
            { title: "Diversity", description: "Natural mix of anchors and types." },
            { title: "Safety First", description: "Strict adherence to Google guidelines." }
        ],
        process: [
            { step: "01", title: "Analyze", desc: "Link gap analysis." },
            { step: "02", title: "Source", desc: "Finding opportunities." },
            { step: "03", title: "Acquire", desc: "Securing the placement." },
            { step: "04", title: "Monitor", desc: "Tracking impact." }
        ],
        cta: "Strengthen your domain"
    },

    // --- Growth & Automation ---
    "email-marketing": {
        title: "Email Marketing",
        icon: EnvelopeIcon,
        hero: {
            heading: "ROI-Driven Email Campaigns",
            subheading: "Your most profitable channel. We design flows and campaigns that nurture leads and drive repeat business.",
        },
        features: [
            { title: "Automation Flows", description: "Set-and-forget revenue." },
            { title: "Newsletter Design", description: "Beautiful, responsive templates." },
            { title: "Segmentation", description: "Hyper-relevant messaging." },
            { title: "Deliverability", description: "Landing in the inbox, not spam." }
        ],
        process: [
            { step: "01", title: "Audit", desc: "Account health check." },
            { step: "02", title: "Plan", desc: "Calendar and flow map." },
            { step: "03", title: "Build", desc: "Design and copy." },
            { step: "04", title: "Send", desc: "Execution and testing." }
        ],
        cta: "Monetize your list"
    },
    "whatsapp-marketing": {
        title: "WhatsApp Marketing",
        icon: ChatBubbleBottomCenterTextIcon,
        hero: {
            heading: "Direct Connection via WhatsApp",
            subheading: "Meet them where they are. Leverage the world's most popular messaging app for instant customer engagement.",
        },
        features: [
            { title: "Broadcast Lists", description: "Mass updates with high open rates." },
            { title: "Chatbots", description: "Automated instant replies." },
            { title: "Catalog Setup", description: "Showcasing products in-app." },
            { title: "Support Integration", description: "Seamless customer service." }
        ],
        process: [
            { step: "01", title: "Setup", desc: "Business API config." },
            { step: "02", title: "Strategy", desc: "Message planning." },
            { step: "03", title: "Grow", desc: "collecting opt-ins." },
            { step: "04", title: "Engage", desc: "Sending campaigns." }
        ],
        cta: "Start the conversation"
    },
    "affiliate-marketing": {
        title: "Affiliate Marketing",
        icon: UserCircleIcon,
        hero: {
            heading: "Scale with Affiliate Partners",
            subheading: "Pay for performance. We help you build and manage an affiliate program that brings in sales without upfront ad spend.",
        },
        features: [
            { title: "Program Setup", description: "Choosing platform and terms." },
            { title: "Recruitment", description: "Finding quality partners." },
            { title: "Creative Assets", description: "Banners and swipe copy." },
            { title: "Payout Mgmt", description: "Streamlined commissions." }
        ],
        process: [
            { step: "01", title: "Launch", desc: "Program configuration." },
            { step: "02", title: "Recruit", desc: "Outreach to affiliates." },
            { step: "03", title: "Equip", desc: "Providing resources." },
            { step: "04", title: "Manage", desc: "Ongoing relationships." }
        ],
        cta: "Launch your program"
    },
    "linkedin-profile-optimize": {
        title: "LinkedIn Profile Optimization",
        icon: UserCircleIcon,
        hero: {
            heading: "Stand Out on Professional Networks",
            subheading: "Your personal brand matters. We optimize your LinkedIn profile to attract recruiters, leads, and industry opportunities.",
        },
        features: [
            { title: "Headline", description: "Attention-grabbing and keyword-rich." },
            { title: "About Section", description: "Compelling story-telling." },
            { title: "Experience", description: "Results-oriented bullet points." },
            { title: "Visuals", description: "Professional banner and layout." }
        ],
        process: [
            { step: "01", title: "Review", desc: "Current profile audit." },
            { step: "02", title: "Interview", desc: "Extracting your value." },
            { step: "03", title: "Draft", desc: "Writing the content." },
            { step: "04", title: "Update", desc: "Implementation guide." }
        ],
        cta: "Upgrade your brand"
    },
    "ai-automation": {
        title: "AI Automation",
        icon: CpuChipIcon,
        hero: {
            heading: "Future-Proof with AI Automation",
            subheading: "Work smarter, not harder. We implement AI solutions to automate repetitive tasks and unlock new efficiencies in your business.",
        },
        features: [
            { title: "Workflow Automation", description: "Connecting your apps (Zapier/Make)." },
            { title: "Custom Chatbots", description: "Smart AI support agents." },
            { title: "Content Gen", description: "Automated drafting pipelines." },
            { title: "Data Analysis", description: "AI-powered insights." }
        ],
        process: [
            { step: "01", title: "Identify", desc: "Finding bottlenecks." },
            { step: "02", title: "Solution", desc: "Designing the workflow." },
            { step: "03", title: "Build", desc: "Prompt engineering & setup." },
            { step: "04", title: "Deploy", desc: "Testing and handover." }
        ],
        cta: "Automate your growth"
    }
};
