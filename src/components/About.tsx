import { Award, Heart, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Planned" },
  { icon: Users, value: "10K+", label: "Happy Guests" },
  { icon: Award, value: "12", label: "Years Experience" },
  { icon: Heart, value: "100%", label: "Made With Love" },
];

export const About = () => (
  <section id="about" className="py-24 bg-secondary">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">About Triple T</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Where Vision Meets Celebration</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          At Triple T Events, we believe every gathering tells a story. For over a decade, we've helped families and brands across Nigeria turn moments into memories — with elegance, precision, and a touch of magic.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          From intimate ceremonies to grand celebrations, our team curates every detail so you can focus on what matters most: the joy of the moment.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-2xl p-8 shadow-soft text-center hover:shadow-elegant transition-smooth">
            <div className="inline-flex items-center justify-center size-14 rounded-full gradient-emerald mb-4">
              <s.icon className="size-6 text-primary-foreground" />
            </div>
            <div className="font-serif text-4xl font-bold text-primary mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
