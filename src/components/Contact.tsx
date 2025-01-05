export const Contact = () => {
  return (
    <section id="contact-section" className="relative py-32 md:py-48 bg-secondary/30" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <img 
            src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
            alt="Data-UB Logo" 
            className="h-12 md:h-16 w-auto mb-8 md:mb-12 animate-float filter drop-shadow-lg"
            width="160"
            height="64"
          />
          <h2 id="contact-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
            Kostenfreies Erstgespräch
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl mb-12">
            Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen mit KI auf das nächste Level bringen können.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1" 
          style={{minWidth:"320px",height:"700px"}}
        ></div>
      </div>
    </section>
  );
};