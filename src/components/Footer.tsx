import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-serif text-3xl font-bold mb-4">Triple <span className="text-gradient-gold">T</span></h3>
        <p className="text-primary-foreground/70 leading-relaxed">Making every moment unforgettable through elegant, thoughtful event catering.</p>
      </div>
      <div>
        <h4 className="font-serif text-xl mb-4">Contact</h4>
        <ul className="space-y-3 text-primary-foreground/80">
          <li className="flex items-center gap-3"><Phone className="size-4 text-accent" /> 0803 378 6761</li>
          <li className="flex items-center gap-3"><Mail className="size-4 text-accent" /> hello@tripletcaterings.com</li>
          <li className="flex items-center gap-3"><MapPin className="size-4 text-accent" /> Lagos, Nigeria</li>
        </ul>
      </div>
      <div>
        <h4 className="font-serif text-xl mb-4">Follow Us</h4>
        <div className="flex gap-3">
          <a href="#" aria-label="Instagram" className="size-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"><Instagram className="size-5" /></a>
          <a href="#" aria-label="Facebook" className="size-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"><Facebook className="size-5" /></a>
        </div>
      </div>
    </div>
    <div className="container mt-12 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
      © {new Date().getFullYear()} Triple T Events. All rights reserved.
    </div>
  </footer>
);
