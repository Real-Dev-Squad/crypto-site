import React from 'react';
import { NavLink } from './navbar.types';
import styles from './navbar.module.css';
import rdsLogo from '../../assets/rds_logo.svg';
import GithubLogin from '../GithubLogin';

interface NavbarPresentationProps {
  isLoggedIn: boolean;
  navLinks: NavLink[];
}

const NavbarDesktop: React.FC<NavbarPresentationProps> = ({
  isLoggedIn,
  navLinks,
}) => {
  const profileComponent = isLoggedIn ? <></> : <GithubLogin />;

  const navItems = navLinks.map((link) => (
    <li key={link.name} className={styles.navlist_items}>
      <a className={styles.navlink} href={link.link}>
        {link.name}
      </a>
    </li>
  ));
  return (
    <nav className={styles.navbar} data-testid="navbar_desktop">
      <ul className={styles.navbar_menu}>
        <li key={'rds_logo'} data-testid="rds_logo">
          <img src={rdsLogo} className={styles.rds_logo} alt="RDS logo" />
        </li>
        {navItems}
        <li key={'profile'} className={styles.profile_component}>{profileComponent}</li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
