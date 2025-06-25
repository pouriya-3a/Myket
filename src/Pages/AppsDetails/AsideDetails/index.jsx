import React from "react";

export default function AsideDetails({ post }) {
  return (
    <aside className="py-3.5 px-3 inline-block ml-2.5 bg-gray-200 rounded-lg lg:w-[30%] h-[max-content]">
      <div className="flex flex-col md:flex-row lg:flex-col gap-5">
        <div className="flex flex-col gap-5 lg:w-[100%] md:w-1/2 md:px-20 lg:px-0 md:justify-center md:items-center lg:items-start lg:justify-start">
          <div className="flex items-center gap-4">
            <img src={post?.img} alt="" className="w-[110px] h-[110px] rounded-xl" />
            <div>
              <h2 className="font-bold text-[18px]">{post?.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{post?.note}</p>
            </div>
          </div>
          <button className="w-[100%] text-white bg-blue-500 hover:bg-blue-600 cursor-pointer py-3 font-bold rounded-3xl">
            نصب
          </button>
        </div>
        <div className="flex md:w-1/2 lg:w-[100%] flex-col text-sm">
          <div className="bg-white py-3 flex px-3 rounded-md">
            <p className="w-1/2">نسخه</p>
            <p className="w-1/2">۶.۰.۲</p>
          </div>
          <div className="py-3 flex px-3 rounded-md">
            <p className="w-1/2">آخرین بروزرسانی </p>
            <p className="w-1/2">۱۴۰۴/۰۲/۱۶ </p>
          </div>
          <div className="bg-white py-3 flex px-3 rounded-md">
            <p className="w-1/2">نسخه</p>
            <p className="w-1/2">۶.۰.۲</p>
          </div>
          <div className="py-3 flex px-3 rounded-md">
            <p className="w-1/2">آخرین بروزرسانی </p>
            <p className="w-1/2">۱۴۰۴/۰۲/۱۶ </p>
          </div>
          <div className="bg-white py-3 flex px-3 rounded-md">
            <p className="w-1/2">نسخه</p>
            <p className="w-1/2">۶.۰.۲</p>
          </div>
          <div className="py-3 flex px-3 rounded-md">
            <p className="w-1/2">آخرین بروزرسانی </p>
            <p className="w-1/2">۱۴۰۴/۰۲/۱۶ </p>
          </div>
          <div className="bg-white py-3 flex px-3 rounded-md">
            <p className="w-1/2">نسخه</p>
            <p className="w-1/2">۶.۰.۲</p>
          </div>
          <div className="py-3 flex px-3 rounded-md">
            <p className="w-1/2">آخرین بروزرسانی </p>
            <p className="w-1/2">۱۴۰۴/۰۲/۱۶ </p>
          </div>
          <div className="bg-white py-3 flex px-3 rounded-md">
            <p className="w-1/2">نسخه</p>
            <p className="w-1/2">۶.۰.۲</p>
          </div>
          <div className="py-3 flex px-3 rounded-md">
            <p className="w-1/2">آخرین بروزرسانی </p>
            <p className="w-1/2">۱۴۰۴/۰۲/۱۶ </p>
          </div>
          <div className="bg-white py-3 flex px-3 rounded-md">
            <p className="w-1/2">نسخه</p>
            <p className="w-1/2">۶.۰.۲</p>
          </div>
          <div className="py-3 flex px-3 rounded-md">
            <p className="w-1/2">آخرین بروزرسانی </p>
            <p className="w-1/2">۱۴۰۴/۰۲/۱۶ </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
