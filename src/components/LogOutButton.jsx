import React from "react";
import { NavbarItem, Link } from "@nextui-org/react";

const LogOutButton = () => {
  const handleLogOut = () => {
    sessionStorage.clear();
  };
  return (
    <NavbarItem className="lg:flex color-danger">
      <Link onClick={handleLogOut} href="/login" color="danger">
        Log Out
      </Link>
    </NavbarItem>
  );
};

export default LogOutButton;
