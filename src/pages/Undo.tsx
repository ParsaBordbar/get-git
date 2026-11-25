import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { undo } from "../data/gitCrashCourse/undo";

function Undo() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.undo : undo;
  return (
    <section className="col-span-full flex justify-center items-center w-full">
      <FlashCardSeries
        data={data.cards}
      />
    </section>
  );
}

export default Undo;
