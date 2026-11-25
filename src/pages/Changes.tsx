import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { changes } from "../data/gitCrashCourse/changes";

function Changes() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.changes : changes;
  return (
    <section className="w-full col-span-full flex justify-center items-center">
      <FlashCardSeries
        data={data.cards}
      />
    </section>
  );
}

export default Changes;
