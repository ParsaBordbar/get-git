import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { stash } from "../data/gitCrashCourse/stash";

function Stash() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.stash : stash;
  return (
    <section className="col-span-full flex justify-center items-center w-full">
      <FlashCardSeries data={data.cards} />
    </section>
  );
}

export default Stash;
