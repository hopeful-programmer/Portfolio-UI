import { useLanguage } from "../../i18n/LanguageContext";
import { Award, Calendar, ExternalLink } from "lucide-react";

function formatDate(dateStr, lang = "en") {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", { month: "short", year: "numeric" });
}

export default function CertificationCard({ certification, index = 0, className = "" }) {
  const { t, lang } = useLanguage();
  const { name, issuingOrganization, issueDate, expirationDate, credentialUrl } =
    certification;

  const issued = formatDate(issueDate, lang);
  const expires = expirationDate ? formatDate(expirationDate, lang) : null;
  const isExpired = expirationDate && new Date(expirationDate) < new Date();

  return (
    <article
      className={`glass-card glow-hover group flex flex-col items-center overflow-hidden
        text-center transition-all duration-400 ease-out hover:-translate-y-1 ${className}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      id={`certification-card-${index}`}
    >
      <div className="flex flex-col items-center p-6">
        {/* Icon */}
        <div
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl
            bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20
            transition-all duration-300
            group-hover:bg-[var(--accent-secondary)]/20 group-hover:scale-110"
        >
          <Award size={22} className="text-[var(--accent-secondary)]" />
        </div>

        {/* Title & Org */}
        <h3
          className="text-lg font-semibold text-[var(--text-primary)]
            group-hover:text-[var(--accent-secondary)] transition-colors duration-300"
        >
          {name}
        </h3>
        <p className="mt-1 text-sm font-medium text-[var(--accent)]">
          {issuingOrganization}
        </p>

        {/* Date & Status */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--text-secondary)]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} className="text-[var(--text-muted)]" />
            {t("certification_issued")}: {issued}
          </span>

          {expires && (
            <span className="inline-flex items-center gap-1.5">
              {isExpired
                ? t("certification_expired")
                : (
                  <>
                    <Calendar size={14} className="text-[var(--text-muted)]" />
                    {`${t("certification_expires")}: ${expires}`}
                  </>
                )}
            </span>
          )}

          {!expirationDate && (
            <span
              className="inline-flex items-center rounded-full
                bg-[var(--accent-secondary)]/15 px-2.5 py-0.5 text-xs font-semibold
                text-[var(--accent-secondary)] border border-[var(--accent-secondary)]/30"
            >
              {t("certification_no_expiry")}
            </span>
          )}
        </div>

        {/* Verify Link */}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium
              text-[var(--text-secondary)] transition-colors duration-200
              hover:text-[var(--accent-secondary)]"
            id={`certification-link-${index}`}
          >
            {t("certification_verify")}
            <ExternalLink
              size={14}
              className="transition-transform duration-200 group-hover/link:translate-x-0.5
                group-hover/link:-translate-y-0.5"
            />
          </a>
        )}
      </div>
    </article>
  );
}
