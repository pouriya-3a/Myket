import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/AppsCategoryRow/Card";
import Loading from "../../Components/Loading";

export default function AppsAll() {
  const { name } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/myket");
        const data = await res.json();
        // finding the post
        const handleData = Object.entries(data.category);
        handleData.map(([key, value]) => {
          value.map((i) => {
            i?.header == name.replaceAll("-", " ") ? setPost(i) : "";
          });
        });
      } catch (error) {}
    })();
  }, []);
  if(!post) return <Loading />
  return (
    <div className="my-Container !py-10">
      <h2 className="text-xl text-gray-800 font-bold">{post?.header}</h2>
      <div className="grid  grid-cols-3  sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">{post?.app?.map((e,index) => <Card key={index} img={e.img} index={index} id={e.id} header={e.name} littleInfo={e.note} />)}</div>
    </div>
  );
}
