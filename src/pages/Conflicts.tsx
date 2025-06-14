import FlashCardSeries from "../components/FlashCardSeries"
import { gitConflictCard } from "../data/gitCrashCourse/conflicts"

function Conflicts() {
  return (
    <section className="w-full col-span-full flex justify-center items-center">
        <FlashCardSeries data={gitConflictCard} navigation={{prev:"github", next:"/"}}/>
    </section>
  )
}

export default Conflicts;
