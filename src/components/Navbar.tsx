import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className={`font-serif text-2xl font-bold ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
          Triple <span className="text-gradient-gold">T</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`text-sm font-medium hover:text-accent transition-smooth ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:08033786761" className="hidden md:inline-flex">
          <Button variant="default" className="gradient-gold text-accent-foreground hover:opacity-90 border-0">
            <Phone className="size-4" /> Book Now
          </Button>
        </a>
        <button className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="container py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-foreground">{l.label}</a>
              </li>
            ))}
            <li>
              <a href="tel:08033786761"><Button className="gradient-gold text-accent-foreground w-full"><Phone className="size-4" /> Book Now</Button></a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
