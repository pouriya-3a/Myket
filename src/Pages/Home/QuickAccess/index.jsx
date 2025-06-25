import React, { useEffect, useState } from "react";
import Loading from "../../../Components/Loading";
import QuickAccessItem from "./QuickAccessItem";
import image from "../../../assets/Media/Pages/Home/Category/S4_image_casualLight.webp"

export default function QuickAccess() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/myket");
        const data = await res.json();
        setPosts(data.quickaccess);
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  if(!posts) return <div className="py-10 my-8"><Loading /></div>
  return <div className="my-Container !py-10 grid grid-cols-1 lg:grid-cols-3 gap-5 !mt-20">{posts?.map( (e,index) => <QuickAccessItem color={e.color} key={index} card={e} title={e.title} img={image} />)}</div>;
}
