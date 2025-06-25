import React, { useEffect, useState } from "react";
import FeatureMyketItem from "./FeatureMyketItem";
import Loading from "../../../../Components/Loading";


// Images
import imageFeature from "../../../../assets/Media/Pages/Home/WhyMyket/FeatureMyket/s3_icon_watching.svg"
export default function FeatureMyket() {
  const [feature, setFeature] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/myket");
        const data = await res.json();
        setFeature(data.features);
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);
  if (!feature) return <div className="flex items-center justify-center w-[100%]"><Loading /></div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:w-1/2 gap-6">
      {feature?.map((e, index) => (
        <FeatureMyketItem key={index} image={imageFeature} inf={e.Information} header={e.header} />
      ))}
    </div>
  );
}
