import { ReactionButtonType } from "../../types/types";
import { motion } from "motion/react";

function ReactionButton({ style = "", text, count = 0, active = false, onClick }: ReactionButtonType) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`React ${text}${count ? `, ${count}` : ""}`}
      whileTap={{ scale: 0.92 }}
      className={`${style} ${active ? "bg-candy-yellow" : "bg-white"} cursor-pointer inline-flex items-center gap-1.5
        rounded-2xl px-3 py-2 text-slate-900 border-stone-850 border-t-2 border-x-2 border border-b-[5px]`}
    >
      <span>{text}</span>
      {count > 0 && (
        <span className="min-w-4 text-xs font-bold tabular-nums leading-none">{count}</span>
      )}
    </motion.button>
  );
}

export default ReactionButton;
