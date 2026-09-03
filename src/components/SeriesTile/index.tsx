import { seriesEntry } from "../../data/series";
import Badge from "../Badge";

function SeriesTile({ entry, index }: { entry: seriesEntry; index: number }) {
  return (
    <a
      href={entry.path}
      className={`${entry.style} flex h-full flex-col gap-5 p-5 sm:p-6 !text-slate-900
        rounded-tr-4xl rounded-b-4xl rounded-tl-lg
        border-2 border-x-4 border-t-4 border-b-[10px] border-stone-850
        transition-transform duration-100 hover:-translate-y-1 active:translate-y-0.5
        focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-stone-850`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-14 items-center justify-center rounded-full bg-white border-4 border-stone-850">
          <img className="size-8" src={entry.icon} alt="" />
        </span>
        {entry.badge && <Badge text={entry.badge} />}
      </div>

      <div className="mt-auto flex flex-col gap-1">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
          {index + 1}. {entry.title}
        </h2>
        <p className="font-medium text-slate-900/75">{entry.desc}</p>
      </div>
    </a>
  );
}

export default SeriesTile;
