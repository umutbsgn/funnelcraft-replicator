export const Partners = () => {
  return (
    <div className="py-32 md:py-48 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
          Marktführer setzen auf uns
        </h2>
        <div className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-24">
          <p className="mb-4">Von mittelständischen Unternehmen bis zu Konzernen.</p>
          <p>Unsere KI-Lösungen steigern nachweislich Effizienz und Gewinn</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 place-items-center mx-auto max-w-5xl">
          <div className="w-40 md:w-64 h-28 md:h-32 flex items-center justify-center bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4 group transition-all duration-500 ease-in-out hover:scale-110 hover:bg-black/30 hover:border-primary/50">
            <img 
              src="/lovable-uploads/d288eb99-94f1-4299-81b4-05476bed4ab5.png" 
              alt="First Class Service"
              className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            />
          </div>
          <div className="w-40 md:w-64 h-28 md:h-32 flex items-center justify-center bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4 group transition-all duration-500 ease-in-out hover:scale-110 hover:bg-black/30 hover:border-primary/50">
            <img 
              src="/lovable-uploads/adc8ffd0-4d31-4c7f-8370-8a016b0f7cb6.png" 
              alt="Planted"
              className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            />
          </div>
          <div className="w-40 md:w-64 h-28 md:h-32 flex items-center justify-center bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4 group transition-all duration-500 ease-in-out hover:scale-110 hover:bg-black/30 hover:border-primary/50">
            <img 
              src="/lovable-uploads/fff3bb19-1f2a-4c59-9cfd-9590d3f20719.png" 
              alt="TAS Emotional Marketing"
              className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            />
          </div>
          <div className="w-40 md:w-64 h-28 md:h-32 flex items-center justify-center bg-black/20 backdrop-blur-xl border border-white/10 rounded-lg p-4 group transition-all duration-500 ease-in-out hover:scale-110 hover:bg-black/30 hover:border-primary/50">
            <img 
              src="/lovable-uploads/268980c9-e0d2-444d-9b46-c9be9d04d43d.png" 
              alt="Team Oliver"
              className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(155,135,245,0.5)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};