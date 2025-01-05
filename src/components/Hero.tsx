import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark');
      return newTheme;
    });
  };

  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#contact-section');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-border transition-colors duration-300" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="transition-all duration-300 ease-in-out hover:scale-105">
            <img 
              src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
              alt="Data-UB Logo" 
              className="h-8 sm:h-10 w-auto filter drop-shadow-sm"
              width="120"
              height="40"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors duration-300"
              aria-label={theme === 'light' ? 'Aktiviere Dunkelmodus' : 'Aktiviere Hellmodus'}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <Button 
              onClick={scrollToCalendly}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 font-medium focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
              aria-label="Kostenfreies Erstgespräch buchen"
            >
              Kostenfreies Erstgespräch
            </Button>
          </div>
        </div>
      </header>
      <main className="pt-32 pb-48 min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16 transition-colors duration-300" role="main">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-tight transition-colors duration-300 animate-slideInLeft opacity-0">
          Wir sind Ihr <br />
          <span className="text-primary">Wettbewerbsvorteil.</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-12 md:mb-16 max-w-xl md:max-w-2xl text-foreground/80 leading-relaxed transition-colors duration-300 animate-slideInRight opacity-0" style={{ animationDelay: "0.3s" }}>
          Mit maßgeschneiderten KI-Systemen steigern wir Ihre Effizienz, reduzieren Kosten und revolutionieren Ihre Geschäftsprozesse.
        </p>
        <Button 
          onClick={scrollToCalendly}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg sm:text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-fadeIn opacity-0 font-medium focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          style={{ animationDelay: "0.6s" }}
          aria-label="Jetzt kostenloses Erstgespräch vereinbaren"
        >
          Kostenfreies Erstgespräch buchen
        </Button>
      </main>
    </>
  );
};