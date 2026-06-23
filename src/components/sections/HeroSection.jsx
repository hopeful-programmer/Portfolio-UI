import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SocialBar from "../ui/SocialBar";
import { Mail, Download, ArrowDown } from "lucide-react";

export default function HeroSection({ profile }) {
  const { t, lang } = useLanguage();
  const revealRef = useScrollReveal({ threshold: 0.1 });
  const { fullName, jobTitle, jobTitleAr, summary, summaryAr, email, resumeUrl, profileImageUrl, socialLinks } = profile;
  const loc = (en, ar) => lang === "ar" ? (ar ?? en) : en;

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-20 blur-[140px]"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "radial-gradient(circle, var(--accent-secondary), transparent 70%)" }}
        />
      </div>

      <div
        ref={revealRef}
        className="scroll-reveal relative z-10 mx-auto w-full max-w-4xl px-6 py-32 text-center"
      >
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-full opacity-60 blur-sm"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
              }}
              aria-hidden="true"
            />
            <img
              src={profileImageUrl}
              alt={fullName}
              className="relative h-32 w-32 rounded-full opacity-90 border-2 border-[var(--bg-primary)] object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="gradient-text">{fullName}</span>
        </h1>

        {/* Job Title */}
        <p className="mb-6 text-lg font-medium tracking-wide text-[var(--text-secondary)] sm:text-xl md:text-2xl">
          {loc(jobTitle, jobTitleAr)}
        </p>

        {/* Summary */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {loc(summary, summaryAr)}
        </p>

        {/* CTA Buttons */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-2 rounded-xl
              bg-gradient-to-r from-[var(--accent)] to-[var(--accent-glow)]
              px-4 py-4 text-sm font-semibold text-white
              shadow-[0_4px_24px_var(--shadow-glow)]
              transition-all duration-300
              hover:shadow-[0_8px_40px_var(--shadow-glow)]
              hover:-translate-y-0.5 active:translate-y-0"
            id="hero-email-btn"
          >
            <Mail size={18} />
            {t("hero_email_btn")}
          </a>

          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl
                border border-[var(--border)] bg-[var(--glass)]
                px-4 py-4 text-sm font-semibold text-[var(--text-primary)]
                transition-all duration-300
                hover:border-[var(--accent)] hover:bg-[var(--accent)]/10
                hover:-translate-y-0.5 active:translate-y-0"
              id="hero-resume-btn"
            >
              <Download size={18} />
              {t("hero_resume_btn")}
            </a>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center">
          <SocialBar socialLinks={socialLinks} />
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-[var(--text-muted)]
              transition-colors duration-300 hover:text-[var(--accent)]"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={20} style={{ animation: "float 2s ease-in-out infinite" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
