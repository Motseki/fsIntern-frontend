import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content.js'
import upload_img from './images/upload.svg';
import Calc_Bd from './Calc_Bd.js';
import CurrencyCalculator from './CurrencyCalculator.js';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Landing_nav from './Landing_nav';
import Sidenav from './Sidenav';
import Select from './Select';
import arrow_img from './images/two-arrow.png'
import ImgNCurrency from './ImgNCurrency';
import './CurrencyCalculator.css'
import { Email } from '@material-ui/icons';
import TradeContexts from '../Contexts/TradeContexts';
import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';

function CalcAmount({ display, onclick, backclick }){
  const [amount, setAmount] = useState(""); // State to hold the input amount
  const [fromcurrency, setfromcurrency] = useState(''); // State to hold selected currency
  const [tocurrency, settocurrency] = useState(''); // State to hold selected currency
  const [public_id, setPublic_id] = useState(''); // State to hold selected currency
  const [rate, setRate] = useState(''); // State to hold selected currency

  const [conversionResult, setConversionResult] = useState('');
  const { updateTradeContextData } = useContext(TradeContexts);
  const { updateCurrencyCalcData } = useContext(CurrencyCalcContext);
  const [isConversionComplete, setIsConversionComplete] = useState(false);




  const handleConversion = async (e) => {
    e.preventDefault();
  
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
      setPublic_id(responseData.data.public_id);
      setRate(responseData.data.rate);

      // setConversionResult(responseData.data.value);

      // setConversionResult(responseData.data.rate);


      console.log('');
  
      console.log('Conversion successful:', responseData.message);

      // console.log('Conversion value:', responseData.data.value);
      // console.log('Conversion rate:', responseData.data.rate);
      // console.log('Conversion rate:', responseData.data.reverse_rate);

      const currency_calc_fromcurrency = responseData.data.from_currency
      const currency_calc_tocurrency = responseData.data.to_currency
      const currency_calc_amount = amount
      const currency_calc_public_id = responseData.data.public_id
      const currency_calc_rate = responseData.data.rate



      updateCurrencyCalcData({ currency_calc_fromcurrency, currency_calc_tocurrency, currency_calc_amount, currency_calc_public_id, currency_calc_rate });
  
      setIsConversionComplete(true)
      console.log('Conversion value:', responseData.data.value);
      console.log('Conversion from_currency:', responseData.data.from_currency);
      console.log('Conversion public_id:', responseData.data.public_id);
      console.log('Conversion rate:', responseData.data.rate);



      console.log('currency_calc_fromcurrency:', currency_calc_fromcurrency);
      console.log('currency_calc_tocurrency:', currency_calc_tocurrency);
      console.log('currency_calc_amount:', currency_calc_amount);
      console.log('currency_calc_public_id:', currency_calc_public_id);
      console.log('currency_calc_rate:', currency_calc_rate);

      console.log('Conversion RESUUKLT:', responseData.data);


      // onclick();
  
    } catch (error) {
      setIsConversionComplete(false)

      console.error('Error converting currency:', error.response.data);
    }
  };
  
  

  const moveAhead = async (e) => {
    e.preventDefault();

    if (isConversionComplete) {
      onclick();
  }
  };


  console.log(amount)
  console.log('Conversion from currency:', fromcurrency)
  console.log('Conversion to currency:', tocurrency)
  console.log(conversionResult)


  const handleCurrencySelection = (selectedValue) => {
    setfromcurrency(selectedValue);
  };

  const handleCurrencySelection2 = (selectedValue) => {
    settocurrency(selectedValue);
  };

  const handleAmountChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatNumberWithCommas(rawValue);
    setAmount(formattedValue);
    // handleConversion();
  };

  const formatNumberWithCommas = (value) => {
    // Remove existing commas and non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');
    
    // Use Number.toLocaleString() to add commas
    const formattedValue = Number(numericValue).toLocaleString();

    return formattedValue;
  };



  return (
    <form action="" className="frm Idi" style={{display: display, all: 'none',}} >
    <p className="t1">Review Amount</p>
    <p className="t2">Enter your personal details as required below</p>

    <div className="qs">

        <span className="spq">
            <span className="sp sp2">
                {/* <CurrencyCalculator display={'none'} buttonStyles={buttonStyles} /> */}
                <form action="" className='calculatorform' onSubmit={handleConversion}  >
              <div className='spc'>
                  <div className='spc1'>
                    <p className='txt'>I want to convert</p>
                    <input
          type={'text'} 
          placeholder="1,000"
          className='input'
          value={amount}
          onChange={handleAmountChange} 
          onChangeCapture={handleConversion}
        />
                  </div>
                  <div className='spc1'>
                    <p className='txt'>Currency</p>
                    <div className="bx" onMouseOver={handleConversion}>
                    <ImgNCurrency onCurrencySelect={handleCurrencySelection} />
                    </div>
                    
                  </div>
              </div>
              <span className='icon'>
                <span className='line'></span>
                <img src={arrow_img} alt='wae' className='arrow_img' />
              </span>
              <div className='spc'>
                  <span className='spc1'>
                    <p className='txt'>To</p>
                    <input type={'number'} placeholder={conversionResult} 
                    className='input' 
                    value={conversionResult}
                    // onChange={handleAmountChange} 
                    // onChangeCapture={handleConversion}
                    ></input>
                  </span>
                  <span className='spc1'>
                    <p className='txt'>Currency</p>
                    <div className="bx" onKeyUp={handleConversion} onMouseOver={handleConversion}>
                      <ImgNCurrency onCurrencySelect={handleCurrencySelection2} />
                    </div>
                  </span>
              </div>
              {/* <p className='conv'>1 BTC = 16582.3 USD</p> */}
              {/* {conversionResult && <p className='conv'>1 BTC = {conversionResult} USD</p>} */}
              <p className='conv'>{amount} {fromcurrency} = {conversionResult} {tocurrency}</p>

             
            </form>
            </span>
        </span>

      <span className="spq">
        <div className="links">
          <button onClick={backclick} className="a a1">Back</button>
          <button onClick={moveAhead} type="submit" className="a a2">Proceed</button>
        </div>
      </span>


    </div>
  </form>
  )
}

export default CalcAmount