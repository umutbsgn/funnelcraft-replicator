export const Contact = () => {
  return (
    <section id="contact-section" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8 transition-all duration-300 ease-in-out hover:scale-105">
          <img 
            src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
            alt="Logo" 
            className="h-10 w-auto mb-4 transition-transform duration-300 hover:scale-110"
          />
          <h2 className="text-3xl font-bold text-center transition-colors duration-300 hover:text-primary">Kostenfreies Erstgespräch</h2>
        </div>
        <div className="calendly-inline-widget" 
             data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1" 
             style={{ minWidth: "320px", height: "700px" }}>
        </div>
      </div>
    </section>
  );
};