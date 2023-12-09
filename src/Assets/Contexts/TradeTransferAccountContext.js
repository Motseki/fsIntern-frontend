import React, { createContext, useState, useEffect } from 'react';

const TradeTransferAccountContext = createContext();

export function TradeTransferAccountContextDataProvider({ children }) {
  const [TradeTransferAccountContext, setTradeTransferAccountContext] = useState({
    account_number: '"0023857698"',
    holder_name: 'Boluwatito Awe',
    bank_or_network: "Union Bank",
    expected_amount: '228000',

  });

  useEffect(() => {
    const storedData = localStorage.getItem('TradeTransferAccountContext');
    if (storedData) {
      setTradeTransferAccountContext(JSON.parse(storedData));
    }
  }, []);

  const updateTradeTransferAccountContext = newData => {
    setTradeTransferAccountContext(newData);
    localStorage.setItem('TradeTransferAccountContext', JSON.stringify(newData));
  };

  return (
    <TradeTransferAccountContext.Provider value={{ TradeTransferAccountContext, updateTradeTransferAccountContext }}>
      {children}
    </TradeTransferAccountContext.Provider>
  );
}

export default TradeTransferAccountContext;
