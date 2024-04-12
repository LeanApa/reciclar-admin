import React from "react";
import ErrorAuth from "../components/ErrorAuth";

const Empresas = ({ isLoggedIn }) => {
  return !isLoggedIn ? (
    <ErrorAuth isLoggedIn={isLoggedIn} />
  ) : (
    <div>
      <p>¡Hola a todos desde Empresas!</p>
    </div>
  );
};

export default Empresas;
