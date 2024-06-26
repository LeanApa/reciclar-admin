import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorAuth from "../components/ErrorAuth";
import PostItem from "../components/PostItem";

const API_URL = import.meta.env.VITE_API_URL;

const Post = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accessToken: `${isLoggedIn}`,
        },
      });
      const data = await response.json();
      setPost(data);
    };
    fetchData();
  }, []);

  if (!isLoggedIn) {
    return <ErrorAuth isLoggedIn={isLoggedIn} />;
  } else if (!id) {
    return (
      <div>
        <PostItem isLoggedIn={isLoggedIn} />
      </div>
    );
  } else {
    return (
      <div>
        <PostItem post={post} isLoggedIn={isLoggedIn} />
      </div>
    );
  }
  /*  return !isLoggedIn ? (
    <ErrorAuth isLoggedIn={isLoggedIn} />
  ) : (
    <div>
      <PostItem post={post} isLoggedIn={isLoggedIn} />
    </div>
  ); */
};

export default Post;
