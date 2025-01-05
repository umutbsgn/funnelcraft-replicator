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
            className="relative bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2.5 text-sm sm:text-base rounded-lg shadow-[0_0_15px_rgba(155,135,245,0.5)] hover:shadow-[0_0_25px_rgba(155,135,245,0.65)] transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 animate-pulse-subtle overflow-hidden"
            aria-label="Kostenfreies Erstgespräch buchen"
          >
            Kostenfreies Erstgespräch
          </Button>
        </div>
      </header>
      <main className="pt-32 pb-48 min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16" role="main">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-glow-star opacity-75"></div>
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-primary rounded-full animate-glow-star opacity-60" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-glow-star opacity-70" style={{ animationDelay: "2s" }}></div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 md:mb-20 transition-all duration-500 ease-in-out hover:scale-105 animate-slideInLeft opacity-0">
          Wir sind Ihr <br />
          <span className="text-primary relative inline-block">
            Wettbewerbsvorteil
            <span className="absolute -inset-1 bg-primary/20 blur-xl animate-pulse-slow -z-10"></span>
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-12 md:mb-16 max-w-xl md:max-w-2xl text-gray-300 transition-opacity duration-300 hover:opacity-90 animate-slideInRight opacity-0" style={{ animationDelay: "0.3s" }}>
          Mit maßgeschneiderten KI-Systemen steigern wir Ihre Effizienz, reduzieren Kosten und revolutionieren Ihre Geschäftsprozesse.
        </p>
        <Button 
          onClick={scrollToCalendly}
          className="relative bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-6 sm:py-8 text-xl sm:text-2xl rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.5)] hover:shadow-[0_0_40px_rgba(155,135,245,0.7)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 animate-fadeIn opacity-0 overflow-hidden"
          style={{ animationDelay: "0.6s" }}
          aria-label="Jetzt kostenloses Erstgespräch vereinbaren"
        >
          <span className="relative z-10">Kostenfreies Erstgespräch buchen</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-white/30 to-primary/20 animate-pulse-subtle"></div>
        </Button>
      </main>
    </>
  );
};