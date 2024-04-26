import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorAuth from "../components/ErrorAuth";
import ReciclableItem from "../components/ReciclableItem";

const API_URL = import.meta.env.VITE_API_URL;

const Reciclable = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [reciclable, setReciclable] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/reciclables/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accessToken: `${isLoggedIn}`,
        },
      });
      const data = await response.json();
      setReciclable(data);
    };
    fetchData();
  }, []);

  if (!isLoggedIn) {
    return <ErrorAuth isLoggedIn={isLoggedIn} />;
  } else if (!id) {
    return (
      <div>
        <ReciclableItem isLoggedIn={isLoggedIn} />
      </div>
    );
  } else {
    return (
      <div>
        <ReciclableItem reciclable={reciclable} isLoggedIn={isLoggedIn} />
      </div>
    );
  }
  /*  return !isLoggedIn ? (
    <ErrorAuth isLoggedIn={isLoggedIn} />
  ) : (
    <div>
      <reciclableItem reciclable={reciclable} isLoggedIn={isLoggedIn} />
    </div>
  ); */
};

export default Reciclable;
