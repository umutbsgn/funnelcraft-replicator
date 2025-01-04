import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0D0D1F]">
        <img 
          src="/lovable-uploads/58298d1d-3d76-43a6-93af-2718dda78873.png" 
          alt="Logo" 
          className="h-8"
        />
      </header>
      <Hero />
      <Partners />
      <Benefits />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;