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

          <h4 className="text-lg font-semibold mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h4>
          <p className="text-gray-200">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten 
            können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
          <p className="text-gray-200">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
            personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten 
            zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
            jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die 
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Hosting</h3>
          <p className="text-gray-200">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          <p className="text-gray-200">
            Hetzner<br />
            Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen (nachfolgend Hetzner).<br />
            Details entnehmen Sie der Datenschutzerklärung von Hetzner: 
            <a href="https://www.hetzner.com/de/rechtliches/datenschutz" className="text-primary hover:text-primary/80 ml-1" target="_blank" rel="noopener noreferrer">
              https://www.hetzner.com/de/rechtliches/datenschutz
            </a>
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Cookies</h3>
          <p className="text-gray-200">
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem 
            Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) 
            oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres 
            Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst 
            löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Server-Log-Dateien</h3>
          <p className="text-gray-200">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside text-gray-200 ml-4">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="text-gray-200 mt-2">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Ihre Rechte als Betroffener</h3>
          <h4 className="text-lg font-semibold mt-4 mb-2">Recht auf Auskunft</h4>
          <p className="text-gray-200">
            Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene 
            Daten verarbeitet werden.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Recht auf Berichtigung</h4>
          <p className="text-gray-200">
            Sie haben das Recht, die unverzügliche Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Recht auf Löschung</h4>
          <p className="text-gray-200">
            Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit 
            nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer 
            rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder 
            Verteidigung von Rechtsansprüchen erforderlich ist.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">SSL- bzw. TLS-Verschlüsselung</h3>
          <p className="text-gray-200">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. 
            TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
            "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Schlussbestimmungen und Kontakt</h3>
          <p className="text-gray-200">
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
            Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
          </p>
          <p className="text-gray-200">
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
  );
};

export default Impressum;