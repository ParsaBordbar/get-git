import { motion, Variants } from "motion/react"
import { cardType, tagType } from "../../types/types"
import MarkDownText from "../MarkDown"

const Card = ({title, desc, kind, tags, icon, imgUrl, style} : cardType) => {
  

  const cardVariants: Variants = {
    offscreen: {
        x: 500,
        rotate: -12,
    },
    onscreen: {
        x: 50,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
        },
    },
}

  if (kind == 'default') {
    return (
      <motion.div 
        className={`${style} md:w-[32rem] w-full flex col-span-full m-5 text-slate-900
        flex-col gap-6 rounded-tr-4xl rounded-b-4xl rounded-tl-lg p-8 justify-center border-b-stone-850
        border-t-4  border-x-4 border-2 border-b-[16px]`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: .65}}
            variants={cardVariants}
        >
          <div className="flex justify-start items-end rounded-full p-2 bg-white w-fit border-4 border-stone-850">
            <img className="" src={icon} alt="Icon" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="mx-1 flex">
              <h2 className="text-5xl font-bold">{title}</h2>
            </div>
            <div className="px-5 flex gap-2 pb-10">
              {tags.map((tag: tagType) => (
                <a className="!text-slate-600 font-extralight" href={tag.url}>#{tag.text}</a>
              ))}
            </div>
          </div>
          {/* <hr className="ml-3 mr-20 border rounded-full border-white flex "/> */}
          
          {desc? (
            <div className="flex mx-5 text-slate-900 text-left font-semibold">
              <MarkDownText markdown={desc} />
            </div>
          ): null}
            {imgUrl ? (<img src={imgUrl} alt="Image" />) : null}
      </motion.div>
    ) 
  }
}

export default Card;
