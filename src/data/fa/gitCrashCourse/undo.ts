const tags = [
  { text: "git" },
  { text: "undo" },
  { text: "recovery" },
];

export const undo = {
  pageName: "undo",
  cards: [
    {
      title: "Undo و Recovery",
      kind: "reaction",
      desc: `چیزی را خراب کردی. Git تقریباً حتماً هنوز آن را دارد.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-red",
    },
    {
      title: "کجا رفت؟",
      kind: "reaction",
      desc: `قبل از برگرداندن چیزی، مشخص کن تغییر در **کدام مرحله** نشسته — راه‌حل برای هر کدام فرق می‌کند.

**Working directory** — ویرایش شده، هیچ‌وقت stage نشده.

**Staging area** — دستور \`git add\` را زدی، ولی \`git commit\` را نه.

**Committed** — در تاریخچه‌ی local توست.

**Pushed** — روی remote است و ممکن است دیگران هم آن را داشته باشند.

\`git status\` به تو می‌گوید کدام است. هر بار اول آن را بخوان.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "./assets/stages.png",
      style: "bg-candy-blue-sky",
    },
    {
      title: "Unstage کردن یک فایل",
      kind: "reaction",
      desc: `چیزی را اشتباهی اضافه کردی؟ آن را از staging area بیرون بکش. ویرایش‌های تو **دست نمی‌خورند** — فایل فقط دیگر staged نیست.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git restore --staged <file>", label: "یک فایل را unstage کن:" },
        { text: "git restore --staged .", label: "همه‌چیز را unstage کن:" },
      ],
    },
    {
      title: "دور انداختن ویرایش‌های Local",
      kind: "reaction",
      desc: `این یکی **کار را نابود می‌کند**. تغییرات commitنشده تنها چیزی است که Git نمی‌تواند برای تو برگرداند — هیچ commitای نیست که از آن بازیابی کنی.

اگر مطمئن نیستی، به‌جای آن \`git stash\` کن. همان undo است، ولی برگشت‌پذیر.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink-strawberry",
      code: [
        { text: "git restore <file>", label: "تغییرات یک فایل را دور بریز:" },
        { text: "git restore .", label: "همه‌چیز را دور بریز (مواظب باش):" },
        { text: "git stash", label: "امن‌تر: به‌جای حذف کردن، پارکش کن:" },
      ],
    },
    {
      title: "Amend کردن آخرین Commit",
      kind: "reaction",
      desc: `یک فایل را فراموش کردی، یا در پیام تایپی داشتی؟ \`--amend\` به‌جای اینکه یک commit جدید روی آن بگذارد، آخرین commit را جایگزین می‌کند.

تاریخچه را **بازنویسی** می‌کند، پس فقط commitهایی را amend کن که هنوز push نکرده‌ای.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git commit --amend", label: "پیام را اصلاح کن:" },
        {
          text: "git add <file> && git commit --amend --no-edit",
          label: "یک فایل فراموش‌شده اضافه کن، پیام را نگه دار:",
        },
      ],
    },
    {
      title: "سه Reset",
      kind: "reaction",
      desc: `\`git reset\` اشاره‌گر branch را به عقب می‌برد. اینکه برای **فایل‌هایت** چه اتفاقی می‌افتد به flag بستگی دارد:

**--soft** — commit برگردانده می‌شود، تغییرات **staged** می‌مانند. برای اینکه دوباره متفاوت commit کنی از این استفاده کن.

**--mixed** (پیش‌فرض) — commit برگردانده می‌شود، تغییرات در working directory می‌مانند، unstaged.

**--hard** — commit برگردانده می‌شود و فایل‌هایت **بازنویسی** می‌شوند. این همان است که کار را از دست می‌دهد.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      code: [
        { text: "git reset --soft HEAD~1", label: "commit را برگردان، staged نگهش دار:" },
        { text: "git reset --mixed HEAD~1", label: "commit را برگردان، فایل‌ها را نگه دار:" },
        { text: "git reset --hard HEAD~1", label: "commit و تغییرات را برگردان:" },
      ],
    },
    {
      title: "Revert: برگرداندن در تاریخچه‌ی مشترک",
      kind: "reaction",
      desc: `وقتی یک commit **push** شده، آن را \`reset\` نکن — تاریخچه‌ای را بازنویسی می‌کنی که دیگران قبلاً pull کرده‌اند.

\`git revert\` به‌جای آن یک **commit جدید** می‌سازد که commit قدیمی را خنثی می‌کند. تاریخچه دست‌نخورده می‌ماند و همه همگام می‌مانند.

قانون سرانگشتی: **reset** برای تاریخچه‌ی خصوصی، **revert** برای تاریخچه‌ی مشترک.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-light",
      code: [
        { text: "git revert <commit>", label: "یک commit را امن برگردان:" },
        { text: "git revert HEAD", label: "جدیدترین commit را برگردان:" },
        {
          text: "git revert --no-commit <commit>",
          label: "undo را stage کن بدون اینکه commit کنی:",
        },
      ],
    },
    {
      title: "Stash: کارت را پارک کن",
      kind: "reaction",
      desc: `باید branch عوض کنی، ولی وسط یک تغییر هستی و آماده‌ی commit نیستی. Stash کار را کنار می‌گذارد و یک tree تمیز به تو برمی‌گرداند.

به‌طور پیش‌فرض \`git stash\` فایل‌های untracked را رد می‌کند — اگر آن‌ها را هم می‌خواهی \`-u\` بده.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-milky",
      code: [
        { text: "git stash push -m 'wip: login form'", label: "پارکش کن، با یک برچسب:" },
        { text: "git stash list", label: "ببین چه چیزی پارک کرده‌ای:" },
        { text: "git stash pop", label: "جدیدترین را برگردان:" },
        { text: "git stash apply stash@{2}", label: "یک مورد خاص را برگردان، stash را نگه دار:" },
      ],
    },
    {
      title: "Commit روی Branch اشتباه",
      kind: "reaction",
      desc: `کلاسیک. روی \`main\` commit کردی در حالی که منظورت یک feature branch بود.

از جایی که هستی branch بگیر — commit با تو می‌آید — بعد \`main\` را به جایی که باید می‌بود برگردان.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git branch feature/my-work", label: "۱. commit را روی یک branch جدید ذخیره کن:" },
        { text: "git reset --hard HEAD~1", label: "۲. branchای را که روی آن بودی به عقب برگردان:" },
        { text: "git switch feature/my-work", label: "۳. برو جایی که منظورت بود:" },
      ],
    },
    {
      title: "Reflog: جعبه‌ی سیاه Git",
      kind: "reaction",
      desc: `\`git reflog\` **هر** موقعیتی که HEAD در آن بوده را ثبت می‌کند — شامل commitهایی که فکر می‌کردی با \`reset --hard\` نابودشان کرده‌ای.

هیچ چیز commitشده‌ای واقعاً تا حدود ۹۰ روز از بین نمی‌رود. وقتی مطمئن شدی کارت را گم کرده‌ای، **قبل از** اینکه وحشت کنی اول اینجا نگاه کن.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git reflog", label: "ببین HEAD کجا بوده:" },
        { text: "git reset --hard HEAD@{3}", label: "به یک موقعیت قبلی برگرد:" },
        { text: "git checkout -b rescue HEAD@{3}", label: "امن‌تر: روی یک branch جدید بازیابی کن:" },
      ],
    },
    {
      title: "بازیابی یک Branch حذف‌شده",
      kind: "reaction",
      desc: `حذف یک branch فقط **برچسب** را حذف می‌کند. commitها هنوز آنجا هستند — فقط نامی را که به آن‌ها اشاره می‌کرد گم کرده‌ای.

commit نوک را در reflog پیدا کن، بعد یک branch جدید روی آن آویزان کن.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git reflog", label: "۱. آخرین commit آن branch را پیدا کن:" },
        { text: "git branch <name> <commit>", label: "۲. دوباره یک branch را به آن اشاره بده:" },
      ],
    },
    {
      title: "بازیابی یک فایل حذف‌شده",
      kind: "reaction",
      desc: `اگر فایل تا حالا commit شده باشد، می‌توانی آن را مستقیم از تاریخچه برگردانی — لازم نیست چیز دیگری را برگردانی.

\`git log\` با \`--\` که به مسیر محدود شده، commitای را پیدا می‌کند که آخرین بار آن فایل را داشته.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-M",
      code: [
        { text: "git log --oneline -- <file>", label: "پیدا کن آخرین بار کی وجود داشته:" },
        { text: "git restore --source=<commit> -- <file>", label: "همان نسخه را برگردان:" },
      ],
    },
    {
      title: "نسخه‌ی کوتاه",
      kind: "reaction",
      desc: `**اشتباهی stage کردی** → \`git restore --staged\`

**ویرایش بد، commit نشده** → \`git stash\`، یا \`git restore\` اگر مطمئنی

**commit بد، push نشده** → \`git reset\`

**commit بد، قبلاً push شده** → \`git revert\`

**یک commit یا branch را گم کردی** → \`git reflog\`

تنها چیزی که Git نمی‌تواند نجات بدهد کاری است که هیچ‌وقت stage یا commit نکرده‌ای. زود commit کن — این دکمه‌ی undo توست.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-red",
    },
  ],
};
