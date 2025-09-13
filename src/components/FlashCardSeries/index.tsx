import { cardType, navigationType } from "../../types/types";
import Abstract from "../Abstract";
import Card from "../Card";

function FlashCardSeries({data, navigation}: {data: cardType[], navigation?:navigationType}) {
  return (
    <section className='grid xl:grid-cols-12 w-fit col-span-full'>
      <a href={navigation?.prev} className="fixed lg:flex hidden cursor-pointer text-6xl !text-candy-blue left-0 top-1/2 transform -translate-y-1/2 p-4 hover:!text-candy-red delay-150"
        aria-label="Previous">{"<"}</a>
        <Abstract count={data.length}/>
        <div className='grid justify-center col-span-10  gap-5'>
        {
          data.map((card: cardType) => (
            <Card title={card.title} desc={card.desc} kind={card.kind} tags={card.tags} icon={card.icon}
             imgUrl={card.imgUrl} style={card.style} code={card.code} animate={true}/>)
            )
        }
      </div>
      <a href={navigation?.next} className="fixed lg:flex hidden  text-6xl cursor-pointer !text-candy-blue right-0 top-1/2 transform -translate-y-1/2 p-4  hover:!text-candy-red delay-150"
        aria-label="Previous">{">"}</a>
    </section>
  )
}

export default FlashCardSeries;
