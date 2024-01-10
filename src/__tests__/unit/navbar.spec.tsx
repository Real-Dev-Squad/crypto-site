import { render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NAV_LINKS } from '../../components/Navbar/navbar.constant';
import NavbarDesktop from '../../components/Navbar/NavbarDesktop';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import { useIsMobile } from '../../components/Navbar/navbar.hook';
import Navbar from '../../components/Navbar';

describe('<Navbar />', function () {
  it('render NavbarDesktop if viewport width is greater than 1024px', () => {
    Object.defineProperty(window, 'innerWidth', {
      value: 1200,
      writable: true,
    });
    const { getByTestId } = render(<Navbar />);
    const navbarDesktop = getByTestId('navbar_desktop');
    expect(navbarDesktop).toBeInTheDocument();
  });

  it('render NavbarMobile if viewport width is less than 1024px', () => {
    Object.defineProperty(window, 'innerWidth', {
      value: 800,
      writable: true,
    });
    const { getByTestId } = render(<Navbar />);
    const navbarMobile = getByTestId('navbar_mobile');
    expect(navbarMobile).toBeInTheDocument();
  });
});

describe('<NavbarDesktop />', function () {
  it('should render all list of links passed in props, along with a github login button if user is not logged in', () => {
    const { getByTestId, getByText } = render(
      <NavbarDesktop isLoggedIn={false} navLinks={NAV_LINKS} />
    );
    const navbarDesktop = getByTestId('navbar_desktop');
    const rdsLogoButton = getByTestId('rds_logo');
    const welcomeLink = getByText('Welcome');
    const eventLink = getByText('Events');
    const cryptoLink = getByText('Crypto');
    const statusLink = getByText('Status');
    const membersLink = getByText('Members');
    const githubLoginButton = getByTestId('github_login_button');

    expect(navbarDesktop).toBeInTheDocument();

    expect(rdsLogoButton).toBeInTheDocument();
    expect(welcomeLink).toBeInTheDocument();
    expect(welcomeLink).toHaveAttribute(
      'href',
      'https://welcome.realdevsquad.com/'
    );

    expect(eventLink).toBeInTheDocument();
    expect(eventLink).toHaveAttribute(
      'href',
      'https://www.realdevsquad.com/events'
    );

    expect(membersLink).toBeInTheDocument();
    expect(membersLink).toHaveAttribute(
      'href',
      'https://members.realdevsquad.com/'
    );

    expect(cryptoLink).toBeInTheDocument();
    expect(cryptoLink).toHaveAttribute(
      'href',
      'https://crypto.realdevsquad.com/'
    );

    expect(statusLink).toBeInTheDocument();
    expect(statusLink).toHaveAttribute(
      'href',
      'https://status.realdevsquad.com/'
    );
    expect(githubLoginButton).toBeInTheDocument();
  });

  it('should render all list of links passed in props, along with a user profile component if user is logged in', () => {
    const { getByTestId, getByText } = render(
      <NavbarDesktop
        isLoggedIn={true}
        navLinks={NAV_LINKS}
        username="Vinayak"
        displayPic="https://res.cloudinary.com/realdevsquad/image/upload/v1660416701/profile/2LEt2spMNDUCpkjmbsfa/pmtjfsf2pmk1cdfxrtvr.jpg"
      />
    );
    const rdsLogoButton = getByTestId('rds_logo');
    const welcomeLink = getByText('Welcome');
    const eventLink = getByText('Events');
    const cryptoLink = getByText('Crypto');
    const statusLink = getByText('Status');
    const userProfile = getByTestId('user_profile');
    const userImage = userProfile.querySelector('[data-testid="user_image"]');
    const username = userProfile.querySelector('[data-testid="username"]');

    expect(rdsLogoButton).toBeInTheDocument();
    expect(welcomeLink).toBeInTheDocument();
    expect(welcomeLink).toHaveAttribute(
      'href',
      'https://welcome.realdevsquad.com/'
    );

    expect(eventLink).toBeInTheDocument();
    expect(eventLink).toHaveAttribute(
      'href',
      'https://www.realdevsquad.com/events'
    );

    const membersLink = getByText('Members');
    expect(membersLink).toBeInTheDocument();
    expect(membersLink).toHaveAttribute(
      'href',
      'https://members.realdevsquad.com/'
    );

    expect(cryptoLink).toBeInTheDocument();
    expect(cryptoLink).toHaveAttribute(
      'href',
      'https://crypto.realdevsquad.com/'
    );

    expect(statusLink).toBeInTheDocument();
    expect(statusLink).toHaveAttribute(
      'href',
      'https://status.realdevsquad.com/'
    );
    expect(userProfile).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
});

describe('<NavbarMobile />', function () {
  it('should render the navbar mobile without the links component if isExpanded is false, and should render the github login component, if login is false', () => {
    const mockSetState = jest.fn();
    const { getByTestId } = render(
      <NavbarMobile
        isLoggedIn={false}
        navLinks={NAV_LINKS}
        isExpanded={false}
        setIsExpanded={mockSetState}
      />
    );
    const navbarMobile = getByTestId('navbar_mobile');
    const hamburgerButton = getByTestId('hamburger_button');
    const githubLoginButton = getByTestId('github_login_button');

    expect(navbarMobile).toBeInTheDocument();
    expect(hamburgerButton).toBeInTheDocument();
    expect(githubLoginButton).toBeInTheDocument();
  });

  it('should render the navbar mobile with the links component if isExpanded is true, and should render the profile component, if login is true', () => {
    const mockSetState = jest.fn();
    const { getByTestId, getByText } = render(
      <NavbarMobile
        isLoggedIn={true}
        navLinks={NAV_LINKS}
        username="Vinayak"
        displayPic="https://res.cloudinary.com/realdevsquad/image/upload/v1660416701/profile/2LEt2spMNDUCpkjmbsfa/pmtjfsf2pmk1cdfxrtvr.jpg"
        isExpanded={true}
        setIsExpanded={mockSetState}
      />
    );
    const navbarMobileMenu = getByTestId('navbar_mobile_menu');
    const hamburgerButton = getByTestId('hamburger_button');
    const welcomeLink = getByText('Welcome');
    const eventLink = getByText('Events');
    const cryptoLink = getByText('Crypto');
    const statusLink = getByText('Status');
    const userProfile = getByTestId('user_profile');
    const userImage = userProfile.querySelector('[data-testid="user_image"]');
    const username = userProfile.querySelector('[data-testid="username"]');

    expect(navbarMobileMenu).toBeInTheDocument();
    expect(hamburgerButton).toBeInTheDocument();
    expect(welcomeLink).toBeInTheDocument();
    expect(welcomeLink).toHaveAttribute(
      'href',
      'https://welcome.realdevsquad.com/'
    );

    expect(eventLink).toBeInTheDocument();
    expect(eventLink).toHaveAttribute(
      'href',
      'https://www.realdevsquad.com/events'
    );

    const membersLink = getByText('Members');
    expect(membersLink).toBeInTheDocument();
    expect(membersLink).toHaveAttribute(
      'href',
      'https://members.realdevsquad.com/'
    );

    expect(cryptoLink).toBeInTheDocument();
    expect(cryptoLink).toHaveAttribute(
      'href',
      'https://crypto.realdevsquad.com/'
    );

    expect(statusLink).toBeInTheDocument();
    expect(statusLink).toHaveAttribute(
      'href',
      'https://status.realdevsquad.com/'
    );
    expect(userProfile).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });

  it('should call setIsExpanded method, on clicking on harburger icon', () => {
    const mockSetState = jest.fn();
    const { getByTestId } = render(
      <NavbarMobile
        isLoggedIn={true}
        navLinks={NAV_LINKS}
        username="Vinayak"
        displayPic="https://res.cloudinary.com/realdevsquad/image/upload/v1660416701/profile/2LEt2spMNDUCpkjmbsfa/pmtjfsf2pmk1cdfxrtvr.jpg"
        isExpanded={true}
        setIsExpanded={mockSetState}
      />
    );
    const hamburgerButton = getByTestId('hamburger_button');
    fireEvent.click(hamburgerButton);

    expect(mockSetState).toHaveBeenCalledTimes(1);
  });
});

describe('useIsMobile', () => {
  it('returns true when window.innerWidth is less than 1024', () => {
    Object.defineProperty(window, 'innerWidth', { value: 800, writable: true });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it('returns false when window.innerWidth is greater than or equal to 1024', () => {
    Object.defineProperty(window, 'innerWidth', {
      value: 1200,
      writable: true,
    });

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });
});
