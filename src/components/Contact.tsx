import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  useEffect(() => {
    // Ensure Calendly is loaded and initialized
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Function to remove Calendly branding
    const removeCalendlyBranding = () => {
      const brandingElements = document.querySelectorAll('a[href*="calendly.com"]');
      brandingElements.forEach(element => {
        if (element) {
          element.remove();
        }
      });
    };

    // Initial check
    removeCalendlyBranding();

    // Set up an observer to watch for the branding element
    const observer = new MutationObserver(() => {
      removeCalendlyBranding();
    });

    // Start observing with a more comprehensive configuration
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });

    // Set up an interval to periodically check and remove the branding
    const interval = setInterval(removeCalendlyBranding, 5000);

    return () => {
      // Cleanup
      document.body.removeChild(script);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="contact-section" className="w-full py-20 flex flex-col justify-center items-center">
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
      <div className="w-full max-w-4xl mx-auto mt-4 flex justify-end gap-4 text-sm text-gray-400">
        <Link to="/impressum" className="hover:text-primary transition-colors">
          Impressum
        </Link>
        <Link to="/datenschutz" className="hover:text-primary transition-colors">
          Datenschutzerklärung
        </Link>
      </div>
    </section>
  );
};