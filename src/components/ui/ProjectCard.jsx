import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { ChevronDown, FolderOpen, Sparkles, Check, ExternalLink, Play } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  const { t, lang } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const { title, summary, summaryAr, description, descriptionAr, technologies, features, demoUrl, demoType } = project;
  const loc = (en, ar) => lang === "ar" ? (ar ?? en) : en;

  return (
    <article
      className="glass-card glow-hover group flex flex-col self-start overflow-hidden
        transition-all duration-400 ease-out hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
      id={`project-card-${index}`}
    >
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="mb-4 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl
              bg-[var(--accent)]/10 border border-[var(--accent)]/20
              transition-colors duration-300
              group-hover:bg-[var(--accent)]/20"
          >
            <FolderOpen size={18} className="text-[var(--accent)]" />
          </div>
          <h3
            className="text-lg font-semibold text-[var(--text-primary)]
              group-hover:text-[var(--accent)] transition-colors duration-300"
          >
            {title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          {loc(summary, summaryAr)}
        </p>
      </div>

      {/* Expandable Description + Features */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-4">
          <div className="border-t border-[var(--border)] pt-4">
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]" style={{ whiteSpace: 'pre-wrap' }}>
              {loc(description, descriptionAr)}
            </p>
          </div>

          {/* Features List */}
          {features && features.length > 0 && (
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-[var(--accent)]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {t("project_features")}
                </span>
              </div>

              <div className="rounded-xl border border-[var(--accent)]/10 bg-[var(--accent)]/[0.03] p-4">
                <ul className="flex flex-col gap-3 px-3 py-3">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="group/feat flex items-start gap-2.5 rounded-lg px-2 py-1.5
                        transition-colors duration-200 hover:bg-[var(--accent)]/[0.06]"
                      style={{
                        animationDelay: `${i * 0.05}s`,
                      }}
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center
                          rounded-md bg-[var(--accent)]/15 text-[var(--accent)]
                          transition-all duration-200
                          group-hover/feat:bg-[var(--accent)]/25 group-hover/feat:scale-110"
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-snug text-[var(--text-secondary)]
                        group-hover/feat:text-[var(--text-primary)] transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-[var(--border)] p-6 pt-4">
        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-md
                bg-[var(--accent)]/8 border border-[var(--accent)]/15
                px-2.5 py-1 text-xs font-medium text-[var(--accent)]
                transition-colors duration-200
                hover:bg-[var(--accent)]/15 hover:border-[var(--accent)]/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Expand Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="group/btn inline-flex items-center gap-1.5 text-sm font-medium
              text-[var(--text-secondary)] transition-colors duration-200
              hover:text-[var(--accent)] cursor-pointer"
            aria-expanded={expanded}
            id={`project-expand-${index}`}
          >
            {expanded ? t("project_read_less") : t("project_read_more")}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>

          {/* Demo Link */}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg
                border border-[var(--accent)]/30 bg-[var(--accent)]/8
                px-3 py-1.5 text-sm font-medium text-[var(--accent)]
                transition-all duration-200
                hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/15"
              id={`project-demo-${index}`}
            >
              {demoType === "video"
                ? <Play size={13} />
                : <ExternalLink size={13} />}
              {demoType === "video" ? t("project_demo_video") : t("project_demo_live")}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

