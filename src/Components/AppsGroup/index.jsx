import React from 'react'

export default function AppsGroup({images,title,info,bg}) {
  return (
    <div className={`hover:shadow-xl transition-all p-1.5 rounded-xl bg-${bg}-300`}>
      <h3 className='px-8 font-bold my-2 text-sm'>{title}</h3>
      <p className='px-2 text-sm text-gray-700'>{info}</p>
      <div className='relative h-[50px] md:h-[75px] bg-white rounded-b-lg mt-[30px] md:mt-[50px]'>
      <div className='flex absolute rounded-xl left-1/2 top-0 translate-[-50%] p-1.5 w-[max-content] justify-center gap-5 bg-white'>
        {images?.map((e,index) => index <= 5 ? <img src={e} key={index} className='rounded-xl md:w-[70px] md:h-[70px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] ' /> : '')}
      </div>
      </div>
    </div>
  )
}
