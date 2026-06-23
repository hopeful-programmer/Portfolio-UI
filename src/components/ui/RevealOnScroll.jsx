import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function RevealOnScroll({ children, delay = 0, className = "" }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
