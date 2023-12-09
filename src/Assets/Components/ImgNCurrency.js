import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import ad_img from './images/ad.svg'
import './ImgNCurrencySelect.css'
import './ImgNCurrency.css'

import icon_img1 from './images/Frame.svg'
import icon_img2 from './images/Frame (1).svg'
import icon_img3 from './images/Vector.svg'
import icon_img4 from './images/Vector (1).svg'
import usd_img from './images/country_image (1).svg'
import uk_img from './images/country_image (2).svg'
import eth_img from './images/country_image (4).svg'
import usdt_img from './images/country_image (5).svg'
import ngn_img from './images/country_image (6).svg'
import ghn_img from './images/country_image (7).svg'
import gbp_img from './images/country_image (2).svg'
import btc_img from './images/btc_img.svg'
import ltc_img from './images/ltc_img.svg'
import bnb_img from './images/bnb_img.svg'


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'solid #DCDEE5 1px', // remove border
    boxShadow: 'none', // remove box shadow
    fontWeight: 600,
    width: '100%',
    cursor: 'pointer',
    borderRadius: '30px',
    paddingRight: '20px',
    paddingLeft: '8px',
    // fontSize: '20px',

    height: '60px',
    // margin: '0',
    '&:hover': {
        border: 'solid 1px #c0c1c4', // remove border on hover
      },
      '@media (max-width: 600px)': {
        width: '100%', // Reduce the width for smaller screens
        paddingLeft: '3px', // Adjust padding for smaller screens
        paddingRight: '5px',
          height: '46px',
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
    fontWeight: '700', 
    paddingRight: '13px',
    fontSize: '16px',
    '@media (max-width: 700px)': {
    fontSize: '13px',

    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#373D4A', // change color of dropdown icon
    padding: 0, // remove padding around the dropdown icon
    paddingRight: '10px',

  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none', // remove the vertical line between the select and dropdown icon
  }),
};


const mapCurrencyToImage = (currency) => {
  switch (currency) {
    case 'NGN':
      return { img: ngn_img, label: 'NGN' };
    case 'USD':
      return { img: usd_img, label: 'USD' };
    case 'ETH':
      return { img: eth_img, label: 'ETH' };
    case 'GBP':
      return { img: uk_img, label: 'GBP' };
    case 'GHC':
      return { img: ghn_img, label: 'GHC' };
    case 'USDT':
      return { img: usdt_img, label: 'USDT' };
    case 'BTC':
      return { img: btc_img, label: 'BTC' };
    case 'LTC':
      return { img: ltc_img, label: 'LTC' };
    default:
      return { img: '', label: currency };
  }
};

const ImgNCurrency = (props) => {

  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    async function fetchCurrencyOptions() {
      try {
        const response = await axios.get('https://finstack-production.herokuapp.com/trades/currencies/');
        // Assuming the response contains an array of currency options
        if (response.data && Array.isArray(response.data.data)) {
          setCurrencyOptions(response.data.data);
        } 
      } catch (error) {
        console.error('Error fetching currency options:', error);
      }
    }

    fetchCurrencyOptions();
  }, []);

  const options = [
    { value: 'NGN', label: <div className='imgs_div2'> <p className='p1'>CURRENCY</p> </div>  },
    { value: 'USD', label: <div className='imgs_div2'><img src={usd_img} /> <p className='p1'>USD</p> </div>  },
    { value: 'ETH', label: <div className='imgs_div2'><img src={eth_img} /> <p className='p1'>ETH</p> </div> },
    { value: 'GBP', label: <div className='imgs_div2'><img src={uk_img} /> <p className='p1'>GBP</p> </div> },
    { value: 'GHC', label: <div className='imgs_div2'><img src={ghn_img} /> <p className='p1'>GHC</p> </div> },
    { value: 'USDT', label:<div className='imgs_div2'><div className="im"><img src={usdt_img} alt='' /></div> <p>USDT</p> </div>  },
    { value: 'EUR', label: 'EUR' },
  ];


  // {currencyOptions.map(currency => ({ value: currency, label: currency }))} 
  const handleCurrencyChange = (selectedOption) => {
    if (props.onCurrencySelect) {
      props.onCurrencySelect(selectedOption.value);
    }
  };

  const placeholderCurrency = currencyOptions[0] || ''; // Default to empty string if currencyOptions is empty



const place = options[0].label
const defaultCurrency = 'NGN'; // Set default currency code to NGN
const placeholderImage = mapCurrencyToImage(defaultCurrency).img;
const placeholderLabel = mapCurrencyToImage(defaultCurrency).label;

return (
  <div className="select-container">
  <Select
    options={currencyOptions.map(currency =>
      ({ value: currency, label: <div className='imgs_div2'><img src={mapCurrencyToImage(currency).img} alt='' /> <p className='p1'>{mapCurrencyToImage(currency).label}</p> </div> })
    )}
    styles={customStyles}
    defaultValue={{ value: props.defaultCurrency, label: <div className='imgs_div2'><img src={mapCurrencyToImage(props.defaultCurrency).img} alt='' /> <p className='p1'>{mapCurrencyToImage(props.defaultCurrency).label}</p> </div> }}
    isSearchable={false}
    onChange={handleCurrencyChange}
  />
</div>
);
};

export default ImgNCurrency;



