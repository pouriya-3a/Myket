import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from "../../../assets/Media/Components/Footer/e-namad.png"

export default function Card({img =image , header , littleInfo, id , index}) {
    const navigate = useNavigate()
  return (
    <div className='rounded-[10px] transition-all cursor-pointer hover:shadow-md m-1 hover:shadow-gray-400 py-3 px-2' onClick={()=> navigate(`/apps-details/${id}`)}>
        <img className='rounded-[10px] w-[100%]' src={img} alt="" />
        <h3 className='text-sm text-gray-500 my-[8px]'>{header}</h3>
        <p className='text-gray-600 text-sm'>{littleInfo}</p>
    </div>
  )
}
