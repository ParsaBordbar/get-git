import { useLocation } from "react-router-dom";
import { cardType, navigationType } from "../../types/types";
import { neighbours } from "../../data/series";
import Card from "../Card";
import SideNav from "../SideNav";
import Abstract from "../Abstract";

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
  const { pathname } = useLocation();
  const nav = navigation ?? neighbours(pathname);

  return (
    <section dir={dir} className="grid xl:grid-cols-12 w-fit col-span-full">
      <SideNav navigation={nav} isRTL={isRTL} />

      <Abstract count={data.length} isRTL={isRTL} />

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
    </section>
  );
}

export default FlashCardSeries;
