import FlashCardSeries from "../components/FlashCardSeries"
import { committing } from "../data/gitCrashCourse/commiting"

function Commit() {
  return (
    <section className="w-full col-span-full flex justify-center items-center">
        <FlashCardSeries data={committing} 
        navigation={{prev:"http://localhost:5173/get-git/changes", next:"http://localhost:5173/get-git/branches"}}/>
    </section>
  )
}

export default Commit;
