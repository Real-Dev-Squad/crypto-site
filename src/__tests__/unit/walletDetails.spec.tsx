import { render, renderHook } from '@testing-library/react';
import { useUserWallet } from '../../components/WalletDetails/walletDetails.hook';
import '@testing-library/jest-dom';
import WalletItem from '../../components/WalletDetails/WalletItem';
import UserWelcome from '../../components/WalletDetails/UserWelcome';

describe('useUserWallet', () => {
  const { result } = renderHook(() => useUserWallet());

  expect(result.current).toStrictEqual({
    userWalletDetails: { dinero: 60, neelam: 80 },
  });
});

describe('<WalletItem />', () => {
  it('should render wallet with currency name, and currency value', () => {
    const { getByTestId } = render(
      <WalletItem currency="Dinero" value={60} index={1} />
    );
    const userWalletComponent = getByTestId('wallet_item_1');

    const walletCurrency = userWalletComponent.querySelector(
      '[data-testid="currency_name_1"]'
    );
    const walletValue = userWalletComponent.querySelector(
      '[data-testid="currency_value_1"]'
    );

    expect(userWalletComponent).toBeInTheDocument();
    expect(walletCurrency).toBeInTheDocument();
    expect(walletValue).toBeInTheDocument();

    expect(walletCurrency?.textContent).toBe('Dinero');
    expect(walletValue?.textContent).toBe('60');
  });
});

describe('<UserWelcome />', () => {
  const { getByTestId } = render(
    <UserWelcome
      username="Vinayak"
      displayPic="https://res.cloudinary.com/realdevsquad/image/upload/v1660416701/profile/2LEt2spMNDUCpkjmbsfa/pmtjfsf2pmk1cdfxrtvr.jpg"
    />
  );
  const userWelcomeComponent = getByTestId('user_welcome');
  const userDisplayPic = userWelcomeComponent.querySelector(
    '[data-testid="user_image"]'
  );
  const welcomeText = userWelcomeComponent.querySelector(
    '[data-testid="welcome_text"]'
  );

  expect(userDisplayPic).toBeInTheDocument();
  expect(welcomeText).toBeInTheDocument();

  expect(welcomeText?.textContent).toStrictEqual('Welcome Vinayak 👋');
});
