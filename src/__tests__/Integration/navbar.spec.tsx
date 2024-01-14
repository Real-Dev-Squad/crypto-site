import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  it('switches between desktop and mobile versions on window resize', () => {
    const { getByTestId } = render(<Navbar />);
    const navbarDesktop = getByTestId('navbar_desktop');

    act(() => {
      window.innerWidth = 1200;
      window.dispatchEvent(new Event('resize'));
    });

    expect(navbarDesktop).toBeInTheDocument();

    act(() => {
      window.innerWidth = 600;
      window.dispatchEvent(new Event('resize'));
    });
    const navbarMobile = getByTestId('navbar_mobile');

    expect(navbarMobile).toBeInTheDocument();
  });

  it('toggles navbar links view in mobile version on clicking on hamburger icon', () => {
    const { queryByTestId, getByTestId } = render(<Navbar />);
    act(() => {
      window.innerWidth = 600;
      window.dispatchEvent(new Event('resize'));
    });
    expect(queryByTestId('navbar_mobile_menu')).not.toBeInTheDocument
    ();
    fireEvent.click(getByTestId('hamburger_button'));
    expect(queryByTestId('navbar_mobile_menu')).toBeInTheDocument();

  });
});
