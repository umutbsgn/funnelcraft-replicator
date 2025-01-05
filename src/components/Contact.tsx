import { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => {
    // Ensure Calendly is loaded and initialized
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact-section" className="w-full py-20 flex justify-center items-center">
      <div 
        className="calendly-inline-widget w-full max-w-4xl mx-auto rounded-lg shadow-xl" 
        data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151629&text_color=ffffff" 
        style={{
          minWidth: "320px",
          height: "700px",
          border: "none",
          backgroundColor: "#151629",
        }}
      />
    </section>
  );
};