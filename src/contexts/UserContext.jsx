const AuthContext = React.createContext();

import React, { useState } from 'react';
import axios from 'axios';
import  postData  from '../services/apiServices';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    try {
      postData('login', { username, password })
      const { token } = response.data;
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };
  
  const register = async (username, password) => {
    try {
      postData('register', { username, password })
      const { token } = response.data;
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
