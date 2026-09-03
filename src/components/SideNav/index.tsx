import { navigationType } from "../../types/types";

const arrowBase = `fixed hidden lg:flex cursor-pointer items-center justify-center
  top-1/2 -translate-y-1/2 z-50 size-14 rounded-full text-4xl leading-none font-bold
  !text-slate-900 bg-white
  border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
  transition-transform duration-100 hover:-translate-y-[calc(50%+2px)] active:translate-y-[calc(-50%+2px)]`;

const arrowDisabled = "bg-stone-200 !text-stone-400 opacity-60 pointer-events-none";
function SideNav({
  navigation,
  isRTL = false,
}: {
  navigation?: navigationType;
  isRTL?: boolean;
}) {
  const prevSide = isRTL ? "right-0 me-5" : "left-0 ms-5";
  const nextSide = isRTL ? "left-0 ms-5" : "right-0 me-5";

  return (
    <>
      <a
        href={navigation?.prev}
        aria-label="Previous"
        className={`${arrowBase} ${prevSide} ${navigation?.prev ? "" : arrowDisabled}`}
      >
        {isRTL ? ">" : "<"}
      </a>

      <a
        href={navigation?.next}
        aria-label="Next"
        className={`${arrowBase} ${nextSide} ${navigation?.next ? "" : arrowDisabled}`}
      >
        {isRTL ? "<" : ">"}
      </a>
    </>
  );
}

export default SideNav;
