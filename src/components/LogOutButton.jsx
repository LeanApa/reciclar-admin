import React from "react";
import { NavbarItem, Button, Link } from "@nextui-org/react";

const LogOutButton = () => {
  const handleLogOut = () => {
    sessionStorage.clear();
  };
  return (
    <NavbarItem className="lg:flex color-danger">
      <Link onClick={handleLogOut} href="/login" color="danger">
        LogOut
      </Link>
    </NavbarItem>
  );
};

export default LogOutButton;
