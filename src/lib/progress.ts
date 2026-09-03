import { useSyncExternalStore } from "react";

const KEY = "get-git:progress";
const listeners = new Set<() => void>();
let cache: Record<string, string> | null = null;

function clean(path: string) {
  return path.replace(/\/$/, "");
}

function read(): Record<string, string> {
  if (cache) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    cache = raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    cache = {};
  }
  return cache;
}

function write(next: Record<string, string>) {
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable: progress lives in memory for this session only */
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useProgress() {
  const done = useSyncExternalStore(subscribe, read, () => ({}));
  return {
    done,
    count: Object.keys(done).length,
    isDone: (path: string) => clean(path) in done,
    toggle: (path: string) => {
      const next = { ...read() };
      const p = clean(path);
      if (p in next) delete next[p];
      else next[p] = new Date().toISOString();
      write(next);
    },
    reset: () => write({}),
  };
}
