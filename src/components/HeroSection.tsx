export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="w-full border-b border-[#1C1C1E]/10"
      style={{ backgroundColor: "#F8F7F4", padding: "96px 0 80px" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-6"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1C1C1E",
              opacity: 0.45,
            }}
          >
            Бакалаврська робота · 2025
          </p>
          <h1
            id="hero-heading"
            className="font-light leading-[1.1] mb-8"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#1C1C1E",
              letterSpacing: "-0.02em",
            }}
          >
            Система управління{" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              навчальними заняттями
            </em>
          </h1>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1C1C1E",
              opacity: 0.6,
            }}
          >
            Веб-застосунок для організації, планування та моніторингу
            навчального процесу. Розроблено як кваліфікаційна робота бакалавра.
          </p>
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                backgroundColor: "#1C1C1E",
                color: "#F8F7F4",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Дізнатися більше
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all border"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                backgroundColor: "transparent",
                color: "#1C1C1E",
                textDecoration: "none",
                letterSpacing: "0.02em",
                borderColor: "#1C1C1E",
                opacity: 0.7,
              }}
            >
              Можливості системи
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
