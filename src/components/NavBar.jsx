import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ReciclarLogo } from "./icons/ReciclarLogo.jsx";
import LogOutButton from "./LogOutButton.jsx";
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import RecyclingIcon from '@mui/icons-material/Recycling';

export default function NavBar({ isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Empresas", icon: <BusinessIcon /> },
    { name: "Usuarios", icon: <PeopleIcon /> },
    { name: "Posts", icon: <ArticleIcon /> },
    { name: "Reciclables", icon: <RecyclingIcon /> }
  ];


  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            <ReciclarLogo />
            <p className="hidden md:flex font-bold text-inherit">
              Reciclar Admin
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        {!isLoggedIn ? (
          <NavbarItem className="lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        ) : (
          <LogOutButton />
        )}

        {/* <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu className="mt-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                location.pathname === `/${item.name.toLowerCase()}`
                  ? "primary"
                  : "foreground"
              }
              className="w-full"
              href={`/${item.name.toLowerCase()}`}
              size="lg"
            >
              {item.icon} {item.name}

            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
