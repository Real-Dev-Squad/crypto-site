import React from 'react';
import GithubLoginPresentation from './Presentation';
import { getAuthUrl } from './githubLogin.util';

const GithubLogin: React.FC = () => {
  const authUrl = getAuthUrl();
  return <GithubLoginPresentation authUrl={authUrl} />
};

export default GithubLogin;