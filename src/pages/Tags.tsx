import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { allTags, cardsTagged, tagHref } from "../data/cards";

const pill = `rounded-2xl bg-white px-4 py-2 font-bold !text-slate-900
  border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
  transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-0.5`;

function TagIndex() {
  const tags = allTags();
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Tags</h1>
      <p className="mt-3 max-w-xl text-lg font-medium text-slate-900/80">
        Every card is tagged. Pick a tag to see all the cards about it, across
        every series.
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {tags.map((t) => (
          <li key={t.text}>
            <a href={tagHref(t.text)} className={`${pill} flex items-center gap-2`}>
              #{t.text}
              <span className="text-sm font-medium text-slate-900/60 tabular-nums">{t.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

function TagResults({ tag }: { tag: string }) {
  const groups = cardsTagged(tag);
  const total = groups.reduce((n, g) => n + g.cards.length, 0);

  return (
    <>
      <a href="/get-git/tags" className="font-bold !text-slate-900 underline decoration-2 underline-offset-4">
        All tags
      </a>
      <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 break-all">#{tag}</h1>
      <p className="mt-3 text-lg font-medium text-slate-900/80">
        {total === 0
          ? "No cards carry this tag."
          : `${total} ${total === 1 ? "card" : "cards"} in ${groups.length} ${groups.length === 1 ? "series" : "series"}.`}
      </p>

      {groups.map((g) => (
        <section key={g.path} dir={g.dir ?? "ltr"} className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-4 border-stone-850 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">{g.title}</h2>
            <a href={g.path} className={pill}>Open series</a>
          </div>
          <div className="mt-4 grid justify-center gap-5 sm:justify-start">
            {g.cards.map((card, i) => (
              <Card key={i} {...card} animate={false} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function Tags() {
  const { tag } = useParams<{ tag?: string }>();
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 py-10 sm:py-14 pb-16">
      {tag ? <TagResults tag={decodeURIComponent(tag)} /> : <TagIndex />}
    </div>
  );
}

export default Tags;
