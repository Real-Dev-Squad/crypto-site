import { render, act } from '@testing-library/react';
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
});
