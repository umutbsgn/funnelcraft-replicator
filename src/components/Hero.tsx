import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#contact-section');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 animate-fadeIn">
      <div className="absolute top-4 left-4 md:top-8 md:left-8 transition-all duration-300 ease-in-out hover:scale-105">
        <img 
          src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
          alt="Logo" 
          className="h-8 md:h-10 w-auto"
        />
      </div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <Button 
          onClick={scrollToCalendly}
          className="bg-primary text-white px-4 py-2 md:px-6 md:py-2 text-sm md:text-base hover:bg-primary/90 transition-colors duration-300"
        >
          Kostenfreies Erstgespräch
        </Button>
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 transition-all duration-500 ease-in-out hover:scale-105 px-4 md:px-0">
        Wir sind Ihr <br />
        Wettbewerbsvorteil.
      </h1>
      <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-xl md:max-w-2xl text-gray-300 transition-opacity duration-300 hover:opacity-90 px-4 md:px-0">
        Mit maßgeschneiderten KI-Systemen steigern wir Ihre Effizienz, reduzieren Kosten und revolutionieren Ihre Geschäftsprozesse.
      </p>
      <Button 
        onClick={scrollToCalendly}
        className="bg-primary text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg hover:bg-primary/90 transition-all duration-300 ease-in-out hover:scale-105"
      >
        Kostenfreies Erstgespräch buchen
      </Button>
    </div>
  );
};