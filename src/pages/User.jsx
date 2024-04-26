import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorAuth from "../components/ErrorAuth";
import UserItem from "../components/UserItem";

const API_URL = import.meta.env.VITE_API_URL;

const User = ({ isLoggedIn }) => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accessToken: `${isLoggedIn}`,
        },
      });
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);

  return !isLoggedIn ? (
    <ErrorAuth isLoggedIn={isLoggedIn} />
  ) : (
    <div>
      <UserItem user={user} isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default User;
