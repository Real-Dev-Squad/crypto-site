import { AUTH_URL } from "../../constants/auth";

export const getAuthUrl = () => {
  let authUrl = AUTH_URL;
  if (typeof window !== 'undefined' && window !== null) {
    authUrl = `${authUrl}&state=${window.location.href}`;
  }

  return authUrl;
};
