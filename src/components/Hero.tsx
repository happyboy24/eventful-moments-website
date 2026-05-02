import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="Elegant emerald event hall" width={1920} height={1080} className="absolute inset-0 size-full object-cover" />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <div className="container relative z-10 text-center text-primary-foreground py-32">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-up">
        <Sparkles className="size-4 text-accent" />
        <span className="text-sm tracking-wide">Premium Event Planning</span>
      </div>
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Triple <span className="text-gradient-gold">T</span> Events
      </h1>
      <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 animate-fade-up text-primary-foreground/90" style={{ animationDelay: "0.2s" }}>
        Making Every Moment Unforgettable
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <a href="#services">
          <Button size="lg" className="gradient-gold text-accent-foreground hover:opacity-90 border-0 px-8">Explore Services</Button>
        </a>
        <a href="tel:08033786761">
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8">
            <Phone className="size-4" /> 0803 378 6761
          </Button>
        </a>
      </div>
    </div>
  </section>
);
