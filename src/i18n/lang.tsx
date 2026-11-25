import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { uiStrings } from "./ui";

export type Lang = "en" | "fa";

const FA_PREFIX = "/get-git/fa";

export function langFromPath(pathname: string): Lang {
  const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  return clean === FA_PREFIX || clean.startsWith(`${FA_PREFIX}/`)
    ? "fa"
    : "en";
}

export function localizedPath(pathname: string, lang: Lang): string {
  const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const isFa = clean === FA_PREFIX || clean.startsWith(`${FA_PREFIX}/`);
  const base = isFa ? "/get-git" + clean.slice(FA_PREFIX.length) : clean;
  if (lang === "fa") {
    if (base === "/" || base === "/get-git" || base === "") return "/get-git/fa";
    return FA_PREFIX + base.slice("/get-git".length);
  }
  if (base === "/" || base === "/get-git" || base === "") return "/get-git/";
  return base;
}

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Lang>(() => langFromPath(pathname));

  // The path wins over any stored preference: sync on every location change.
  useEffect(() => {
    const fromPath = langFromPath(pathname);
    setLangState(fromPath);
    try {
      localStorage.setItem("get-git-lang", fromPath);
    } catch {
      // storage unavailable (private mode, etc.) — lang still works from the path
    }
  }, [pathname]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.title =
      lang === "fa"
        ? "گت‌گیت — گیت را با فلش‌کارت یاد بگیر"
        : "GET GUD! — Learn Git with flashcards";
  }, [lang]);

  const setLang = useCallback(
    (l: Lang) => {
      navigate(localizedPath(pathname, l));
    },
    [navigate, pathname],
  );

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const template = uiStrings[lang][key] ?? uiStrings.en[key] ?? key;
      if (!vars) return template;
      return template.replace(/\{(\w+)\}/g, (_, k: string) =>
        vars[k] !== undefined ? String(vars[k]) : `{${k}}`,
      );
    },
    [lang],
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
