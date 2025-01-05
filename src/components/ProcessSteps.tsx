export const ProcessSteps = () => {
  return (
    <div className="py-32 md:py-48 px-4 md:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D1F] via-[#151629] to-[#0D0D1F] opacity-90" />
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-starTwinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-32 space-y-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Fokus auf das Kerngeschäft
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white drop-shadow-[0_0_10px_rgba(155,135,245,0.5)]">
            nicht auf Verwaltungsaufgaben
          </h3>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-gray-300 font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Planung, Umsetzung, Betreuung und Service
            </p>
            <p className="text-xl md:text-2xl text-gray-400 tracking-wide">
              Ihre Komplettlösung für zukunftssichere KI-Systeme.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Discovery Call Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75" />
            <div className="relative space-y-4 p-8 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-primary/50 hover:bg-black/50 group-hover:scale-[1.02]">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-primary animate-glow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 18C17.5186 16.7252 15.8139 16 14 16H10C8.18614 16 6.48137 16.7252 5 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">Discovery Call</h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Buchen Sie Ihre kostenfreie Erstberatung mit einem unserer Experten. Im Anschluss erhalten Sie Ihr maßgeschneidertes Erfolgskonzept.
              </p>
            </div>
          </div>

          {/* Kick-Off Meeting Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75" />
            <div className="relative space-y-4 p-8 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-primary/50 hover:bg-black/50 group-hover:scale-[1.02]">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-primary animate-glow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">Kick-Off Meeting</h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Im gemeinsamen Kick-Off Meeting erfassen wir alle wichtigen Informationen und Zugänge. Anschließend starten wir direkt mit der Entwicklung Ihrer maßgeschneiderten KI-Lösung.
              </p>
            </div>
          </div>

          {/* Support Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500 opacity-75" />
            <div className="relative space-y-4 p-8 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-primary/50 hover:bg-black/50 group-hover:scale-[1.02]">
              <div className="flex items-center space-x-3">
                <svg className="w-8 h-8 text-primary animate-glow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">Wartung und Support</h3>
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Wir begleiten Sie als Ihr technischer Servicepartner und sichern den stabilen Betrieb Ihrer KI-Anwendungen. Von der Wartung bis zum Support stehen wir Ihnen als langfristiger Technologiepartner zur Seite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};