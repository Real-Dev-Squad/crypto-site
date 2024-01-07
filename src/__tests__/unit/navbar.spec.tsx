import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NAV_LINKS } from '../../components/Navbar/navbar.constant';
import NavbarDesktop from '../../components/Navbar/NavbarDesktop';

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

  it('should render all list of links passed in props, along with a user profile button if user is logged in', () => {
    const { getByTestId, getByText } = render(
      <NavbarDesktop isLoggedIn={true} navLinks={NAV_LINKS} />
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
