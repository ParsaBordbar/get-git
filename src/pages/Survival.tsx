import FlashCardSeries from "../components/FlashCardSeries"
import { survival } from '../data/Survival/survival';

function Survival() {
  return (
    <section className="w-full col-span-full flex justify-center items-center">
        <FlashCardSeries data={survival}  navigation={{prev:"github", next:"/"}}/>
    </section>
  )
}

export default Survival;
