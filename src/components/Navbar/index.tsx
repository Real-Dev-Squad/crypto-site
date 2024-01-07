import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import { NAV_LINKS } from "./navbar.constant";

const Navbar: React.FC = () => {
  return <NavbarDesktop navLinks={NAV_LINKS} isLoggedIn={false} />
}

export default Navbar