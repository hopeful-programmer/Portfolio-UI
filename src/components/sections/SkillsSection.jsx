import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import SkillChip from "../ui/SkillChip";

/** Groups an array of skill objects (or strings) by their `category` field. */
function groupByCategory(skills) {
  return skills.reduce((acc, skill) => {
    const cat =
      typeof skill === "string" ? null : (skill?.category ?? null);
    const key = cat ?? "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(skill);
    return acc;
  }, {});
}

export default function SkillsSection({ skills = [] }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  // Determine if we have categorised skills or a legacy flat list
  const hasCats = skills.some(
    (s) => typeof s === "object" && s !== null && s.category
  );
  const grouped = hasCats ? groupByCategory(skills) : null;

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

        {grouped ? (
          /* Categorised layout */
          <div className="mt-10 flex flex-col gap-10">
            {Object.entries(grouped).map(([category, catSkills]) => (
              <div key={category}>
                {/* Category label */}
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)]">
                  {category}
                </p>
                <div className="flex flex-wrap gap-3">
                  {catSkills.map((skill, i) => (
                    <SkillChip key={i} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Flat fallback */
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <SkillChip key={i} skill={skill} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
