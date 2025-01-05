export const Benefits = () => {
  return (
    <section className="py-32 md:py-48 px-4 md:px-8 opacity-100 animate-fadeInScale" style={{ animationDelay: "0.3s" }} aria-labelledby="benefits-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="benefits-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 md:mb-32 text-center opacity-100 animate-revealUp px-4 md:px-0 text-white" style={{ animationDelay: "0.5s" }}>
          Skalieren Sie ihr Geschäft,<br />
          <span className="text-primary">nicht Ihren Workload.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <article className="space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out hover:bg-black/30 backdrop-blur-xl bg-black/20 border border-white/10 opacity-100 animate-fadeInScale hover:scale-105" style={{ animationDelay: "0.7s" }}>
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/2428615f-26f0-4300-95a1-9d09bb4b648f.png" 
                alt="KI-Integration Roboter" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 hover:text-primary">KI-Integration</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Nutzen Sie modernste KI-Technologie für Ihre Geschäftsprozesse.
            </p>
          </article>
          
          <article className="space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out hover:bg-black/30 backdrop-blur-xl bg-black/20 border border-white/10 opacity-100 animate-fadeInScale hover:scale-105" style={{ animationDelay: "0.9s" }}>
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/a45de0f7-c4f4-41b1-8c33-495ad5b1759f.png" 
                alt="Prozessoptimierung Dashboard" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 hover:text-primary">Prozessoptimierung</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Automatisieren Sie wiederkehrende Aufgaben und steigern Sie die Effizienz.
            </p>
          </article>
          
          <article className="space-y-4 p-6 md:p-8 rounded-lg transition-all duration-500 ease-in-out hover:bg-black/30 backdrop-blur-xl bg-black/20 border border-white/10 opacity-100 animate-fadeInScale hover:scale-105" style={{ animationDelay: "1.1s" }}>
            <div className="h-64 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/d90e55ff-efe8-4e0e-9787-ae9c83e31393.png" 
                alt="Skalierbarkeit Zahnräder" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 hover:text-primary">Skalierbarkeit</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Wachsen Sie ohne proportional steigende Kosten.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};