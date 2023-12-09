import React from 'react';
import Select, { components } from 'react-select';
import './EditableCurrencyOpt.css'

const customStyles = (selectedCurrency) => ({
  control: (provided, state) => ({
    ...provided,
    // border: 'solid 1px blue',
    border: 'none',

    boxShadow: 'none',
    fontWeight: 600,
    width: '90px',
    cursor: 'pointer',
    borderRadius: '30px',
    paddingRight: '0px', 
    // Adjust padding for selected currency
    paddingLeft: '20px',
    height: '100%',
    marginLeft: 'auto',
    fontSize: '16px',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    // padding: '0px 0 10px 0',
    '&:hover': {
      border: 'none',
    },
    '@media (max-width: 700px)': {
      width: '100%', // Reduce the width for smaller screens
      paddingLeft: '8px', // Adjust padding for smaller screens
      // paddingRight: '0px',
    width: '70px',

    //   height: '45px',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    // paddingRight: '45px',
    fontSize: '14px',
    // border: 'solid 5px green',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontWeight: '600',
    // paddingRight: selectedCurrency ? '53px' : '13px',
     // Adjust padding for selected currency
    // border: 'solid 1px #c0c1c4',

    fontSize: '14px',
    '@media (max-width: 700px)': {
    },
  }),
  input: (provided) => ({
    ...provided,
    width: '100%' // set the width of the input here
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#373D4A',
    padding: 0,
    paddingRight: '8px',
    fontSize: '15px',
    display: 'none',


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
    // fontSize: '34px',
    '@media (max-width: 700px)': {
      fontSize: '10px',
    },
  }),
  wame: (provided, state) => ({
    ...provided,
   border:'solid blue 4px',
    '@media (max-width: 700px)': {
      fontSize: '10px',
    },
  }),
});


const EditableCurrencyOptAll = (props) => {

    const options = [
        { value: 'USD', label: 'USD' },
        { value: 'NGN', label: 'NGN' },
        { value: 'ETH', label: 'ETH' },
        { value: 'GBP', label: 'GBP' },
        { value: 'BTC', label: 'BTC' },
        { value: 'USDT', label: 'USDT' },
        { value: 'EUR', label: 'EUR' },
      ];

const place = options[0].label


  return (

    <div className="curr_opt">
      <div className="curr">

            {/* <input type="text" name="" id="" /> */}
            <input type="number" name="fname" placeholder="0.00" className='in'/>
            <p className="all">All</p>
            <div className="select-container" style={customStyles.wame }>
        
      <Select
        options={options}
        styles={customStyles(props.selectedCurrency)}
        placeholder= {place}
        isSearchable={false}
        // components={{ DropdownIndicator }}
      />
    </div>
    </div>

    </div>
  
    


  );
};

export default EditableCurrencyOptAll;
