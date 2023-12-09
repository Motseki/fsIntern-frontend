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
import './Balance.css'
import MinDrp from './MinDrp';


const Balance = ({ balance }) => {
  const [isConverted, setIsConverted] = useState(false);
    const [isAsterisks, setIsAsterisks] = useState(false);
    const [isVis, setIsVis] = useState(false);
    const [buttonText, setButtonText] = useState("visibility");
    


    function handleLock() {
      
      setIsConverted(!isConverted);
      setButtonText(isConverted ? "visibility" : "visibility_off");
      setIsAsterisks(!isAsterisks);
      // setIsVis(isVis ? "visibility" : "menu")

    }
  
    const originalText = '₦254,328,723.00' || '$0.00';
    
    const asterisks = '*'.repeat(10);
    const displayText = isAsterisks ? asterisks : originalText;
    // const buttonText = isAsterisks ? 'Original Text' : 'Asterisks';
    
  
  return (
    <div className="balance">
        <img src={wallet_img} alt="" />
        <span className="txt">
            <p className="p1">Total wallet value</p>
            <p className="p2">{displayText} <i className="material-icons-outlined" onClick={handleLock}>{buttonText}</i></p>
        </span>
        <MinDrp />
    </div>
  )
}

export default Balance