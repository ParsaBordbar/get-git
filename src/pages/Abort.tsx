import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { abort } from "../data/gitCrashCourse/abort";

function Abort() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.abort : abort;
  return (
    <section className="col-span-full flex justify-center items-center w-full">
      <FlashCardSeries data={data.cards} />
    </section>
  );
}

export default Abort;
