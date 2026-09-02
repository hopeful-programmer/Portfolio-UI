/**
 * Renders a single skill pill.
 * `skill` can be either a plain string (legacy) or a { name, category } object
 * as returned by the updated SkillDto API shape.
 */
export default function SkillChip({ skill, index = 0 }) {
  const label = typeof skill === "string" ? skill : skill?.name ?? "";

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full
        border border-[var(--border)] bg-[var(--glass)]
        px-4 py-2 text-sm font-medium text-[var(--text-primary)]
        transition-all duration-300 ease-out
        hover:border-[var(--accent)] hover:bg-[var(--accent)]/10
        hover:shadow-[0_0_20px_var(--shadow-glow)]
        hover:text-white cursor-default
        animate-[fade-in-up_0.5s_ease-out_both]"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]
          transition-all duration-300"
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
