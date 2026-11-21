import FlashCardSeries from "../components/FlashCardSeries";
import { useLang } from "../i18n/lang";
import { faCards } from "../data/fa/index";
import { gitGithubConcepts } from "../data/gitCrashCourse/github";

function Github() {
  const { lang } = useLang();
  const data = lang === "fa" ? faCards.github : gitGithubConcepts;
  return (
    <section className="w-full col-span-full flex justify-center items-center">
      <FlashCardSeries
        data={data.cards}
      />
    </section>
  );
}

export default Github;
