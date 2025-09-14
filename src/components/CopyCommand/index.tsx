import { useState } from "react";
import { copyType } from "../../types/types";
import MarkDownText from "../MarkDown";

const CopyCommand = ({ label, text }: copyType) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <h4 className="px-2 sm:px-4 font-bold text-base sm:text-lg md:text-xl">
        {label}
      </h4>

      <div
        className="flex flex-row justify-between items-center 
        bg-white rounded-2xl border-t-2 border-x-4 border-b-[6px] border-stone-850
        py-2 px-3 sm:px-5 gap-3 sm:gap-6 md:gap-8"
      >
        <div className="text-left text-sm sm:text-base break-words max-w-[70%]">
          <MarkDownText markdown={text} />
        </div>

        <button
          onClick={handleCopy}
          className="cursor-pointer bg-gray-300 rounded-xl sm:rounded-2xl 
          px-2 sm:px-3 h-8 sm:h-9 text-sm sm:text-base flex-shrink-0"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default CopyCommand;
