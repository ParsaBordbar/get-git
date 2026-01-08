import { cardType, navigationType } from "../../types/types";
import Abstract from "../Abstract";
import Card from "../Card";

function FlashCardSeries({
  data,
  navigation,
  dir = "ltr",
}: {
  data: cardType[];
  navigation?: navigationType;
  dir?: "ltr" | "rtl";
}) {
  const isRTL = dir === "rtl";

  return (
    <section
      dir={dir}
      className="grid xl:grid-cols-12 w-fit col-span-full"
    >
      {/* PREVIOUS */}
      <a
        href={navigation?.prev}
        className={`fixed lg:flex hidden cursor-pointer text-5xl !text-slate-400 top-1/2 -translate-y-1/2 py-2 px-4
          ${isRTL ? "right-0 me-5" : "left-0 ms-5"}
          glass-gradient glass-text glass-border glass-bg rounded-full glass-btn hover:glass-btn-hover glass-base`}
        aria-label="Previous"
      >
        {isRTL ? ">" : "<"}
      </a>

      <Abstract count={data.length} />

      <div className="grid justify-center col-span-10 gap-5">
        {data.map((card: cardType, index) => (
          <Card
            key={index}
            title={card.title}
            desc={card.desc}
            kind={card.kind}
            tags={card.tags}
            icon={card.icon}
            imgUrl={card.imgUrl}
            style={card.style}
            code={card.code}
            animate={true}
          />
        ))}
      </div>

      {/* NEXT */}
      <a
        href={navigation?.next}
        className={`fixed lg:flex hidden cursor-pointer text-5xl !text-slate-400 top-1/2 -translate-y-1/2 py-2 px-4
          ${isRTL ? "left-0 ms-5" : "right-0 me-5"}
          glass-gradient glass-text glass-border glass-bg rounded-full glass-btn hover:glass-btn-hover glass-base`}
        aria-label="Next"
      >
        {isRTL ? "<" : ">"}
      </a>
    </section>
  );
}

export default FlashCardSeries;