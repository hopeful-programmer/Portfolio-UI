import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import AwardCard from "../ui/AwardCard";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function AwardsSection({ awards = [] }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  if (awards.length === 0) return null;

  return (
    <section id="awards" className="relative py-28 sm:py-36">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full
            opacity-10 blur-[100px]"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div ref={revealRef} className="scroll-reveal">
          <SectionHeading title={t("section_awards")} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {awards.map((award, i) => (
            <RevealOnScroll key={i} delay={i * 0.1} className="w-full max-w-sm flex">
              <AwardCard award={award} index={i} className="flex-1" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
