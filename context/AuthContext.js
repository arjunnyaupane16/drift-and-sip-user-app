// app/context/AuthContext.js

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState({
  name: '',
  phone: '',
  address: '',
}); // fake user to simulate login

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const isAuthenticated = !!user; // ✅ add this line

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
