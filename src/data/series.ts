import { faSeries } from "./fa/series";
import type { Lang } from "../i18n/lang";

export interface seriesEntry {
  path: string;
  title: string;
  desc: string;
  icon: string;
  style: string;
  badge?: string;
}

export const series: seriesEntry[] = [
  {
    path: "/get-git/basics",
    title: "Basics",
    desc: "Stuff you'll use every day.",
    icon: "./assets/git.svg",
    style: "bg-candy-red",
  },
  {
    path: "/get-git/changes",
    title: "Changes",
    desc: "Keep track of the changes.",
    icon: "./assets/git.svg",
    style: "bg-candy-blue-sky",
  },
  {
    path: "/get-git/commit",
    title: "Commit",
    desc: "How to write good commit messages.",
    icon: "./assets/git.svg",
    style: "bg-candy-yellow",
  },
  {
    path: "/get-git/branches",
    title: "Branches",
    desc: "Learn about branching.",
    icon: "./assets/git.svg",
    style: "bg-candy-teal",
  },
  {
    path: "/get-git/merge",
    title: "Merge",
    desc: "Bring two branches back together.",
    icon: "./assets/git.svg",
    style: "bg-candy-green-light",
  },
  {
    path: "/get-git/github",
    title: "Github",
    desc: "Collaborations and Cloud storage.",
    icon: "./assets/github.svg",
    style: "bg-candy-yellow-sharp",
  },
  {
    path: "/get-git/conflicts",
    title: "Conflicts",
    desc: "Oops! what should we do!?",
    icon: "./assets/git.svg",
    style: "bg-candy-pink",
  },
  {
    path: "/get-git/abort",
    title: "Abort",
    desc: "Back out of a command gone wrong.",
    icon: "./assets/git.svg",
    style: "bg-candy-pink-strawberry",
  },
  {
    path: "/get-git/stash",
    title: "Stash",
    desc: "Park your work, come back later.",
    icon: "./assets/git.svg",
    style: "bg-candy-milky",
  },
  {
    path: "/get-git/undo",
    title: "Undo",
    desc: "Broke it? Git probably still has it.",
    icon: "./assets/git.svg",
    style: "bg-candy-green-M",
  },
  {
    path: "/get-git/gitmoji",
    title: "Gitmoji",
    desc: "Say it with an emoji in your commits.",
    icon: "./assets/git.svg",
    style: "bg-candy-yellow-warm",
    badge: "EXTRA",
  },
];
export function seriesFor(lang: Lang): seriesEntry[] {
  return lang === "fa" ? faSeries : series;
}

function listForPath(path: string): {
  list: seriesEntry[];
  home: string;
} {
  const clean = path.replace(/\/$/, "");
  const isFa = clean === "/get-git/fa" || clean.startsWith("/get-git/fa/");
  return isFa ? { list: faSeries, home: "/get-git/fa" } : { list: series, home: "/get-git/" };
}

export function neighbours(path: string) {
  const clean = path.replace(/\/$/, "");
  const { list, home } = listForPath(path);
  const i = list.findIndex((s) => s.path.replace(/\/$/, "") === clean);
  if (i === -1) return {};
  return {
    prev: i > 0 ? list[i - 1].path : home,
    next: i < list.length - 1 ? list[i + 1].path : home,
  };
}

export function entryFor(path: string) {
  const clean = path.replace(/\/$/, "");
  const { list } = listForPath(path);
  return list.find((s) => s.path.replace(/\/$/, "") === clean);
}
