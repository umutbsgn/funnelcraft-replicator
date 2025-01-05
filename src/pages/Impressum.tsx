const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F] p-8">
      <div className="max-w-4xl mx-auto bg-secondary/50 backdrop-blur-md p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-white">Impressum</h1>
        <div className="text-white space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <p>Data-UB</p>
          <p>Musterstraße 1</p>
          <p>12345 Musterstadt</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Kontakt</h3>
          <p>Telefon: +49 (0) XXX XXX XXX</p>
          <p>E-Mail: info@data-ub.de</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>Max Mustermann</p>
          <p>Musterstraße 1</p>
          <p>12345 Musterstadt</p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;