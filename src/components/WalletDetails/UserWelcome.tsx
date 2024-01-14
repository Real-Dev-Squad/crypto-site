import React from 'react';
import { userWelcomeProps } from './walletDetails.type';
import styles from './walletDetails.module.css';

const UserWelcome: React.FC<userWelcomeProps> = ({ username, displayPic }) => {
  return (
    <div data-testid={'user_welcome'} className={styles.user_welcome_container}>
      <img data-testid={'user_image'} src={displayPic} className={styles.user_image} alt="user image" />
      <p data-testid={'welcome_text'} className={styles.welcome_text}>Welcome {username} 👋</p>
    </div>
  );
};

export default UserWelcome;
