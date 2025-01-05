export const ProcessSteps = () => {
  return (
    <div className="py-32 md:py-48 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-32 space-y-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Ihr Vorsprung beginnt hier.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            In 30 Minuten zu Ihrer maßgeschneiderten KI-Strategie.
          </h3>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-gray-300 font-semibold">
              Planung, Umsetzung, Betreuung und Service
            </p>
            <p className="text-xl md:text-2xl text-gray-400">
              Ihre Komplettlösung für zukunftssichere KI-Systeme.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:bg-black/30 hover:scale-105">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary animate-glow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 18C17.5186 16.7252 15.8139 16 14 16H10C8.18614 16 6.48137 16.7252 5 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-bold text-white">Discovery Call</h3>
            </div>
            <p className="text-gray-400">
              Buchen Sie Ihren  kostenfreie Erstberatung mit einem unserer Experten. Im Anschluss erhalten Sie Ihr maßgeschneidertes Erfolgskonzept.
            </p>
          </div>
          <div className="space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:bg-black/30 hover:scale-105">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary animate-glow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-bold text-white">Kick-Off Meeting</h3>
            </div>
            <p className="text-gray-400">
              Im gemeinsamen Kick-Off Meeting erfassen wir alle wichtigen Informationen und Zugänge. Anschließend starten wir direkt mit der Entwicklung Ihrer maßgeschneiderten KI-Lösung.
            </p>
          </div>
          <div className="space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:bg-black/30 hover:scale-105">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary animate-glow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-bold text-white">Wartung und Support</h3>
            </div>
            <p className="text-gray-400">
              Wir begleiten Sie als Ihr technischer Servicepartner und sichern den stabilen Betrieb Ihrer KI-Anwendungen. Von der  Wartung bis zum Support stehen wir Ihnen als langfristiger Technologiepartner zur Seite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};