import React from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content.js'
import upload_img from './images/upload.svg';
import ImgNCurrencySelect from './ImgNCurrencySelect.js';
import RegularNoIconDrp from './RegularNoIconDrp.js';
import ad_img from './images/ad.svg'
import AvailableBalance from './AvailableBalance.js';
import wallet_img from './images/wallet.svg'


function ChooseWalletWithdraw({ display, onclick, backclick }){
  return (
    <form action="" className="frm Idi" >
    <p className="t1">Choose originating wallet</p>
    <p className="t2">Which of your wallets would you like to withdraw from?</p>

    <div className="qs">

      <span className="spq">
        <span className="sp sp2 spC">
          <label htmlFor="fname">Choose wallet</label>
          <div className="box">
            <ImgNCurrencySelect />
          </div>
          <AvailableBalance />

        </span>
      </span>

{/* 
      <span className="spq">
        <span className="sp sp2 spC">
          <AvailableBalance />
        </span>
      </span> */}


      <span className="spq">
        <div className="links">
          <button onClick={backclick} className="a a1">Back</button>
          <button onClick={onclick} type="submit" className="a a2">Proceed</button>
        </div>
      </span>


    </div>
  </form>
  )
}

export default ChooseWalletWithdraw