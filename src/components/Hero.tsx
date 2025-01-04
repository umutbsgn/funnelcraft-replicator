import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#contact-section');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="transition-all duration-300 ease-in-out hover:scale-105">
            <img 
              src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
              alt="Logo" 
              className="h-8 md:h-10 w-auto animate-float"
            />
          </div>
          <Button 
            onClick={scrollToCalendly}
            className="bg-primary text-white px-4 py-2 md:px-6 md:py-2 text-sm md:text-base hover:bg-primary/90 transition-colors duration-300"
          >
            Kostenfreies Erstgespräch
          </Button>
        </div>
      </div>
      <div className="pt-24 min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 transition-all duration-500 ease-in-out hover:scale-105 px-4 md:px-0 animate-slideInLeft opacity-0">
          Wir sind Ihr <br />
          Wettbewerbsvorteil.
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-xl md:max-w-2xl text-gray-300 transition-opacity duration-300 hover:opacity-90 px-4 md:px-0 animate-slideInRight opacity-0" style={{ animationDelay: "0.3s" }}>
          Mit maßgeschneiderten KI-Systemen steigern wir Ihre Effizienz, reduzieren Kosten und revolutionieren Ihre Geschäftsprozesse.
        </p>
        <Button 
          onClick={scrollToCalendly}
          className="bg-primary text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg hover:bg-primary/90 transition-all duration-300 ease-in-out hover:scale-105 animate-fadeIn opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          Kostenfreies Erstgespräch buchen
        </Button>
      </div>
    </>
  );
};