export default function SiteHeader() {
  return (
    <header
      className="w-full border-b border-[#1C1C1E]/10"
      style={{ backgroundColor: "#F8F7F4" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1C1C1E",
              letterSpacing: "0.18em",
            }}
          >
            LMS
          </span>
          <span
            className="w-px h-4 inline-block"
            style={{ backgroundColor: "#1C1C1E", opacity: 0.2 }}
          />
          <span
            className="text-xs tracking-wide"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1C1C1E",
              opacity: 0.55,
            }}
          >
            Lessons Management System
          </span>
        </div>
        <nav
          aria-label="Primary navigation"
          className="hidden sm:flex items-center gap-6"
        >
          {["Головна", "Про систему", "Можливості"].map((item, i) => (
            <a
              key={i}
              href={`#${["hero", "about", "features"][i]}`}
              className="text-xs tracking-wide transition-opacity hover:opacity-100"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#1C1C1E",
                opacity: 0.55,
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
