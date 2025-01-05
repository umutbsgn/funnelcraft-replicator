import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Contact } from "@/components/Contact";
import { useEffect, useRef } from "react";

const Index = () => {
  const observerRefs = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    // Cleanup previous observers
    observerRefs.current.forEach(observer => observer.disconnect());
    observerRefs.current = [];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-revealUp');
          if (entry.target.previousElementSibling) {
            entry.target.previousElementSibling.classList.add('animate-glowBg');
          }
        }
      });
    };

    // Create and store new observers for all section headings
    document.querySelectorAll('h2').forEach((heading) => {
      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      observer.observe(heading);
      observerRefs.current.push(observer);
    });

    // Cleanup function
    return () => {
      observerRefs.current.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F]">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-starTwinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "url('/grid-pattern.svg')",
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          animation: 'moveBackground 30s linear infinite'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10">
        <Hero />
        <Partners />
        <Benefits />
        <Testimonials />
        <ProcessSteps />
        <Contact />
      </div>
    </div>
  );
};

export default Index;