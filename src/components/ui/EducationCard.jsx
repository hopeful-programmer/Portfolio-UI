import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Displays a single education entry as a styled card.
 * Accepts fields from EducationDto (camelCased by the JSON serialiser).
 */
export default function EducationCard({ education, index = 0 }) {
  const { lang } = useLanguage();
  const revealRef = useScrollReveal();

  const {
    institution,
    degree,
    fieldOfStudy,
    gpa,
    honors,
    location,
    startDate,
    endDate,
    isExpected,
  } = education;

  const startYear = startDate ? new Date(startDate).getFullYear() : "";
  const endLabel = isExpected
    ? lang === "ar"
      ? `متوقع ${endDate ? new Date(endDate).getFullYear() : "2026"}`
      : `Expected ${endDate ? new Date(endDate).getFullYear() : "2026"}`
    : endDate
    ? new Date(endDate).getFullYear()
    : lang === "ar"
    ? "حالياً"
    : "Present";

  return (
    <div
      ref={revealRef}
      className="scroll-reveal group relative rounded-2xl border border-[var(--border)]
        bg-[var(--glass)] p-6 sm:p-8 backdrop-blur-sm
        transition-all duration-300
        hover:border-[var(--accent)]/50 hover:shadow-[0_0_40px_var(--shadow-glow)]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Subtle glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
          transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at top left, var(--accent)/6%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* Left — degree + institution */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className="text-lg font-semibold text-[var(--text-primary)]"
              id={`education-degree-${index}`}
            >
              {degree} · {fieldOfStudy}
            </h3>
            {isExpected && (
              <span
                className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10
                  px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]"
              >
                {lang === "ar" ? "متوقع" : "Expected"}
              </span>
            )}
          </div>

          <p className="mt-1 font-medium text-[var(--accent)]">{institution}</p>

          {location && (
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              <i className="fa-solid fa-location-dot me-1.5 opacity-70" aria-hidden="true" />
              {location}
            </p>
          )}
        </div>

        {/* Right — date range */}
        <div className="shrink-0 text-sm text-[var(--text-secondary)]">
          {startYear} – {endLabel}
        </div>
      </div>

      {/* GPA + Honours row */}
      {(gpa || honors) && (
        <div className="relative mt-4 flex flex-wrap gap-2">
          {gpa && (
            <span
              className="inline-flex items-center gap-1.5 rounded-full
                border border-[var(--border)] bg-[var(--glass)]
                px-3 py-1 text-xs font-semibold text-[var(--text-primary)]"
            >
              <i className="fa-solid fa-star text-[var(--accent)] text-[10px]" aria-hidden="true" />
              GPA: {gpa}
            </span>
          )}
          {honors && (
            <span
              className="inline-flex items-center gap-1.5 rounded-full
                border border-[var(--border)] bg-[var(--glass)]
                px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
            >
              <i className="fa-solid fa-award text-[var(--accent)] text-[10px]" aria-hidden="true" />
              {honors}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
