import { Trophy, Calendar } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

export default function AwardCard({ award, index = 0, className = "" }) {
  const { lang } = useLanguage();
  const { title, titleAr, issuingOrganization, year, description, descriptionAr } = award;
  const loc = (en, ar) => lang === "ar" ? (ar ?? en) : en;

  return (
    <article
      className={`glass-card glow-hover group flex flex-col items-center overflow-hidden
        text-center ${className}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col items-center p-6 transition-transform duration-300 ease-out group-hover:-translate-y-1">
        {/* Icon */}
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl
            bg-[var(--accent)]/10 border border-[var(--accent)]/20
            transition-all duration-300
            group-hover:bg-[var(--accent)]/20 group-hover:scale-110"
        >
          <Trophy size={22} className="text-[var(--accent)]" />
        </div>

        {/* Title & Org */}
        <h3
          className="text-lg font-semibold text-[var(--text-primary)]
            group-hover:text-[var(--accent)] transition-colors duration-300"
        >
          {loc(title, titleAr)}
        </h3>
        <p className="mt-1 text-sm font-medium text-[var(--accent-secondary)]">
          {issuingOrganization}
        </p>

        {/* Year */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-[var(--text-secondary)]">
          <Calendar size={14} className="text-[var(--text-muted)]" />
          <span>{year}</span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          {loc(description, descriptionAr)}
        </p>
      </div>
    </article>
  );
}
