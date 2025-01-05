const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F] p-8">
      <div className="max-w-4xl mx-auto bg-secondary/50 backdrop-blur-md p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-white">Datenschutzerklärung</h1>
        <div className="text-white space-y-4">
          <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Datenerfassung auf dieser Website</h3>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei einem professionellen Hosting-Dienstleister.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;