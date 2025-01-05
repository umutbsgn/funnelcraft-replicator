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

    document.querySelectorAll('h2').forEach((heading) => {
      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      observer.observe(heading);
      observerRefs.current.push(observer);
    });

    return () => {
      observerRefs.current.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F]">
      <div 
        className="absolute inset-0 z-0 opacity-0 animate-fadeInScale"
        style={{
          backgroundImage: "url('/grid-pattern.svg')",
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          animation: 'fadeInScale 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards, moveBackground 30s linear infinite'
        }}
      />
      
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