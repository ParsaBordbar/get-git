export const branches = {
  pageName: "branches",
  cards: [
    {
      title: "برنچ‌ها",
      kind: "default",
      desc: "نوشته‌ی Parsa Bordbar",
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
      style: "bg-candy-pink-strawberry",
    },
    {
      title: "برنچ گیت",
      desc: `
یک **branch** نسخه‌ی تازه و جداگانه‌ای از repository اصلی است؛
&nbsp;  
&nbsp;  
**چرا از branch استفاده کنیم؟**

&nbsp;
&nbsp;
- کد را مستقیم ویرایش کن، بدون اینکه روی branch اصلی اثر بگذارد.    
&nbsp;
&nbsp;

توسعه‌ی موازی.
&nbsp;  
      `,
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
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-blue-sky",
    },
    {
      title: "ساختن یک برنچ تازه",
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
      icon: "./assets/git.svg",
      code: [
        {
          text: "git branch <new_branch>",
          label: "ساختن یک برنچ تازه:",
        },
        {
          text: "git branch",
          label: "دیدن همه‌ی برنچ‌ها:",
        },
      ],
      style: "bg-candy-yellow",
    },
    {
      title: "عوض کردن برنچ",
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
      icon: "./assets/git.svg",
      code: [
        {
          text: "git checkout <branch_name>",
          label: "رفتن به یک برنچ:",
        },
        {
          text: "git switch <branch_name>",
          label: "برای عوض کردن برنچ می‌توانی از این هم استفاده کنی:",
        },
      ],
      style: "bg-[#FFA9E8]",
    },
    {
      title: "فرق switch و checkout",
      desc: `از git switch برای عملیات ساده‌ی branch استفاده کن تا از وضوح و امنیتش بهره ببری، و git checkout را برای کارهای پیشرفته‌تر نگه دار، مثل checkout کردن commitها یا برگرداندن فایل‌ها`,
      icon: "./assets/git.svg",
      imgUrl: "",
      style: "bg-candy-teal",
      kind: "reaction",
    },
  ],
};
