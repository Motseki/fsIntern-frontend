import React from 'react';
import Select from 'react-select';


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'solid #DCDEE5 1px', // remove border
    boxShadow: 'none', // remove box shadow
    fontWeight: 600,
    width: '100%', // set the width to 100%
    cursor: 'pointer',
    borderRadius: '30px',
    paddingRight: '20px',
    paddingLeft: '20px',
    height: '50px',
    // margin: '0',
    '&:hover': {
        border: 'solid 1px #c0c1c4', // remove border on hover
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
    fontWeight: 'bold', // set font weight to bold
    // width: 'fit-content', 
    whiteSpace: 'nowrap', // prevent text from wrapping
    paddingRight: '45px', // make room for the dropdown indicator
    fontSize: '14px', // set the default font size


  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: '#373D4A', // set placeholder color to black
    fontWeight: '400', 
    paddingRight: '13px',
    fontSize: '14px',
    '@media (max-width: 700px)': {
    fontSize: '13px',

    },
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


// options[0].label = {place};

// const place = props.options[0].label

const RegularNoIconDrp = (props) => {
  return (
    <div className="select-container">

    <Select
      options={props.options}
      styles={customStyles}
      placeholder= {props.placeholder}
      isSearchable={false}
    />

    </div>
  );
};


export default RegularNoIconDrp;