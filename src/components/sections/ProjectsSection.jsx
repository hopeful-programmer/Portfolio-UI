import { useLanguage } from "../../i18n/LanguageContext";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function ProjectsSection({ projects = [] }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      {/* Subtle divider line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      </div>

      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full
            opacity-10 blur-[120px]"
          style={{ background: "var(--accent-secondary)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        <div ref={revealRef} className="scroll-reveal">
          <SectionHeading title={t("section_projects")} />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <RevealOnScroll key={i} delay={i * 0.12}>
              <ProjectCard project={project} index={i} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
