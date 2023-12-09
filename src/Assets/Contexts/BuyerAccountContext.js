import React, { createContext, useState, useEffect } from 'react';

const BuyerAccountContext = createContext();

export function BuyerAccountContextDataProvider({ children }) {
  const [buyerAccountContextData, setBuyerAccountContextData] = useState({
    buyer_payment_account: '',
  });
  

  useEffect(() => {
    const storedData = localStorage.getItem('buyerAccountContextData');
    if (storedData) {
      setBuyerAccountContextData(JSON.parse(storedData));
    }
  }, []);

  const updateBuyerAccountContextData = newData => {
    setBuyerAccountContextData(prevData => ({
      ...prevData,
      ...newData,
    }));
    localStorage.setItem('buyerAccountContextData', JSON.stringify(newData));
  };
  

  return (
    <BuyerAccountContext.Provider value={{ buyerAccountContextData, updateBuyerAccountContextData }}>
      {children}
    </BuyerAccountContext.Provider>
  );
}

export default BuyerAccountContext;
