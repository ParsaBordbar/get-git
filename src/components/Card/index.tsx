import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { cardType, copyType, tagType } from "../../types/types";
import MarkDownText from "../MarkDown";
import CopyCommand from "../CopyCommand";
import ReactionBar from "../ReactionBar";

const Card = ({
  title,
  desc,
  kind,
  tags,
  icon,
  imgUrl,
  style,
  code,
  animate = true,
}: cardType) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const cardVariantsDesktop: Variants = {
    offscreen: { x: "25vw", rotate: -12 },
    onscreen: {
      x: "3vw",
      rotate: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1.2 },
    },
  };

  const Container = !animate || isMobile ? "div" : motion.div;

  return (
    <Container
      className={`${style} w-[92%] sm:w-[22rem] md:w-[28rem] lg:w-[32rem] 
        flex flex-col col-span-full m-4 me-10 text-slate-900 overflow-hidden
        gap-4 sm:gap-5 md:gap-6
        rounded-tr-4xl rounded-b-4xl rounded-tl-lg 
        p-4 sm:p-6 md:p-8 justify-center
        border-2 border-x-4 border-t-4 border-b-[16px] border-stone-850`}
      {...(!isMobile &&
        animate && {
          initial: "offscreen",
          whileInView: "onscreen",
          viewport: { amount: 0.65 },
          variants: cardVariantsDesktop,
        })}
    >
      <div className="flex justify-start items-end rounded-full p-2 bg-white w-fit border-4 border-stone-850">
        <img className="size-10 sm:size-12" src={icon} alt="Icon" />
      </div>

      <div className="flex flex-col gap-2 sm:gap-3">
        <h2 className="mx-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {title}
        </h2>
        <div className="px-2 sm:px-4 flex flex-wrap gap-2 pb-6 sm:pb-8">
          {tags?.map((tag: tagType, i: number) => (
            <a
              key={i}
              className="text-sm sm:text-base font-extralight"
              href={tag.url}
            >
              #{tag.text}
            </a>
          ))}
        </div>
      </div>

      {desc && (
        <>
          <hr className="ml-2 mr-10 border-2 rounded-full border-stone-800" />
          <div className="mx-2 sm:mx-4 text-slate-900 font-medium sm:font-semibold">
            <MarkDownText markdown={desc} />
          </div>
        </>
      )}

      {imgUrl && (
        <img
          className="w-full max-h-48 sm:max-h-64 object-cover rounded-2xl"
          src={imgUrl}
          alt="Image"
        />
      )}

      {code && (
        <div className="flex flex-col gap-4 sm:gap-6">
          {code.map((c: copyType, i: number) => (
            <CopyCommand key={i} text={c.text} label={c.label} />
          ))}
        </div>
      )}
      {kind === "reaction" && <ReactionBar />}
    </Container>
  );
};

export default Card;
