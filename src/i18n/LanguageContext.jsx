import { createContext, useContext, useState, useCallback, useEffect } from "react";
import en from "./en";
import ar from "./ar";

const translations = { en, ar };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const dir = lang === "ar" ? "rtl" : "ltr";

  const t = useCallback(
    (key) => {
      return translations[lang]?.[key] ?? key;
    },
    [lang]
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  // Sync dir and lang attributes on the <html> element
  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [dir, lang]);

  return (
    <LanguageContext.Provider value={{ lang, dir, t, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
