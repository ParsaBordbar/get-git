import { ReactionButtonType } from "../../types/types";
import { motion } from "motion/react";

function ReactionButton({ style, text }: ReactionButtonType) {
  return (
    <motion.button
      className={`${style}} cursor-pointer bg-white rounded-t-2xl rounded-b-2xl px-4 py-2  justify-center border-b-stone-850
        border-t-2 border-x-2 border border-b-[5px]`}
    >
      {text}
    </motion.button>
  );
}

export default ReactionButton;
