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
      className="fixed left-2 sm:left-6 md:left-16 top-0 flex-col items-center hidden md:flex my-2 bg-blend-darken"
      style={{ height: screenHeight }}
    >
      <div className="sm:mt-20 mt-30">
        <div
          className="mb-4 flex flex-col items-center gap-2 px-3 py-4
        text-white text-sm sm:text-base md:text-lg font-semibold
        rounded-3xl glass-base glass-gradient glass-bg glass-shadow glass-border"
        >
          {/* <img
            className="size-4 sm:size-5"
            src="./assets/card.svg"
            alt="Cards"
          /> */}
          <p>{count} cards</p>
        </div>
        <div
          className="flex flex-col items-center gap-2 px-3 py-4 
        text-white text-sm sm:text-base md:text-lg font-semibold
        rounded-3xl glass-base glass-gradient glass-bg glass-shadow glass-border"
        >
          {/* <img
            className="size-4 sm:size-5"
            src="./assets/clock.svg"
            alt="Time"
          /> */}
          <p>{Math.floor(count * 1.2)} mins</p>
        </div>
      </div>

      <motion.div
        className="rounded-full bg-white mt-2 glass-bg glass-shadow glass-border"
        id="scroll-indicator"
        style={{
          scaleY: scrollYProgress,
          height: screenHeight * 0.4,
          width: 8,
          originY: 0,
        }}
      />
    </div>
  );
};

export default Abstract;
