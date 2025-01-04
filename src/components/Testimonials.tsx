export const Testimonials = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-16 text-center transition-all duration-500 ease-in-out hover:scale-105 px-4 md:px-0">
          Was unsere Kunden sagen:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black/30">
            <p className="text-base md:text-lg mb-4 transition-opacity duration-300 hover:opacity-90">
              "Die Lösung war absolut top und auch vom Global UX Lead der Ottobock als sehr gute Kommunikation bezeichnet. Das Feedback wurde super schnell umgesetzt und geliefert."
            </p>
            <p className="font-bold transition-colors duration-300 hover:text-primary">- Jakob Bruntner</p>
            <p className="text-xs md:text-sm text-gray-400">Chief Operating Officer, Ottobock</p>
          </div>
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black/30">
            <p className="text-base md:text-lg mb-4 transition-opacity duration-300 hover:opacity-90">
              "Kein langes Warten mehr, alles digital."
            </p>
            <p className="font-bold transition-colors duration-300 hover:text-primary">- Sarah Meyer</p>
            <p className="text-xs md:text-sm text-gray-400">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};