import { cardType } from "../types/types";
import type { Lang } from "../i18n/lang";
import { series } from "./series";
import { faSeries, faCards } from "./fa/index";
import { basics } from "./gitCrashCourse/basics";
import { changes } from "./gitCrashCourse/changes";
import { committing } from "./gitCrashCourse/commiting";
import { branches } from "./gitCrashCourse/branches";
import { merge } from "./gitCrashCourse/merge";
import { gitGithubConcepts } from "./gitCrashCourse/github";
import { gitConflictCard } from "./gitCrashCourse/conflicts";
import { abort } from "./gitCrashCourse/abort";
import { stash } from "./gitCrashCourse/stash";
import { undo } from "./gitCrashCourse/undo";

export interface cardSource {
  path: string;
  title: string;
  cards: cardType[];
  dir?: "ltr" | "rtl";
}

const byPath: Record<string, cardType[]> = {
  "/get-git/basics": basics.cards,
  "/get-git/changes": changes.cards,
  "/get-git/commit": committing.cards,
  "/get-git/branches": branches.cards,
  "/get-git/merge": merge.cards,
  "/get-git/github": gitGithubConcepts.cards,
  "/get-git/conflicts": gitConflictCard.cards,
  "/get-git/abort": abort.cards,
  "/get-git/stash": stash.cards,
  "/get-git/undo": undo.cards,
};

export const sources: cardSource[] = series
  .filter((s) => byPath[s.path])
  .map((s) => ({ path: s.path, title: s.title, cards: byPath[s.path] }));

const faByPath: Record<string, cardType[]> = {
  "/get-git/fa/basics": faCards.basics.cards,
  "/get-git/fa/changes": faCards.changes.cards,
  "/get-git/fa/commit": faCards.commit.cards,
  "/get-git/fa/branches": faCards.branches.cards,
  "/get-git/fa/merge": faCards.merge.cards,
  "/get-git/fa/github": faCards.github.cards,
  "/get-git/fa/conflicts": faCards.conflicts.cards,
  "/get-git/fa/abort": faCards.abort.cards,
  "/get-git/fa/stash": faCards.stash.cards,
  "/get-git/fa/undo": faCards.undo.cards,
};

export function sourcesFor(lang: Lang = "en"): cardSource[] {
  if (lang === "fa") {
    return faSeries
      .filter((s) => faByPath[s.path])
      .map((s) => ({
        path: s.path,
        title: s.title,
        cards: faByPath[s.path],
        dir: "rtl" as const,
      }));
  }
  return sources;
}

export function tagHref(tag: string, lang: Lang = "en") {
  const base = lang === "fa" ? "/get-git/fa/tags" : "/get-git/tags";
  return `${base}/${encodeURIComponent(tag)}`;
}

export function allTags(lang: Lang = "en"): { text: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const src of sourcesFor(lang))
    for (const card of src.cards)
      for (const tag of card.tags ?? [])
        counts.set(tag.text, (counts.get(tag.text) ?? 0) + 1);
  return [...counts]
    .map(([text, count]) => ({ text, count }))
    .sort((a, b) => b.count - a.count || a.text.localeCompare(b.text));
}

export function cardsTagged(tag: string, lang: Lang = "en"): cardSource[] {
  return sourcesFor(lang)
    .map((src) => ({
      ...src,
      cards: src.cards.filter((c) => c.tags?.some((t) => t.text === tag)),
    }))
    .filter((src) => src.cards.length > 0);
}
