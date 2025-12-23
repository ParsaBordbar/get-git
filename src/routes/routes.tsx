import { ComponentType } from "react";
import { JSX } from "react/jsx-dev-runtime";
import Basics from "../pages/Basics";
import Commit from "../pages/Commit";
import Git from "../pages/Git";
import Changes from "../pages/Changes";
import Branches from "../pages/Branches";
import Conflicts from "../pages/Conflicts";
import Github from "../pages/Github";
import GameDev from "../pages/GameDev";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: Git },
  { path: "/get-git", Component: Git },
  { path: "/get-git/basics", Component: Basics },
  { path: "/get-git/commit", Component: Commit },
  { path: "/get-git/changes", Component: Changes },
  { path: "/get-git/branches", Component: Branches },
  { path: "/get-git/github", Component: Github },
  { path: "/get-git/conflicts", Component: Conflicts },
  { path: "/get-git/game-dev", Component: GameDev },
];
