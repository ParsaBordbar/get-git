import { entryFor } from "../../data/series";
import { useProgress } from "../../lib/progress";

function ProgressCheck({ path, next }: { path: string; next?: string }) {
  const { isDone, toggle } = useProgress();
  const done = isDone(path);
  const title = entryFor(path)?.title ?? "this series";
  const nextEntry = next ? entryFor(next) : undefined;

  return (
    <div
      className={`${done ? "bg-candy-green-light" : "bg-white"} w-[92%] sm:w-88 md:w-md lg:w-lg
        col-span-full m-4 me-10 sm:translate-x-[3vw] flex flex-col gap-4 p-5 sm:p-6 text-slate-900
        rounded-tr-4xl rounded-b-4xl rounded-tl-lg
        border-2 border-x-4 border-t-4 border-b-[10px] border-stone-850`}
    >
      <label className="flex cursor-pointer items-center gap-4">
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggle(path)}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white
            border-2 border-b-[5px] border-stone-850 peer-focus-visible:outline-4 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-stone-850"
        >
          {done && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" className="size-6">
              <path d="M5 12.5l4.5 4.5L19 7" />
            </svg>
          )}
        </span>
        <span className="text-xl sm:text-2xl font-bold">
          {done ? `${title} done` : `Mark ${title} as done`}
        </span>
      </label>

      {done && nextEntry && (
        <a
          href={nextEntry.path}
          className="w-fit rounded-2xl bg-white px-4 py-2 font-bold !text-slate-900
            border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
            transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-0.5"
        >
          Next: {nextEntry.title}
        </a>
      )}
      {done && !nextEntry && (
        <a
          href="/get-git/"
          className="w-fit rounded-2xl bg-white px-4 py-2 font-bold !text-slate-900
            border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
            transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-0.5"
        >
          Back to all series
        </a>
      )}
    </div>
  );
}

export default ProgressCheck;
