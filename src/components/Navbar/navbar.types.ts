export type NavLink = {
  id: number;
  name: string;
  link: string;
};

export type NavbarPresentationProps = {
  isLoggedIn: boolean;
  navLinks: NavLink[];
  username?: string;
  displayPic?: string;
}
