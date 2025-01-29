"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Das Team hat uns echt begeistert! Von Tag 1 an war klar: Die wissen genau, was sie tun. Besonders cool war, wie schnell alles ging. Unser System läuft jetzt super smooth und das Feedback vom ganzen Team ist grandios. Die beste Entscheidung, die wir treffen konnten!",
    name: "Jan Bergmann",
    title: "Head of Digital",
  },
  {
    quote: "Die Zusammenarbeit war einfach genial! Endlich ein Team, das nicht nur zuhört, sondern direkt versteht und umsetzt. Die Kommunikation war top, die Lösungen kreativ und das Ergebnis übertrifft alle Erwartungen. Meine Mitarbeiter sind happy und die Produktivität ist durch die Decke gegangen!",
    name: "Sarah Weber",
    title: "Geschäftsführerin",
  },
];

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-32 md:py-48 px-4 md:px-8 overflow-hidden">
      {/* Background Effects */}
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

        <div className="relative h-[400px] w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentTestimonial === index ? 1 : 0,
                y: currentTestimonial === index ? 0 : 20,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className={`absolute inset-0 ${
                currentTestimonial === index ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="relative p-8 rounded-2xl h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl h-full flex flex-col justify-between">
                  <p className="text-lg md:text-xl leading-relaxed text-white/90 transition-opacity duration-300 group-hover:text-white">
                    {testimonial.quote}
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-lg text-primary group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(155,135,245,0.7)]">
                      - {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentTestimonial === index
                  ? "bg-primary w-6"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};