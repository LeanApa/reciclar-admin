import React from "react";
import { NavbarItem, Link } from "@nextui-org/react";
import LogoutIcon from '@mui/icons-material/Logout';

const LogOutButton = () => {
  const handleLogOut = () => {
    sessionStorage.clear();
  };
  return (
    <NavbarItem className="lg:flex color-danger">
      <Link onClick={handleLogOut} href="/login" color="danger">
        <LogoutIcon className="mr-1"/>
        Cerrar sesión
      </Link>
    </NavbarItem>
  );
};

export default LogOutButton;
