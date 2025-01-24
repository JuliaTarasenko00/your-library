import { createContext, useEffect, useState } from 'react';

export type AuthContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  refreshToken: string;
  setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const KEY = 'token';
const REFRESHKEY = 'refreshToken';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(
    () => window.localStorage.getItem(KEY) ?? '',
  );
  const [refreshToken, setRefreshToken] = useState(
    () => window.localStorage.getItem(REFRESHKEY) ?? '',
  );

  useEffect(() => {
    window.localStorage.setItem(KEY, token);
    window.localStorage.setItem(REFRESHKEY, refreshToken);
  }, [token, refreshToken]);

  return (
    <AuthContext.Provider
      value={{ token, setToken, refreshToken, setRefreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
