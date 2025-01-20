import { createContext, useEffect, useState } from 'react';

export type AuthContextType = {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const KEY = 'token';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(
    () => window.localStorage.getItem(KEY) ?? '',
  );

  useEffect(() => {
    window.localStorage.setItem(KEY, token);
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
