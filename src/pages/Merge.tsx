import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { merge } from "../data/gitCrashCourse/merge";

function Merge() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.merge : merge;
  return (
    <section className="col-span-full flex justify-center items-center w-full">
      <FlashCardSeries data={data.cards} />
    </section>
  );
}

export default Merge;
