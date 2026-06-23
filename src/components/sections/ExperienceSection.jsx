import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import ExperienceCard from "../ui/ExperienceCard";

export default function ExperienceSection({ experiences = [] }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/4 h-[300px] w-[300px] -translate-y-1/2 rounded-full
            opacity-10 blur-[100px]"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div ref={revealRef} className="scroll-reveal">
          <SectionHeading title={t("section_experience")} />
        </div>

        <div className="relative mt-8 mx-auto max-w-4xl">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
