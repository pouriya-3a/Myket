import React from 'react'

export default function Comments({post , postDetails}) {
  return (
    <div className='bg-gray-200 py-3 px-4 pb-10 my-6'>
      <div className='flex justify-between items-center'>
        <div className='flex my-2.5 items-center gap-2.5'>
            <img src={postDetails?.image} className='w-[45px] rounded-full h-[45px]' alt="" />
            <h3 className='text-sm'>{postDetails?.category}</h3>
        </div>
        <p>2 سال پیش</p>
      </div>
      <p className='text-sm'>{postDetails?.description}</p>
    </div>
  )
}
