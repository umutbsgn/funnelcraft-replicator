export const Contact = () => {
  return (
    <section id="contact-section" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Kontakt</h2>
        <div className="calendly-inline-widget" 
             data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1" 
             style={{ minWidth: "320px", height: "700px" }}>
        </div>
      </div>
    </section>
  );
};