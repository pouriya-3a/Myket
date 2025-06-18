import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Media/Components/Navbar/download.png"
export default function Navbar() {
  return (
    <nav className="shadow shadow-gray-300 px-[40px] py-[18px] h-[68px] md:h-[78px]">
      <div className="container my-Container Nav-Content flex justify-between items-center max-w-[1400px] h-[100%]">
        <img className="h-[100%]" src={img} alt="" />
        <ul className="md:flex hidden justify-between w-[400px]">
          <li className=" hover:bg-gray-100 rounded-1xl py-2 px-3 font-bold text-[var(--lowBlack)]">
            <Link to="/">بازی</Link>
          </li>
          <li className=" hover:bg-gray-100 rounded-1xl py-2 px-3 font-bold text-[var(--lowBlack)]">
            <Link to="/">برنامه</Link>
          </li>
          <li className=" hover:bg-gray-100 rounded-1xl py-2 px-3 font-bold text-[var(--lowBlack)]">
            <Link to="/">فیلم</Link>
          </li>
          <li className=" hover:bg-gray-100 rounded-1xl py-2 px-3 font-bold text-[var(--lowBlack)]">
            <Link to="/">سریال</Link>
          </li>
          <li className=" hover:bg-gray-100 rounded-1xl py-2 px-3 font-bold text-[var(--lowBlack)]">
            <Link to="/">توسعه دهندگان</Link>
          </li>
        </ul>
        <button className="w-[100px] flex items-center py-1.5 justify-center text-[var(--lowBlack)] border-1 border-gray-300 rounded-3xl hover:bg-gray-200 text-[14px]">جستجو</button>
      </div>
    </nav>
  );
}
