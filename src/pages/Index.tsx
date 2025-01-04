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
      
      {/* Divider 1 */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -skew-y-2"></div>
      </div>
      
      <Partners />
      
      {/* Divider 2 */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform skew-y-2"></div>
      </div>
      
      <Benefits />
      
      {/* Divider 3 */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -skew-y-2"></div>
      </div>
      
      <Testimonials />
      
      {/* Divider 4 */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform skew-y-2"></div>
      </div>
      
      <ProcessSteps />
      
      {/* Divider 5 */}
      <div className="w-full h-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -skew-y-2"></div>
      </div>
      
      <Contact />
    </div>
  );
};

export default Index;