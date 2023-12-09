import React, { createContext, useState, useEffect } from 'react';

const CurrencyCalcContext = createContext();

export function CurrencyCalchDataProvider({ children }) {
  const [currencyCalcData, setCurrencyCalcData] = useState({
    currency_calc_fromcurrency: '',
    currency_calc_tocurrency: '',
    currency_calc_amount: '',
    currency_calc_public_id: '',
    currency_calc_rate: '',
    currency_calc_buyer_payment_account: '',

  });

  useEffect(() => {
    const storedData = localStorage.getItem('currencyCalcData');
    if (storedData) {
      setCurrencyCalcData(JSON.parse(storedData));
    }
  }, []);

  const updateCurrencyCalcData = newData => {
    setCurrencyCalcData(newData);
    localStorage.setItem('currencyCalcData', JSON.stringify(newData));
  };

  return (
    <CurrencyCalcContext.Provider value={{ currencyCalcData, updateCurrencyCalcData }}>
      {children}
    </CurrencyCalcContext.Provider>
  );
}

export default CurrencyCalcContext;
