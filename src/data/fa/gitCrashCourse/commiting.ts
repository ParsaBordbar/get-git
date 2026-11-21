export const committing = {
  pageName: "changes",
  cards: [
    {
      title: "Commit های قراردادی",
      kind: "reaction",
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
      style: "bg-[#7B9D7C]",
    },

    {
      title: "ساختار",
      kind: "reaction",
      desc: ` در این بخش یاد می‌گیریم چطور حرفه‌ای commit کنیم و برای خودت و دیگران کلی وقت ذخیره کنی!
        هر commit یک **header و body و footer** دارد؛ یک header خوب از این ساختار پیروی می‌کند؛ توجه کن که **scope** اختیاری است.`,
      code: [
        {
          text: "<type>[scope]: <description>",
          label: "Header یک commit خوب:",
        },
        {
          text: "[optional body]",
          label: "Body بعد از Header می‌آید:",
        },
        {
          text: "[optional footer]",
          label: "و در آخر Footer می‌آید:",
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
      style: "bg-candy-yellow-sharp",
    },

    {
      title: "الف. مثالی از یک Commit خوب",
      kind: "reaction",
      desc: `
    fix(cart): correct total price calculation

    Fixed an issue where the total price in the
    shopping cart was not calculating correctly 
    when applying discounts.

    Adjusted the discount logic to correctly 
    apply percentages. Updated unit tests to 
    cover discount scenarios.

    Refs #101: Fixes the issue with incorrect
    pricing.`,
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
    },

    {
      title: "ب. مثالی از یک Commit خوب",
      kind: "reaction",
      desc: `بیا چند مثال دیگر از پیام‌های commit خوب را ببینیم!
        [اینجا کلیک کن!](https://github.com/torvalds/linux/commits/master/)
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
      style: "bg-candy-green-light",
    },

    {
      title: "هش‌های Commit",
      kind: "reaction",
      desc: `تا حالا درباره‌ی **commit** ها و نحوه‌ی commit کردن می‌دانی (یا می‌دانی؟)
        پس **هش commit** چیست؟ شناسه‌ی یکتای یک commit است، مثل:
        `,
      code: [
        {
          text: "a2cc6ff5ec8f91bc463fd3b0 ...",
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
      style: "bg-candy-blue-sky",
    },

    {
      title: "نوع‌های Commit",
      kind: "reaction",
      desc: `
  ● **fix**: رفع باگ (مثلاً اصلاح یک مشکل در کد).  
  
  &nbsp;  
  
  ● **feat**: اضافه کردن یک قابلیت جدید (مثلاً معرفی یک عملکرد جدید به پروژه).  
  &nbsp;  
  
  ● **build**: تغییرات مربوط به build یا پیکربندی پروژه (مثلاً به‌روزرسانی اسکریپت‌های build).  
  
  &nbsp;  
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
      style: "bg-candy-red",
    },

    {
      title: "نوع‌های Commit",
      kind: "reaction",
      desc: `

  ● **chore**: کارهای روتین که روی سورس‌کد یا تست‌ها اثر نمی‌گذارند (مثلاً به‌روزرسانی dependency ها).  
  
  &nbsp;  

  ● **docs**: تغییرات مستندات (مثلاً به‌روزرسانی فایل‌های README یا اضافه کردن مستندات جدید).  
  
  &nbsp;  
  
  ● **style**: تغییرات فرمت کد (مثلاً اصلاح فاصله‌ها، کاماها یا مشکلات سبک کد).  
  
  &nbsp;  
  
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
      style: "bg-candy-teal",
    },

    {
      title: "نوع‌های Commit",
      kind: "reaction",
      desc: `

  ● **perf**: تغییراتی که عملکرد را بهتر می‌کنند (مثلاً بهینه‌سازی کد برای سرعت).

  &nbsp;  

  ● **test**: اضافه کردن یا به‌روزرسانی تست‌ها (مثلاً ساخت تست‌های unit جدید یا افزایش پوشش تست).

  &nbsp;  

  ● **refactor**: تغییرات کد که ساختار را بهتر می‌کنند بدون اینکه عملکرد عوض شود (مثلاً مرتب کردن کد برای خوانایی).


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
      style: "bg-candy-yellow",
    },
    {
      title: "Footer",
      icon: "./assets/git.svg",
      style: "bg-candy-pink",
      kind: "reaction",
      desc: "در Footer می‌توانی کامنت‌های اختیاری مختلفی داشته باشی که آن‌ها را مرور می‌کنیم.",
    },
    {
      title: "Refs",
      icon: "./assets/git.svg",
      style: "bg-candy-blue",
      desc: `می‌توانیم با **#** به **Issue** ها و commit های مشخص ارجاع بدهیم.`,
      code: [
        {
          text: `fix(cart): fix total price calculation.
            &nbsp;
            Fixed the total price calculation issue.
            &nbsp;  
            Refs #234: Solves the problem reported in issue #234.
          `,
          label: "مثال:",
        },
      ],
      kind: "reaction",
    },
    {
      title: "Co-authored",
      icon: "./assets/git.svg",
      style: "bg-candy-yellow-sharp",
      desc: `**Co-authored-by**: اگر چند نفر در commit مشارکت کرده باشند، مشارکت آن‌ها اینجا در footer ذکر می‌شود.`,
      code: [
        {
          text: `feat(search): add filters
            &nbsp;
            &nbsp;
            Added filters to search results.
            Co-authored-by: John Doe <john.doe@example.com>
          `,
          label: "مثال:",
        },
      ],
      kind: "reaction",
    },
    {
      title: "Refs",
      icon: "./assets/git.svg",
      style: "bg-candy-blue-sky",
      desc: `می‌توانیم با **#** به **Issue** ها و commit های مشخص ارجاع بدهیم.`,
      code: [
        {
          text: `fix(cart): fix total price calculation.
            &nbsp;
            Fixed the total price calculation issue.
            &nbsp;  
            Refs #234: Solves the problem reported in issue #234.
          `,
          label: "مثال:",
        },
      ],
      kind: "reaction",
    },
  ],
};
