import React from 'react'
import './Blog_nav.css'
import './Blog_index.css'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidenav from './Sidenav';
import Blog_nav from './Blog_nav';
import bk_img1 from './images/blg_img.svg'
import bk_img2 from './images/blg_img2.svg'
import bk_img3 from './images/blg_img3.svg'
import bk_img4 from './images/blg_img4.svg'
import bk_img5 from './images/blg_img5.svg'
import bk_img6 from './images/blg_img6.svg'
import bk_img7 from './images/blg_img7.svg'
import bk_img8 from './images/blg_img8.svg'
import bk_img9 from './images/blg_img9.svg'
import bk_img10 from './images/blg_img10.svg'
import bk_img11 from './images/blg_img11.svg'
import Foot from './Foot';
import Nxt_sect from './Nxt_sect';
import big_logo2 from './images/big_logo2.svg'
import Name_profile from './Name_profile';
import Select from 'react-select';
import ad_img from './images/ad.svg'
import tran_img from './images/transaction.svg'
import wallet_img from './images/wallet.svg'
import bank1 from './images/bank1.svg'
import bank2 from './images/bank2.svg'
import MaskedParagraph from './MaskedParagraph';
import './Seller_profile.css';
import './Account_info_crd.css'

const Account_info_crd = (props) => {
  return (
    <div className="c_act act">
      <img src={props.img} alt="" />
        <span className="txt">
          <p className="p1">{props.acct_name}</p>
          <p className="p2">
            <MaskedParagraph text={props.acct_no}  />
            <p>{props.acct_currency}</p>
          </p>
        </span>
      <i class="material-symbols-sharp">delete</i>
    </div>
  )
}

export default Account_info_crd