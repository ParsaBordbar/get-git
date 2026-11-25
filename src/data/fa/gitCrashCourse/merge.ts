const tags = [
  { text: "git" },
  { text: "merge" },
  { text: "branches" },
];

export const merge = {
  pageName: "merge",
  cards: [
    {
      title: "مرج",
      kind: "reaction",
      desc: `از branch جدا شدی، کارت را انجام دادی. حالا برگردانش سر جایش.`,
      tags,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-green-light",
    },
    {
      title: "مرج فقط یک‌طرفه است",
      kind: "reaction",
      desc: `مرج متقارن نیست. اول **checkout می‌کنی به branchای که باید کار را بگیرد**، بعد branch دیگر را داخل آن merge می‌کنی.

برای اینکه \`feature\` به \`main\` برسد، باید روی \`main\` بایستی. برعکس گرفتن این ترتیب، رایج‌ترین اشتباه در مرج است.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git switch main", label: "1. بایست جایی که کار باید برسد:" },
        { text: "git merge feature", label: "2. branch دیگر را به داخل بکش:" },
      ],
    },
    {
      title: "Fast-Forward",
      kind: "reaction",
      desc: `اگر \`main\` از وقتی که branch گرفتی تکان نخورده باشد، چیزی برای آشتی دادن نیست. گیت فقط برچسب \`main\` را جلو می‌کشد روی کامیت‌های تو.

هیچ merge commitای ساخته نمی‌شود. تاریخچه یک خط راست می‌ماند — مرتب است، ولی این واقعیت که اصلاً branchای وجود داشته هم پاک می‌شود.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow",
      code: [
        { text: "git merge feature", label: "Fast-forward وقتی ممکن است:" },
        { text: "git merge --ff-only feature", label: "مرج را رد کن مگر اینکه fast-forward شود:" },
      ],
    },
    {
      title: "مرج سه‌طرفه",
      kind: "reaction",
      desc: `اگر **هر دو** branch کامیت تازه داشته باشند، گیت نمی‌تواند برچسب را جلو بکشد. به سه نقطه نگاه می‌کند — نوک branch تو، نوک branch آن‌ها، و آخرین commit مشترکی که داشتند — و یک **merge commit** با دو parent می‌سازد.

این حالت عادی در کار تیمی است، و همین‌جاست که کانفلیکت‌ها می‌توانند ظاهر شوند.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-teal",
      code: [
        { text: "git merge feature", label: "مرج کردن با یک merge commit:" },
        { text: "git merge -m 'merge: feature into main' feature", label: "پیام مرج را خودت تعیین کن:" },
      ],
    },
    {
      title: "--no-ff: نگه داشتن داستان",
      kind: "reaction",
      desc: `\`--no-ff\` حتی وقتی fast-forward ممکن بود، یک merge commit را اجباری می‌کند.

وقتی یک branch نماینده‌ی یک واحد کار است ارزشش را دارد — یک feature، یک fix، یک release. آن merge commit یک نشانک است که می‌گوید *اینجا جایی است که آن کار فرود آمد*، و بعداً می‌توانی کل branch را یکجا revert کنی.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      code: [
        { text: "git merge --no-ff feature", label: "همیشه یک merge commit بساز:" },
        { text: "git revert -m 1 <merge-commit>", label: "بعداً: کل branch مرج‌شده را برگردان:" },
      ],
    },
    {
      title: "--squash: یک کامیت تمیز",
      kind: "reaction",
      desc: `\`--squash\` همه‌ی کاری که branch کرده را می‌گیرد و به‌عنوان **یک** دسته تغییر stage می‌کند. نه merge commit، نه تاریخچه‌ی branch — فقط نتیجه‌ی نهایی، که منتظر است تو commitاش کنی.

برای branchای پر از "wip" و "fix typo" و "actually fix typo" خوب است. توجه کن که گیت **به‌جای تو commit نمی‌کند** و مرج را هم ثبت نمی‌کند، پس branch هنوز مرج‌نشده به نظر می‌رسد.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink",
      code: [
        { text: "git merge --squash feature", label: "1. branch را به‌صورت تخت در staging area بریز:" },
        { text: "git commit -m 'feat: add login flow'", label: "2. آن را به‌عنوان یک تغییر commit کن:" },
      ],
    },
    {
      title: "پیش از مرج، نگاهی بینداز",
      kind: "reaction",
      desc: `می‌توانی ببینی مرج چه چیزی را وارد می‌کند، پیش از اینکه به آن متعهد شوی.

\`--no-commit --no-ff\` مرج را انجام می‌دهد ولی پیش از ساختن commit متوقف می‌شود، تا بتوانی بازرسی‌اش کنی — و \`git merge --abort\` هنوز تو را تمیز برمی‌گرداند.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-milky",
      code: [
        { text: "git log main..feature --oneline", label: "چه commitهایی وارد می‌شوند:" },
        { text: "git diff main...feature", label: "تغییر واقعاً چه شکلی است:" },
        { text: "git merge --no-commit --no-ff feature", label: "مرج کن ولی پیش از commit متوقف شو:" },
      ],
    },
    {
      title: "وقتی کانفلیکت پیش می‌آید",
      kind: "reaction",
      desc: `کانفلیکت خطا نیست. گیت دارد می‌گوید دو branch خط‌های یکسانی را عوض کرده‌اند و او حدس نمی‌زند کدام برنده است.

هیچ چیزی گم نمی‌شود و هیچ‌وقت گیر نمی‌کنی: \`git merge --abort\` همه‌چیز را دقیقاً مثل قبل برمی‌گرداند.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-pink-strawberry",
      code: [
        { text: "git status", label: "ببین کدام فایل‌ها کانفلیکت دارند:" },
        { text: "git add <file>", label: "یک فایل را به‌عنوان حل‌شده علامت بزن:" },
        { text: "git merge --continue", label: "مرج را تمام کن:" },
        { text: "git merge --abort", label: "یا کاملاً برگرد عقب:" },
      ],
    },
    {
      title: "بعد از مرج",
      kind: "reaction",
      desc: `وقتی کار فرود آمد، برچسب branch کارش را کرده است. حذف کردنش فقط اسم را پاک می‌کند، نه کامیت‌ها را.

\`--merged\` برنچ‌هایی را فهرست می‌کند که کاملاً داخل branch فعلی‌ات جا شده‌اند — آن‌ها همان‌هایی هستند که حذفشان امن است.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      code: [
        { text: "git branch --merged", label: "کدام برنچ‌ها کاملاً مرج شده‌اند:" },
        { text: "git branch -d feature", label: "یک branch مرج‌شده را حذف کن (اگر مرج نشده باشد رد می‌کند):" },
        { text: "git push origin --delete feature", label: "آن را روی remote هم حذف کن:" },
      ],
    },
    {
      title: "دیدن شکل تاریخچه",
      kind: "reaction",
      desc: `تاریخچه‌ی مرج یک گراف است، نه یک فهرست. \`--graph\` آن را می‌کشد، و سریع‌ترین راه برای فهمیدن این است که واقعاً برای repo چه اتفاقی افتاده.`,
      tags,
      icon: "./assets/git.svg",
      style: "bg-candy-green-M",
      code: [
        { text: "git log --graph --oneline --all", label: "گراف برنچ‌ها را بکش:" },
        { text: "git log --merges --oneline", label: "فقط merge commitها را نشان بده:" },
      ],
    },
  ],
};
