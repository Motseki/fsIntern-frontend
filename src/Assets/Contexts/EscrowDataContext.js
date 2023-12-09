import React, { createContext, useState, useEffect } from 'react';

const EscrowDataContext = createContext();

// Modify your EscrowDataProvider component
export function EscrowDataProvider({ children }) {
  const [escrowData, setEscrowData] = useState({
    escrow_account_type: '',
    escrow_account_number: '',
    escrow_holder_name: '',
    escrow_bank_or_network: '',
    escrow_expected_payment: '50',
    escrow_currency: '',
    escrow_public_id: '',
    escrow_status: '',
    escrow_tradeId: '',


  });

  useEffect(() => {
    const storedData = localStorage.getItem('escrowData');
    if (storedData) {
      setEscrowData(JSON.parse(storedData));
    }
  }, []);

  const updateEscrowData = newData => {
    setEscrowData(newData);
    localStorage.setItem('escrowData', JSON.stringify(newData));
  };

  return (
    <EscrowDataContext.Provider value={{ escrowData, updateEscrowData }}>
      {children}
    </EscrowDataContext.Provider>
  );
}


export default EscrowDataContext;
