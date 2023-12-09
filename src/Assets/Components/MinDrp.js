import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none', // remove border
    // width: '70px', 
    fontWeight: 600,
    // maxWidth: '200px', 
    width: 'auto', // set the width of the select to auto
    cursor: 'pointer',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: 'bold', // set font weight to bold
    // width: 'fit-content', 
    whiteSpace: 'nowrap', // prevent text from wrapping
    paddingRight: '45px', // make room for the dropdown indicator
    fontSize: '14px', // set the default font size


  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: 'black', // set placeholder color to black
    fontWeight: 'bold', // set font weight to bold
    paddingRight: '13px',
    fontSize: '14px',

  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#7C859D', // change color of dropdown icon
    padding: 0, // remove padding around the dropdown icon

  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none', // remove the vertical line between the select and dropdown icon
  }),
};

const options = [
  { value: 'NGN', label: 'NGN' },
  { value: 'USD', label: 'USD' },
  { value: 'ETH', label: 'ETH' },
  { value: 'GBP', label: 'GBP' },
  { value: 'BTC', label: 'BTC' },
  { value: 'USDT', label: 'USDT' },
  { value: 'EUR', label: 'EUR' },
];

// options[0].label = {place};

const place = options[0].label

const MinDrp = () => {
  return (
    <div className="select-container">

    <Select
      options={options}
      styles={customStyles}
      placeholder= {place}
      isSearchable={false}
    />

    </div>
  );
};


export default MinDrp;