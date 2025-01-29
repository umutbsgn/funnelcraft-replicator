"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "Das Team hat uns echt begeistert! Von Tag 1 an war klar: Die wissen genau, was sie tun. Besonders cool war, wie schnell alles ging. Unser System läuft jetzt super smooth und das Feedback vom ganzen Team ist grandios. Die beste Entscheidung, die wir treffen konnten!",
    name: "Jan Bergmann",
    designation: "Head of Digital",
    src: "/lovable-uploads/placeholder.jpg"
  },
  {
    quote: "Die Zusammenarbeit war einfach genial! Endlich ein Team, das nicht nur zuhört, sondern direkt versteht und umsetzt. Die Kommunikation war top, die Lösungen kreativ und das Ergebnis übertrifft alle Erwartungen. Meine Mitarbeiter sind happy und die Produktivität ist durch die Decke gegangen!",
    name: "Sarah Weber",
    designation: "Geschäftsführerin",
    src: "/lovable-uploads/placeholder.jpg"
  },
];

export const Testimonials = () => {
  return (
    <div className="relative py-32 md:py-48 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-starTwinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              backgroundColor: '#9B87F5',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 md:mb-32 text-center">
          <span className="relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[0_0_25px_rgba(155,135,245,0.7)]">
              Was unsere Kunden nach 3 Monaten berichten:
            </span>
            <div className="absolute -inset-1 bg-primary/20 blur-lg animate-pulse rounded-lg" />
          </span>
        </h2>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </div>
  );
};