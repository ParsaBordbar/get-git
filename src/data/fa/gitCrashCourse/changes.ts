export const changes = {
  pageName: "changes",
  cards: [
    {
      title: "تغییرات",
      kind: "reaction",
      desc: `یا همان stage های Git و اینکه چطور بین آن‌ها جابه‌جا شوی!`,
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-yellow",
    },
    {
      title: "مرحله‌ها",
      kind: "reaction",
      desc: `
فایل‌ها در Git می‌توانند در **دو وضعیت** باشند:
    &nbsp;  
    &nbsp;  
    **Tracked** - فایل‌هایی که Git آن‌ها را می‌شناسد و به repository اضافه شده‌اند.
    &nbsp;  
    &nbsp;  
    **Untracked** - فایل‌هایی که در working directory تو هستند، ولی به repository اضافه نشده‌اند.
        `,
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-blue-sky",
    },
    {
      title: "Git Status",
      kind: "reaction",
      desc: `می‌توانیم وضعیت فایل‌ها را با دستور git status ببینیم:`,
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "./assets/status.png",
      style: "bg-candy-yellow-sharp",
    },
    {
      title: "فایل‌های Staged",
      kind: "reaction",
      desc: `فایل‌های Staged فایل‌هایی هستند که آماده‌ی commit شدن در repositoryای هستند که رویش کار می‌کنی. درباره‌ی staging بیشتر در [این مجموعه کارت](/get-git/basics) صحبت کردیم!`,
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "./assets/status.png",
      style: "bg-candy-teal",
    },
    {
      title: "Git Add",
      desc: `می‌توانی فایل‌ها را به **staging area** اضافه کنی تا Git تغییرات را دنبال کند:`,
      kind: "reaction",
      code: [
        {
          text: "git add <file_name>",
        },
      ],
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-pink",
    },
    {
      title: "دیدن و مقایسه کردن",
      desc: `خب، با افتخار کدت را commit کردی، ولی می‌خواهی ببینی تا حالا چه چیزی commit کرده‌ای؛ چطور می‌توانی ببینی چه کارهایی انجام شده است؟`,
      kind: "reaction",
      style: "bg-candy-red",
      icon: "./assets/git.svg",
    },
    {
      title: "Git Log",
      kind: "reaction",
      desc: `
 -تاریخچه‌ی commit ها را در repository نشان می‌دهد.
    
 &nbsp;

 -[هش‌های commit](/get-git/commit)، نویسنده، تاریخ و [پیام‌ها](/get-git/commit) را نمایش می‌دهد.`,
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      icon: "./assets/git.svg",
      style: "bg-candy-green-light",
      code: [
        {
          label: "",
          text: "git log",
        },
        {
          label: "برای خلاصه‌ی یک‌خطی:",
          text: "git log --oneline",
        },
        {
          label: "برای دیدن تغییرات در commit ها:",
          text: "git log -p",
        },
      ],
    },

    {
      title: "Git Show",
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      desc: `
اطلاعات دقیق درباره‌ی یک commit **خاص** را نشان می‌دهد.

&nbsp;
&nbsp;

شامل پیام commit، نویسنده، تاریخ و تغییرات کد است.`,
      kind: "reaction",
      style: "bg-candy-green-M",
      icon: "./assets/git.svg",
      code: [{ label: "", text: "git show <commit-hash>" }],
    },

    {
      title: "Git Diff",
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      desc: `با دستور diff می‌توانیم وضعیت‌ها، stage ها و commit ها را با هم مقایسه کنیم!
        `,
      kind: "reaction",
      style: "bg-candy-yellow-warm",
      icon: "./assets/git.svg",
      code: [
        {
          label: "مقایسه‌ی working directory با آخرین نسخه‌ی commit شده:",
          text: "git diff",
        },
        {
          label: "مقایسه‌ی فایل‌های staged با آخرین commit:",
          text: "git diff --staged",
        },
        { label: "مقایسه‌ی دو commit:", text: "git diff <commit1> <commit2>" },
      ],
    },

    {
      title: "برگرداندن تغییرات",
      kind: "reaction",
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      desc: `خب… وقتی خرابکاری کردیم، چطور می‌توانیم Ctrl + z بزنیم؟
        `,
      style: "bg-candy-blue-sky",
      icon: "./assets/git.svg",
    },

    {
      title: "Git Restore",
      kind: "reaction",
      tags: [
        {
          text: "git",
        },
        {
          text: "github",
        },
        {
          text: "version_control",
        },
      ],
      desc: `می‌توانیم یک فایل یا چند فایل را به نسخه‌های قبلی commit شده **برگردانیم**.
        `,
      style: "bg-candy-teal",
      icon: "./assets/git.svg",
      code: [
        {
          text: "git restore <file>",
          label: "برگرداندن یک فایل:",
        },
        {
          text: "git restore .",
          label: "برگرداندن کل Repo:",
        },
        {
          text: "git reset --soft HEAD~1",
          label: "از commit به stage:",
        },
      ],
    },
  ],
};
