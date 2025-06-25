import React from 'react'

export default function QuickAccessItem({img , title , color}) {
    return (
        <div className={`p-[20px] h-[200px] flex relative justify-between bg-${color}-200 flex-col w-[100%] rounded-2xl`}>
          <h4 className="text-left text-[18px] text-white font-bold">{title}</h4>
          <img className=" w-[120px] h-[80px]" src={img} alt="" />
          <button className={`absolute w-[60px] h-[60px] left-[20px] bottom-[20px] rounded-full text-white`}>
            ادامه
          </button>
        </div>
      );
}
