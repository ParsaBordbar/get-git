import FlashCardSeries from "../components/FlashCardSeries"
import { gitGithubConcepts } from '../data/gitCrashCourse/github';

function Github() {
  return (
    <section className="w-full col-span-full flex justify-center items-center">
        <FlashCardSeries data={gitGithubConcepts} navigation={{prev:"branches", next:"conflicts"}}/>
    </section>
  )
}

export default Github;
