import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import CertificationCard from "../ui/CertificationCard";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function CertificationsSection({ certifications = [] }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  if (certifications.length === 0) return null;

  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full
            opacity-10 blur-[120px]"
          style={{ background: "var(--accent-secondary)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 h-[250px] w-[250px] rounded-full
            opacity-10 blur-[100px]"
          style={{ background: "var(--accent)" }}
        />
      </div>


      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div ref={revealRef} className="scroll-reveal">
          <SectionHeading title={t("section_certifications")} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={i} delay={i * 0.1} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex">
              <CertificationCard certification={cert} index={i} className="flex-1" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
