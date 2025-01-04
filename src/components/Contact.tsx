export const Contact = () => {
  return (
    <section id="contact-section" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <img 
            src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
            alt="Logo" 
            className="h-12 md:h-16 w-auto mb-4 md:mb-6 animate-float"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center opacity-0 animate-revealUp mb-4" style={{ animationDelay: "0.3s" }}>
            Kostenfreies Erstgespräch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8 opacity-0 animate-revealUp" style={{ animationDelay: "0.6s" }}>
            Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen mit KI auf das nächste Level bringen können.
          </p>
        </div>
        
        {/* Calendly inline widget begin */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1" 
          style={{
            minWidth: "320px",
            height: "700px",
            background: "transparent"
          }}
        />
        {/* Calendly inline widget end */}
      </div>
    </section>
  );
};