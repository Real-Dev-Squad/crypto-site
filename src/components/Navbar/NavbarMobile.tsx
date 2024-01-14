import React from 'react';
import styles from './navbar.module.css';
import { navbarMobileProps } from './navbar.types';
import hamburgerIcon from '../../assets/hamburger_icon.svg';
import UserProfile from '../UserProfile';
import GithubLogin from '../GithubLogin';

const NavbarMobile: React.FC<navbarMobileProps> = ({
  isLoggedIn,
  navLinks,
  username,
  displayPic,
  isExpanded,
  setIsExpanded,
}) => {
  const profileComponent = isLoggedIn ? (
    <UserProfile username={username} displayPic={displayPic} />
  ) : (
    <GithubLogin />
  );
  const navItems = navLinks.map((link) => (
    <li key={link.id} className={styles.nav_mobile_item}>
      <a href={link.link} className={styles.nav_mobile_links}>
        {link.name}
      </a>
    </li>
  ));
  return (
    <>
      <div data-testid='navbar_mobile' className={styles.navbar_mobile_container}>
        <button
          data-testid='hamburger_button'
          className={styles.hamburger_button}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <img
            src={hamburgerIcon}
            className={styles.humberburger_icon}
            alt="hamburger icon"
          />
        </button>
        {profileComponent}
      </div>
      {isExpanded && <ul data-testid='navbar_mobile_menu' className={styles.navbar_mobile_menu}>{navItems}</ul>}
    </>
  );
};

export default NavbarMobile;
