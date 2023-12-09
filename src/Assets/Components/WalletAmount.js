import React, {useState} from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content.js'
import EditableCurrencyOpt from './EditableCurrencyOpt.js';


function WalletAmount({ display, onclick, backclick }){
  const [showModal, setShowModal] = useState(false);

  return (
    <form action="" className="frm Idi" >
    <p className="t1">Enter Amount</p>
    <p className="t2">Enter your personal details as required below</p>

    <div className="qs">
      <span className="spq">
        <span className="sp sp2 ">
          <label htmlFor="fname">Amount to deposit</label>
            <EditableCurrencyOpt />
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
                        <div className="modal"> <p>This is the equivalent amount to be paid to your wallet</p>  </div>
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
          <button onClick={onclick} type="submit" className="a a2">Save & continue</button>
        </div>
      </span>


    </div>
  </form>
  )
}

export default WalletAmount