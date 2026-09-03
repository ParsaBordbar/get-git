import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { gitmojis } from "../data/gitmoji/gitmoji";
import { gitmojiType } from "../types/types";
import { neighbours } from "../data/series";
import SideNav from "../components/SideNav";
import Badge from "../components/Badge";

const cardStyles = [
  "bg-candy-red",
  "bg-candy-blue-sky",
  "bg-candy-yellow",
  "bg-candy-teal",
  "bg-candy-yellow-sharp",
  "bg-candy-pink",
];

function GitmojiCard({ gitmoji, style }: { gitmoji: gitmojiType; style: string }) {
  const [copied, setCopied] = useState<"emoji" | "code" | null>(null);

  const copy = (value: string, which: "emoji" | "code") => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(which);
        setTimeout(() => setCopied(null), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div
      className={`${style} flex flex-col gap-3 p-4 sm:p-5 text-slate-900
        rounded-tr-4xl rounded-b-4xl rounded-tl-lg
        border-2 border-x-4 border-t-4 border-b-8 border-stone-850`}
    >
      <button
        onClick={() => copy(gitmoji.emoji, "emoji")}
        aria-label={`Copy ${gitmoji.emoji}`}
        className="cursor-pointer bg-white rounded-full p-2 w-fit border-4 border-stone-850 text-3xl sm:text-4xl leading-none"
      >
        {gitmoji.emoji}
      </button>

      <p className="text-sm sm:text-base font-medium">{gitmoji.desc}</p>

      <button
        onClick={() => copy(gitmoji.code, "code")}
        aria-label={`Copy ${gitmoji.code}`}
        className="cursor-pointer bg-white rounded-2xl border-t-2 border-x-4 border-b-[6px] border-stone-850
          py-1 px-3 text-left text-sm sm:text-base font-mono break-all"
      >
        {copied ? "Copied!" : gitmoji.code}
      </button>
    </div>
  );
}

function Gitmoji() {
  const [query, setQuery] = useState("");
  const { pathname } = useLocation();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return gitmojis;
    return gitmojis.filter(
      (g) =>
        g.code.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        g.emoji.includes(q),
    );
  }, [query]);

  return (
    <section className="w-full flex flex-col items-center px-4 py-10 sm:py-14 gap-8">
      <SideNav navigation={neighbours(pathname)} />

      <header className="flex flex-col gap-3 items-center text-center max-w-2xl text-slate-900">
        <Badge text="Extra" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Gitmoji</h1>
        <p className="text-sm sm:text-base font-medium">
          An emoji at the start of a commit message tells people what the commit
          does before they read a word of it. Click an emoji or its `:code:` to
          copy it.
        </p>
        <code className="bg-white rounded-2xl border-t-2 border-x-4 border-b-[6px] border-stone-850 py-2 px-4 text-sm sm:text-base">
          git commit -m "✨ add gitmoji page"
        </code>
      </header>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search gitmoji…"
        aria-label="Search gitmoji"
        className="w-full max-w-xl bg-white text-slate-900 rounded-2xl
          border-t-2 border-x-4 border-b-[6px] border-stone-850 py-2 px-4 text-base"
      />

      {results.length === 0 ? (
        <p className="text-slate-900 font-medium">
          No gitmoji matches “{query}”.
        </p>
      ) : (
        <div className="grid w-full max-w-6xl gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((gitmoji, index) => (
            <GitmojiCard
              key={gitmoji.code}
              gitmoji={gitmoji}
              style={cardStyles[index % cardStyles.length]}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default Gitmoji;
