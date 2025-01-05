const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F] p-8">
      <div className="max-w-4xl mx-auto bg-secondary/50 backdrop-blur-md p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-white">Impressum</h1>
        <div className="text-white space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <p>Data-UB</p>
          <p>Umut Basilgan</p>
          <p>(Einzelunternehmen)</p>
          <p>Online Präsenz</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Vertretungsberechtigter</h3>
          <p>Umut Basilgan</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-4">Kontakt</h3>
          <p>E-Mail: info@data-ub.de</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Datenschutzerklärung</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Datenschutz auf einen Blick</h3>
          <h4 className="text-lg font-semibold mt-4 mb-2">Allgemeine Hinweise</h4>
          <p className="text-gray-200">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
            aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Datenerfassung auf dieser Website</h3>
          <h4 className="text-lg font-semibold mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p className="text-gray-200">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
            Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
          <p className="text-gray-200">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten 
            handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung 
            beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. 
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, 
            sobald Sie diese Website betreten.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">Stand: Januar 2024</p>
            <p className="text-sm text-gray-400">© 2024 Data-UB. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;