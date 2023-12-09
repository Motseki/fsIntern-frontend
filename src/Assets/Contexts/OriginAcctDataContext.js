import React, { createContext, useState, useEffect } from 'react';

const OriginAcctDataContext = createContext();

// Modify your OriginAcctDataProvider component
export function OriginAcctDataProvider({ children }) {
  const [originAcctData, setOriginAcctData] = useState({
    origin_acct_type: '',
    origin_currency: "",
    origin_holder_name: '',
    origin_bank_or_network: "",
    origin_number_or_address: '',

    
  });

  useEffect(() => {
    const storedData = localStorage.getItem('originAcctData');
    if (storedData) {
      setOriginAcctData(JSON.parse(storedData));
    }
  }, []);

  const updateOriginAcctData = newData => {
    // Merge the new data with the existing data using the spread operator
    const updatedData = { ...originAcctData, ...newData };
    setOriginAcctData(updatedData);
    localStorage.setItem('originAcctData', JSON.stringify(updatedData));
  };

  return (
    <OriginAcctDataContext.Provider value={{ originAcctData, updateOriginAcctData }}>
      {children}
    </OriginAcctDataContext.Provider>
  );
}


export default OriginAcctDataContext;
