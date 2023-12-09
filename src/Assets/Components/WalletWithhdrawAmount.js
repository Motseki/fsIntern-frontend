import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Auth_content from './Auth_content.js'
import EditableCurrencyOpt from './EditableCurrencyOpt.js';
import EditableCurrencyOptAll from './EditableCurrencyOptAll.js';
import ProcessingAnimation from './ProcessingAnimation.js';


function WalletWithhdrawAmount({ display, onclick, backclick, handleLinkClick }){
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // function handleLinkClick(event) {
  //   event.preventDefault();
  //   const spqElements = document.querySelectorAll('.spq');
  //   spqElements.forEach((element) => {
  //     element.style.display = 'none';
  //   });
  //   const spyElement = document.querySelector('.spy');
  //   spyElement.style.display = 'flex';
  //   setTimeout(() => {
  //   navigate('/WalletDepositAuth_success');

  //   }, 3000);
  // }

  function copyAccountNumber() {
    const accountNumberElement = document.querySelector('.tx2');
    navigator.clipboard
      .writeText(accountNumberElement.textContent)
      .then(() => {
        console.log('Account number copied successfully');
      })
      .catch((err) => {
        console.error('Failed to copy account number: ', err);
      });
  }
  return (
    <form action="" className="frm Idi" >
    <p className="t1">Enter Amount</p>
    <p className="t2">Enter amount to withdraw</p>

    <div className="qs">
      <span className="spq">
        <span className="sp sp2 ">
          <label htmlFor="fname">Amount to deposit</label>
            <EditableCurrencyOptAll />

          <label htmlFor="fname">Available bal: <p className="amt">$1,500.00</p></label>
            <div className="tr_div">
              <div className="tt">
                <p className="p1">Amount to deposit</p>
                <p className="p2">₦1,500.0</p>
              </div>
              <div className="tt">
                <p className="p1">Transaction method</p>
                <p className="p2">Bank transfer <p className="ch" onClick={backclick}>Change</p></p>
              </div>
              <div className="tt">
                <p className="p1">Transaction fee</p>
                <p className="p2">₦00.0</p>
              </div>
              <div className="tt">
                <p className="p1">Actual payment 
                  <span className="info">
                      {showModal && (
                        <div className="modal"> <p>This is the equivalent amount you will be getting</p>  </div>
                     )} 
                    <i className="material-symbols-outlined" onMouseEnter={() => setShowModal(true)} onMouseLeave={() => setShowModal(false)}>info</i>
                      
                  </span>
                </p>
                <p className="p2">₦1,500.0</p>
              </div>
            </div>
        </span>
      </span>


        <span className="spq">
          <span className="sp">
          
          </span>
        </span>

      <span className="spq">
        <div className="links">
          <button onClick={backclick} className="a a1">Go Back</button>
          <button onClick={onclick} type="submit" className="a a2">Proceed</button>
        </div>
      </span>

      <span className="spq spy" style={{ display: 'none' }}>
          <ProcessingAnimation text='Processing, please wait ...' />
        </span>
    </div>
  </form>
  )
}

export default WalletWithhdrawAmount