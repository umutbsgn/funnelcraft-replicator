import { useEffect, useRef } from 'react';

export const Benefits = () => {
  const benefitsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const article = entry.target as HTMLElement;
            const image = article.querySelector('img');
            
            // Add animation classes when element comes into view
            article.classList.add('animate-fadeInScale');
            if (image) {
              image.classList.add('animate-glow');
            }
            
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    // Get all benefit articles and observe them
    benefitsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 md:py-48 px-4 md:px-8" aria-labelledby="benefits-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="benefits-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 md:mb-32 text-center px-4 md:px-0 text-white">
          Skalieren Sie ihr Geschäft,<br />
          <span className="text-primary">nicht Ihren Workload.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <article 
            ref={el => benefitsRef.current[0] = el}
            className="space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out hover:bg-black/30 backdrop-blur-xl bg-black/20 border border-white/10 hover:scale-105 group opacity-0"
          >
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/2428615f-26f0-4300-95a1-9d09bb4b648f.png" 
                alt="KI-Integration Roboter" 
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-125"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-primary">KI-Integration</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 group-hover:opacity-90">
              Nutzen Sie modernste KI-Technologie für Ihre Geschäftsprozesse.
            </p>
          </article>
          
          <article 
            ref={el => benefitsRef.current[1] = el}
            className="space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out hover:bg-black/30 backdrop-blur-xl bg-black/20 border border-white/10 hover:scale-105 group opacity-0"
          >
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/a45de0f7-c4f4-41b1-8c33-495ad5b1759f.png" 
                alt="Prozessoptimierung Dashboard" 
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-125"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-primary">Prozessoptimierung</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 group-hover:opacity-90">
              Automatisieren Sie wiederkehrende Aufgaben und steigern Sie die Effizienz.
            </p>
          </article>
          
          <article 
            ref={el => benefitsRef.current[2] = el}
            className="space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out hover:bg-black/30 backdrop-blur-xl bg-black/20 border border-white/10 hover:scale-105 group opacity-0"
          >
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/d90e55ff-efe8-4e0e-9787-ae9c83e31393.png" 
                alt="Skalierbarkeit Zahnräder" 
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-125"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-primary">Skalierbarkeit</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 group-hover:opacity-90">
              Wachsen Sie ohne proportional steigende Kosten.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};