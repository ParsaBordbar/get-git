import { flashCardSeries } from "../../../types/types";

export const gitConflictCard: flashCardSeries = {
  pageName: "gitConflictCard",
  cards: [
    {
      title: "کانفلیکت گیت چیست؟",
      desc: `یک **کانفلیکت گیت** وقتی پیش می‌آید که دو branch خط‌های یکسانی از یک فایل را تغییر داده باشند و گیت نتواند آن‌ها را خودکار merge کند.

    این معمولاً در این مواقع اتفاق می‌افتد:`,
      code: [
        {
          text: "git merge",
          label: "مرج کردن:",
        },
        {
          text: "git pull",
          label: "Pull کردن:",
        },
        {
          text: "git rebase",
          label: "Rebase کردن:",
        },
      ],
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "merge_conflict" },
        { text: "version_control" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#FF9999]",
    },
    {
      title: "تشخیص کانفلیکت‌ها",
      desc: `وقتی کانفلیکت پیش می‌آید، گیت عملیات را متوقف می‌کند و فایل‌ها را به‌عنوان **unmerged** علامت می‌زند. می‌توانی با این دستور آن‌ها را بررسی کنی:`,
      kind: "reaction",
      code: [
        {
          label: "فایل‌های دارای کانفلیکت را نشان بده:",
          text: "git status",
        },
      ],
      tags: [
        { text: "git" },
        { text: "conflict_check" },
        { text: "version_control" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#FFCC70]",
    },
    {
      title: "نشانه‌های کانفلیکت",
      desc: `گیت **نشانه‌های کانفلیکت** را در فایل‌ها اضافه می‌کند تا کد متعارض را نشان بدهد. مثال:

\`\`\`
Their version
\`\`\`

باید **فایل را دستی ویرایش کنی** و محتوای درست را انتخاب کنی.`,
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "conflict_markers" },
        { text: "manual_merge" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#F7BD1D]",
    },
    {
      title: "حل کانفلیکت‌ها",
      desc: `بعد از ویرایش فایل‌ها و حذف نشانه‌های کانفلیکت، باید آن‌ها را stage کنی تا به گیت بگویی کانفلیکت حل شده است.`,
      kind: "reaction",
      code: [
        {
          label: "فایل حل‌شده را stage کن:",
          text: "git add <filename>",
        },
      ],
      tags: [
        { text: "git" },
        { text: "conflict_resolution" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#7B9D7C]",
    },
    {
      title: "کامل کردن مرج",
      desc: `وقتی همه‌ی کانفلیکت‌ها حل و stage شدند، مرج را با یک commit کامل کن:`,
      kind: "reaction",
      code: [
        {
          label: "بعد از حل، commit کن:",
          text: "git commit",
        },
      ],
      tags: [
        { text: "git" },
        { text: "merge_commit" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#C5C6FF]",
    },
    {
      title: "لغو مرج (اختیاری)",
      desc: `اگر اوضاع به‌هم‌ریخت و می‌خواهی مرج را کاملاً لغو کنی:`,
      kind: "reaction",
      code: [
        {
          label: "لغو مرج:",
          text: "git merge --abort",
        },
      ],
      tags: [
        { text: "git" },
        { text: "merge_abort" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#FFA9E8]",
    },
    {
      title: "حل تصویری کانفلیکت",
      desc: `خیلی از ادیتورها (مثلاً **VSCode**، **Sublime**، یا ابزارهایی مثل **GitKraken**) رابط‌های تصویری برای حل راحت کانفلیکت‌ها دارند.

دنبال این‌ها بگرد:  
- بخش‌هایی با عنوان "Current Change" در برابر "Incoming Change"  
- گزینه‌های یک‌کلیکی "Accept Current" و "Accept Incoming" یا "Accept Both"`,
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "gui" },
        { text: "merge_tools" },
      ],
      icon: "./assets/git.svg",
      imgUrl: "./assets/visual-merge.png",
      style: "bg-[#04BFA4]",
    },
    {
      title: "تمرین عملی: کانفلیکت گیت",
      desc: `سعی کن خودت دستی یک کانفلیکت بسازی:

1. یک فایل بساز و commitاش کن
2. یک branch بساز و همان خط را ویرایش کن
3. به main برگرد، همان خط را ویرایش کن و commit کن
4. branch را مرج کن: \`git merge branch_name\`  
به یک کانفلیکت می‌رسی — حالا حل کردنش را تمرین کن!`,
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "exercise" },
      ],
      icon: "./assets/git.svg",
      style: "bg-[#FFE87E]",
    },
  ],
};
