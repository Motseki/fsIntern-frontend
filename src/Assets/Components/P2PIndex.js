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


const P2PIndex = () => {

  const getCurrencyCode = (name) => {
    const currencyCodes = {
      'cefa': 'XOF',
      'naira': 'NGN',
      'dollar': 'USD',
      'pound': 'GBP'
      // Add more currency codes as needed
    };
    return currencyCodes[name.toLowerCase()] || '';
  }

  // const code = getCurrencyCode(currency);

function openNew() {
  document.getElementById('ConvertModal').style.display = 'flex';
}

  const rows = [
    {
      dateTime: ' 2023-03-30 11:32',
      txnId: 'TN-6t4872y387by3939bkjkgkhhgkhhh ',
      type: 'debit',
      wallet: 'CEFA',
      source: 'GTBank',
      amount: '$1,500,000.00',
      status: 'pending'
    },
    {
      dateTime: ' 2023-03-30 11:32',
      txnId: 'TN-6t4872y387by3939bkjkgkhhgkhhh ',
      type: 'credit',
      wallet: 'Naira',
      source: 'Access',
      amount: '$100,000.00',
      status: 'completed'
    },
    {
      dateTime: ' 2023-03-30 11:32',
      txnId: 'TN-6t4872y387by3939bkjkgkhhgkhhh ',
      type: 'credit',
      wallet: 'Dollar',
      source: 'GTBank',
      amount: '$1,500,000.00',
      status: 'canceled'
    },
    {
      dateTime: ' 2023-03-30 11:32',
      txnId: 'TN-6t4872y387by3939bkjkgkhhgkhhh ',
      type: 'credit',
      wallet: 'Dollar',
      source: 'Access',
      amount: '$1,500,000.00',
      status: 'canceled'
    },
    {
      dateTime: ' 2023-03-30 11:32',
      txnId: 'TN-6t4872y387by3939bkjkgkhhgkhhh ',
      type: 'credit',
      wallet: 'CEFA',
      source: 'GTBank',
      amount: '$1,500,000.00',
      status: 'canceled'
    },
    
    {
      dateTime: ' 2023-03-29 10:23:45',
      txnId: '6t4872y387by3939bkjkgkhhgkhhh',
      type: 'credit',
      wallet: 'naira',
      source: 'BTC Wallet',
      amount: '$100,000.00',
      status: 'pending'
    }
  ];

  

  const columns = ['DateTime', 'txnId', 'Type', 'Wallet', 'Source', 'Amount', 'Status'];

  // const columns = [  { header: 'Date / Time' },  { header: 'Txn Id',  },  { header: 'Type',  }, { header: 'wallet' },   { header: 'Source' },  { header: 'amount' },  { header: 'status' },];

    
  const [isSelected, setIsSelected] = useState('deposits');

  const handleSelect = (value) => {
    setIsSelected(value);
  };


  
  return (
    <body>
        {/* <ConvertModal /> */}
        <header className='home_main'>
          <Landing_nav />

            <div className="blg_main">
                <section className="sectionprof_top">
                <p className="p1">My Profile</p>
                <p className="p2">Wallet ID: <span> TNF/82T38RT904-01</span></p>
                </section>
                <section className="sectionu1">
                    <Name_profile img={big_logo2} username='Mavrick Egbuson' sub_txt="User ID: FS-783901Qq" />
                    <Balance />
                </section>
                <section className="sectionu2">
                    <Link className='a a1' to='/wallet_history'>View transaction history <i class="material-symbols-outlined">arrow_forward_ios</i> </Link>
                    <span className='spa'>
                      <Link className='a a2' to='/WalletDepositAuth' >Make deposit</Link>
                      <Link className='a a2' to='/WalletWithdrawAuth'>Withdraw</Link>
                      <Link className='a a2' onClick={openNew}>Convert currency</Link>
                    </span>
                </section>
            </div>
        </header>
        <main className='blg_main blg_main2'>
              <section className="sectionbrk">
                <p className="p1">Breakdown</p>
                <div className="brks">
                    <CurrencyBrkCard img={cntry_img1} originalText="54328723" currency='Dollar'  />
                    <CurrencyBrkCard img={cntry_img6} originalText="54328723" currency='Naira' />
                    <CurrencyBrkCard img={cntry_img2} originalText="54328723" currency='Dollar' />
                    <CurrencyBrkCard img={cntry_img7} originalText="54328723" currency='Dollar' />
                    {/* <CurrencyBrkCard /> */}
                    <CurrencyBrkCard img={cntry_img1} originalText="54328723" esc='$12,000.00'  currency='Dollar' />
                    <CurrencyBrkCard img={cntry_img3} originalText="54328723" esc='$12,000.00' currency='Dollar'  />
                </div>
              </section>
              <section className="sectiontable">
                <span className="top">
                  <span className="txt"><p className="t1">Recent Transactions</p> <p className="t2">Your recent transactions</p></span>
                  <span className="options">
                    {/* <p onClick={handleTabClick} className={isSelected ? 'actit' : ''}>Deposits</p> 
                    <p onClick={handleTabClick} >Withdrawals</p> */}
                    {/* <p onClick={handleActiveTab} className={isSelected ? 'actit' : ''}>Deposits</p>
                    <p onClick={handleActiveTab} className={!isSelected ? 'actit' : ''}>Withdrawals</p> */}
                    <p className={isSelected === 'deposits' ? 'actit' : ''} onClick={() => handleSelect('deposits')}>Deposits</p>
                    <p className={isSelected === 'withdrawals' ? 'actit' : ''} onClick={() => handleSelect('withdrawals')}>Withdrawals</p>
                  </span>
                </span>
                <div className="deposits_div">
                <DynamicTable rows={rows} columns={columns} active='active' />
                <DynamicHistory rows={rows} columns={columns} />
                </div>
                {/* <div className="withdrawals_div"></div> */}
              </section>
        </main>
          <Foot />
    </body>

)
}

export default P2PIndex