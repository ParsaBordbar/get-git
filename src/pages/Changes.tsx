import FlashCardSeries from "../components/FlashCardSeries"
import { changes } from "../data/gitCrashCourse/changes"

function Changes() {
  return (
    <section className="w-full col-span-full flex justify-center items-center">
        <FlashCardSeries data={changes} navigation={{prev:"http://localhost:5173/git/basics", next:"commit"}}/>
    </section>
  )
}

export default Changes;
