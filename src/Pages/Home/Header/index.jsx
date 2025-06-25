import React from 'react'

// Swiper Component
import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Images
import appsImgHeader from '../../../assets/Media/Pages/Home/Header/s1_illustration_apps.svg'
import gamesImgHeader from '../../../assets/Media/Pages/Home/Header/s1_illustration_games.svg'
import safetyImgHeader from '../../../assets/Media/Pages/Home/Header/s1_illustration_safety.svg'
import supportImgHeader from '../../../assets/Media/Pages/Home/Header/s1_illustration_support.svg'
import HeaderContent from './HeaderContent';




export default function Header() {
  return (
    <div className='my-Container flex md:flex-row flex-col-reverse gap-8  !py-[48px] px-[16px]'>
      <HeaderContent />
      <Swiper className='w-[75%] md:w-1/2'
      modules={[EffectFade , Navigation , Pagination ,Autoplay]}
      effect='fade'
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:1500 ,
        disableOnInteraction : false
      }}
      >
        <SwiperSlide className='bg-white !h-[100%] w-[100%]'><img className='!h-[100%] w-[100%]' src={appsImgHeader} alt="" /></SwiperSlide>
        <SwiperSlide className='bg-white !h-[100%] w-[100%]'><img className='!h-[100%] w-[100%]' src={gamesImgHeader} alt="" /></SwiperSlide>
        <SwiperSlide className='bg-white !h-[100%] w-[100%]'><img className='!h-[100%] w-[100%]' src={safetyImgHeader} alt="" /></SwiperSlide>
        <SwiperSlide className='bg-white !h-[100%] w-[100%]'><img className='!h-[100%] w-[100%]' src={supportImgHeader} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}
