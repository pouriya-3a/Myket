import React, { useEffect, useState } from "react";
import MainContent from "./MainContent";
import Comments from "./Comments";
import Loading from "../../../Components/Loading";

export default function MainDetails({ post }) {
  const [postDetails, setPostDetails] = useState(false);
  const id = post?.id?.toString().split("")?.slice(2)?.join("");
  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await res.json();
          setPostDetails(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  if (postDetails&&post) {
    return (
      <main className="lg:w-[70%] inline-block">
        <MainContent post={post} postDetails={postDetails} />
        <div className="py-8 my-10"><Comments post={post} postDetails={postDetails} /></div>
      </main>
    );
  }
  else{
    return (
      <div className="w-[70%] flex items-center justify-center">
        <Loading />
      </div>
    );
  }
}
