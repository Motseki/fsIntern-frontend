// import React from 'react'
// import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Auth_content from './Auth_content.js'
// import BankOpt from './BankOpt.js';
// import BankTransferOpt from './BankTransferOpt.js';
// import CryptoWalletOpt from './CryptoWalletOpt.js';
// import upload_img from './images/upload.svg';
// import RegularNoIconDrp from './RegularNoIconDrp.js';




// function WalletPaymentMethod({ display, onclick, backclick }){
//   return (
//     <form action="" className="frm Idi" style={{display: display,}}>
//     <p className="t1">Payment method</p>
//     <p className="t2">How do you intend paying into your wallet?</p>

//     <div className="qs">

//       <span className="spq">
//         <span className="sp sp2">
//           <label htmlFor="fname">Method of payment</label>
//           <span className="els">
//               <span className="el">

//                   <input type="radio" id='el2' name="el" value="1" />
//                   <label htmlFor="el2">Fiat</label>
//               </span>
//               <span className="el">
//                   <input type="radio" id="el" name="el" value="2" />
//                   <label htmlFor="el">Credit</label>
//               </span>
//           </span>
//         </span>
//       </span>



//     <span className="qs fiat_div">

//       <span className="spq">
//         <span className="sp sp2 spC">
//           <label htmlFor="fname">Select type</label>
//           <div className="box">
//           <BankTransferOpt   />
//           </div>
//         </span>
//       </span>

//       <span className="spq">
//         <div className="line"></div>
//       </span>

//       <span className="spq">
//         <span className="sp sp2 spC">
//           <label htmlFor="fname">Bank</label>
//           <div className="box">
//           <BankOpt   />
//           </div>
//         </span>
//       </span>

//     </span>



//     <span className="qs crypto_div">

//       <span className="spq">
//         <span className="sp sp2 spC">
//           <label htmlFor="fname">Network</label>
//           <div className="box">
//           <CryptoWalletOpt   />
//           </div>
//         </span>
//       </span>

//     </span>



//       <span className="spq">
//         <div className="links">
//           <button onClick={backclick} className="a a1">Back</button>
//           <button onClick={onclick} type="submit" className="a a2">Save & continue</button>
//         </div>
//       </span>


//     </div>
//   </form>
//   )
// }

// export default WalletPaymentMethod


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Auth_content from './Auth_content.js';
import BankOpt from './BankOpt.js';
import BankTransferOpt from './BankTransferOpt.js';
import CryptoWalletOpt from './CryptoWalletOpt.js';
import upload_img from './images/upload.svg';
import RegularNoIconDrp from './RegularNoIconDrp.js';

function WalletPaymentMethod({ display, onclick, backclick }) {
  const [paymentMethod, setPaymentMethod] = useState('fiat');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <form action="" className="frm Idi" style={{ display }}>
      <p className="t1">Payment method</p>
      <p className="t2">How do you intend paying into your wallet?</p>

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
            <span className="spq">
              <span className="sp sp2 spC">
                <label htmlFor="fname">Select type</label>
                <div className="box">
                  <BankTransferOpt />
                </div>
              </span>
            </span>

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
          </span>
        )}

        {paymentMethod === 'crypto' && (
          <span className="qs crypto_div">
            <span className="spq">
              <span className="sp sp2 spC">
                <label htmlFor="fname">Network</label>
                <div className="box">
                  <CryptoWalletOpt />
                </div>
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
              Save & continue
            </button>
          </div>
        </span>
      </div>
    </form>
  );
}

export default WalletPaymentMethod;
