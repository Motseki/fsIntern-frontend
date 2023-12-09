import React from 'react';

const CurrencyConvert = ({ amount, currency }) => {

  const getCurrencyCode = (name) => {
    const currencyCodes = {
      'cefa': 'XOF',
      'naira': 'NGN',
      'dollar': 'USD',
      'pound': 'GBP'
      // Add more currency codes as needed
    };
    return currencyCodes[name.toLowerCase()] || '';
  }

  const code = getCurrencyCode(currency);

  return (
    <div className="currency">
      <p className="amount">{amount}</p>
      <p className="code">{code}</p>
    </div>
  );
};

export default CurrencyConvert;
