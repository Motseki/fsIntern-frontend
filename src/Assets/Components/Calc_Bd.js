import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Account_info_crd from './Account_info_crd.js';
import Auth_content from './Auth_content.js';
import BankOpt from './BankOpt.js';
import BankTransferOpt from './BankTransferOpt.js';
import CryptoWalletOpt from './CryptoWalletOpt.js';
import upload_img from './images/upload.svg';
import RegularNoIconDrp from './RegularNoIconDrp.js';
import ad_img from './images/ad.svg'
import tran_img from './images/transaction.svg'
import wallet_img from './images/wallet.svg'
import bank1 from './images/bank1.svg'
import bank2 from './images/bank2.svg'
import MaskedParagraph from './MaskedParagraph';
import AddNew from './AddNew';
import usd_img from './images/country_image (1).svg'
import gbp_img from './images/country_image (2).svg'
import eth_img from './images/country_image (4).svg'
import usdt_img from './images/country_image (5).svg'
import ngn_img from './images/country_image (6).svg'
import ghn_img from './images/country_image (7).svg'
import btc_img from './images/btc_img.svg'
import ltc_img from './images/ltc_img.svg'
import bnb_img from './images/bnb_img.svg'
import BankDrp from './BankDrp.js';

function Calc_Bd({ display, onclick, backclick }) {
  const [paymentMethod, setPaymentMethod] = useState('fiat');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <form action="" className="frm Idi" style={{ display }}>
      <p className="t1">Originating account</p>
      <p className="t2">Where are you sending from?</p>

      <div className="qs">
        <span className="spq">
          <span className="sp sp2">
            <label htmlFor="fname">Method of payment</label>
            <span className="els">
              <span className="el">
                <input
                  type="radio"
                  id="el2"
                  name="el"
                  value="fiat"
                  checked={paymentMethod === 'fiat'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="el2">Fiat</label>
              </span>
              <span className="el">
                <input
                  type="radio"
                  id="el"
                  name="el"
                  value="crypto"
                  checked={paymentMethod === 'crypto'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="el">Crypto</label>
              </span>
            </span>
          </span>
        </span>

        {paymentMethod === 'fiat' && (
        <span className="qs fiat_div">    
            {/* <span className="spq">
              <span className="sp sp2 spC">
                <label htmlFor="fname">Select type</label>
                <div className="box">
                  <BankTransferOpt />
                </div>
              </span>
            </span> */}

            <span className="spq">
              <div className="line"></div>
            </span>

            <span className="spq">
              <span className="sp sp2 spC">
                <label htmlFor="fname">Bank</label>
                <div className="box">
                  <BankOpt />
                </div>
              </span>
            </span>

        <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Account number</label>
              <input type="text" name="fname" id="" placeholder="Account number"/>
            </span>
        </span>

        <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Account holder’s name</label>
              <input type="text" name="fname" id="" placeholder="Maverick Owen" className='uneditable_input '/>
            </span>
         </span>



        </span> 


       

        
        )}

        {paymentMethod === 'crypto' && (
        <span className="qs crypto_div">     
            <span className="spq">
              <span className="sp sp2">
                <label htmlFor="fname">Network</label>
                <div className="box">
                  <CryptoWalletOpt />
                </div> 
                </span>
            </span>

            <span className="spq">
              <span className="sp sp2">
                <label htmlFor="fname">Wallet address</label>
                <input type="text" name="fname" id="" placeholder="Wallet address"/>
              </span>
            </span>

            <span className="spq">
                <span className="sp sp2">
                  <label htmlFor="fname">Wallet holder’s name</label>
                  <input type="text" name="fname" id="" placeholder="Maverick Owen" className='uneditable_input '/>
                </span>
             </span>



        </span> 
        
        )}

       






        <span className="spq">
          <div className="links">
            <button onClick={backclick} className="a a1">
              Back
            </button>
            <button onClick={onclick} type="submit" className="a a2">
              Save & Continue
            </button>
          </div>
        </span>
      </div>
    </form>
  );
}

export default Calc_Bd;
