import { ReactionButtonType } from "../../types/types";
import ReactionButton from "../ReactionButton";

const reactions = [
  { text: "👍" },
  { text: "👎" },
  { text: "😍" },
  { text: "😎" },
  { text: "💅" },
  { text: "🤔" },
];

function ReactionBar() {
  return (
    <div
      className="flex flex-wrap justify-center sm:justify-start 
      gap-2 sm:gap-3 md:gap-4 mx-2 sm:mx-4 mt-4"
    >
      {reactions.map((reaction: ReactionButtonType, index: number) => (
        <ReactionButton text={reaction.text} key={index} />
      ))}
    </div>
  );
}

export default ReactionBar;
