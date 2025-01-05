import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#contact-section');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-secondary/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`} 
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105">
              <img 
                src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
                alt="Data-UB Logo" 
                className="h-8 sm:h-10 w-auto"
                width="120"
                height="40"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Button 
                onClick={scrollToCalendly}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5 animate-buttonGlow"
                aria-label="Kostenfreies Strategiegespräch sichern"
              >
                Kostenloses Erstgespräch buchen
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary hover:bg-secondary/50 transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary/95 backdrop-blur-lg rounded-lg mt-2">
                <Button 
                  onClick={scrollToCalendly}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
                  aria-label="Kostenfreies Strategiegespräch sichern (Mobile)"
                >
                  Kostenloses Erstgespräch buchen
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="relative pt-32 pb-48 min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16" role="main">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-starTwinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                backgroundColor: '#9B87F5',
                borderRadius: '50%',
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-floatingOrb" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-floatingOrb" style={{ animationDelay: "-2s" }} />
        </div>

        <h1 
          className={`
            relative 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            font-bold mb-12 md:mb-16 
            transition-all duration-1000 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <span className="relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[0_0_25px_rgba(155,135,245,0.7)]">
              KI-Power
            </span>
            <div className="absolute -inset-1 bg-primary/20 blur-lg animate-pulse rounded-lg" />
          </span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              für Ihren
            </span>
            <div className="absolute -inset-1 bg-primary/10 blur-md animate-pulse rounded-lg" style={{ animationDelay: "0.2s" }} />
          </span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[0_0_25px_rgba(155,135,245,0.7)]">
              Vorsprung
            </span>
            <div className="absolute -inset-1 bg-primary/20 blur-lg animate-pulse rounded-lg" style={{ animationDelay: "0.4s" }} />
          </span>
        </h1>

        <div className="relative group">
          <p className={`
            relative z-10
            text-lg sm:text-xl lg:text-2xl 
            mb-16 md:mb-20 
            max-w-xl md:max-w-2xl 
            text-white
            drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'}
          `}>
            <span className="relative inline-block group-hover:animate-float">In 30 Minuten</span>{" "}
            <span className="relative inline-block group-hover:animate-float" style={{ animationDelay: "0.1s" }}>zeigen wir Ihnen,</span>{" "}
            <span className="relative inline-block group-hover:animate-float" style={{ animationDelay: "0.2s" }}>wie Sie durch</span>{" "}
            <span className="relative inline-block font-semibold group-hover:animate-float animate-glow text-primary drop-shadow-[0_0_15px_rgba(155,135,245,0.7)]" style={{ animationDelay: "0.3s" }}>KI-Integration</span>{" "}
            <span className="relative inline-block group-hover:animate-float" style={{ animationDelay: "0.4s" }}>Ihre Prozesse</span>{" "}
            <span className="relative inline-block font-semibold group-hover:animate-float animate-glow text-primary drop-shadow-[0_0_15px_rgba(155,135,245,0.7)]" style={{ animationDelay: "0.5s" }}>revolutionieren</span>{" "}
            <span className="relative inline-block group-hover:animate-float" style={{ animationDelay: "0.6s" }}>und</span>{" "}
            <span className="relative inline-block font-semibold group-hover:animate-float animate-glow text-primary drop-shadow-[0_0_15px_rgba(155,135,245,0.7)]" style={{ animationDelay: "0.7s" }}>Kosten drastisch senken</span>
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        </div>

        <Button 
          onClick={scrollToCalendly}
          className="relative bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-6 sm:py-8 text-xl sm:text-2xl rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-buttonGlow"
          aria-label="Kostenloses Erstgespräch buchen"
        >
          Kostenloses Erstgespräch buchen
        </Button>
      </main>
    </>
  );
};