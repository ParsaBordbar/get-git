import FlashCardSeries from "../components/FlashCardSeries"
import { basics } from "../data/gitCrashCourse/basics"

function Basics() {
  return (
    <section className="col-span-full flex justify-center items-center w-full lg:contain-none md:contain-content contain-none">
        <FlashCardSeries data={basics.cards}  navigation={{next:"/get-git/changes", prev:"/get-git/"}}/>
    </section>
  )
}

export default Basics;
