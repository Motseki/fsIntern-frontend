import React, { createContext, useState, useEffect } from 'react';

const TradeContexts = createContext();

export function TradeContextProvider({ children }) {
  const [tradeContextData, setTradeContextData] = useState({
    buyer_payment_account: '',
    buyer_receive_account: '',
    object_public_id: '',
    price: '',
    buy_currency: '',
    amount: '',
    
  });

  useEffect(() => {
    const storedData = localStorage.getItem('tradeContextData');
    if (storedData) {
      setTradeContextData(JSON.parse(storedData));
    }
  }, []);

  const updateTradeContextData = newData => {
    setTradeContextData(newData);
    localStorage.setItem('contextData', JSON.stringify(newData));
  };

  return (
    <TradeContexts.Provider value={{ tradeContextData, updateTradeContextData}}>
      {children}
    </TradeContexts.Provider>
  );
}

export default TradeContexts;
