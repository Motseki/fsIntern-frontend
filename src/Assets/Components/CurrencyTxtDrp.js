import React from 'react';
import Select, { components } from 'react-select';

const customStyles = (selectedCurrency) => ({
  control: (provided, state) => ({
    ...provided,
    border: 'solid #DCDEE5 1px',
    boxShadow: 'none',
    fontWeight: 600,
    width: '100%',
    cursor: 'pointer',
    borderRadius: '30px',
    paddingRight: selectedCurrency ? '85px' : '15px', // Adjust padding for selected currency
    paddingLeft: '15px',
    height: '50px',
    '&:hover': {
      border: 'solid 1px #c0c1c4',
    },
    '@media (max-width: 700px)': {
      width: '100%', // Reduce the width for smaller screens
      paddingLeft: '8px', // Adjust padding for smaller screens
      paddingRight: '8px',
      height: '45px',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    paddingRight: '45px',
    fontSize: '14px',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#7C859D',
    fontWeight: '400',
    paddingRight: selectedCurrency ? '53px' : '13px', // Adjust padding for selected currency
    fontSize: '14px',
    '@media (max-width: 700px)': {
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#373D4A',
    padding: 0,
    paddingRight: '8px',
    fontSize: '15px',

    '@media (max-width: 700px)': {
      fontSize: '13px',
    },
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  ngnLabel: (provided, state) => ({
    ...provided,
    paddingRight: '8px',
    color: 'red',
    fontSize: '34px',
    '@media (max-width: 700px)': {
      fontSize: '10px',
    },
  }),
});

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div style={customStyles.ngnLabel}>NGN</div>
    </components.DropdownIndicator>
  );
};

const CurrencyTxtDrp = (props) => {
  return (
    <div className="select-container">
      <Select
        options={props.options}
        styles={customStyles(props.selectedCurrency)}
        placeholder="Enter amount"
        isSearchable={false}
        components={{ DropdownIndicator }}
      />
    </div>
  );
};

export default CurrencyTxtDrp;
