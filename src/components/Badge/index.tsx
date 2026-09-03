function Badge({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span
      className={`shrink-0 rounded-full bg-white px-3 py-1
        text-[10px] sm:text-xs font-bold uppercase tracking-widest !text-slate-900
        border-2 border-x-4 border-t-2 border-b-[5px] border-stone-850 ${className}`}
    >
      {text}
    </span>
  );
}

export default Badge;
