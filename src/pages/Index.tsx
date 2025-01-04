import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white">
      <Hero />
      <Partners />
      <Benefits />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;