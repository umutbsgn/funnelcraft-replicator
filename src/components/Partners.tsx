export const Partners = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
          Unsere Kunden vertrauen schon auf Data-UB
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 place-items-center mx-auto max-w-4xl">
          <div className="w-32 h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/d288eb99-94f1-4299-81b4-05476bed4ab5.png" 
              alt="First Class Service"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="w-32 h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/adc8ffd0-4d31-4c7f-8370-8a016b0f7cb6.png" 
              alt="Planted"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="w-32 h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/fff3bb19-1f2a-4c59-9cfd-9590d3f20719.png" 
              alt="TAS Emotional Marketing"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="w-32 h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/268980c9-e0d2-444d-9b46-c9be9d04d43d.png" 
              alt="Team Oliver"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};