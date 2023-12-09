import React, { createContext, useState, useEffect } from 'react';

const AuthDataContext = createContext();

export function AuthDataProvider({ children }) {
  const [contextData, setContextData] = useState({
    email: '',
    password: '',
    accessKey: '',
    username: '',
    isAuthenticated: false, // Changed to boolean
    userRole: 'user',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('contextData');
    if (storedData) {
      setContextData(JSON.parse(storedData));
    }
  }, []);

  const updateContextData = newData => {
    setContextData(prevData => ({
      ...prevData,
      ...newData,
      isAuthenticated: newData.isAuthenticated, // Ensure this property is updated correctly
    }));
    localStorage.setItem('contextData', JSON.stringify(newData));
  };
  
  return (
    <AuthDataContext.Provider value={{ contextData, updateContextData }}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthDataContext;
