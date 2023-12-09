import React, { createContext, useState, useEffect } from 'react';

const ReceiverAccountContext = createContext();

export function ReceiverAccountContextProvider({ children }) {
  const [receiverAccountContextData, setReceiverAccountContextData] = useState({
    buyer_receive_account: '',
  });
  

  useEffect(() => {
    const storedData = localStorage.getItem('receiverAccountContextData');
    if (storedData) {
      setReceiverAccountContextData(JSON.parse(storedData));
    }
  }, []);

  const updateReceiverAccountContextData = newData => {
    setReceiverAccountContextData(prevData => ({
      ...prevData,
      ...newData,
    }));
    localStorage.setItem('receiverAccountContextData', JSON.stringify(newData));
  };
  

  return (
    <ReceiverAccountContext.Provider value={{ receiverAccountContextData, updateReceiverAccountContextData }}>
      {children}
    </ReceiverAccountContext.Provider>
  );
}

export default ReceiverAccountContext;
