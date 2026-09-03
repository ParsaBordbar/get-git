import FlashCardSeries from "../components/FlashCardSeries";
import { undo } from "../data/gitCrashCourse/undo";

function Undo() {
  return (
    <section className="col-span-full flex justify-center items-center w-full">
      <FlashCardSeries
        data={undo.cards}
      />
    </section>
  );
}

export default Undo;
