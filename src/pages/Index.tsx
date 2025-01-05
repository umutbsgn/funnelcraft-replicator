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
    <div className="min-h-screen bg-gradient-linear">
      <Hero />
      <Partners />
      <div className="section-alt">
        <Benefits />
      </div>
      <Testimonials />
      <div className="section-alt">
        <ProcessSteps />
      </div>
      <Contact />
    </div>
  );
};

export default Index;