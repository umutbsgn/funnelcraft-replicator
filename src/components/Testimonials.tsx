export const Testimonials = () => {
  return (
    <div className="py-32 md:py-48 px-4 md:px-8 opacity-100 animate-fadeInScale" style={{ animationDelay: "0.3s" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 md:mb-32 text-center opacity-100 animate-revealUp" style={{ animationDelay: "0.5s" }}>
          Was unsere Kunden nach 3 Monaten berichten:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-black/30 opacity-100 animate-fadeInScale" style={{ animationDelay: "0.7s" }}>
            <p className="text-base md:text-lg mb-4 transition-opacity duration-300 hover:opacity-90">
              "Die KI-Integration hat unsere Prozesskosten um 40% gesenkt. Das Team ist begeistert und die Qualität besser denn je."
            </p>
            <p className="font-bold transition-colors duration-300 hover:text-primary">- Thomas M.</p>
            <p className="text-xs md:text-sm text-gray-400">Geschäftsführer</p>
          </div>
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:bg-black/30 opacity-100 animate-fadeInScale" style={{ animationDelay: "0.9s" }}>
            <p className="text-base md:text-lg mb-4 transition-opacity duration-300 hover:opacity-90">
              "Die Lösung war absolut top und auch vom Global UX Lead der Ottobock als sehr gute Kommunikation bezeichnet. Das Feedback wurde super schnell umgesetzt und geliefert."
            </p>
            <p className="font-bold transition-colors duration-300 hover:text-primary">- Sarah Meyer</p>
            <p className="text-xs md:text-sm text-gray-400">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};
