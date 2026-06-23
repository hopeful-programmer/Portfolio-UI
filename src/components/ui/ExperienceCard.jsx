import { useLanguage } from "../../i18n/LanguageContext";
import { MapPin, Calendar } from "lucide-react";

function formatDate(dateStr, lang = "en") {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", { month: "short", year: "numeric" });
}

export default function ExperienceCard({ experience, index = 0 }) {
  const { t, lang } = useLanguage();
  const { organization, role, roleAr, location, startDate, endDate, description, descriptionAr } = experience;
  const loc = (en, ar) => lang === "ar" ? (ar ?? en) : en;

  const start = formatDate(startDate, lang);
  const end = endDate ? formatDate(endDate, lang) : t("experience_present");
  const isCurrent = !endDate;

  return (
    <div
      className="group relative flex gap-6 pb-12 last:pb-0"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Timeline Node */}
      <div className="relative flex flex-col items-center">
        <div
          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full border-2 transition-all duration-300
            ${
              isCurrent
                ? "border-[var(--accent-secondary)] bg-[var(--accent-secondary)]/20"
                : "border-[var(--accent)] bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20"
            }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isCurrent ? "bg-[var(--accent-secondary)]" : "bg-[var(--accent)]"
            }`}
          />
          {isCurrent && (
            <span
              className="absolute inset-0 rounded-full border-2 border-[var(--accent-secondary)] opacity-50"
              style={{ animation: "pulse-ring 2s ease-out infinite" }}
              aria-hidden="true"
            />
          )}
        </div>
        {/* Connector line */}
        <div
          className="w-0.5 grow bg-gradient-to-b from-[var(--border-light)] to-transparent
            group-last:hidden"
        />
      </div>

      {/* Content Card */}
      <div
        className="glass-card glow-hover flex-1 p-6 transition-all duration-300
          group-hover:border-[var(--accent)]/30"
      >
        {/* Header */}
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {loc(role, roleAr)}
            </h3>
            <p className="text-[var(--accent)] font-medium">{organization}</p>
          </div>
          {isCurrent && (
            <span
              className="inline-flex items-center rounded-full
                bg-[var(--accent-secondary)]/15 px-3 py-1 text-xs font-semibold
                text-[var(--accent-secondary)] border border-[var(--accent-secondary)]/30"
            >
              {t("experience_present")}
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} className="text-[var(--text-muted)]" />
            {start} — {end}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-[var(--text-muted)]" />
            {location}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          {loc(description, descriptionAr)}
        </p>
      </div>
    </div>
  );
}
