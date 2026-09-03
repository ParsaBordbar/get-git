import SeriesTile from "../components/SeriesTile";
import { series, seriesEntry } from "../data/series";

const stickers = [
  { style: "bg-candy-red", rotate: "-rotate-12", offset: "translate-y-6" },
  { style: "bg-candy-yellow", rotate: "rotate-3", offset: "" },
  { style: "bg-candy-blue-sky", rotate: "rotate-12", offset: "translate-y-6" },
];

function Git() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 pb-16">
      <section className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:py-24">
        <div className="max-w-xl">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-slate-900">
            Git, one card at a time.
          </h1>
          <p className="mt-6 text-lg sm:text-xl font-medium text-slate-900/80">
            {series.length} short series that take you from your first commit
            to untangling a merge conflict. Pick one, flip through, done in a
            few minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={series[0].path}
              className="rounded-2xl bg-candy-red px-6 py-3 text-lg font-bold !text-slate-900
                border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
                transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-0.5"
            >
              Start with {series[0].title}
            </a>
            <a
              href="https://github.com/ParsaBordbar/get-git"
              className="font-bold !text-slate-900 underline decoration-2 underline-offset-4"
            >
              Source on GitHub
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-start gap-0 pe-6" aria-hidden="true">
          {stickers.map((s, i) => (
            <div
              key={i}
              className={`${s.style} ${s.rotate} ${s.offset} -ms-6 first:ms-0 flex h-44 w-32 items-end p-4
                rounded-tr-3xl rounded-b-3xl rounded-tl-md
                border-2 border-x-4 border-t-4 border-b-[10px] border-stone-850`}
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-white border-4 border-stone-850">
                <img className="size-5" src="./assets/git.svg" alt="" />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="Series">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {series.map((entry: seriesEntry, i: number) => (
            <SeriesTile key={entry.path} entry={entry} index={i} />
          ))}
        </div>
      </section>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t-4 border-stone-850 pt-6 font-medium text-slate-900/70">
        <span>Made by Parsa Bordbar</span>
        <a href="https://github.com/ParsaBordbar/get-git" className="!text-slate-900 underline decoration-2 underline-offset-4">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default Git;
