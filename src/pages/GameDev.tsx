import FlashCardSeries from "../components/FlashCardSeries";
import { useLang, localizedPath } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { gameDevCompleteSeries } from "../data/gitCrashCourse/gameDev";

function GameDev() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.gameDev : gameDevCompleteSeries;
  return (
    <section className="col-span-full flex justify-center items-center w-full lg:contain-none md:contain-content contain-none">
      <FlashCardSeries
        data={data.cards}
        navigation={{ next: localizedPath("/get-git/changes", lang), prev: localizedPath("/get-git/", lang) }}
      />
    </section>
  );
}

export default GameDev;
