import FlashCardSeries from "../components/FlashCardSeries";
import { gameDevCompleteSeries } from "../data/gitCrashCourse/gameDev";

function GameDev() {
  return (
    <section className="col-span-full flex justify-center items-center w-full lg:contain-none md:contain-content contain-none">
      <FlashCardSeries
        data={gameDevCompleteSeries.cards}
        navigation={{ next: "/get-git/changes", prev: "/get-git/" }}
      />
    </section>
  );
}

export default GameDev;
