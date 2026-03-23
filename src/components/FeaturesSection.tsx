const features = [
  {
    index: "I",
    title: "Управління заняттями",
    description:
      "Створення, редагування та видалення занять. Гнучке налаштування розкладу та параметрів кожного заняття.",
  },
  {
    index: "II",
    title: "Облік відвідуваності",
    description:
      "Автоматична фіксація присутності студентів на заняттях. Формування звітів та аналітики відвідуваності.",
  },
  {
    index: "III",
    title: "Навчальні матеріали",
    description:
      "Завантаження та розповсюдження навчальних ресурсів. Структурована бібліотека матеріалів за курсами.",
  },
  {
    index: "IV",
    title: "Оцінювання",
    description:
      "Ведення журналу оцінок, автоматичне підрахування середніх балів та формування відомостей.",
  },
  {
    index: "V",
    title: "Сповіщення",
    description:
      "Система нагадувань та сповіщень про майбутні заняття, дедлайни та зміни в розкладі.",
  },
  {
    index: "VI",
    title: "Ролі та доступ",
    description:
      "Розмежування прав доступу для адміністраторів, викладачів і студентів. Безпечна автентифікація.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="w-full border-b border-[#1C1C1E]/10"
      style={{ backgroundColor: "#F8F7F4", padding: "80px 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#1C1C1E",
                opacity: 0.45,
              }}
            >
              Можливості
            </p>
            <h2
              id="features-heading"
              className="font-light leading-[1.15]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#1C1C1E",
                letterSpacing: "-0.02em",
              }}
            >
              Що вміє{" "}
              <em style={{ fontStyle: "italic" }}>система</em>
            </h2>
          </div>
          <p
            className="text-xs sm:text-right max-w-xs"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1C1C1E",
              opacity: 0.45,
            }}
          >
            {features.length} ключових модулів
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[#1C1C1E]/10">
          {features.map((f, i) => (
            <article
              key={i}
              className="p-8 border-r border-b border-[#1C1C1E]/10 group"
            >
              <span
                className="block text-xs font-semibold tracking-widest mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#1C1C1E",
                  opacity: 0.2,
                }}
              >
                {f.index}
              </span>
              <h3
                className="font-light mb-3 leading-tight"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "1.1rem",
                  color: "#1C1C1E",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#1C1C1E",
                  opacity: 0.55,
                }}
              >
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
