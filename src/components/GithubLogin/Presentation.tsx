import React from 'react';
import { githubLoginProps } from './githubLogin.types';
import styles from './githubLogin.module.css';
import githubLogo from '../../assets/github_logo.svg';

const GithubLoginPresentation: React.FC<githubLoginProps> = ({ authUrl }) => (
  <a
    href={authUrl}
    data-testid="github_login_button"
    className={styles.github_login_button}
  >
    <p className={styles.github_login_button_text}>Sign in with github</p>
    <img src={githubLogo} className={styles.github_logo} alt="github logo" />
  </a>
);

export default GithubLoginPresentation;
