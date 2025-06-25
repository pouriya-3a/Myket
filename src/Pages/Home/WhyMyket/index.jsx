import React from "react";
import FeatureMyket from "./FeatureMyket";

export default function WhyMyket() {
  return (
    <div className="bg-[#ebf4ff] py-20 mt-10">
      <div className="my-Container flex md:flex-row gap-6 flex-col">
        <div className="flex flex-col md:w-1/2 gap-5">
          <b className="text-gray-800">چرا مایکت؟</b>
          <h3 className="text-2xl font-bold">از بازی تا فیلم، همه در مایکت </h3>
          <p className="text-gray-900 md:max-w-[330px] text-[16px]/7">
            مایکت فقط فروشگاه اپلیکیشن نیست، بلکه یک دنیای دیجیتال کامل برای شماست. هزاران اپلیکیشن
            و بازی جذاب، ابزارهای کاربردی برای راحت‌تر کردن روزمره و جدیدترین فیلم‌ها و سریال‌ها با
            دوبله فارسی برای تماشای آنلاین در یک جا جمع شده است. با مایکت، همه چیز به سادگی در دسترس
            شماست.
          </p>
        </div>
        <FeatureMyket />
      </div>
    </div>
  );
}
