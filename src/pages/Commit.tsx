import FlashCardSeries from "../components/FlashCardSeries"
import { committing } from "../data/gitCrashCourse/commiting"

function Commit() {
  return (
    <section className="w-full col-span-full flex justify-center items-center">
        <FlashCardSeries data={committing.cards} 
        navigation={{prev:"changes", next:"branches"}}/>
    </section>
  )
}

export default Commit;
