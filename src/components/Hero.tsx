import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Wir sind Ihr <br />
        Wettbewerbsvorteil.
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300">
        Mit maßgeschneiderten KI-Systemen steigern wir Ihre Effizienz, reduzieren Kosten und revolutionieren Ihre Geschäftsprozesse.
      </p>
      <Button className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90">
        Erfahren Sie mehr
      </Button>
    </div>
  );
};