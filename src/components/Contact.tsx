export const Contact = () => {
  return (
    <section className="w-full py-20 flex justify-center items-center bg-[#151629]">
      <div 
        className="calendly-inline-widget w-full max-w-4xl mx-auto" 
        data-url="https://calendly.com/data_ub/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151629&text_color=ffffff" 
        style={{
          minWidth: "320px",
          height: "700px",
          border: "none"
        }}
      ></div>
    </section>
  );
};