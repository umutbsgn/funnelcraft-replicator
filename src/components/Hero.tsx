import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#contact-section');
    calendlySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 animate-fadeIn">
      <div className="absolute top-4 left-4">
        <img 
          src="/lovable-uploads/7b916e51-dc06-41cf-8d7d-61b314f5cf0f.png" 
          alt="Logo" 
          className="h-12 w-auto"
        />
      </div>
      <div className="absolute top-4 right-4">
        <Button 
          onClick={scrollToCalendly}
          className="bg-primary text-white px-6 py-2 text-base hover:bg-primary/90"
        >
          Kostenfreies Erstgespräch
        </Button>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Wir sind Ihr <br />
        Wettbewerbsvorteil.
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300">
        Mit maßgeschneiderten KI-Systemen steigern wir Ihre Effizienz, reduzieren Kosten und revolutionieren Ihre Geschäftsprozesse.
      </p>
      <Button 
        onClick={scrollToCalendly}
        className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90"
      >
        Kostenfreies Erstgespräch buchen
      </Button>
    </div>
  );
};