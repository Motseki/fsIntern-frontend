import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import AuthDataContext from '../Contexts/AuthDataContext';
import axios from 'axios';

import BankSelectModal from './BankSelectModal';

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
    height: '55px',
    // margin: '0',
    '&:hover': {
        border: 'solid 1px #c0c1c4', // remove border on hover
      },
      '@media (max-width: 700px)': {
        width: '100%', // Reduce the width for smaller screens
        paddingLeft: '8px', // Adjust padding for smaller screens
        paddingRight: '8px',
          height: '45px',
          borderRadius: '10px',

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
    paddingLeft: '10px',

  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    // display: 'none', 
    // remove the vertical line between the select and dropdown icon
  }),
};

const IdtypeOpt = (props) => {
  const { contextData } = useContext(AuthDataContext);
  const accessKey = contextData.accessKey;
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define your API endpoint URL
    const apiUrl = 'https://finstack-production.herokuapp.com/users/id-types/';

    // Create an instance of axios with the Authorization header
    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${accessKey}`,
        'Content-Type': 'application/json',
      },
    });

    // Make the HTTP request to the API using axios
    axiosInstance
      .get(apiUrl)
      .then((response) => {
        if (response.data.status === true) {
          const IdtypeOptions = response.data.data.map((bankName) => ({
            value: bankName, // Use the bank name as both the value and label
            label: bankName,
          }));

          setOptions(IdtypeOptions);
          setIsLoading(false);
        } else {
          console.log('API error:', response.data.message);

          console.error('API error:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching bank options:', error);
      });
  }, [accessKey]);

  // const handleIdtypeOptChange = (selectedOption) => {
  //   if (props.onBankSelect) {
  //     props.onBankSelect(selectedOption.value);
  //   }
  // };

  const handleIdtypeOptChange = (selectedOption) => {
    if (props.onBankSelect) {
      props.onBankSelect(selectedOption.value);
    }

    // Check if the selected option is "Other Bank" and call the onOtherBankSelect function
    if (selectedOption.value === props.bankNameInput) {
      props.onOtherBankSelect();
    }
  };

  const otherIdtypeOption = {
    value: '', // Use the value from the prop
    label: 'Loading...',
  };

  const combinedOptions = [...options, otherIdtypeOption];
  
  console.log('your bankname', props.bankNameInput)

  return (
    <div className="select-">
      <Select
        options={combinedOptions}
        styles={customStyles}
        placeholder="Select ID type"
        // isSearchable={false}
        onChange={handleIdtypeOptChange}

      />
      
    </div>
  );
};

export default IdtypeOpt;