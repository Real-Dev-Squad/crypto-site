import { render, renderHook } from '@testing-library/react';
import { useUserWallet } from '../../components/WalletDetails/walletDetails.hook';
import '@testing-library/jest-dom';
import WalletItem from '../../components/WalletDetails/WalletItem';

describe('useUserWallet', () => {
  const { result } = renderHook(() => useUserWallet());

  expect(result.current).toStrictEqual({
    userWalletDetails: { dinero: 60, neelam: 80 },
  });
});

describe('<WalletItem />', () => {
  it('should render wallet with currency name, and currency value', () => {
    const { getByTestId } = render(<WalletItem currency="Dinero" value={60} index={1} />);
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
