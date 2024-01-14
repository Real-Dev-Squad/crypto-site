import React from 'react';
import Navbar from '../Navbar';
import WalletDetails from '../WalletDetails';
import styles from './mainPage.module.css';

const MainPage: React.FC = () => {
  return (
    <div className={styles.main_page}>
      <Navbar />
      <WalletDetails />
    </div>
  );
};

export default MainPage;
