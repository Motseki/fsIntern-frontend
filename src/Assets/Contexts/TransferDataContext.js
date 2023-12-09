import React, { createContext, useState, useEffect } from 'react';

const TransferDataContext = createContext();

export function TransferDataProvider({ children }) {
  const [transferData, setTransferData] = useState({
    transfer_acct_type: '',
    transfer_acct_number: '',
    transfer_acct_name: '',
    transfer_bank: '',
    transfer_currency: '',
    transfer_id: '',

  });

  useEffect(() => {
    const storedData = localStorage.getItem('transferData');
    if (storedData) {
      setTransferData(JSON.parse(storedData));
    }
  }, []);

  const updateTransferData = newData => {
    setTransferData(newData);
    localStorage.setItem('transferData', JSON.stringify(newData));
  };

  return (
    <TransferDataContext.Provider value={{ transferData, updateTransferData }}>
      {children}
    </TransferDataContext.Provider>
  );
}

export default TransferDataContext;
