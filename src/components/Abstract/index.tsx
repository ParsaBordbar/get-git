import { motion, useScroll } from "motion/react";

type AbstractProps = {
  count: number;
  isRTL?: boolean;
};

const Abstract = ({ count, isRTL = false }: AbstractProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div
        className={`fixed top-0 z-40 hidden h-screen w-2 bg-white md:block
          border-x-2 border-stone-850 ${isRTL ? "right-0" : "left-0"}`}
      >
        <motion.div
          id="scroll-indicator"
          className="h-full w-full bg-candy-red"
          style={{ scaleY: scrollYProgress, originY: 0 }}
        />
      </div>

      <div
        className={`fixed top-6 z-40 hidden w-40 items-baseline justify-between gap-2
          rounded-2xl bg-white px-3 py-2 text-sm font-bold text-slate-900 md:flex
          border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
          ${isRTL ? "right-6 lg:right-10" : "left-6 lg:left-10"}`}
      >
        <span>{count} cards</span>
        <span className="font-medium text-stone-500">
          {Math.floor(count * 1.2)} min
        </span>
      </div>

      <a
        href="/get-git/"
        aria-label="Home"
        className={`fixed top-22 z-40 hidden w-40 items-center justify-center gap-2
          rounded-2xl bg-white px-3 py-2 text-sm font-bold !text-slate-900 md:flex
          border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
          transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-0.5
          ${isRTL ? "right-6 lg:right-10" : "left-6 lg:left-10"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
          aria-hidden="true"
        >
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10.5V20h5v-5h4v5h5v-9.5" />
        </svg>
        <span>Home</span>
      </a>
    </>
  );
};

export default Abstract;
