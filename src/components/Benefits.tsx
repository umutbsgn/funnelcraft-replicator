import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export const Benefits = () => {
  const observerRefs = useRef<IntersectionObserver[]>([]);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Cleanup previous observers
    observerRefs.current.forEach(observer => observer.disconnect());
    observerRefs.current = [];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    articleRefs.current.forEach((article, index) => {
      if (article) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const animationDelay = isMobile ? 200 : 700; // 0.2s for mobile, 0.7s for desktop
              setTimeout(() => {
                entry.target.classList.remove('opacity-0', 'translate-x-[-50px]');
                entry.target.classList.add('opacity-100', 'translate-x-0', 'transition-all', 'duration-700');
                
                // Add glow effect after the reveal animation
                setTimeout(() => {
                  entry.target.classList.add('hover:bg-black/30', 'hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]');
                }, animationDelay); // Use same timing for glow effect
              }, index * animationDelay); // Use calculated delay between each animation
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        observer.observe(article);
        observerRefs.current.push(observer);
      }
    });

    // Cleanup function
    return () => {
      observerRefs.current.forEach(observer => observer.disconnect());
    };
  }, [isMobile]); // Added isMobile to dependencies

  return (
    <section className="py-32 md:py-48 px-4 md:px-8" aria-labelledby="benefits-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="benefits-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 md:mb-32 text-center px-4 md:px-0 text-white">
          3 Wege, wie wir Ihr Unternehmen<br />
          <span className="text-primary">sofort stärker machen:</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <article 
            ref={el => articleRefs.current[0] = el}
            className="opacity-0 translate-x-[-50px] space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out backdrop-blur-xl bg-black/20 border border-white/10 group"
          >
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/2428615f-26f0-4300-95a1-9d09bb4b648f.png" 
                alt="KI Chatbots" 
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-primary">KI Chatbots</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 group-hover:opacity-90">
              Unsere intelligenten Chatbots revolutionieren Ihre digitale Kommunikation. Sie verstehen komplexe Kundenanfragen, lernen kontinuierlich dazu und liefern präzise Lösungen.
            </p>
          </article>
          
          <article 
            ref={el => articleRefs.current[1] = el}
            className="opacity-0 translate-x-[-50px] space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out backdrop-blur-xl bg-black/20 border border-white/10 group"
          >
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/69b6fa5a-f56e-47bb-bdd4-805ef4ba8e40.png" 
                alt="KI-Telefonagenten" 
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-primary">KI-Telefonagenten</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 group-hover:opacity-90">
              Unsere intelligenten Sprachassistenten meistern alle Telefon-Aufgaben. Sie führen natürliche Gespräche, erkennen Anliegen präzise und lösen diese effizient – rund um die Uhr.
            </p>
          </article>
          
          <article 
            ref={el => articleRefs.current[2] = el}
            className="opacity-0 translate-x-[-50px] space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out backdrop-blur-xl bg-black/20 border border-white/10 group"
          >
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/d90e55ff-efe8-4e0e-9787-ae9c83e31393.png" 
                alt="Automatisierungen" 
                className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 group-hover:text-primary">Automatisierungen</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 group-hover:opacity-90">
              Entlasten Sie Ihr Unternehmen mit intelligenter Prozessautomatisierung. Unsere KI-Lösungen übernehmen wiederholende Aufgaben, optimieren Arbeitsabläufe und steigern die Effizienz in allen Geschäftsbereichen.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};