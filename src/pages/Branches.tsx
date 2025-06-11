import FlashCardSeries from "../components/FlashCardSeries"
import { branches } from "../data/gitCrashCourse/branches"

function Branches() {
  return (
    <section className="col-span-full flex justify-center items-center w-full lg:contain-none 
    md:contain-content contain-none">
        <FlashCardSeries data={branches} 
                navigation={{prev:"commit", next:"github"}}
        />
    </section>
  )
}

export default Branches;
