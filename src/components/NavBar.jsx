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
import { ReciclarLogo } from "./ReciclarLogo.jsx";
import LogOutButton from "./LogOutButton.jsx";

export default function NavBar({ isLoggedIn }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Empresas", "Usuarios", "Posts", "Reciclables"];

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
                location.pathname === `/${item.toLowerCase()}`
                  ? "primary"
                  : "foreground"
              }
              className="w-full"
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
