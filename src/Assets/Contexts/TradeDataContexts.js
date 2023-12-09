import React, { createContext, useState, useEffect } from 'react';

const TradeDataContexts = createContext();

export function TradeDataProvider({ children }) {
  const [trade_Data, setTrade_Data] = useState({
    trade_public_id: '',
    trade_escrow: '',
    trade_purchase_amount: '',
    trade_status: '',

  });

  useEffect(() => {
    const storedData = localStorage.getItem('trade_Data');
    if (storedData) {
      setTrade_Data(JSON.parse(storedData));
    }
  }, []);

  const updateTrade_Data = newData => {
    setTrade_Data(newData);
    localStorage.setItem('trade_Data', JSON.stringify(newData));
  };

  return (
    <TradeDataContexts.Provider value={{ trade_Data, updateTrade_Data }}>
      {children}
    </TradeDataContexts.Provider>
  );
}

export default TradeDataContexts;
