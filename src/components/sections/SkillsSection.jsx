import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import SkillChip from "../ui/SkillChip";

export default function SkillsSection({ skills = [] }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div ref={revealRef} className="scroll-reveal">
          <SectionHeading title={t("section_skills")} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <SkillChip key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
