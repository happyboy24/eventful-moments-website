import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => (
  <main>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <CtaSection />
    <Footer />
  </main>
);

export default Index;
