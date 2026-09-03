import FlashCardSeries from "../components/FlashCardSeries";
import { abort } from "../data/gitCrashCourse/abort";

function Abort() {
  return (
    <section className="col-span-full flex justify-center items-center w-full">
      <FlashCardSeries data={abort.cards} />
    </section>
  );
}

export default Abort;
