export const Benefits = () => {
  return (
    <div className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center transition-all duration-500 ease-in-out hover:scale-105">
          Skalieren Sie ihr Geschäft,<br />
          nicht Ihren Workload.
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4 p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-secondary/80">
            <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/6d823c84-2253-4ae4-991a-eec39ebf95cf.png" 
                alt="KI-Integration Roboter" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold transition-colors duration-300 hover:text-primary">KI-Integration</h3>
            <p className="text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Nutzen Sie modernste KI-Technologie für Ihre Geschäftsprozesse.
            </p>
          </div>
          <div className="space-y-4 p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-secondary/80">
            <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/a47b6b36-8fa7-49b8-91b0-80f29d9da62d.png" 
                alt="Prozessoptimierung Dashboard" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold transition-colors duration-300 hover:text-primary">Prozessoptimierung</h3>
            <p className="text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Automatisieren Sie wiederkehrende Aufgaben und steigern Sie die Effizienz.
            </p>
          </div>
          <div className="space-y-4 p-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-secondary/80">
            <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/d90e55ff-efe8-4e0e-9787-ae9c83e31393.png" 
                alt="Skalierbarkeit Zahnräder" 
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold transition-colors duration-300 hover:text-primary">Skalierbarkeit</h3>
            <p className="text-gray-300 transition-opacity duration-300 hover:opacity-90">
              Wachsen Sie ohne proportional steigende Kosten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};