import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomNav() {
  return (
    <div className='py-3 z-10 bg-white shadow rounded-t-3xl fixed bottom-0 left-0 right-0 shadow-gray-600 md:hidden'>
      <ul className="flex px-[1%] justify-between w-[100%]">
          <li className=" hover:bg-gray-100 rounded-1xl py-2 px-3 font-bold text-[var(--lowBlack)]">
            <Link to="/">بازی</Link>
          </li>
          <li className=" hover:bg-gray-100 rounded-1xl py-2 px-3 font-bold text-[var(--lowBlack)]">
            <Link to="/apps">برنامه</Link>
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
    </div>
  )
}
