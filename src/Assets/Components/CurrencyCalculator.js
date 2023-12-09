import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Landing_nav from './Landing_nav';
import Sidenav from './Sidenav';
import Select from './Select';
import arrow_img from './images/two-arrow.png'
import icon_img1 from './images/Frame.svg'
import icon_img2 from './images/Frame (1).svg'
import icon_img3 from './images/Vector.svg'
import icon_img4 from './images/Vector (1).svg'
import usd_img from './images/country_image (1).svg'
import gbp_img from './images/country_image (2).svg'
import eth_img from './images/country_image (4).svg'
import usdt_img from './images/country_image (5).svg'
import ngn_img from './images/country_image (6).svg'
import ghn_img from './images/country_image (7).svg'
import btc_img from './images/btc_img.svg'
import ltc_img from './images/ltc_img.svg'
import bnb_img from './images/bnb_img.svg'
import bag_icon1 from './images/Group(3).svg'
import bag_icon2 from './images/Group.svg'
import bag_icon3 from './images/Group (1).svg'
import bk_img1 from './images/blg_img.svg'
import bk_img2 from './images/blg_img2.svg'
import bk_img3 from './images/blg_img3.svg'
import big_logo from './images/big_logo.svg'
import Foot from './Foot';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dropdowns from './CurrencyDrp';
import Test from './Test';
import CustomSelect from './CustomSelect';
import ImgNCurrencySelect from './ImgNCurrencySelect';
import ImgNCurrency from './ImgNCurrency';
import './CurrencyCalculator.css'
import { Email } from '@material-ui/icons';
import TradeContexts from '../Contexts/TradeContexts';
import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';

const CurrencyCalculator = ({ buttonStyles }) => {
  const [amount, setAmount] = useState("100"); // Updated state initialization
  const [fromcurrency, setfromcurrency] = useState('USD'); // State to hold selected currency
  const [tocurrency, settocurrency] = useState('NGN'); // State to hold selected currency
  const [public_id, setPublic_id] = useState(''); // State to hold selected currency
  const [rate, setRate] = useState(''); // State to hold selected currency

  const [conversionResult, setConversionResult] = useState('');
  const { updateTradeContextData } = useContext(TradeContexts);
  const { updateCurrencyCalcData } = useContext(CurrencyCalcContext);

  const [editingFirstInput, setEditingFirstInput] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);



  useEffect(() => {
    if (fromcurrency && tocurrency && amount !== '') {
      handleConversion();
    }
  }, [fromcurrency, tocurrency, amount]);

  const handleConversion = async () => {
    try {
      const response = await axios.post(
        'https://finstack-production.herokuapp.com/trades/converter/',
        {
          from_currency: fromcurrency,
          to_currency: tocurrency,
          amount: amount,
        },
        {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': 'your_csrf_token_here', // Replace with actual CSRF token
          },
        },
      );

      const responseData = response.data;

      if (response.status !== 200) {
        console.error('API response error:', response.status, response.data.value, responseData);
        throw new Error('Error converting currency');
      }

      setConversionResult(responseData.data.value);

    } catch (error) {
      console.error('Error converting currency:', error.response.data);
    }
  };


  console.log(amount)
  console.log('Conversion from currency:', fromcurrency)
  console.log('Conversion to currency:', tocurrency)
  console.log(conversionResult)



  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setEditingFirstInput(true); // Indicates that the first input is being edited
  };

  const handleConversionResultChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setEditingFirstInput(false); // Indicates that the second input is being edited
  };

  const handleCurrencySelection = (selectedValue) => {
    setfromcurrency(selectedValue);
  };

  const handleCurrencySelection2 = (selectedValue) => {
    settocurrency(selectedValue);
  };



  const handleRotationClick = () => {
    setIsSwapped(!isSwapped);
  };


  return (
     <form action="" className='calculatorform'>
      <div className='spc'>
        <div className='spc1'>
          <p className='txt'>I want to convert</p>
          <input
            type='number'
            className='input'
            value={!editingFirstInput ? amount : conversionResult}
            onChange={handleConversionResultChange}
          />

        </div>
        <div className='spc1'>
          <p className='txt'>Currency</p>
          <div className="bx">
            {/* <ImgNCurrency onCurrencySelect={handleCurrencySelection} defaultCurrency={fromcurrency} /> */}
            <ImgNCurrency
              onCurrencySelect={!isSwapped ? handleCurrencySelection : handleCurrencySelection2}
              defaultCurrency={!isSwapped ? fromcurrency : tocurrency}
            />
          </div>
        </div>
      </div>


      <span className={`icon ${isSwapped ? 'rotate' : ''}`} onClick={handleRotationClick}>
        <span className='line'></span>
        <img src={arrow_img} alt='wae' className='arrow_img' />
      </span>


      <div className='spc'>
        <span className='spc1'>
          <p className='txt'>To</p>

          <input
            type='text'
            className='input' 
            value={editingFirstInput ? amount : conversionResult}
            onChange={handleAmountChange}
          />

        </span>
        <span className='spc1'>
          <p className='txt'>Currency</p>
          <div className="bx">
            {/* <ImgNCurrency onCurrencySelect={handleCurrencySelection2} defaultCurrency={tocurrency} /> */}
            <ImgNCurrency
              onCurrencySelect={!isSwapped ? handleCurrencySelection2 : handleCurrencySelection}
              defaultCurrency={!isSwapped ? tocurrency : fromcurrency}
            />
          </div>
        </span>
      </div>
      <p className='conv' onClick={handleConversion} >{amount} {fromcurrency} = {conversionResult} {tocurrency}</p>
    </form>
  )
}

export default CurrencyCalculator;
