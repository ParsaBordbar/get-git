import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { committing } from "../data/gitCrashCourse/commiting";

function Commit() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.commit : committing;
  return (
    <section className="w-full col-span-full flex justify-center items-center">
      <FlashCardSeries
        data={data.cards}
      />
    </section>
  );
}

export default Commit;
