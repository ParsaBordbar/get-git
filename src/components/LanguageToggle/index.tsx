import { useLang, type Lang } from "../../i18n/lang";

function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  const other: Lang = lang === "fa" ? "en" : "fa";

  const switchLanguage = () => {
    // setLang navigates to the same page in the other language.
    setLang(other);
  };

  return (
    <button
      type="button"
      onClick={switchLanguage}
      aria-label={lang === "fa" ? t("toggle.toEn") : t("toggle.toFa")}
      className="fixed bottom-5 end-5 z-50 cursor-pointer rounded-2xl bg-white px-4 py-2 text-sm font-bold !text-slate-900
        border-2 border-x-4 border-t-2 border-b-[6px] border-stone-850
        transition-transform duration-100 hover:-translate-y-0.5 active:translate-y-0.5"
    >
      {lang === "fa" ? "English" : "فارسی"}
    </button>
  );
}

export default LanguageToggle;
