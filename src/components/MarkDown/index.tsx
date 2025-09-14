import ReactMarkdown from "react-markdown";

const MarkDownText = ({ markdown }: { markdown: string }) => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkDownText;
