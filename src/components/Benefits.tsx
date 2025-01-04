export const Benefits = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-16 text-center transition-all duration-500 ease-in-out hover:scale-105 px-4 md:px-0">
          Skalieren Sie ihr Geschäft,<br />
          nicht Ihren Workload.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4 p-4 md:p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-secondary/80">
            <div className="h-48 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/6d823c84-2253-4ae4-991a-eec39ebf95cf.png" 
                alt="KI-Integration Roboter" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 hover:text-primary">KI-Integration</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Nutzen Sie modernste KI-Technologie für Ihre Geschäftsprozesse.
            </p>
          </div>
          <div className="space-y-4 p-4 md:p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-secondary/80">
            <div className="h-48 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/a45de0f7-c4f4-41b1-8c33-495ad5b1759f.png" 
                alt="Prozessoptimierung Dashboard" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 hover:text-primary">Prozessoptimierung</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Automatisieren Sie wiederkehrende Aufgaben und steigern Sie die Effizienz.
            </p>
          </div>
          <div className="space-y-4 p-4 md:p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-secondary/80">
            <div className="h-48 md:h-64 w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/d90e55ff-efe8-4e0e-9787-ae9c83e31393.png" 
                alt="Skalierbarkeit Zahnräder" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 hover:text-primary">Skalierbarkeit</h3>
            <p className="text-sm md:text-base text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Wachsen Sie ohne proportional steigende Kosten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};