import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Starten Sie mit uns<br />
          in die Zukunft.
        </h2>
        <Button className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90">
          Kontaktieren Sie uns heute
        </Button>
      </div>
    </div>
  );
};