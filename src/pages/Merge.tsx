import FlashCardSeries from "../components/FlashCardSeries";
import { merge } from "../data/gitCrashCourse/merge";

function Merge() {
  return (
    <section className="col-span-full flex justify-center items-center w-full">
      <FlashCardSeries data={merge.cards} />
    </section>
  );
}

export default Merge;
