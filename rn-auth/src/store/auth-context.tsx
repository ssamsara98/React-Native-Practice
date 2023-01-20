import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { createContext, useEffect, useState } from 'react';

interface AuthContextProps {
  token?: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps>({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => { },
  logout: () => { },
});

function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [authToken, setAuthToken] = useState<string | null>();

  function authenticate(token: string) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
