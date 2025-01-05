import { LegalHeader } from "@/components/LegalHeader";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D1F] via-[#151629] to-[#0D0D1F]">
      <LegalHeader />
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-secondary/50 backdrop-blur-md p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">Datenschutzerklärung</h1>
          <div className="text-white space-y-4">
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Wie erfassen wir Ihre Daten?</h3>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Wofür nutzen wir Ihre Daten?</h3>
            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
            <p>Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Server-Log-Dateien</h3>
            <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Kontakt</h2>
            <p>Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an:</p>
            <p className="mt-2">
              Data-UB<br />
              Umut Basilgan<br />
              E-Mail: info@data-ub.de
            </p>

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

export default Datenschutz;