import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AppsDetails() {
  const { id: postId } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/myket");
        const data = await res.json();
        // finding the post
        const handleData = Object.entries(data.category);
        handleData.map(([key, value]) => {
          value.map((item) => {
            item.app?.map((i) => {
              i.id == postId ? setPost(i) : "";
            });
          });
        });
      } catch (error) {}
    })();
  }, []);

  return (
    <div>
      <h1>apps details {postId}</h1>
    </div>
  );
}
