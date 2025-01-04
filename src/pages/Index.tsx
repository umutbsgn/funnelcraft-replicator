import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F]">
      <Hero />
      
      {/* Divider 1 - Hero to Partners */}
      <div className="w-full h-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[#151629]/80 to-transparent backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F]/0 via-[#151629]/40 to-[#0D0D1F]/0"></div>
      </div>
      
      <Partners />
      
      {/* Divider 2 - Partners to Benefits */}
      <div className="w-full h-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[#151629]/80 to-transparent backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F]/0 via-[#151629]/40 to-[#0D0D1F]/0"></div>
      </div>
      
      <Benefits />
      
      {/* Divider 3 - Benefits to Testimonials */}
      <div className="w-full h-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[#151629]/80 to-transparent backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F]/0 via-[#151629]/40 to-[#0D0D1F]/0"></div>
      </div>
      
      <Testimonials />
      
      {/* Divider 4 - Testimonials to ProcessSteps */}
      <div className="w-full h-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[#151629]/80 to-transparent backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F]/0 via-[#151629]/40 to-[#0D0D1F]/0"></div>
      </div>
      
      <ProcessSteps />
      
      {/* Divider 5 - ProcessSteps to Contact */}
      <div className="w-full h-32 relative overflow-hidden bg-gradient-to-b from-transparent via-[#151629]/80 to-transparent backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-y-1/2 blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F]/0 via-[#151629]/40 to-[#0D0D1F]/0"></div>
      </div>
      
      <Contact />
    </div>
  );
};

export default Index;