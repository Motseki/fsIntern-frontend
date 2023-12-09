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

function EscrowProcessingPage({ display }){

  const navigate = useNavigate();
  const { currencyCalcData } = useContext(CurrencyCalcContext);
  const { escrowData } = useContext(EscrowDataContext);
  const [tradeData, setTradeData] = useState(null);

  const {contextData } = useContext(AuthDataContext);
  const accessKey  = contextData.accessKey;
  const [status, setStatus] = useState('');

  // Define a function to render the currency symbol based on the escrowData.currency
  function renderCurrencySymbol() {
    switch (escrowData.escrow_currency) {
      case 'NGN':
        return '₦';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'THE':
        return '₮'; // Replace with the actual symbol for 'THE'
      default:
        return ''; // Default to an empty string if currency is not recognized
    }
  }

  const handleTradeConfirmation = async (e) => {
    e.preventDefault();
   

    try {
      const response = await axios.patch(
        `https://finstack-production.herokuapp.com/trades/${escrowData.escrow_tradeId}`,
        {
          "status": "Completed",
        },
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Response:', response);
      navigate('/CalcSuccessRate');


    } catch (error) {
      // Handle any errors that occurred during the patch request.
      // console.error('Error updating trade status:', error);
      console.log('Response:', error);

    }
  };

  return (
    <body>
        <header>
            <Auth_nav />
        </header>
        <Close_auth />
        <main className='Aumain'>
            <section className='section'>
                <div className="cnt">
                    <div className="fl1">
                            <div className="success">
                                {/* <img src={ ProcessingAnimation } alt="" className='gif'/> */}
                                <ProcessingAnimation text='Please wait while we confirm and process your payment...' />

                                {/* <ProcessingAnimation text='Processing, please wait ...' /> */}
                                {/* <p className="p1">You’ve been credited {renderCurrencySymbol()} {escrowData.escrow_expected_payment}</p> */}
                                {/* <p className="p2">Please confirm the credit transaction</p> */}
                                {/* <p onClick={handleTradeConfirmation} className='a a1'>Yes, I have received {renderCurrencySymbol()} {escrowData.escrow_expected_payment}</p> */}
                                {/* <p className="p2">Didn't get the credit ?</p> */}

                                {/* <Link  className='a at3'>Reach out to our customer support</Link> */}

                            </div>
                    </div>
                    <p className="cl"  onClick={openCloseModal}><i className="fa-solid fa-x"></i> Close</p>
                </div>
            </section>
        </main>
        
    </body>
  )
}

export default EscrowProcessingPage