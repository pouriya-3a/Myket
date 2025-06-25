import React from "react";
import enamad from '../../assets/Media/Components/Footer/e-namad.png'
export default function Footer() {
  return (
    <div className="bg-[#f6f6f6] py-10">
      <div className="my-Container">
        <p className="font-semibold text-[#4d4d4f]">
          لذت دانلود جدیدترین بازی‌ها و بهترین برنامه‌های اندروید از مایکت!
        </p>
        <p className="text-[#4d4d4f] max-w-[850px] my-5 mb-9">
          دانلود جدیدترین بازی‌های اندروید برای اوقات فراغت و دریافت بهترین برنامه‌های کاربردی برای
          انجام انواع فعالیت‌های روزانه. لینک مستقیم، رایگان و سریع، تست شده و امن با ترافیک نیم‌بها
          و نصب خودکار دیتا‍.
        </p>
        <b className="block h-[1px] bg-gray-300"></b>
        <div className="grid grid-cols-1 text-center sm:text-right sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ul className="text-[#4d4d4f] flex flex-col gap-5 py-8 w-[100%]">
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
          </ul>
          <ul className="text-[#4d4d4f] flex flex-col gap-5 py-8 w-[100%]">
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
            <li>دانلود اپلیکیشن Myket</li>
          </ul>
          <ul className="text-[#4d4d4f] flex flex-col gap-5 py-8 w-[100%]">
            <li className="text-black">دانلود اپلیکیشن Myket</li>
            <li>۰۲۱-۹۲۰۰۹۳۳۰ / ۰۲۱-۴۵۶۳۷۰۰۰</li>
            <li>info@myket.ir</li>
          </ul>
          <ul className="text-[#4d4d4f] flex gap-5 py-8 w-[100%]">
            <li><img src={enamad} alt="" /></li>
            <li><img src={enamad} alt="" /></li>
          </ul>
        </div>
        <b className="block h-[1px] bg-gray-300"></b>
        <p className="text-center mt-3 text-[#4d4d4f]">
          لذت دانلود جدیدترین بازی‌ها و بهترین برنامه‌های اندروید از مایکت!
        </p>
      </div>
    </div>
  );
}
