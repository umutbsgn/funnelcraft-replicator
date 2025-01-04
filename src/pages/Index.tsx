import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen" style={{
      background: 'rgb(200,222,249)',
      background: 'radial-gradient(circle, rgba(200,222,249,1) 0%, rgba(110,172,255,1) 36%, rgba(50,133,232,1) 100%)'
    }}>
      <Hero />
      <Partners />
      <Benefits />
      <Testimonials />
      <ProcessSteps />
      <Contact />
    </div>
  );
};

export default Index;