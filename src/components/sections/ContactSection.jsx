import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import { Mail } from "lucide-react";

export default function ContactSection({ profile }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px]
            rounded-full opacity-10 blur-[140px]"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div ref={revealRef} className="scroll-reveal">
          <SectionHeading title={t("section_contact")} />
        </div>

        <div className="mx-auto max-w-xl text-center">
          <p className="mb-8 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {t("contact_description")}
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-xl
              bg-gradient-to-r from-[var(--accent)] to-[var(--accent-glow)]
              px-4 py-4 text-base font-semibold text-white
              shadow-[0_4px_24px_var(--shadow-glow)]
              transition-all duration-300
              hover:shadow-[0_8px_40px_var(--shadow-glow)]
              hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail size={20} />
            {profile.email}
          </a>

        </div>
      </div>
    </section>
  );
}
