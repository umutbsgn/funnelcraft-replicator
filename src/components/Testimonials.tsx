export const Testimonials = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Was unsere Kunden sagen:
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-secondary p-8 rounded-lg">
            <p className="text-lg mb-4">
              "Die Lösung war absolut top und auch vom Global UX Lead der Ottobock als sehr gute Kommunikation bezeichnet. Das Feedback wurde super schnell umgesetzt und geliefert."
            </p>
            <p className="font-bold">- Jakob Bruntner</p>
            <p className="text-sm text-gray-400">Chief Operating Officer, Ottobock</p>
          </div>
          <div className="bg-secondary p-8 rounded-lg">
            <p className="text-lg mb-4">
              "Kein langes Warten mehr, alles digital."
            </p>
            <p className="font-bold">- Sarah Meyer</p>
            <p className="text-sm text-gray-400">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};