export const ProcessSteps = () => {
  return (
    <div className="py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 space-y-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Starten Sie mit uns <br />
            <span className="text-gray-400">in die Zukunft.</span>
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Planung, Umsetzung, Wartung und Support –
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Ihr Rundum-sorglos-Paket für KI-Lösungen im Unternehmen.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-black/30">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 18C17.5186 16.7252 15.8139 16 14 16H10C8.18614 16 6.48137 16.7252 5 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-bold text-white">Discovery Call</h3>
            </div>
            <p className="text-gray-400">
              Buchen Sie einen unverbindlichen Discovery Call und profitieren Sie von einer kostenfreien Erstberatung. Im Anschluss erstellen wir für Sie ein individuelles Angebot.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-black/30">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-bold text-white">Kick-Off Meeting</h3>
            </div>
            <p className="text-gray-400">
              Unser Projektstart beginnt mit einem Kick-Off Meeting, in dem wir alle relevanten Informationen und Zugänge von Ihnen erhalten. Anschließend starten wir mit der Entwicklung Ihrer maßgeschneiderten KI-Automatisierung.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-black/30">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-bold text-white">Wartung und Support</h3>
            </div>
            <p className="text-gray-400">
              Als Full-Service-Agentur übernehmen wir gerne den Betrieb, die Wartung und den Support Ihrer KI-Lösung. Wir stehen Ihnen als langfristiger Partner zur Seite, damit Ihre Automatisierung jederzeit reibungslos läuft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};