import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#contact-section');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="transition-all duration-300 ease-in-out hover:scale-105">
            <img 
              src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
              alt="Data-UB Logo" 
              className="h-8 sm:h-10 w-auto animate-float filter drop-shadow-lg"
              width="120"
              height="40"
            />
          </div>
          <Button 
            onClick={scrollToCalendly}
            className="bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2 text-sm sm:text-base rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 animate-buttonGlow"
            aria-label="Kostenfreies Erstgespräch buchen"
          >
            Kostenfreies Erstgespräch
          </Button>
        </div>
      </header>
      <main className="relative pt-32 pb-48 min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16" role="main">
        {/* Floating orbs */}
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

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 md:mb-20 transition-all duration-500 ease-in-out hover:scale-105 animate-slideInLeft opacity-0">
          Wir sind Ihr <br />
          <span className="text-primary animate-textGlow">Wettbewerbsvorteil.</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-12 md:mb-16 max-w-xl md:max-w-2xl text-gray-300 transition-opacity duration-300 hover:opacity-90 animate-slideInRight opacity-0" style={{ animationDelay: "0.3s" }}>
          Mit maßgeschneiderten KI-Systemen steigern wir Ihre Effizienz, reduzieren Kosten und revolutionieren Ihre Geschäftsprozesse.
        </p>
        <Button 
          onClick={scrollToCalendly}
          className="relative bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl rounded-xl shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-buttonGlow opacity-0 animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
          aria-label="Jetzt kostenloses Erstgespräch vereinbaren"
        >
          Kostenfreies Erstgespräch buchen
        </Button>
      </main>
    </>
  );
};