import React from 'react';
import { userProfileProps } from './userProfile.types';
import styles from './userProfile.module.css';

const UserProfile: React.FC<userProfileProps> = ({ username, displayPic }) => {
  return (
    <div data-testid="user_profile" className={styles.user_profile}>
      <p data-testid="username" className={styles.username}>
        Hello, {username}
      </p>
      <img
        data-testid="user_image"
        src={displayPic}
        className={styles.user_image}
        alt="user profile pic"
      />
    </div>
  );
};

export default UserProfile;
