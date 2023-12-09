import React from 'react';
import './DynamicTable.css';
import CurrencyConvert from './CurrencyConvert';

const addTypeClassname = (type) => {
  if (type === 'credit') {
    return <p className="type credit">{type}</p>;
  } else if (type === 'debit') {
    return <p className="type debit">{type}</p>;
  } else {
    return <p className="type">{type}</p>;
  }
};

const addStatusClassname = (status) => {
  if (status === 'pending') {
    return <p className="type pending">{status}</p>;
  } else if (status === 'canceled') {
    return <p className="type canceled">{status}</p>;
  } else if (status === 'completed') {
    return <p className="type completed">{status}</p>;
  } else {
    return <p className="type">{status}</p>;
  }
};



const DynamicTable = ({ rows, columns, active }) => {


  
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    return formatter.format(date).replace(',', ' |');
  };

  const handleCopy = (content) => {
    navigator.clipboard
      .writeText(content)
      .then(() => console.log('Copied to clipboard:', content))
      .catch((error) =>
        console.error('Error copying to clipboard:', error)
      );
  };

  const currencyCodes = {
    cefa: 'XOF',
    naira: 'NGN',
    dollar: 'USD',
    pound: 'GBP',
  };

  const getCurrencyCode = (currency) => {
    return currencyCodes[currency.toLowerCase()] || currency;
  };

  const filteredRows = active === 'credit' ? rows.filter(row => row.type === 'credit') : rows;

  return (
    <table
      className="DynamicTable"
      style={{ width: '100%', tableLayout: 'auto' }}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={
                column === 'Amount' ? 'amt' : column === 'Type' ? 'credt' : ''
              }
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredRows.map((row, index) => (
          <tr key={index}>
            {Object.entries(row).map(([key, value], index) => (
              <td
                key={index}
                className={
                  key === 'txnId'
                    ? 'txnId'
                    : key === 'amount'
                    ? 'amt'
                    : key === 'dateTime'
                    ? 'dateTime'
                    : key === 'status'
                    ? 'status'
                    : key === 'type'
                    ? 'typ'
                    : key === 'wallet'
                    ? 'walle'
                    : key === 'source'
                    ? 'source'
                    : ''
                }
              >
                {key === 'dateTime'
                  ? formatDate(value)
                  : key === 'type'
                  ? addTypeClassname(value)
                  : key === 'status'
                  ? addStatusClassname(value)
                  : key === 'txnId' ? (
                      <span

                
                
                
                
                className="txn-id-wrapper">
                  <p className="txn-id-content">
                    <p className='txt'> {value} </p>
                    <span className="copy-icon" onClick={() => handleCopy(value)}>
                      <i class="material-symbols-outlined"> file_copy </i>
                    </span>
                  </p>
                </span>
              )
              : (key === 'wallet' ? (
                <p className='wallet'>
                    {value}
                  <p className="currency">{getCurrencyCode(row['wallet'])}</p>
                
                </p> )
              :<p>{value}</p>)
              // )
              // )
              // )
              }
            </td>
          ))}
        </tr>
    ))}
</tbody>

    </table>
  );
};

export default DynamicTable;
