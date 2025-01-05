import { LegalHeader } from "@/components/LegalHeader";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F]">
      <LegalHeader />
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-secondary/50 backdrop-blur-md p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">Impressum</h1>
          
          <div className="text-white space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p>Data-UB</p>
              <p>Umut Basilgan</p>
              <p>(Einzelunternehmen)</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p>E-Mail: info@data-ub.de</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Datenschutz auf einen Blick</h2>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Datenerfassung auf dieser Website</h3>
                <h4 className="text-lg font-medium mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Wofür nutzen wir Ihre Daten?</h4>
                <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hinweis zur verantwortlichen Stelle</h2>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mt-2">Data-UB</p>
              <p>Umut Basilgan</p>
              <p>E-Mail: info@data-ub.de</p>
              <p className="mt-4">Verantwortliche Stelle ist die natürliche Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
            </section>

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