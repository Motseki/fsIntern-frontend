import React, { createContext, useState, useEffect } from 'react';

const AccountContext = createContext();

export function AccountContexthDataProvider({ children }) {
  const [accountContextData, setAccountContextData] = useState({
    buyer_payment_account: [],
    buyer_receive_account: [],
  });
  

  useEffect(() => {
    const storedData = localStorage.getItem('accountContextData');
    if (storedData) {
      setAccountContextData(JSON.parse(storedData));
    }
  }, []);

  const updateAccountContextData = newData => {
    setAccountContextData(prevData => ({
      ...prevData,
      ...newData,
    }));
    localStorage.setItem('accountContextData', JSON.stringify(newData));
  };
  

  return (
    <AccountContext.Provider value={{ accountContextData, updateAccountContextData }}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
