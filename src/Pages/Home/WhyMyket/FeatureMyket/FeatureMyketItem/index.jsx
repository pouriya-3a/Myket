import React from "react";

export default function FeatureMyketItem({image , header , inf}) {
  return (
    <div>
      <div className="w-[64px] p-[11px] rounded-2xl bg-blue-200 h-[64px]"><img className="w-[100%] h-[100%]" src={image} alt="" /></div>
      <h3 className="text-1xl font-bold my-3">{header}</h3>
      <p className="text-gray-600 text-[14px]">{inf}</p>
    </div>
  );
}
