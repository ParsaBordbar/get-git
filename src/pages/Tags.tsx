import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { allTags, cardsTagged, tagHref } from "../data/cards";
import { useLang, localizedPath } from "../i18n/lang";

const pill = `rounded-2xl bg-white px-4 py-2 font-bold !text-slate-900
  border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
  transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-0.5`;

function TagIndex() {
  const { lang, t } = useLang();
  const tags = allTags(lang);
  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">{t("tags.title")}</h1>
      <p className="mt-3 max-w-xl text-lg font-medium text-slate-900/80">
        {t("tags.intro")}
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <li key={tag.text}>
            <a href={tagHref(tag.text, lang)} className={`${pill} flex items-center gap-2`}>
              #{tag.text}
              <span className="text-sm font-medium text-slate-900/60 tabular-nums">{tag.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

function TagResults({ tag }: { tag: string }) {
  const { lang, t } = useLang();
  const groups = cardsTagged(tag, lang);
  const total = groups.reduce((n, g) => n + g.cards.length, 0);
  const countText =
    total === 0
      ? t("tags.noCards")
      : total === 1 && groups.length === 1
        ? t("tags.countOne")
        : t("tags.count", { total, groups: groups.length });

  return (
    <>
      <a href={localizedPath("/get-git/tags", lang)} className="font-bold !text-slate-900 underline decoration-2 underline-offset-4">
        {t("tags.allTags")}
      </a>
      <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 break-all">#{tag}</h1>
      <p className="mt-3 text-lg font-medium text-slate-900/80">
        {countText}
      </p>

      {groups.map((g) => (
        <section key={g.path} dir={g.dir ?? "ltr"} className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-4 border-stone-850 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">{g.title}</h2>
            <a href={g.path} className={pill}>{t("tags.openSeries")}</a>
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
