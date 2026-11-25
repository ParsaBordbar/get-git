export const gameDevCompleteSeries = {
  pageName: "Game Development – Complete Beginner Programmer Series",
  cards: [
    {
      title: "توسعه‌ی بازی",
      kind: "default",
      desc: "یک معرفی کامل به توسعه‌ی بازی برای برنامه‌نویس‌های مبتدی",
      icon: "./assets/controller.png",
      style: "bg-candy-blue-sky",
    },

    {
      title: "توسعه‌ی بازی چیست؟",
      kind: "reaction",
      desc: `
توسعه‌ی بازی فرآیند ساخت **سیستم‌های تعاملی بلادرنگ** است.

از دید یک برنامه‌نویس:
- اجرای پیوسته (loop)
- تغییر مداوم state
- منطق ورودی‌محور
- خروجی تصویری و صوتی

بازی‌ها نرم‌افزار هستند، ولی رفتارشان خیلی متفاوت است.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "بازی‌ها در برابر نرم‌افزارهای سنتی",
      kind: "reaction",
      desc: `
نرم‌افزار سنتی:
- رویدادمحور
- کاربر منتظر پاسخ می‌ماند
- اغلب خطی

بازی‌ها:
- همیشه در حال اجرا
- وابسته به زمان
- مبتنی بر فریم
- هر میلی‌ثانیه واکنش‌گرا
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFE87E]",
    },

    {
      title: "حلقه‌ی بازی (Game Loop)",
      kind: "reaction",
      desc: `
هر بازی حول یک loop ساخته شده:

while (running) {
  handleInput()
  updateGameState()
  renderFrame()
}

اگر این مفهوم را یاد بگیری، بقیه‌ی همه‌چیز راحت‌تر می‌شود.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#C5C6FF]",
    },

    {
      title: "State بازی",
      kind: "reaction",
      desc: `
State یعنی تصویر لحظه‌ای فعلی از بازی.

مثال‌ها:
- موقعیت بازیکن
- سلامتی (Health)
- دشمن‌های زنده
- مرحله‌ی فعلی

گیم‌پلی یعنی state که در طول زمان تغییر می‌کند.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
    },

    {
      title: "بلوک‌های سازنده‌ی اصلی بازی‌ها",
      kind: "reaction",
      desc: `
بیشتر بازی‌ها این‌ها را دارند:
- موجودیت‌های بازیکن
- دنیا یا نقشه
- قوانین
- شرایط برد / باخت
- بازخورد (تصویری و صوتی)

این‌ها قبل از اینکه هنر باشند، سیستم‌های منطقی هستند.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFA9E8]",
    },
    {
      title: "تاریخچه‌ی کوتاه بازی‌ها",
      kind: "reaction",
      desc: `
- دهه‌ی ۱۹۷۰: آرکید و Pong
- دهه‌ی ۱۹۸۰: کنسول‌های خانگی
- دهه‌ی ۱۹۹۰: انقلاب سه‌بعدی
- دهه‌ی ۲۰۰۰: بازی‌های PC و آنلاین
- دهه‌ی ۲۰۱۰: انفجار ایندی
- امروز: AAA، VR، AI، بازی‌های وب
      `,
      icon: "./assets/controller.png",
      style: "bg-[#F7BD1D]",
    },

    {
      title: "مقیاس‌های توسعه‌ی بازی",
      kind: "reaction",
      desc: `
- توسعه‌دهنده‌ی انفرادی
- تیم‌های ایندی
- استودیوهای AAA

هر مقیاس مهارت‌ها و انتظارات متفاوتی می‌خواهد.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "توسعه‌دهنده‌های انفرادی",
      kind: "reaction",
      desc: `
توسعه‌دهنده‌های انفرادی همه‌چیز را خودشان انجام می‌دهند:
- کد
- طراحی
- هنر
- تست

معماری تمیز و کنترل محدوده (scope) حیاتی است.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFE87E]",
    },

    {
      title: "تیم‌های ایندی",
      kind: "reaction",
      desc: `
تیم‌های کوچک (۲ تا ۱۰ نفر):
- چشم‌انداز خلاقانه‌ی قوی
- تکرار سریع
- منابع محدود

کیفیت گیم‌پلی مهم‌تر از وفاداری بصری است.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#C5C6FF]",
    },

    {
      title: "استودیوهای AAA",
      kind: "reaction",
      desc: `
استودیوهای بزرگ با تخصص‌گرایی:
- برنامه‌نویس‌های گیم‌پلی
- برنامه‌نویس‌های موتور
- تیم‌های AI، فیزیک، شبکه

توسعه‌ی بسیار ساخت‌یافته.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
    },
    {
      title: "موتور بازی در برابر فریم‌ورک",
      kind: "reaction",
      desc: `
موتور بازی (Game Engine):
- ادیتور کامل
- ابزارهای بصری
- انتزاع بالا

فریم‌ورک بازی (Game Framework):
- اول کد
- ابزار کم
- کنترل کامل معماری

فریم‌ورک‌ها برای یادگیری مبانی ایده‌آل هستند.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFA9E8]",
    },

    {
      title: "چرا برنامه‌نویس‌های مبتدی باید از فریم‌ورک استفاده کنند",
      kind: "reaction",
      desc: `
فریم‌ورک‌ها تو را مجبور می‌کنند این‌ها را بفهمی:
- حلقه‌ها
- state
- معماری
- جریان داده

یاد می‌گیری بازی‌ها واقعاً چطور کار می‌کنند.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#07AF57]",
    },
    {
      title: "LÖVE (LOVE2D)",
      kind: "reaction",
      desc: `
LÖVE یک فریم‌ورک سبک بازی دوبعدی با Lua است.

ویژگی‌ها:
- بدون ادیتور
- حداقل انتزاع
- عملکرد بالا
- چندسکویی

ذاتاً برنامه‌نویس‌محور طراحی شده.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "چرا LOVE2D برای مبتدی‌ها ایده‌آل است",
      kind: "reaction",
      desc: `
LOVE2D این‌ها را یاد می‌دهد:
- حلقه‌های واقعی بازی
- مدیریت دستی state
- جدایی تمیز منطق و رندر

هیچ جادوی پنهانی نیست.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFE87E]",
    },

    {
      title: "Callbackهای اصلی LOVE2D",
      kind: "reaction",
      desc: `
توابع اصلی چرخه‌ی حیات:
- love.load()
- love.update(dt)
- love.draw()
- love.keypressed(key)

این‌ها مستقیم به مفاهیم تئوری بازی نگاشت می‌شوند.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#C5C6FF]",
    },

    {
      title: "حلقه‌ی بازی LOVE2D توضیح داده شد",
      kind: "reaction",
      desc: `
LOVE2D یک loop داخلی اجرا می‌کند و کد تو را صدا می‌زند.

تو کنترل می‌کنی:
- هر فریم چه چیزی به‌روز شود
- state چطور تغییر کند
- چه چیزی کشیده شود

منطق مبتنی بر زمان با dt صریح است.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
    },

    {
      title: "مدیریت State در LOVE2D",
      kind: "reaction",
      desc: `
state را دستی ذخیره می‌کنی:
- جدول‌ها (Tables) برای موجودیت‌ها
- اعداد برای آمار
- flagها برای حالت‌ها

این شهود معماری قوی می‌سازد.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFA9E8]",
    },

    {
      title: "الگوهای معماری رایج LOVE2D",
      kind: "reaction",
      desc: `
الگوهای معمول:
- ماشین حالت Scene / State
- لیست موجودیت‌ها
- جدول‌های شبه‌کامپوننت
- جدایی update / draw

این‌ها مستقیم به Godot و Unity منتقل می‌شوند.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#07AF57]",
    },
    {
      title: "pygame",
      kind: "reaction",
      desc: `
یک کتابخانه‌ی بازی مبتنی بر Python.

مزایا:
- منطق بسیار صریح
- سینتکس آشنا
- آموزشی

معایب:
- سیستم‌های دستی
- عملکرد پایین‌تر
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "TIC-80",
      kind: "reaction",
      desc: `
کنسول فانتزی با محدودیت‌ها:
- وضوح ثابت
- رنگ‌های محدود
- اسکریپت‌نویسی Lua

محدودیت‌ها تفکر طراحی را بهتر می‌کنند.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#F7BD1D]",
    },

    {
      title: "PICO-8",
      kind: "reaction",
      desc: `
کنسول فانتزی با دیدگاه قوی.

بهترین برای:
- بازی‌های کوچک
- گیم‌جم‌ها
- آزمایش گیم‌پلی
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FFE87E]",
    },

    {
      title: "Kaplay (JavaScript)",
      kind: "reaction",
      desc: `
فریم‌ورک بازی JavaScript.

خوب برای:
- توسعه‌دهنده‌های وب
- پروتوتایپ سریع
- طراحی به سبک کامپوننت
      `,
      icon: "./assets/controller.png",
      style: "bg-[#C5C6FF]",
    },

    {
      title: "مقایسه‌ی فریم‌ورک‌ها",
      kind: "reaction",
      desc: `
بهترین بر اساس هدف:
- مبانی → LOVE2D / pygame
- خلاقیت → PICO-8 / TIC-80
- وب → Kaplay
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
    },
    {
      title: "دام‌های رایج مبتدی‌ها",
      kind: "reaction",
      desc: `
- ساخت موتور به‌جای بازی
- مهندسی بیش از حد
- بهینه‌سازی زودهنگام
- نادیده گرفتن حس بازی (game feel)

اول بازی‌های کوچک را تمام کن.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#FF6B6B]",
    },

    {
      title: "مسیر یادگیری پیشنهادی",
      kind: "reaction",
      desc: `
۱. حلقه‌ی بازی را یاد بگیر
۲. state را مدیریت کن
۳. ورودی را مدیریت کن
۴. ۲ تا ۳ بازی کوچک بساز
۵. به Godot یا Unity برو
      `,
      icon: "./assets/controller.png",
      style: "bg-[#04BFA4]",
    },

    {
      title: "توصیه‌ی نهایی",
      kind: "reaction",
      desc: `
بازی‌ها سیستم هستند، نه گرافیک.

اگر بتوانی:
- زمان را کنترل کنی
- state را کنترل کنی
- قوانین را کنترل کنی

می‌توانی بازی بسازی.
      `,
      icon: "./assets/controller.png",
      style: "bg-[#7B9D7C]",
      animate: true,
    },
  ],
};
