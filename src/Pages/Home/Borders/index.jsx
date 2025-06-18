import React, { useEffect, useState } from "react";
import BorderCard from "./BorderCard";
import Loading from "../../../Components/Loading";

// Images
import image from '../../../assets/Media/Pages/Home/Borders/s2_icon_userheart.svg'

export default function Borders() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);
  const showItems = posts?.map((e , index) => <BorderCard key={index} id={index} count={e.rating.count} image={image}/>)
  if(posts?.length <= 0) return <Loading />
  return <div className=" my-Container grid grid-cols-1 md:grid-cols-3 gap-4 ">{showItems}</div>
}
