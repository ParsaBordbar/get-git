import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

type AbstractProps = {
  count: number;
};

const Abstract = ({ count }: AbstractProps) => {
  const { scrollYProgress } = useScroll();

  const [screenHeight, setScreenHeight] = useState<number>(0);
  useEffect(() => {
    const updateHeight = () => setScreenHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className="fixed left-2 sm:left-6 md:left-12 top-0 flex flex-col items-center hidden md:flex my-2"
      style={{ height: screenHeight }}
    >
      <div
        className="mt-12 sm:mt-20 flex flex-col items-center gap-2 px-3 py-2 
        text-[#000022] text-sm sm:text-base md:text-lg font-semibold
        rounded-2xl border-t-4 border-x-2 border-b-[6px] border-stone-850 
        bg-[#FC2865] shadow-md"
      >
        <div className="flex gap-2 items-center">
          <img
            className="size-4 sm:size-5"
            src="./assets/card.svg"
            alt="Cards"
          />
          <p>{count} cards</p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            className="size-4 sm:size-5"
            src="./assets/clock.svg"
            alt="Time"
          />
          <p>{Math.floor(count * 1.2)} mins</p>
        </div>
      </div>

      <motion.div
        className="rounded-full bg-blue-500 border-2 border-stone-800"
        id="scroll-indicator"
        style={{
          scaleY: scrollYProgress,
          height: screenHeight * 0.4,
          width: 14,
          originY: 0,
        }}
      />
    </div>
  );
};

export default Abstract;
