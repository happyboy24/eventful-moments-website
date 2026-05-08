import ctaImg from "@/assets/cta-image.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export const CtaSection = () => (
  <section id="contact" className="py-24 bg-background">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl gradient-emerald shadow-elegant">
        <div className="grid lg:grid-cols-2 items-center">
          <div className="p-10 md:p-16 text-primary-foreground">
            <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">Let's Talk</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Cater Something <span className="text-gradient-gold">Unforgettable?</span>
            </h2>
            <p className="text-primary-foreground/85 text-lg mb-8">
              Speak directly with our catering team. Whether it's a wedding, milestone birthday, or corporate gala — we're a phone call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:08033786761">
                <Button size="lg" className="gradient-gold text-accent-foreground hover:opacity-90 border-0 px-8 w-full sm:w-auto">
                  <Phone className="size-4" /> 0803 378 6761
                </Button>
              </a>
              <a href="https://wa.me/2348033786761" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto">
                  <MessageCircle className="size-4" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
          <div className="relative h-80 lg:h-full min-h-[400px]">
            <img src={ctaImg} alt="Triple T event planner ready to help" loading="lazy" width={1024} height={1280} className="absolute inset-0 size-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
