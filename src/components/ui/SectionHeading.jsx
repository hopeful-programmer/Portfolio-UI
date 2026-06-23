export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <h2
        className="text-3xl font-bold tracking-tight text-[var(--text-primary)]
          sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-[var(--text-secondary)] max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <span
          className="inline-block h-1 w-16 rounded-full
            bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
