import React from "react";

export type NavLink = {
  id: number;
  name: string;
  link: string;
};

export type navbarDesktopProps = {
  isLoggedIn: boolean;
  navLinks: NavLink[];
  username?: string;
  displayPic?: string;
}

export type navbarMobileProps = {
  isLoggedIn: boolean;
  navLinks: NavLink[];
  username?: string;
  displayPic?: string;
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};


