const tags = [
  { text: "git" },
  { text: "stash" },
  { text: "workflow" },
];

export const stash = {
  pageName: "stash",
  cards: [
    {
      title: "Stash",
      kind: "reaction",
      desc: `یک قفسه برای کاری که هنوز آماده‌ی commit شدن نیست.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-milky",
    },
    {
      title: "Stash برای چیست",
      kind: "reaction",
      desc: `وسط یک کاری هستی. یک باگ می‌رسد، یا باید branch عوض کنی، و Git قبول نمی‌کند چون تغییراتت را از دست می‌دهی.

Stash همه‌ی تغییرات commitنشده را می‌گیرد، کنار می‌گذارد و یک working tree تمیز به تو تحویل می‌دهد. کارت امن است و branch تو دست‌نخورده به نظر می‌رسد.

Stash یک **stack** است — جدیدترین stash بالاست.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git stash", label: "همه‌چیز را پارک کن، یک tree تمیز بگیر:" },
        { text: "git stash push -m 'wip: half-done login form'", label: "با یک برچسب پارکش کن که بعداً بشناسیش:" },
      ],
    },
    {
      title: "فایل‌های Untracked نادیده گرفته می‌شوند",
      kind: "reaction",
      desc: `دستور پیش‌فرض \`git stash\` فقط فایل‌های **tracked** را می‌گیرد. فایل‌های کاملاً جدیدی که Git تا حالا ندیده در working directory می‌مانند — و این خیلی‌ها را غافلگیر می‌کند، چون به نظر می‌رسد stash بی‌صدا آن‌ها را نادیده گرفته.

\`-u\` فایل‌های untracked را هم شامل می‌شود. \`-a\` فایل‌های ignored را هم شامل می‌شود، که تقریباً هیچ‌وقت نمی‌خواهی.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git stash -u", label: "فایل‌های جدید و untracked را هم شامل کن:" },
        { text: "git stash -a", label: "فایل‌های ignored را هم شامل کن (به‌ندرت چیزی است که بخواهی):" },
        { text: "git stash --staged", label: "فقط چیزی را stash کن که الان staged است:" },
      ],
    },
    {
      title: "ببین چه چیزی پارک کرده‌ای",
      kind: "reaction",
      desc: `Stashها \`stash@{0}\`، \`stash@{1}\` و همین‌طور نام‌گذاری می‌شوند — \`{0}\` همیشه جدیدترین است.

به همین دلیل برچسب زدن مهم است. سه stash بدون برچسب از هفته‌ی پیش، سه معما هستند.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git stash list", label: "همه‌ی stashها را لیست کن:" },
        { text: "git stash show stash@{0}", label: "خلاصه‌ی محتوای یکی:" },
        { text: "git stash show -p stash@{0}", label: "diff کامل:" },
      ],
    },
    {
      title: "pop در برابر apply",
      kind: "reaction",
      desc: `**pop** stash را برمی‌گرداند و آن را از stack **حذف** می‌کند.

**apply** آن را برمی‌گرداند و **نگه** می‌دارد، پس می‌توانی همان تغییرات را روی بیش از یک branch بگذاری — یا اگر تلاش اول بد پیش رفت دوباره امتحان کنی.

وقتی مطمئن نیستی تغییرات تمیز اعمال می‌شوند، از \`apply\` استفاده کن. بعداً همیشه می‌توانی آن را drop کنی.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      code: [
        { text: "git stash pop", label: "جدیدترین را برگردان و حذفش کن:" },
        { text: "git stash apply", label: "جدیدترین را برگردان، stash را نگه دار:" },
        { text: "git stash apply stash@{2}", label: "یک مورد خاص را برگردان:" },
      ],
    },
    {
      title: "Stash روی یک Branch جدید",
      kind: "reaction",
      desc: `روی \`main\` stash کردی، بعد فهمیدی کار لایق branch خودش است؟ \`git stash branch\` branch را **از commitای می‌سازد که stash روی آن ساخته شده**، stash را آنجا اعمال می‌کند و drop می‌کند.

از conflict هم جلوگیری می‌کند: چون از commit اصلی شروع می‌کند، تغییرات همیشه تمیز اعمال می‌شوند.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-light",
      code: [
        { text: "git stash branch feature/login", label: "یک branch جدید از جدیدترین stash:" },
        { text: "git stash branch feature/login stash@{1}", label: "از یک stash خاص:" },
      ],
    },
    {
      title: "بخشی از کارت را Stash کن",
      kind: "reaction",
      desc: `\`-p\` تغییراتت را hunk به hunk جلو می‌برد و می‌پرسد چه چیزی stash شود. وقتی یک فایل هم اصلاحی را دارد که می‌خواهی نگه داری و هم نویز دیباگ را که نمی‌خواهی، مفید است.

برای stash کردن یک hunk **y**، برای نگه داشتن آن در tree **n**، برای کوچک‌تر تقسیم کردنش **s** و برای توقف **q** جواب بده.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink",
      code: [
        { text: "git stash -p", label: "انتخاب کن چه چیزی stash شود:" },
        { text: "git stash push -m 'debug logs' -- src/App.tsx", label: "فقط مسیرهای خاص را stash کن:" },
      ],
    },
    {
      title: "وقتی یک Stash دچار Conflict می‌شود",
      kind: "reaction",
      desc: `اگر branch در مدت نشستن کارت روی قفسه جلو رفته باشد، برگرداندن آن می‌تواند conflict ایجاد کند. مثل هر conflict دیگری حلش کن.

یک دام: بعد از یک \`pop\` همراه با conflict، stash **حذف** نمی‌شود. این عمدی است — تور امن تو می‌ماند تا خودت بگویی. وقتی راضی شدی dropش کن.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink-strawberry",
      code: [
        { text: "git status", label: "فایل‌های conflictدار را ببین:" },
        { text: "git add <file>", label: "هر کدام را به‌عنوان حل‌شده علامت بزن:" },
        { text: "git stash drop", label: "بعد stashای را که تازه بازیابی کردی حذف کن:" },
      ],
    },
    {
      title: "تمیزکاری",
      kind: "reaction",
      desc: `Stashها تاریخ انقضا ندارند و هیچ‌وقت در \`git log\` دیده نمی‌شوند، پس بی‌صدا ماه‌ها روی هم تلنبار می‌شوند.

\`clear\` با روش‌های معمولی قابل برگشت نیست — stashهای dropشده غیرقابل دسترس‌اند و \`git fsck\` تنها راه چاره‌ی توست. اول \`git stash list\` را چک کن.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-M",
      code: [
        { text: "git stash drop stash@{1}", label: "یکی را حذف کن:" },
        { text: "git stash clear", label: "همه را حذف کن (مواظب باش):" },
        { text: "git fsck --unreachable | grep commit", label: "آخرین راه‌حل بعد از یک clear بد:" },
      ],
    },
    {
      title: "Stash یک کمد بایگانی نیست",
      kind: "reaction",
      desc: `Stash برای **چند دقیقه تا چند ساعت** است، نه چند هفته. در log دیده نمی‌شود، به remote push نمی‌شود و با یک clone تازه دوام نمی‌آورد.

اگر کاری باید بیشتر از یک بعدازظهر زنده بماند، یک branch و یک commit می‌خواهد — حتی یک commit شلخته‌ی \`wip:\` — همیشه می‌توانی تاریخچه را بعداً مرتب کنی.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-milky",
    },
  ],
};
