import React from "react";
import Logo from "../logo/Logo";
import DesktopMenu from "../desktop-menu/DesktopMenu";
import MobileMenu from "../mobile-menu/MobileMenu";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center">
        <Logo />
        <DesktopMenu />
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
