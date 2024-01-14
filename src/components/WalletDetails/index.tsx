import React from 'react';
import styles from './walletDetails.module.css';
import UserWelcome from './UserWelcome';
import { useUserWallet } from './walletDetails.hook';
import WalletItem from './WalletItem';

const WalletDetails: React.FC = () => {
  const wallet = useUserWallet();
  const walletItems = wallet.userWalletDetails.map((item, index) => (
    <WalletItem key={item.name} currency={item.name} value={item.value} index={index} />
  ));

  return (
    <main className={styles.wallet_details_container}>
      <UserWelcome
        username="Vinayak"
        displayPic="https://res.cloudinary.com/realdevsquad/image/upload/v1660416701/profile/2LEt2spMNDUCpkjmbsfa/pmtjfsf2pmk1cdfxrtvr.jpg"
      />
      <div className={styles.wallet_items}>{walletItems}</div>
    </main>
  );
};

export default WalletDetails;
