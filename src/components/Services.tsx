import wedding from "@/assets/wedding.jpg";
import family from "@/assets/family-event.jpg";
import birthday from "@/assets/birthday.jpg";
import office from "@/assets/office-event.jpg";

const services = [
  { img: wedding, title: "Weddings", desc: "Timeless ceremonies crafted with grace, romance, and meticulous attention to every detail." },
  { img: family, title: "Family Events", desc: "Heartwarming gatherings, anniversaries, and reunions designed to bring loved ones closer." },
  { img: birthday, title: "Birthdays", desc: "From intimate soirées to grand celebrations — every milestone deserves to sparkle." },
  { img: office, title: "Corporate Events", desc: "Polished conferences, launches, and gala dinners that reflect your brand's prestige." },
];

export const Services = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">Our Services</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Crafted for Every Occasion</h2>
        <p className="text-muted-foreground text-lg">From quiet milestones to grand affairs, we bring vision, elegance, and execution to every event.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <article key={s.title} className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-smooth bg-card">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1024} className="size-full object-cover group-hover:scale-110 transition-smooth" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
              <h3 className="font-serif text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
