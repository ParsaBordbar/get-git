import { ComponentType } from "react";
import { JSX } from "react/jsx-dev-runtime";
import Basics from "../pages/Basics";
import Commit from "../pages/Commit";
import Git from "../pages/Git";
import Changes from "../pages/Changes";
import Branches from "../pages/Branches";

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
  }
  
export const routes: Route[] = [
    { path: '/', Component: Git },
    { path: '/git', Component: Git },
    { path: '/git/basics', Component: Basics },
    { path: '/git/commit', Component: Commit },
    { path: '/git/changes', Component: Changes },
    { path: '/git/branches', Component: Branches },
];