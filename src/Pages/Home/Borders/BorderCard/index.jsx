import React from 'react'

export default function BorderCard({count , id , image}) {
    console.log(id)
    if(id <= 5)
        return (
            <div className={`h-[120px] flex items-center rounded-3xl justify-between px-4 py-3 ${ id % 2 == 0 ? 'border-1' : 'border-0'} border-gray-300`}>
            <div className="flex flex-col justify-between gap-2">
                <h3 className='text-[18px]'>{count} میلیون</h3>
                <p className='text-gray-500'>کاربر فعال ماهانه</p>
            </div>
            <img className='w-[60px] h-[60px]' src={image} alt="" />
            </div>
        )
        return ''
}
