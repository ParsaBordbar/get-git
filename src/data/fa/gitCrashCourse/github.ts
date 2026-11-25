import { flashCardSeries } from "../../../types/types";

export const gitGithubConcepts: flashCardSeries = {
  pageName: "gitGithubConcepts",
  cards: [
    {
      title: "گیت‌هاب چیست؟",
      desc: `**[GitHub](github.com)** یک سرویس میزبانی ابری برای repositoryهای Git است.  
به تو اجازه می‌دهد کد را آنلاین **ذخیره** کنی، **به اشتراک بگذاری** و با دیگران روی آن **همکاری** کنی.

- ساخته‌شده روی Git
- ردیابی issue، pull request، CI/CD و بیشتر را ارائه می‌دهد`,
      kind: "reaction",
      tags: [
        { text: "github" },
        { text: "git" },
        { text: "version_control" },
      ],
      icon: "./assets/github.svg",
      style: "bg-candy-red",
    },
    {
      title: "repository چیست؟",
      desc: `یک **repository** (repo) مثل یک پوشه است که فایل‌های پروژه و تاریخچه‌ی Git تو را ذخیره می‌کند.

- Local repo: روی دستگاه خودت
- Remote repo: میزبانی‌شده روی GitHub

می‌توانی هر دو را به هم وصل کنی تا تغییرات را **push** یا **pull** کنی.`,
      kind: "reaction",
      tags: [
        { text: "git" },
        { text: "github" },
        { text: "repo" },
      ],
      icon: "./assets/github.svg",
      style: "bg-[#FFA9E8]",
    },
    {
      title: "Clone کردن یک repo از گیت‌هاب",
      desc: `برای دانلود یک پروژه‌ی گیت‌هاب روی دستگاه خودت، از \`git clone\` استفاده کن:`,
      kind: "reaction",
      code: [
        {
          label: "با https:",
          text: "git clone https://github.com/user/repo.git",
        },
        {
          label: "با SSH Key:",
          text: "git clone git@github.com:user/repo.git",
        },
      ],
      tags: [
        { text: "git" },
        { text: "clone" },
      ],
      icon: "./assets/github.svg",
      style: "bg-[#F7BD1D]",
    },
    {
      title: "Fork در برابر Clone",
      desc: `- **Clone**: یک repo را روی دستگاه محلی تو کپی می‌کند  
- **Fork**: یک repo را روی **حساب گیت‌هاب خودت** کپی می‌کند

Fork کردن عالی است وقتی مالک repo نیستی و می‌خواهی مشارکت کنی.`,
      kind: "reaction",
      tags: [
        { text: "github" },
        { text: "fork" },
        { text: "clone" },
      ],
      icon: "./assets/github.svg",
      style: "bg-[#FFCC70]",
    },
    {
      title: "Branchها در گیت‌هاب",
      desc: `یک **branch** به تو اجازه می‌دهد روی ویژگی‌ها یا اصلاحات جدید جداگانه کار کنی.

Branch اصلی: \`main\` یا \`master\`  
ساخت branch جدید:`,
      kind: "reaction",
      code: [
        {
          label: "ساخت یک branch جدید:",
          text: "git checkout -b feature-branch",
        },
      ],
      tags: [
        { text: "git" },
        { text: "branch" },
      ],
      icon: "./assets/github.svg",
      style: "bg-[#C5C6FF]",
    },
    {
      title: "Pull Requestها (PR)",
      desc: `یک **pull request** راهی است که با آن تغییراتت را به repository شخص دیگری پیشنهاد می‌دهی.

مراحل:
1. Fork → Clone → ساخت branch → Commit
2. Push کن و روی GitHub یک PR باز کن
3. بحث، بازبینی و merge!`,
      kind: "reaction",
      tags: [
        { text: "github" },
        { text: "pull_request" },
      ],
      icon: "./assets/github.svg",
      style: "bg-[#04BFA4]",
    },
    {
      title: "اضافه کردن Remote Origin",
      desc: `اگر local repo تو هنوز به GitHub وصل نیست، از این استفاده کن:`,
      kind: "reaction",
      code: [
        {
          label: "وصل کردن repo به GitHub:",
          text: "git remote add origin https://github.com/user/repo.git",
        },
        {
          label: "اولین push:",
          text: "git push -u origin main",
        },
      ],
      tags: [
        { text: "git" },
        { text: "github" },
        { text: "remote" },
      ],
      icon: "./assets/github.svg",
      style: "bg-[#FFE87E]",
    },
    {
      title: "GitHub README.md",
      desc: `یک فایل **README.md** توضیح می‌دهد پروژه‌ی تو چیست و چطور از آن استفاده کنی.

آن را با **Markdown** بنویس و GitHub آن را زیبا در صفحه‌ی اصلی repo تو رندر می‌کند.`,
      kind: "reaction",
      tags: [
        { text: "github" },
        { text: "readme" },
        { text: "markdown" },
      ],
      icon: "./assets/github.svg",
      imgUrl: "./assets/readme.png",
      style: "bg-[#7B9D7C]",
    },
    {
      title: "Markdown: عنوان‌ها",
      kind: "reaction",
      desc: `برای ساخت عنوان در فایل‌های README از \`#\` استفاده کن.\n\nMarkdown از ۶ سطح عنوان پشتیبانی می‌کند:\n\n\`\`\`md\n# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\`\`\`\n\n**نکته**: برای سازمان‌دهی محتوا در README گیت‌هاب از عنوان‌ها استفاده کن.`,
      tags: [
        { text: "markdown" },
        { text: "readme" },
        { text: "github" },
      ],
      icon: "./assets/md.svg",
      style: "bg-[#96D38C]",
    },
    {
      title: "Markdown: بلاک‌های کد",
      kind: "reaction",
      desc: `برای نوشتن کد از backtick استفاده کن:\n\n- Inline: \`const x = 10;\`\n- چندخطی:\n\n\`\`\`js\nfunction greet() {\n  console.log("Hello!");\n}\n\`\`\`\n\nاز زبان‌های زیادی مثل \`js\`، \`bash\`، \`python\` و غیره پشتیبانی می‌کند.`,
      tags: [
        { text: "markdown" },
        { text: "code" },
        { text: "github" },
      ],
      icon: "./assets/md.svg",
      style: "bg-[#FFD580]",
    },
    {
      title: "Markdown: لینک‌ها و تصاویر",
      kind: "reaction",
      desc: `لینک‌های قابل کلیک بساز:\n\n\`[OpenAI](https://openai.com)\`\n\nتصویر جاسازی کن:\n\n\`![Alt text](image-url)\`\n\n**نکته**: برای تصاویر داخل repo از مسیرهای نسبی استفاده کن.`,
      tags: [
        { text: "markdown" },
        { text: "readme" },
        { text: "github" },
      ],
      icon: "./assets/md.svg",
      style: "bg-[#A2C2E2]",
    },
    {
      title: "Markdown: لیست‌ها و چک‌باکس‌ها",
      kind: "reaction",
      desc: `لیست بدون ترتیب:\n- Item A\n- Item B\n\nلیست ترتیبی:\n1. Step one\n2. Step two\n\nچک‌باکس‌ها:\n- [x] Done\n- [ ] Not done\n\nبرای لیست وظایف در PRها و issueها عالی است.`,
      tags: [
        { text: "markdown" },
        { text: "readme" },
        { text: "github" },
      ],
      icon: "./assets/md.svg",
      style: "bg-candy-green-light",
    },
  ],
};
