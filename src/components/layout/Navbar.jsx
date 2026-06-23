import { useState, useEffect } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { Menu, X, Languages, Sun, Moon } from "lucide-react";

const navLinks = [
  { key: "nav_about", href: "#about" },
  { key: "nav_skills", href: "#skills" },
  { key: "nav_experience", href: "#experience" },
  { key: "nav_awards", href: "#awards" },
  { key: "nav_certifications", href: "#certifications" },
  { key: "nav_projects", href: "#projects" },
];

export default function Navbar() {
  const { t, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = navLinks[0].href.slice(1);
      for (const { href } of navLinks) {
        const el = document.getElementById(href.slice(1));
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.45) {
          current = href.slice(1);
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--glass-border)] bg-[var(--bg-primary)]/80 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
      id="navbar"
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a
          href="#about"
          className="text-xl font-bold tracking-tight gradient-text
            transition-opacity duration-200 hover:opacity-80"
          id="nav-logo"
        >
          Luai Alsakkaf
        </a>

        {/* Desktop Nav Links — centered */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              aria-current={activeSection === href.slice(1) ? "true" : undefined}
              className="rounded-lg px-4 py-2 text-sm font-medium
                text-[var(--text-secondary)] transition-all duration-200
                hover:bg-[var(--glass)] hover:text-[var(--text-primary)]"
              id={`nav-link-${key}`}
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Actions — right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)]
              bg-[var(--glass)] px-3 py-2 text-sm font-medium text-[var(--text-secondary)]
              transition-all duration-200
              hover:border-[var(--accent)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label="Toggle language"
            id="lang-toggle-btn"
          >
            <Languages size={16} />
            <span className="hidden sm:inline">{t("lang_toggle")}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border)]
              bg-[var(--glass)] p-2 text-[var(--text-secondary)]
              transition-all duration-200
              hover:border-[var(--accent)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label={theme === "dark" ? t("theme_switch_light") : t("theme_switch_dark")}
            id="theme-toggle-btn"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border)]
              bg-[var(--glass)] p-2 text-[var(--text-secondary)]
              transition-all duration-200
              hover:border-[var(--accent)] hover:text-[var(--text-primary)] md:hidden cursor-pointer"
            aria-label={menuOpen ? t("menu_close") : t("menu_open")}
            aria-expanded={menuOpen}
            id="mobile-menu-btn"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[var(--glass-border)]
          bg-[var(--bg-primary)]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMenuOpen(false)}
              aria-current={activeSection === href.slice(1) ? "true" : undefined}
              className="rounded-lg px-4 py-3 text-sm font-medium
                text-[var(--text-secondary)] transition-all duration-200
                hover:bg-[var(--glass)] hover:text-[var(--text-primary)]"
            >
              {t(key)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
