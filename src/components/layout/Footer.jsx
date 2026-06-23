import { useLanguage } from "../../i18n/LanguageContext";
import SocialBar from "../ui/SocialBar";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer({ profile }) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-[var(--border)] bg-[var(--bg-secondary)]"
      id="footer"
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        {/* Top row: 3-column layout */}
        <div
          className="grid gap-8 sm:gap-6 text-center sm:text-start"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            alignItems: "center",
          }}
        >
          {/* Stacked layout — centered on mobile, row on desktop */}
          <div
            className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between"
          >
            {/* Branding */}
            <div className="text-center sm:text-start" style={{ minWidth: "180px" }}>
              <p className="text-xl font-bold gradient-text" style={{ marginBottom: "0.25rem" }}>
                {profile.fullName}
              </p>
              <p className="text-sm text-[var(--text-muted)]">{profile.jobTitle}</p>
            </div>

            {/* Social Icons — center */}
            <div className="flex justify-center">
              <SocialBar socialLinks={profile.socialLinks} />
            </div>

            {/* Back to top — right */}
            <div className="flex justify-center sm:justify-end" style={{ minWidth: "180px" }}>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)]
                  bg-[var(--glass)] text-sm font-medium text-[var(--text-secondary)]
                  transition-all duration-300
                  hover:border-[var(--accent)] hover:text-[var(--accent)]
                  hover:-translate-y-0.5 cursor-pointer"
                style={{ padding: "0.625rem 1rem" }}
                aria-label={t("scroll_to_top")}
                id="scroll-to-top-btn"
              >
                <ArrowUp size={16} />
                <span className="text-xs">{t("scroll_to_top")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t border-[var(--border)]"
          style={{ marginTop: "2rem", paddingTop: "1.5rem" }}
        >
          <div className="flex flex-col items-center gap-1">
            <p className="text-xs text-[var(--text-muted)]">
              © {currentYear} {profile.fullName}. {t("footer_rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
