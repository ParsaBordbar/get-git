import { useSyncExternalStore } from "react";

export interface reactionRecord {
  counts: Record<string, number>;
  mine: string[];
}

export interface reactionStore {
  get(id: string): reactionRecord;
  toggle(id: string, emoji: string): void;
  subscribe(listener: () => void): () => void;
}

const EMPTY: reactionRecord = { counts: {}, mine: [] };

function localStore(key = "get-git:reactions"): reactionStore {
  const listeners = new Set<() => void>();
  let cache: Record<string, reactionRecord> | null = null;

  const read = () => {
    if (cache) return cache;
    try {
      const raw = localStorage.getItem(key);
      cache = raw ? (JSON.parse(raw) as Record<string, reactionRecord>) : {};
    } catch {
      cache = {};
    }
    return cache;
  };

  const write = (next: Record<string, reactionRecord>) => {
    cache = next;
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      /* storage unavailable: reactions live in memory for this session only */
    }
    listeners.forEach((l) => l());
  };

  return {
    get: (id) => read()[id] ?? EMPTY,
    toggle: (id, emoji) => {
      const all = read();
      const rec = all[id] ?? EMPTY;
      const had = rec.mine.includes(emoji);
      const counts = { ...rec.counts, [emoji]: Math.max(0, (rec.counts[emoji] ?? 0) + (had ? -1 : 1)) };
      if (counts[emoji] === 0) delete counts[emoji];
      const mine = had ? rec.mine.filter((e) => e !== emoji) : [...rec.mine, emoji];
      write({ ...all, [id]: { counts, mine } });
    },
    subscribe: (listener) => {
      listeners.add(listener);
      const onStorage = (e: StorageEvent) => {
        if (e.key === key) {
          cache = null;
          listener();
        }
      };
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
      };
    },
  };
}

export const store: reactionStore = localStore();

export function useReactions(id: string) {
  const record = useSyncExternalStore(store.subscribe, () => store.get(id), () => EMPTY);
  return { ...record, toggle: (emoji: string) => store.toggle(id, emoji) };
}
