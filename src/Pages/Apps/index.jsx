import React, { useEffect, useState } from "react";
import AppsCategoryRow from "../../Components/AppsCategoryRow";
import Loading from "../../Components/Loading";
import AppsGroup from "../../Components/AppsGroup";
import { Link } from "react-router-dom";
import AppsFaq from "./AppsFaq";

export default function Apps() {
  const [categories, setCategories] = useState();
  const [groupApps, setGroupApps] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/myket");
      const data = await res.json();
      setCategories({ appsRow: data.category.appsrow, appsGroup: data.category.appsGroup });
    })();
  }, []);
  const groups = categories?.appsGroup?.map((e, index) => (
    <AppsGroup key={index + "33"} title={e.title} bg={e.bg} info={e.info} images={e.img} />
  ));
  const rows = categories?.appsRow?.map((e, index) => (
    <AppsCategoryRow key={index} posts={e.app} title={e.header} />
  ));
  return (
    <div>
      <div className="content my-Container !py-10">
        <p>
          شما اینجا هستید:{" "}
          <Link to={"/"} className="text-blue-700">
            خانه
          </Link>
          {">"} برنامه‌ها{" "}
        </p>
        <h1 className="text-2xl font-bold text-black">دانلود برنامه اندرویدی جدید و رایگان</h1>
        <p className="text-sm text-gray-600 mt-5">
          دانلود برنامه‌های اندروید از استور امن مایکت با ترافیک نیم‌بها و بروزرسانی برنامه‌های نصب
          شده گوشی شما از وظایف ماست. پس برای آپدیت برنامه‌ها و نصب برنامه‌های جدید موبایل سراغ ما
          را بگیرید.
        </p>
      </div>
      <div>{!categories ? <Loading /> : rows}</div>
      <div className="!my-10 grid grid-cols-1 md:grid-cols-2 my-Container gap-4">
        {!categories ? <Loading /> : groups}
      </div>
      <AppsFaq/>
    </div>
  );
}
