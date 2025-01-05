import { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => {
    // Ensure Calendly is loaded and initialized
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Function to remove Calendly branding
    const removeCalendlyBranding = () => {
      const brandingElement = document.querySelector('a[href*="calendly.com/de"]');
      if (brandingElement) {
        brandingElement.remove();
      }
    };

    // Set up an observer to watch for the branding element
    const observer = new MutationObserver((mutations, obs) => {
      const brandingElement = document.querySelector('a[href*="calendly.com/de"]');
      if (brandingElement) {
        removeCalendlyBranding();
        // Keep observing in case Calendly re-adds the element
        setTimeout(removeCalendlyBranding, 1000); // Additional check after 1 second
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      // Cleanup
      document.body.removeChild(script);
      observer.disconnect();
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
