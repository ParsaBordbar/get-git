import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { series } from "../../data/series";
import { useProgress } from "../../lib/progress";
import { asset } from "../../lib/asset";

const HOME = "/get-git/";

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { isDone } = useProgress();
  const current = pathname.replace(/\/$/, "");

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isHome = current === "" || current === "/get-git";

  return (
    <header className="sticky top-0 z-50 md:hidden">
      <div className="flex h-14 items-center justify-between bg-candy-tan px-4 border-b-4 border-stone-850">
        <a href={HOME} className="flex items-center gap-2 font-bold !text-slate-900">
          <span className="flex size-8 items-center justify-center rounded-full bg-white border-2 border-stone-850">
            <img className="size-4" src={asset("./assets/git.svg")} alt="" />
          </span>
          get-git
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((o) => !o)}
          className="flex size-10 items-center justify-center rounded-xl bg-white text-slate-900
            border-2 border-b-[5px] border-stone-850 active:border-b-2 active:translate-y-[3px]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            className="size-5"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      <nav
        id="site-menu"
        hidden={!open}
        className="fixed inset-x-0 top-14 bottom-0 overflow-y-auto bg-candy-tan px-4 py-4"
      >
        <ul className="flex flex-col gap-2 pb-8">
          <li>
            <a
              href={HOME}
              aria-current={isHome ? "page" : undefined}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-bold border-2 border-b-[5px] border-stone-850
                ${isHome ? "bg-stone-850 !text-white" : "bg-white !text-slate-900"}`}
            >
              Home
            </a>
          </li>
          {series.map((s, i) => {
            const active = s.path.replace(/\/$/, "") === current;
            return (
              <li key={s.path}>
                <a
                  href={s.path}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-bold border-2 border-b-[5px] border-stone-850
                    ${active ? "bg-stone-850 !text-white" : "bg-white !text-slate-900"}`}
                >
                  <span
                    className={`${s.style} size-5 shrink-0 rounded-md border-2 border-stone-850`}
                    aria-hidden="true"
                  />
                  <span className="w-6 tabular-nums opacity-60">{i + 1}</span>
                  {s.title}
                  <span className="ms-auto flex items-center gap-2 text-xs font-medium opacity-60">
                    {s.badge}
                    {isDone(s.path) && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" className="size-4 opacity-100" aria-label="Done">
                        <path d="M5 12.5l4.5 4.5L19 7" />
                      </svg>
                    )}
                  </span>
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/get-git/tags"
              aria-current={current.startsWith("/get-git/tags") ? "page" : undefined}
              className={`mt-2 flex items-center gap-3 rounded-2xl px-4 py-3 font-bold border-2 border-b-[5px] border-stone-850
                ${current.startsWith("/get-git/tags") ? "bg-stone-850 !text-white" : "bg-white !text-slate-900"}`}
            >
              Browse by tag
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
