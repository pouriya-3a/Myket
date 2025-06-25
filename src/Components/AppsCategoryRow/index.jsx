import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

export default function AppsCategoryRow({title = 'عنوانی مطرح نشد!' , posts}) {
  return (
    <div className='my-Container'>
        <h1 className='flex justify-between text-black text-[18px]'>{title}<Link className='text-[1rem] text-blue-600'>مشاهده همه</Link></h1>
        <Swiper className='my-[12px]'
        spaceBetween={20}
        slidesPerView={8}
        breakpoints={{
          1400:{slidesPerView:8},
          1300:{slidesPerView : 7},
          650:{slidesPerView : 5},
          400:{slidesPerView : 4},
          300:{slidesPerView : 3},
          100 :{slidesPerView : 2}
        }}
        >
            {posts?.map( (e,index) => index <= 7 ? <SwiperSlide><Card key={index} img={e.img} index={index} id={e.id} header={e.name} littleInfo={e.note} /></SwiperSlide> : '')}
        </Swiper>
        {/* <div className='flex gap-2.5'>
        <Card header={'بازی جدید'} littleInfo={'ghfdjghdfhgd'} id={15555} />
        <Card header={'بازی جدید'} littleInfo={'ghfdjghdfhgd'} id={15555} />
        </div> */}
    </div>
  )
}
