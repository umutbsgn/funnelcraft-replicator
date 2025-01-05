export const Testimonials = () => {
  return (
    <div className="relative py-32 md:py-48 px-4 md:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-starTwinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              backgroundColor: '#9B87F5',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 md:mb-32 text-center">
          <span className="relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[0_0_25px_rgba(155,135,245,0.7)]">
              Was unsere Kunden nach 3 Monaten berichten:
            </span>
            <div className="absolute -inset-1 bg-primary/20 blur-lg animate-pulse rounded-lg" />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* First Testimonial */}
          <div 
            className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            {/* Content Container */}
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl">
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white/90 transition-opacity duration-300 group-hover:text-white">
                "Das Team hat uns echt begeistert! Von Tag 1 an war klar: Die wissen genau, was sie tun. Besonders cool war, wie schnell alles ging. Unser System läuft jetzt super smooth und das Feedback vom ganzen Team ist grandios. Die beste Entscheidung, die wir treffen konnten!"
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg text-primary group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(155,135,245,0.7)]">
                  - Jan Bergmann
                </p>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Head of Digital
                </p>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div 
            className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02]"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            {/* Content Container */}
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl">
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-white/90 transition-opacity duration-300 group-hover:text-white">
                "Die Zusammenarbeit war einfach genial! Endlich ein Team, das nicht nur zuhört, sondern direkt versteht und umsetzt. Die Kommunikation war top, die Lösungen kreativ und das Ergebnis übertrifft alle Erwartungen. Meine Mitarbeiter sind happy und die Produktivität ist durch die Decke gegangen!"
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg text-primary group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(155,135,245,0.7)]">
                  - Sarah Weber
                </p>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Geschäftsführerin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};