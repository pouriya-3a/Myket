import React, { useState } from 'react'
import image from '../../../assets/Media/Pages/NotFound/page-not-found.svg'
import { Link } from 'react-router-dom'


export default function MyketNotFound({handleUi}) {
    
  return (
    <div className='w-[100%] flex flex-col h-[80vh] justify-center items-center'>
      <img src={image} alt="" />
      <h2 className='font-bold text-2xl mt-10 mb-2'>صفحه مورد نظر پیدا نشد</h2>
      <p className='text-gray-600'>میتوانید به <Link className='text-blue-600' to={'/'}>صفحه اصلی</Link>  بروید یا به صفحه <button onClick={handleUi} className='text-blue-600 cursor-pointer'>هوش مصنوعی</button></p>
    </div>
  )
}
