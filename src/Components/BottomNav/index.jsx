import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../../Utils/AuthContext'

export default function BottomNav() {
  const {token , handleToken} =useContext(authContext)
  return (
    <div className='py-3 z-10 bg-white shadow rounded-t-3xl fixed bottom-0 left-0 right-0 shadow-gray-600 md:hidden'>
      <ul className="flex px-[1%] justify-between w-[100%]">
          <li className=" hover:bg-gray-100 rounded-1xl py-2 px-3 font-bold text-[var(--lowBlack)]">
            <Link to="/games">بازی</Link>
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
            {!token ? <Link to="/login">توسعه دهندگان</Link> : <button onClick={()=>handleToken(null)} className="text-red-600">خارج شوید !</button>}
          </li>
        </ul>
    </div>
  )
}
