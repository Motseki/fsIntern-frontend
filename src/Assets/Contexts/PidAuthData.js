import React, { createContext, useState, useEffect } from 'react';

const PidAuthData = createContext();

export function PidAuthDataProvider({ children }) {
  const [pidcontextData, setPidContextData] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    date_of_birth: '',
    country: '',
    region: '',
    residential_address: '',
  });



  useEffect(() => {
    const storedData = localStorage.getItem('pidcontextData');
    if (storedData) {
      setPidContextData(JSON.parse(storedData));
    }
  }, []);

    const updatePidContextData = newData => {
      // Update the isAuthenticated field to true if the newData contains the accessKey
      if (newData.accessKey) {
        newData.isAuthenticated = true;
      }
      setPidContextData(newData);
      localStorage.setItem('pidcontextData', JSON.stringify(newData));
    };

  

  return (
    <PidAuthData.Provider value={{ pidcontextData, setPidContextData, updatePidContextData }}>
      {children}
    </PidAuthData.Provider>
  );
}

export default PidAuthData;
