export const basics = {
  pageName: "Basics",
  cards: [
    {
      title: "دوره‌ی فشرده‌ی Git",
      kind: "default",
      desc: "By Parsa Bordbar",
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
      title: "Git چیست؟",
      desc: `**Git** یک سیستم کنترل نسخه‌ی توزیع‌شده‌ی **رایگان** و **متن‌باز** است که برای مدیریت همه‌چیز طراحی شده 
      است؛ از پروژه‌های کوچک تا پروژه‌های خیلی بزرگ، با سرعت و کارایی. یاد گرفتن [Git](https://git-scm.com/) راحت است و حجم خیلی کمی دارد
      و عملکردش برق‌آساست. با امکاناتی مثل branching محلی ارزان، staging area های مناسب و workflow های متعدد، از ابزارهای SCM مثل Subversion و CVS و Perforce و ClearCase بهتر است.
      
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
      style: "bg-[#04BFA4]",
    },
    {
      title: "نصب",
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
          text: "sudo apt install git",
          label: "لینوکس مبتنی بر Debian:",
        },
        {
          text: "sudo pacman -S git",
          label: "لینوکس مبتنی بر Arch:",
        },
        {
          text: "brew install git",
          label: "Mac OS:",
        },
      ],
      desc: "اگر از Windows استفاده می‌کنی، آن را از [اینجا](https://git-scm.com/download/win) دانلود کن",
      style: "bg-[#07AF57]",
    },
    {
      title: "هویت خودت را تنظیم کن",
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
          text: 'git config --global user.name "Your Name"',
          label: "تنظیم نام:",
        },
        {
          text: 'git config --global user.email "your.email@example.com',
          label: "تنظیم ایمیل",
        },
      ],
      style: "bg-[#FFA9E8]",
    },
    {
      title: "مرحله‌ها",
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
      imgUrl: "./assets/stages.png",
      style: "bg-[#7B9D7C]",
    },
    {
      title: "Repository جدید",
      desc: `می‌توانیم یک Repository جدید را در Directory فعلی با این دستور راه‌اندازی کنیم:`,
      code: [
        {
          text: "git init",
        },
      ],
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
      style: "bg-[#FFE87E]",
    },
    {
      title: "Git Status",
      kind: "reaction",
      desc: "به تو می‌گوید کدام فایل‌ها تغییر کرده‌اند، کدام‌ها staged شده‌اند و کدام‌ها untracked هستند.",
      code: [
        {
          text: "git status",
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
      style: "bg-[#04BFA4]",
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
      style: "bg-[#C5C6FF]",
    },
    {
      title: "Git Commit",
      desc: `یک پیام **معنادار** که می‌گوید در کد جدید چه چیزی تغییر کرده است.`,
      kind: "reaction",
      code: [
        {
          text: "git commit -m <commit_message>",
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
      style: "bg-[#F7BD1D]",
    },
    {
      title: "Git Push",
      desc: `به‌اشتراک گذاشتن کدمان با دیگران در remote repo — در این مثال **GitHub**.`,
      kind: "reaction",
      code: [
        {
          label: "Push کردن به repoای که clone کرده‌ایم یا ساخته‌ایم:",
          text: "git push",
        },
        {
          label: "Push کردن repoی محلی به GitHub:",
          text: `git remote add origin <github_repo>
          git branch -M main
          git push -u origin main`,
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
      style: "bg-[#7B9D7C]",
    },
  ],
};
