import React from 'react';
import { walletItemProps } from './walletDetails.type';
import styles from './walletDetails.module.css';
import currencyIcon from '../../assets/currencyIcon.svg';

const WalletItem: React.FC<walletItemProps> = ({ currency, value, index }) => {
  return (
    <div className={styles.wallet_item} data-testid={`wallet_item_${index}`}>
      <img src={currencyIcon} className={styles.currency_image} alt="currency icon" />
      <p
        data-testid={`currency_name_${index}`}
        className={styles.currency_name}
      >
        {currency}
      </p>
      <p
        data-testid={`currency_value_${index}`}
        className={styles.currency_value}
      >
        {value}
      </p>
    </div>
  );
};

export default WalletItem;
