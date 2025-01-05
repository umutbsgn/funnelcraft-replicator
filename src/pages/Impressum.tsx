import { LegalHeader } from "@/components/LegalHeader";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F]">
      <LegalHeader />
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-secondary/50 backdrop-blur-md p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">Impressum</h1>
          <div className="text-white space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>Data-UB</p>
            <p>Umut Basilgan</p>
            <p>(Einzelunternehmen)</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Kontakt</h3>
            <p>E-Mail: info@data-ub.de</p>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400">Stand: Januar 2024</p>
              <p className="text-sm text-gray-400">© 2024 Data-UB. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;