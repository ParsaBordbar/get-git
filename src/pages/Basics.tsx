import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { basics } from "../data/gitCrashCourse/basics";

function Basics() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.basics : basics;
  return (
    <section className="col-span-full flex justify-center items-center w-full lg:contain-none md:contain-content contain-none">
      <FlashCardSeries
        data={data.cards}
      />
    </section>
  );
}

export default Basics;
