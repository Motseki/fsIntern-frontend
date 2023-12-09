import React, { useRef, useContext, useEffect, useState } from 'react';
import EscrowDataContext from '../Contexts/EscrowDataContext';
import AuthDataContext from '../Contexts/AuthDataContext';
import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';


import { Link, useNavigate } from 'react-router-dom';
import ProcessingAnimation from './ProcessingAnimation';
import axios from 'axios'; // Import Axios


import {BrowserRouter, Routes, Route } from "react-router-dom";
import Auth_content from './Auth_content.js'
import upload_img from './images/upload.svg';
import bk_img1 from './images/blg_img.svg'
import Profp from './Profp.js';
import Profp_img from './Profp_img.js';
import prof_img from './images/file_img.svg'
// import Auth_content from './Auth_content'
import Auth_nav from './Auth_nav'
import Close_auth from './Close_auth';
import suc_img from './images/sel_details.svg'
import success from './images/success.Gif';
import happyGif from './images/happy.gif';

import './Auth_content.css'


import TransferDataContext from '../Contexts/TransferDataContext';

import TradeDataContexts from '../Contexts/TradeDataContexts';


function sidebarOpen(){
    document.getElementById('sidebar').style.top = 0;
    document.getElementById('i').style.display = 'none';
    document.getElementById('x').setAttribute('style', 'display:block !important');
  }
  
  function openCloseModal(){
    document.getElementById('close_auth').style.display = 'flex';
  }
  
  function closeCloseModal(){
    document.getElementById('close_auth').style.display = 'none';
  }

function CalcAuthSuccess({ display }){

  const navigate = useNavigate();
  const { currencyCalcData } = useContext(CurrencyCalcContext);
  const { escrowData } = useContext(EscrowDataContext);
  const [tradeData, setTradeData] = useState(null);

  const {contextData } = useContext(AuthDataContext);
  const accessKey  = contextData.accessKey;
  const [status, setStatus] = useState('');


  const { transferData } = useContext(TransferDataContext);


  const { updateTransferData } = useContext(TransferDataContext);

  const { updateEscrowData } = useContext(EscrowDataContext);

  const { trade_Data } = useContext(TradeDataContexts);

  const [rating, setRating] = useState(0);


  const handleClick = (value) => {
    setRating(value);
    // Call handleTradeConfirmation when the rating is clicked
    handleTradeConfirmation(value);
  };

  const handleTradeConfirmation = async (ratingValue) => {
    // e.preventDefault();
  
    try {
      const response = await axios.patch(
        `https://finstack-production.herokuapp.com/trades/${trade_Data.trade_public_id}/`, // Note the trailing slash
        {
          rating: ratingValue,
        },
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Response:', response.data);
      navigate('/wallet_index');
    } catch (error) {
      console.error('Error updating rating status:', error);
      if (error.response) {
        console.log('Response:', error.response.data);
      }
    }
  };
  
  return (
    <div className='star-rating'>
    {[...Array(5)].map((_, index) => {
      const ratingValue = index + 1;
      return (
        <label key={index}>
          <input
            type="radio"
            name="rating"
            value={ratingValue}
            onClick={() => handleClick(ratingValue)}
          />
          <i
            className="material-icons"
            style={{ color: ratingValue <= rating ? 'gold' : 'grey' }}
          >
            star
          </i>
        </label>
      );
    })}
  </div>
  )
}

export default CalcAuthSuccess