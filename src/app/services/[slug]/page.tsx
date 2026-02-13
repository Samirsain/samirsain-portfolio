import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = services[resolvedParams.slug as keyof typeof services];
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Samir Sain`,
        description: service.hero.heading,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = services[resolvedParams.slug as keyof typeof services];

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen pt-32 pb-16">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-12 transition-colors font-medium group"
                >
                    <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                            <Icon className="w-8 h-8 text-primary" />
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-dense text-gradient mb-8 leading-[1.1]">
                            {service.hero.heading}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-10 border-l-2 border-primary/20 pl-6">
                            {service.hero.subheading}
                        </p>

                        <Link href="#contact">
                            <Button size="lg" className="h-14 px-8 rounded-full font-bold uppercase tracking-widest text-xs bg-primary text-background hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                                Start Project
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-muted/30 rounded-[3rem] p-10 border border-border/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

                        <h3 className="text-2xl font-bold mb-8 relative z-10">What We Deliver</h3>
                        <ul className="space-y-6 relative z-10">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex gap-4 items-start group">
                                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                                        <CheckCircleIcon className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-base mb-1">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="mono-label !text-primary mb-4 block">Workflow</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">How We Work</h2>
                        <p className="text-muted-foreground text-lg">A streamlined, transparent process designed for speed and quality.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {service.process.map((step, i) => (
                            <div key={i} className="glass-card p-8 rounded-3xl border-border/50 relative group hover:bg-muted/20 transition-colors">
                                <span className="absolute top-8 right-8 text-6xl font-black text-muted/10 group-hover:text-primary/10 transition-colors select-none">
                                    {step.step}
                                </span>
                                <h3 className="text-xl font-bold mb-4 pt-8">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="glass-card p-12 md:p-20 rounded-[3rem] text-center border-primary/20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/5 mask-gradient" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8">
                            {service.cta}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-10">
                            Ready to take your business to the next level? Let's discuss your project today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#contact">
                                <Button size="lg" className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-xs w-full sm:w-auto">
                                    Book Consultation
                                </Button>
                            </Link>
                            <Link href="/#projects">
                                <Button variant="outline" size="lg" className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-xs border-primary/20 hover:bg-primary/5 w-full sm:w-auto">
                                    View Work
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
