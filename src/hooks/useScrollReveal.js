import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the ref element.
 * Adds the `revealed` CSS class when the element enters the viewport.
 *
 * @param {object} options
 * @param {number} [options.threshold=0.15] - visibility threshold (0-1)
 * @param {string} [options.rootMargin="0px 0px -60px 0px"] - observer margin
 * @returns {React.RefObject}
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
