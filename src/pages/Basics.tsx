import FlashCardSeries from "../components/FlashCardSeries"
import { basics } from "../data/gitCrashCourse/basics"

function Basics() {
  return (
    <section className="col-span-full flex justify-center items-center w-full lg:contain-none md:contain-content contain-none">
        <FlashCardSeries data={basics}  navigation={{next:"http://localhost:5173/get-git/changes", prev:"/"}}/>
    </section>
  )
}

export default Basics;
