import FlashCardSeries from "../components/FlashCardSeries";
import { stash } from "../data/gitCrashCourse/stash";

function Stash() {
  return (
    <section className="col-span-full flex justify-center items-center w-full">
      <FlashCardSeries data={stash.cards} />
    </section>
  );
}

export default Stash;
