import type { seriesEntry } from "../series";
import type { cardType, gitmojiType } from "../../types/types";
import { faSeries as faSeriesList } from "./series";
import { gitmojis } from "./gitmoji/gitmoji";
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
import { gameDevCompleteSeries } from "./gitCrashCourse/gameDev";

export const faSeries: seriesEntry[] = faSeriesList;

export const faGitmojis: gitmojiType[] = gitmojis;

export const faCards: Record<
  | "basics"
  | "changes"
  | "commit"
  | "branches"
  | "merge"
  | "github"
  | "conflicts"
  | "abort"
  | "stash"
  | "undo"
  | "gameDev",
  { pageName: string; cards: cardType[] }
> = {
  basics,
  changes,
  commit: committing,
  branches,
  merge,
  github: gitGithubConcepts,
  conflicts: gitConflictCard,
  abort,
  stash,
  undo,
  gameDev: gameDevCompleteSeries,
};
