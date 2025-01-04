export const Contact = () => {
  return (
    <section id="contact-section" className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto max-w-6xl px-4">
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
        
        <div className="relative w-full max-w-4xl mx-auto bg-white/5 rounded-lg p-4">
          <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151629&text_color=ffffff&primary_color=9B87F5"
            style={{
              minWidth: '320px',
              height: '700px',
              border: 'none',
              borderRadius: '8px',
              overflow: 'hidden'
            }}
          />
        </div>
      </div>
    </section>
  );
};