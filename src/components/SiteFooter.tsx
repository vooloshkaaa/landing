export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#F8F7F4", padding: "40px 0 32px" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#1C1C1E]/10 pt-8">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#1C1C1E",
              }}
            >
              LMS
            </span>
            <span
              className="w-px h-3 inline-block"
              style={{ backgroundColor: "#1C1C1E", opacity: 0.2 }}
            />
            <span
              className="text-xs"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#1C1C1E",
                opacity: 0.45,
              }}
            >
              Lessons Management System
            </span>
          </div>
          <p
            className="text-xs"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1C1C1E",
              opacity: 0.35,
            }}
          >
            © {year} · Бакалаврська робота
          </p>
        </div>
      </div>
    </footer>
  );
}
