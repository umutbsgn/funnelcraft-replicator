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
        // Remove animations when element is not in view
        if (!entry.isIntersecting) {
          entry.target.classList.remove('animate-revealUp');
          if (entry.target.previousElementSibling) {
            entry.target.previousElementSibling.classList.remove('animate-glowBg');
          }
          return;
        }

        // Add animations when element comes into view
        entry.target.classList.add('animate-revealUp');
        if (entry.target.previousElementSibling) {
          entry.target.previousElementSibling.classList.add('animate-glowBg');
        }
      });
    };

    // Create and store new observers
    document.querySelectorAll('.section-heading').forEach((heading) => {
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
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F]">
      <Hero />
      
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse"></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <Partners />
      </div>
      
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <Benefits />
      </div>
      
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <Testimonials />
      </div>
      
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <ProcessSteps />
      </div>
      
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <Contact />
      </div>
    </div>
  );
};

export default Index;