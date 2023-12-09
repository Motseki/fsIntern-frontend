import React, { useRef, useContext, useEffect, useState, } from 'react';

import './Auth_content.css'

import Sidenav from './Sidenav';
import {BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import Pid from './Pid.js';
import Idi from './Idi.js';
import BAS_prev from './BAS_prev';
// import Close_auth from './Close_auth';
import Close_auth from './Close_auth';
import Seller_details_success from './Seller_details_success';
import Auth_nav from './Auth_nav'
import Calc_Bd from './Calc_Bd'
import CalcIdAuth from './CalcIdAuth';
import CalcAmount from './CalcAmount';
import CalcTransferDetails from './CalcTransferDetails';
import Receiving_account_auth from './Receiving_account_auth';
import Originating_account_auth from './Originating_account_auth';
import EscrowDataContext from '../Contexts/EscrowDataContext';
import AuthDataContext from '../Contexts/AuthDataContext';

import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';
import { useNavigate } from 'react-router-dom';
import ProcessingAnimation from './ProcessingAnimation';
import axios from 'axios'; // Import Axios

function CalcPaymentConfirmation({ display, onclick, backclick }) {
  const navigate = useNavigate();
  const { currencyCalcData } = useContext(CurrencyCalcContext);
  // const { escrowData } = useContext(EscrowDataContext);
  const [tradeData, setTradeData] = useState(null);
  const { escrowData } = useContext(EscrowDataContext);

  const {contextData } = useContext(AuthDataContext);
  const accessKey  = contextData.accessKey;
 const { trade } = useParams();
 const { updateEscrowData } = useContext(EscrowDataContext);
  













  return (
    <body>
            <header>
        <Auth_nav />
    </header>
    

    {/* </body> */}
    <div className="cont">
        <main className="Aumain">
        <section className='section'>

        {/* </section> */}

    <div className="cnt">
        <div className="fl1">


      <CalcTransferDetails />


    </div>
    </div>
    </section>

    </main>
    </div>
    </body>
  );
}

export default CalcPaymentConfirmation;
