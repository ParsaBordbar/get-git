import { motion, Variants } from "motion/react"
import { cardType, copyType, tagType } from "../../types/types"
import MarkDownText from "../MarkDown"
import CopyCommand from "../CopyCommand"
import ReactionBar from "../ReactionBar"

const Card = ({title, desc, kind, tags, icon, imgUrl, style, code, animate=true} : cardType) => {
  
  const cardVariantsDesktop: Variants = {
    offscreen: {
      x: '25vw',
      rotate: -12,
    },
    onscreen: {
        x: '0vw',
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.2,
        },
    },
  }
  
  if (!animate) {
    return(
      <div 
        className={`${style} md:w-[32rem] w-fit flex col-span-full m-5 text-slate-900 overflow-x-hidden
        flex-col gap-6 rounded-tr-4xl rounded-b-4xl rounded-tl-lg p-8 justify-center border-b-stone-850
        border-t-4  border-x-4 border-2 border-b-[16px]`}
          >
          <div className="flex justify-start items-end rounded-full p-2 bg-white w-fit border-4 border-stone-850">
            <img className="size-12" src={icon} alt="Icon" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="mx-1 flex">
              <h2 className="text-5xl font-bold">{title}</h2>
            </div>
            <div className="px-5 flex gap-2 pb-10">
              {tags && tags.map((tag: tagType) => (
                <a className="font-extralight" href={tag.url}>#{tag.text}</a>
              ))}
            </div>
          </div>
          
          {desc? (
            <>
              <hr className="ml-3 mr-20 border-2 rounded-full border-stone-800 flex "/>
              <div className="mx-4 text-slate-900 font-semibold">
                <MarkDownText markdown={desc} />
              </div>
            </>
          ): null}
          {imgUrl ? (<img className="w-fit h-max:h-20 rounded-2xl" src={imgUrl} alt="Image" />) : null}
          {code?
            (<div className="flex flex-col gap-7">
              {
                code.map((c: copyType) => (<CopyCommand text={c.text} label={c.label}/>))
              }
            </div>): null
          }
          {
            kind === 'reaction' ? (<ReactionBar />) : null
          }
      </div>
    )
  }


    return (
      <motion.div 
        className={`${style} md:w-[32rem] w-fit flex col-span-full m-5 text-slate-900 overflow-x-hidden
        flex-col gap-6 rounded-tr-4xl rounded-b-4xl rounded-tl-lg p-8 justify-center border-b-stone-850
        border-t-4  border-x-4 border-2 border-b-[16px]`}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: .65}}
          variants={ cardVariantsDesktop }
        >
          <div className="flex justify-start items-end rounded-full p-2 bg-white w-fit border-4 border-stone-850">
            <img className="size-12" src={icon} alt="Icon" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="mx-1 flex">
              <h2 className="text-5xl font-bold">{title}</h2>
            </div>
            <div className="px-5 flex gap-2 pb-10">
              {tags && tags.map((tag: tagType) => (
                <a className="font-extralight" href={tag.url}>#{tag.text}</a>
              ))}
            </div>
          </div>
          
          {desc? (
            <>
              <hr className="ml-3 mr-20 border-2 rounded-full border-stone-800 flex "/>
              <div className="mx-4 text-slate-900 font-semibold">
                <MarkDownText markdown={desc} />
              </div>
            </>
          ): null}
          {imgUrl ? (<img className="w-fit h-max:h-20 rounded-2xl" src={imgUrl} alt="Image" />) : null}
          {code?
            (<div className="flex flex-col gap-7">
              {
                code.map((c: copyType) => (<CopyCommand text={c.text} label={c.label}/>))
              }
            </div>): null
          }
          {
            kind === 'reaction' ? (<ReactionBar />) : null
          }
      </motion.div>
    )
}

export default Card;
