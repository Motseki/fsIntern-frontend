import React, { useState } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import './Home.css'
import './Dropdown.css'
import './Wallet_index.css'
import Landing_nav from './Landing_nav';
import Sidenav from './Sidenav';
import Select from './Select';
import Foot from './Foot';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dropdowns from './CurrencyDrp';
import Test from './Test';
import CustomSelect from './CustomSelect';
import Blog_nav from './Blog_nav';
import big_logo2 from './images/big_logo2.svg'
import './Seller_profile.css';
import Name_profile from './Name_profile';
import ad_img from './images/ad.svg'
import tran_img from './images/transaction.svg'
import wallet_img from './images/wallet.svg'
import bank1 from './images/bank1.svg'
import bank2 from './images/bank2.svg'
import MaskedParagraph from './MaskedParagraph';
import Account_info_crd from './Account_info_crd';
import AddNew from './AddNew';
import './Seller_profile.css';
import './seller_details.css';
import './Auth_content.css';


import Balance from './Balance';
import CurrencyBrkCard from './CurrencyBrkCard';
import icon_img1 from './images/Frame.svg'
import icon_img2 from './images/Frame (1).svg'
import icon_img3 from './images/Vector.svg'
import icon_img4 from './images/Vector (1).svg'
import cntry_img1 from './images/country_image (1).svg'
import cntry_img2 from './images/country_image (2).svg'
import cntry_img3 from './images/country_image (3).svg'
import cntry_img4 from './images/country_image (4).svg'
import cntry_img5 from './images/country_image (5).svg'
import cntry_img6 from './images/country_image (6).svg'
import cntry_img7 from './images/country_image (7).svg'
import DynamicTable from './DynamicTable';
import DynamicHistory from './DynamicHistory';
import ConvertModal from './ConvertModal';
import RegularNoIconDrp from './RegularNoIconDrp';


function closeMobileTable() {
  document.getElementById('DynamicHistoryModal').style.display = 'none'
}


const P2Pgiftcards = () => {
  return (
    <div>
       
    <header className='home_main'>
      <Blog_nav />      

    <div className="blg_main " >
      <section className="sectionprof_top">
          <div className="sectionp2ptop">
            <p className="pt1">Peer to peer marketplace</p>
            <p className="pt2">Trade Currencies & Giftcards with Verified Merchants</p>
            <div className="radioselect">
                <p className=''>Currencies</p>
                <p className='active' >GiftCards</p>
            </div>
            <div className="buynsell_div">
              <p className='active'>Buy</p>

              <label className="toggle-switch">
                <input type="checkbox" 
                // checked={isOn} 
                // onChange={handleToggle} 
                />
                <span className="toggle-slider round"></span>
                <span className="toggle-label"></span>
              </label>

              <p className='' >Sell</p>
            </div>
            <div className="wanttobuy">
              <p className="txt1" >I want to buy</p>
              <form action="" className='frm'>
                <input className='inp' type="text" placeholder='1,000' />
                <input className='inp' type="text" placeholder='1,000' />

              </form>
            </div>
          </div>
      </section>

  </div>
    </header>

    <main className='Main blg_main blg_main2 wallet_history_div'>
    <section className="sort">
              <form action="">
                <label >
                  <p >Date</p>
                    <RegularNoIconDrp placeholder='' />
                    {/* <input type="text" class="filter_input" placeholder="Search date"> */}
                </label>
                <label htmlFor="">
                  <p>Amount</p>
                  {/* <input type="text" class="filter_input" placeholder="Enter amount"> */}
                </label>
                <label htmlFor="">
                  <p>Status</p>
                  {/* <input type="text" class="filter_input" placeholder="Pending"> */}
                </label>
                
                {/* <button type='submit' class='submit'>Apply filter</button> */}
               
              </form>
           </section>
    </main>
    
      <Foot />
    </div>
  )
}

export default P2Pgiftcards
