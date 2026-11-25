import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { gitConflictCard } from "../data/gitCrashCourse/conflicts";

function Conflicts() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.conflicts : gitConflictCard;
  return (
    <section className="w-full col-span-full flex justify-center items-center">
      <FlashCardSeries
        data={data.cards}
      />
    </section>
  );
}

export default Conflicts;
