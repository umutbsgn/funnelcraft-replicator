export const Contact = () => {
  return (
    <section id="contact-section" className="relative py-32 md:py-48 bg-secondary/30" aria-labelledby="contact-title">
      {/* Glowing orbs */}
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-primary rounded-full animate-glow-star opacity-75"></div>
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-primary rounded-full animate-glow-star opacity-60" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <img 
            src="/lovable-uploads/de65568b-6851-426e-9810-672da23bd4a6.png" 
            alt="Data-UB Logo" 
            className="h-12 md:h-16 w-auto mb-8 md:mb-12 animate-float filter drop-shadow-lg"
            width="160"
            height="64"
          />
          <h2 id="contact-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-center opacity-0 animate-revealUp mb-8 relative" style={{ animationDelay: "0.3s" }}>
            Kostenfreies Erstgespräch
            <span className="absolute -inset-1 bg-primary/20 blur-xl animate-pulse-slow -z-10"></span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl mb-12 opacity-0 animate-revealUp" style={{ animationDelay: "0.6s" }}>
            Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen mit KI auf das nächste Level bringen können.
          </p>
        </div>
        
        <div 
          className="calendly-inline-widget rounded-xl shadow-[0_0_30px_rgba(155,135,245,0.3)] bg-black/20 backdrop-blur-xl relative overflow-hidden" 
          data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1" 
          style={{
            minWidth: "320px",
            height: "700px",
            background: "transparent"
          }}
          role="complementary"
          aria-label="Kalenderbuchung"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};