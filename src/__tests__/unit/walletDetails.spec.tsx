import { render, renderHook } from '@testing-library/react';
import { useUserWallet } from '../../components/WalletDetails/walletDetails.hook';
import '@testing-library/jest-dom';
import WalletDetails from '../../components/WalletDetails';
import WalletItem from '../../components/WalletDetails/WalletItem';

describe('useUserWallet', () => {
  const { result } = renderHook(() => useUserWallet());

  expect(result.current).toBe({
    userWalletDetails: { dinero: 60, neelam: 80 },
  });
});

describe('<WalletItem />', () => {
  it('should render wallet with currency name, and currency value', () => {
    const { getByTestId } = render(<WalletItem currency="Dinero" value={60} />);
    const userWalletComponent = getByTestId('wallet_item_dinero');
    const walletCurrency = userWalletComponent.querySelector('.currency');
    const walletValue = userWalletComponent.querySelector('.value');

    expect(userWalletComponent).toBeInTheDocument();
    expect(walletCurrency).toBeInTheDocument();
    expect(walletValue).toBeInTheDocument();

    expect(walletCurrency?.textContent).toBe('Dinero');
    expect(walletValue?.textContent).toBe(60);
  });
});
