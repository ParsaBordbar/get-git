import FlashCardSeries from "../components/FlashCardSeries";
import { deltaChatConnectivityFA } from "../data/deltaChat/delta";

function Delta() {
  return (
    <section className="w-full col-span-full flex justify-center items-center">
      <FlashCardSeries
        data={deltaChatConnectivityFA.cards}
        navigation={{ prev: "github", next: "/get-git/" }}
      />
    </section>
  );
}

export default Delta;
