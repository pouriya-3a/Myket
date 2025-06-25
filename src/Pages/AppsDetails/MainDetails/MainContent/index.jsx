import React from "react";

export default function MainContent({ post, postDetails }) {
  return (
    <div>
      <h2 className="my-4 font-bold text-2xl">{post?.name}</h2>
      <p className="my-4 text-sm text-gray-600">{post?.note}</p>
      <div className="flex justify-center items-center w-[100%]">
        {" "}
        <img
          className=" my-7 w-[100%] sm:w-[310px] max-h-[190px]"
          src={postDetails?.image}
          alt={postDetails?.title}
        />
      </div>
      <h3 className="my-6 font-bold text-[18px]">{postDetails?.title}</h3>
      <p className="my-6 text-sm text-gray-600">
        { postDetails?.description + postDetails?.description + postDetails?.description}
      </p>

      <h3 className="my-6 font-bold text-[18px]">{postDetails?.title}</h3>
      <p className="my-6 text-sm text-gray-600">
        {postDetails?.description + postDetails?.description + postDetails?.description + postDetails?.description + postDetails?.description + postDetails?.description}
      </p>
    </div>
  );
}
