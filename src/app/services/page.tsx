import { Services } from "@/components/services";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Services | Samir Sain",
    description: "Explore our comprehensive range of digital services, from web development to AI automation and digital marketing.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <Services />
            </div>
            <Footer />
        </main>
    );
}
