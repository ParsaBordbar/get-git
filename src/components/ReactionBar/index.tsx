import ReactionButton from "../ReactionButton";
import { useReactions } from "../../lib/reactions";

const reactions = ["👍", "👎", "😍", "😎", "💅", "🤔"];

function ReactionBar({ id }: { id: string }) {
  const { counts, mine, toggle } = useReactions(id);

  return (
    <div
      className="flex flex-wrap justify-center sm:justify-start
      gap-2 sm:gap-3 md:gap-4 mx-2 sm:mx-4 mt-4"
    >
      {reactions.map((emoji) => (
        <ReactionButton
          key={emoji}
          text={emoji}
          count={counts[emoji] ?? 0}
          active={mine.includes(emoji)}
          onClick={() => toggle(emoji)}
        />
      ))}
    </div>
  );
}

export default ReactionBar;
