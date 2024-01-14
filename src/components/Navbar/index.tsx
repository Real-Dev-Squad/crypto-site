import React, { useState } from 'react';
import NavbarDesktop from './NavbarDesktop';
import { NAV_LINKS } from './navbar.constant';
import { useIsMobile } from './navbar.hook';
import NavbarMobile from './NavbarMobile';

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <NavbarMobile
        navLinks={NAV_LINKS}
        isLoggedIn={false}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
    );

  return <NavbarDesktop navLinks={NAV_LINKS} isLoggedIn={false} />;
};

export default Navbar;
