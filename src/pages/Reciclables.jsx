import React from "react";
import ErrorAuth from "../components/ErrorAuth";

const Reciclables = ({ isLoggedIn }) => {
  console.log("llega acá");
  return !isLoggedIn ? (
    <ErrorAuth isLoggedIn={isLoggedIn} />
  ) : (
    <div>
      <p>¡Hola a todos desde Reciclables!</p>
    </div>
  );
};

export default Reciclables;
