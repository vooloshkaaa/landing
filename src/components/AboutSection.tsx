export default function AboutSection() {
  const stats = [
    { value: "01", label: "Мета роботи" },
    { value: "02", label: "Об'єкт дослідження" },
    { value: "03", label: "Практичний результат" },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full border-b border-[#1C1C1E]/10"
      style={{ backgroundColor: "#F8F7F4", padding: "80px 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <p
              className="text-xs tracking-[0.22em] uppercase mb-5"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#1C1C1E",
                opacity: 0.45,
              }}
            >
              Про систему
            </p>
            <h2
              id="about-heading"
              className="font-light leading-[1.15] mb-6"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1C1C1E",
                letterSpacing: "-0.02em",
              }}
            >
              Автоматизація{" "}
              <em style={{ fontStyle: "italic" }}>навчального процесу</em>
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#1C1C1E",
                opacity: 0.6,
              }}
            >
              LMS — це програмний засіб для ефективного управління заняттями,
              розкладом та навчальними матеріалами. Система спрощує взаємодію
              між викладачами та студентами.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#1C1C1E",
                opacity: 0.6,
              }}
            >
              Розроблено з використанням сучасних веб-технологій та
              дотриманням принципів семантичної розмітки, доступності та
              відповідності стандартам W3C.
            </p>
          </div>

          {/* Right column — stat list */}
          <div className="flex flex-col gap-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-start gap-6 py-6 border-t border-[#1C1C1E]/10"
              >
                <span
                  className="text-xs font-semibold tracking-widest"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#1C1C1E",
                    opacity: 0.25,
                    minWidth: "2rem",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#1C1C1E",
                    opacity: 0.75,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
            <div className="border-t border-[#1C1C1E]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
