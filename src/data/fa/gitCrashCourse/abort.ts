const tags = [
  { text: "git" },
  { text: "abort" },
  { text: "recovery" },
];

export const abort = {
  pageName: "abort",
  cards: [
    {
      title: "لغو کردن",
      kind: "reaction",
      desc: `هر عملیات طولانی گیت یک راه فرار دارد. هیچ‌وقت گیر نمی‌کنی.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-pink-strawberry",
    },
    {
      title: "اول: در چه وضعیتی هستم؟",
      kind: "reaction",
      desc: `مرج، rebase، cherry-pick و revert همه می‌توانند وسط کار مکث کنند و repo را در یک وضعیت خاص رها کنند. prompt عجیب به نظر می‌رسد، دستورها اعتراض می‌کنند، هیچ‌چیز درست رفتار نمی‌کند.

\`git status\` وضعیت را در بالا نام می‌برد و دقیقاً می‌گوید چه دستورهایی در دسترس‌اند. پیش از تایپ هر چیز دیگری آن را بخوان — لغو درست به این بستگی دارد که داخل کدام عملیات هستی.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git status", label: "چه خبر است:" },
        { text: "git status --short --branch", label: "نسخه‌ی فشرده:" },
      ],
    },
    {
      title: "سه فعل",
      kind: "reaction",
      desc: `هر عملیات قابل‌مکث همان سه flag را می‌گیرد:

**--continue** — درستش کردم، ادامه بده.

**--abort** — کل عملیات را برگردان، برگردانم به جایی که شروع کردم.

**--skip** — این یک commit را رد کن و برو سراغ بعدی (فقط rebase و cherry-pick).

الگو را یک بار یاد بگیر و برای همه‌شان به کار می‌رود.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git rebase --continue", label: "ادامه بده:" },
        { text: "git rebase --abort", label: "برگرد عقب:" },
        { text: "git rebase --skip", label: "commit فعلی را رد کن:" },
      ],
    },
    {
      title: "لغو مرج",
      kind: "reaction",
      desc: `وسط کانفلیکت هستی و فعلاً حوصله‌ی سر و کله زدن با آن را نداری؟ \`--abort\` working tree و index را دقیقاً به همان حالتی برمی‌گرداند که پیش از شروع مرج بودند.

تا وقتی امن است **که تغییرات پیش از مرج‌ات commit یا stash شده باشند**. کارهای commitنشده‌ای که پیش از مرج رها کرده بودی ممکن است گم شوند.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git merge --abort", label: "مرج را برگردان، همه‌چیز را بازگردان:" },
        { text: "git merge --quit", label: "مرج را متوقف کن ولی working tree را همان‌طور که هست نگه دار:" },
      ],
    },
    {
      title: "لغو rebase",
      kind: "reaction",
      desc: `rebase کامیت‌هایت را یکی‌یکی دوباره پخش می‌کند، پس می‌تواند بارها متوقف شود. \`--abort\` همه‌ی کامیت‌های بازپخش‌شده را دور می‌اندازد و branch را به نوک اصلی‌اش برمی‌گرداند.

این همان چیزی است که مردم بیشتر از همه از آن می‌ترسند، و تا وقتی force-push نکرده‌ای کاملاً برگشت‌پذیر است.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      code: [
        { text: "git rebase --abort", label: "branch را به همان حالت اول برگردان:" },
        { text: "git rebase --skip", label: "کامیتی را که دیگر به کار نمی‌آید رد کن:" },
        { text: "git rebase --continue", label: "بعد از حل، ادامه بده:" },
      ],
    },
    {
      title: "لغو cherry-pick و revert",
      kind: "reaction",
      desc: `همان سه فعل، همان رفتار. یک cherry-pick یا revert که به کانفلیکت بخورد مکث می‌کند و منتظر می‌ماند.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink",
      code: [
        { text: "git cherry-pick --abort", label: "cherry-pick را لغو کن:" },
        { text: "git revert --abort", label: "revert را لغو کن:" },
        { text: "git cherry-pick --continue", label: "بعد از حل، ادامه بده:" },
      ],
    },
    {
      title: "--abort در برابر --quit",
      kind: "reaction",
      desc: `**--abort** همه‌چیز را به عقب برمی‌گرداند — عملیات و تغییرهایش رفته‌اند و تو برگشته‌ای به نقطه‌ی شروع.

**--quit** فقط عملیات را تمام می‌کند و working tree را دقیقاً همان‌طور که الان هست رها می‌کند، نیمه‌حل‌شده و همه‌چیز. وقتی از آن استفاده کن که می‌خواهی چیزهایی را که تا حالا درست کرده‌ای نگه داری ولی دیگر نمی‌خواهی گیت ترتیب کارها را مدیریت کند.

اگر مطمئن نیستی، \`--abort\` همان چیزی است که می‌خواهی.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-milky",
      code: [
        { text: "git merge --abort", label: "همه‌چیز را به عقب برگردان:" },
        { text: "git rebase --quit", label: "مدیریتش را متوقف کن، درخت فعلی را نگه دار:" },
      ],
    },
    {
      title: "فرار از ادیتور",
      kind: "reaction",
      desc: `گیت تو را برای یک پیام commit یا rebase تعاملی داخل Vim انداخته و می‌خواهی بیرون بیایی.

خارج شدن **بدون ذخیره** عملیات را لغو می‌کند — گیت یک پیام خالی یا تغییری نکرده را «بی‌خیال» می‌فهمد. وقتی مطمئن نیستی چه چیزی جلوی رویت است، این امن‌ترین راه فرار است.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-light",
      code: [
        { text: ":q!", label: "Vim: بدون ذخیره خارج شو (عملیات لغو می‌شود):" },
        { text: ":wq", label: "Vim: ذخیره کن و ادامه بده:" },
        { text: "git config --global core.editor 'nano'", label: "یا کلاً از Vim استفاده نکن:" },
      ],
    },
    {
      title: "ORIG_HEAD: دکمه‌ی اضطراری",
      kind: "reaction",
      desc: `پیش از هر عملیاتی که branch تو را خیلی جابه‌جا می‌کند — مرج، rebase، reset — گیت جایی را که بودی در \`ORIG_HEAD\` ذخیره می‌کند.

اگر دیر لغو کردی، یا چیزی را که می‌خواستی لغو کنی کامل کردی، این سریع‌ترین راه برگشت است. \`git reflog\` نسخه‌ی کامل‌تر است اگر \`ORIG_HEAD\` تا حالا بازنویسی شده باشد.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-M",
      code: [
        { text: "git reset --hard ORIG_HEAD", label: "برگرد به جایی که پیش از آخرین حرکت بزرگ بودی:" },
        { text: "git reflog", label: "تاریخچه‌ی کامل HEAD، اگر آن کافی نبود:" },
      ],
    },
    {
      title: "خلاصه‌اش",
      kind: "reaction",
      desc: `**گم شدی؟** → \`git status\`

**وسط مرج** → \`git merge --abort\`

**وسط rebase** → \`git rebase --abort\`

**وسط cherry-pick یا revert** → \`git cherry-pick --abort\` / \`git revert --abort\`

**گیر کرده‌ای در ادیتور** → \`:q!\`

**دیر لغو کردی** → \`git reset --hard ORIG_HEAD\`

هیچ‌کدام از این‌ها به remote دست نمی‌زنند. تا وقتی push نکرده‌ای، همه‌شان بی‌هزینه‌اند.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink-strawberry",
    },
  ],
};
