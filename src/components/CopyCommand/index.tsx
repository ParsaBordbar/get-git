import { useState } from "react";
import { copyType } from "../../types/types";
import MarkDownText from "../MarkDown";

const CopyCommand = ({label, text} : copyType) => {
  const [copied, setCopied] = useState(false);
  const textToCopy = text;

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error("Failed to copy:", err));
  };

  return (
    <div className="flex flex-col">
        <h4 className="flex items-start px-5 font-bold">{label}</h4>
        <div className="flex flex-row text-left bg-white rounded-2xl p-8 gap-10 border-b-stone-850
        border-t-2 border-x-3 border-b-6 py-2 px-5 me-5 ms-2 justify-between items-center">
            <MarkDownText markdown={textToCopy} />
            <button className="cursor-pointer bg-gray-300 rounded-2xl px-2 relative bottom-0 z-10 w-fit h-8" onClick={handleCopy}>
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    </div>
  );
};

export default CopyCommand;
