export const Contact = () => {
  return (
    <section id="contact-section" className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-8 md:mb-12 animate-fadeIn opacity-0" style={{ animationDelay: "0.3s" }}>
          <img 
            src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
            alt="Logo" 
            className="h-12 md:h-16 w-auto mb-4 md:mb-6 animate-float"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400 mb-2">
            Kostenfreies Erstgespräch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
            Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen mit KI auf das nächste Level bringen können.
          </p>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent rounded-xl"
            style={{ 
              filter: 'blur(40px)',
              transform: 'scale(0.95)',
              zIndex: -1 
            }}
          />
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1" 
            style={{ 
              minWidth: "320px",
              height: "700px",
              background: "transparent",
              position: "relative",
              zIndex: 50,
            }}>
          </div>
          <script 
            type="text/javascript" 
            src="https://assets.calendly.com/assets/external/widget.js">
          </script>
        </div>
      </div>
    </section>
  );
};