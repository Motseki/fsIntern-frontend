import React from 'react';
import Select from 'react-select';
import ad_img from './images/ad.svg'
import './ImgNCurrencySelect.css'
import icon_img1 from './images/Frame.svg'
import icon_img2 from './images/Frame (1).svg'
import icon_img3 from './images/Vector.svg'
import icon_img4 from './images/Vector (1).svg'
import usa_img from './images/country_image (1).svg'
import uk_img from './images/country_image (2).svg'
import eth_img from './images/country_image (4).svg'
import usdt_img from './images/country_image (5).svg'
import ngn_img from './images/country_image (6).svg'
import ghn_img from './images/country_image (7).svg'

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
      '@media (max-width: 700px)': {
        width: '100%', // Reduce the width for smaller screens
        paddingLeft: '5px', // Adjust padding for smaller screens
        paddingRight: '8px',
          height: '60px',
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


const options = [
    { value: 'NGN', label: <div className='imgs_div'><div className="im"><img src={ngn_img} /></div>Naira <p className='p2'>NGN</p> </div>  },
    { value: 'USD', label: <div className='imgs_div'><img src={usa_img} />Dollar <p className='p2'>USD</p> </div>  },
    { value: 'ETH', label: <div className='imgs_div'><img src={eth_img} />Ethereum <p className='p2'>ETH</p> </div> },
    { value: 'GBP', label: <div className='imgs_div'><img src={uk_img} />Pound <p className='p2'>GBP</p> </div> },
    { value: 'GHC', label: <div className='imgs_div'><img src={ghn_img} />Cedi <p className='p2'>GHC</p> </div> },
    { value: 'USDT', label:<div className='imgs_div'><div className="im"><img src={usdt_img} alt='' /></div>USDT <p className='p2'>USDT</p> </div>  },
    { value: 'EUR', label: 'EUR' },
  ];
  

// options[0].label = {place};

const place = options[0].label

const ImgNCurrencySelect = (props) => {
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


export default ImgNCurrencySelect;