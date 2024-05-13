import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorAuth from "../components/ErrorAuth";
import EmpresaItem from "../components/EmpresaItem";

const API_URL = import.meta.env.VITE_API_URL;

const Empresa = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/company/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accessToken: `${isLoggedIn}`,
        },
      });
      const data = await response.json();
      setEmpresa(data);
    };
    fetchData();
  }, []);

  if (!isLoggedIn) {
    return <ErrorAuth isLoggedIn={isLoggedIn} />;
  } else if (!id) {
    return (
      <div>
        <EmpresaItem isLoggedIn={isLoggedIn} />
      </div>
    );
  } else {
    return (
      <div>
        <EmpresaItem empresa={empresa} isLoggedIn={isLoggedIn} />
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

export default Empresa;
