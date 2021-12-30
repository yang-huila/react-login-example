import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({
    admin_id: '',
    isAuth: false,
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
