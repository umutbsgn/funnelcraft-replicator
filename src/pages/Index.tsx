import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Contact } from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-revealUp');
          entry.target.previousElementSibling?.classList.add('animate-glowBg');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.section-heading').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F]">
      <Hero />
      
      {/* Divider 1 - Hero to Partners */}
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse"></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <Partners />
      </div>
      
      {/* Divider 2 - Partners to Benefits */}
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <Benefits />
      </div>
      
      {/* Divider 3 - Benefits to Testimonials */}
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <Testimonials />
      </div>
      
      {/* Divider 4 - Testimonials to ProcessSteps */}
      <div className="w-full h-32 relative overflow-hidden transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <div className="section-heading opacity-0 -translate-y-8">
        <ProcessSteps />
      </div>
      
      {/* Divider 5 - ProcessSteps to Contact */}
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