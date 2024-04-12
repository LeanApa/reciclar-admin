import React from "react";
import ErrorAuth from "../components/ErrorAuth";

const Posts = ({ isLoggedIn }) => {
  console.log("llega acá");
  return !isLoggedIn ? (
    <ErrorAuth isLoggedIn={isLoggedIn} />
  ) : (
    <div>
      <p>¡Hola a todos desde Posts!</p>
    </div>
  );
};

export default Posts;
