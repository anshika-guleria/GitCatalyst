import { CTA } from "@/components/landing/CTA";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Preview } from "@/components/landing/Preview";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <Hero />

        <section id="features">
          <Features />
        </section>

        <section id="preview">
          <Preview />
        </section>

        <section id="cta">
          <CTA />
        </section>
      </main>

      <Footer />
    </>
  );
}