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
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-y-2 animate-pulse"></div>
      </div>
      
      <Partners />
      
      {/* Divider 2 - Partners to Benefits */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform skew-y-2 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>
      
      <Benefits />
      
      {/* Divider 3 - Benefits to Testimonials */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-y-2 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <Testimonials />
      
      {/* Divider 4 - Testimonials to ProcessSteps */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform skew-y-2 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      <ProcessSteps />
      
      {/* Divider 5 - ProcessSteps to Contact */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -skew-y-2 animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <Contact />
    </div>
  );
};

export default Index;