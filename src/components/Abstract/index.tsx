import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const Abstract = ({ count }: {count: number}) => {
  const { scrollYProgress } = useScroll();
  
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed flex flex-col items-center rounded-full -mx-[500px]">
      <motion.div
      className="rounded-full border-2 border-stone-800 border-l-3 border-b-4"
        id="scroll-indicator"
        style={{
          scaleY: scrollYProgress,
          position: "absolute",
          top: screenHeight / count,       
          height: screenHeight * 0.4,
          width: 14,
          originY: 0,
          zIndex: 10,
          backgroundColor: "#4C91ED",
        }}
      />
      <ul className="flex flex-col text-[#000022] relative text-center font-semibold mt-28 px-5 rounded-2xl border-b-stone-850
        border-t-4 py-1 border-x-2 border-2 border-b-[6px] bg-[#FC2865]" style={{top: screenHeight / count - 185}}>
        <li className="flex gap-1 justify-center items-center">
          <img className="size-4" src={'/assets/card.svg'} alt="" />
          <p>{count} cards</p>
        </li>
        <li className="flex gap-1 justify-center items-center">
          <img className="size-5" src={'/assets/clock.svg'} alt="" />
          <p>{Math.floor(count * 1.2)} mins</p>
        </li>
      </ul>
    </div>
  );
};

export default Abstract;
