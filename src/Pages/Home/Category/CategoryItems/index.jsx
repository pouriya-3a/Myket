import React from "react";

export default function CategoryItems({ header, img, index }) {
  
    let color = ''
    switch (index) {
      case 0:
         color = "red";
         break
      case 1:
         color = "green";
         break
      case 5:
         color = "blue";
         break
      case 4:
         color = "pink";
         break
      case 3:
         color = "yellow";
         break
      case 2:
         color = "orange";
         break
    }
  return (
    <div className={`p-[20px] h-[200px] border-${color}-300 flex relative justify-between flex-col w-[100%] border-2 rounded-2xl`}>
      <h4 className="text-[18px] font-bold">{header}</h4>
      <img className=" w-[120px] h-[80px]" src={img} alt="" />
      <button className={`absolute w-[60px] h-[60px] left-[20px] bottom-[20px] rounded-full text-white bg-${color}-500`}>
        ادامه
      </button>
    </div>
  );
}
