import React from "react";

export default function HeaderContent() {
  return (
    <div className="header-Content justify-center flex flex-col w-[100%] md:w-1/2 items-center gap-[12px]">
      <h2 className="text-4xl font-semibold text-[var(--lowBlack)]">مایکت؛ دنیای بازی و سرگرمی</h2>
      <p className="text-gray-600 my-2 text-lg">
        دانلود بازی‌ و برنامه‌ اندرویدی؛ تماشای فیلم، سریال و انیمیشن
      </p>
      <button className="font-semibold cursor-pointer text-[20px] text-white bg-blue-600 py-[12px] rounded-4xl px-[68px] my-[14px]">
        دانلود مایکت
      </button>
      <b className="text-[12px] text-gray-400 cursor-pointer">راهنمای نصب مایکت</b>
    </div>
  );
}
