import React from 'react';
import { githubLoginProps } from './githubLogin.types';
import styles from './githubLogin.module.css';
import githubLogo from '../../assets/Github_Logo.svg';

const GithubLoginPresentation: React.FC<githubLoginProps> = ({ authUrl }) => {
  return (
    <a href={authUrl}>
      <button
        data-testid="github_login_button"
        className={styles.github_login_button}
      >
        <p className={styles.github_login_button_text}>Sign in with github</p>
        <img src={githubLogo} className={styles.github_logo} alt="" />
      </button>
    </a>
  );
};

export default GithubLoginPresentation;
