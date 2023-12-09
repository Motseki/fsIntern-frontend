import React, { useState } from 'react';
import './Blog_nav.css'
import './Blog_index.css'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidenav from './Sidenav';
import Blog_nav from './Blog_nav';
import Foot from './Foot';
import Nxt_sect from './Nxt_sect';
import big_logo2 from './images/big_logo2.svg'
import './Seller_profile.css';
import Name_profile from './Name_profile';
import Select from 'react-select';
import ad_img from './images/ad.svg'
import tran_img from './images/transaction.svg'
import wallet_img from './images/wallet.svg'
import bank1 from './images/bank1.svg'
import bank2 from './images/bank2.svg'
import MaskedParagraph from './MaskedParagraph';
import Account_info_crd from './Account_info_crd';
import AddNew from './AddNew';

function openNew() {
  document.getElementById('add_new_modal').style.display = 'flex';
}

const Seller_profile = () => {

 


  return (
    <body>
      <AddNew />
      <header className='blog_head'>
           <Blog_nav />
      </header>
      <main className="blg_main">
        <section className="sectionprof_top">
          <p className="p1">My Profile</p>
          <p className="p2">User ID: <span>TNF/82T38RT904-01</span></p>
        </section>
        <section className="sectionfin_stck">
          <div className="bck">
            <img src={big_logo2} alt="" />
          </div>
          <section className="mn">
            <Name_profile img={''} username='Mavrick Egbuson' sub_txt="Mavrick Egbuson" />
            <p className="t4"> Trade Smart, Simple and Easy! </p>
          </section>
        </section>

        <section className="sectionprof_input">
            <form action="" className='prof_form'>
              <label htmlFor="" className='in_s'>
              First name
                <input type="text" placeholder='Enter your first name'/>
              </label>
              <label htmlFor="" className='in_s'>
              Last name
                <input type="text" placeholder='Last name'/>
              </label>
              <label htmlFor="" className='in_s'>
              Other name
                <input type="text"  placeholder='Other name' />
              </label>
              <label htmlFor="" className='in_s'>
              Preferred username
                <input type="text"  placeholder='Username'/>
              </label>
              <label htmlFor="" className='in_s'>
              Email
                <input type="text"  placeholder='Example@gmail.com'/>
              </label>
              <label htmlFor="" className='in_s'>
              Phone number
                <input type="text" placeholder='70948209'/>
              </label>
              <label htmlFor="" className='in_s'>
              Nationality
                <input type="text" placeholder='Select country'/>
              </label>
              <label htmlFor="" className='in_s'>
              Country of residence
                <input type="text" placeholder='Select country'/>
              </label>
              <label htmlFor="" className='in_s'>
              State / province / region
                <input type="text" placeholder='Select country'/>
              </label>
              <label htmlFor="" className='in_s'>
              Local Government Area
                <input type="text" placeholder='Select country'/>
              </label>
              
              <label htmlFor="" className='in_s in_l'>
              Residential address
                <input type="text" placeholder='Residential address' />
              </label>

              <button type="submit" className='a'>Save Changes</button>

            </form>
            <div className="crds">
              <div className="crd">
                <Link className='a' to='/wallet_index'>
                  <img src={wallet_img} alt="" />
                  <span className="sp">
                    <p>Wallet</p>
                    <i className='material-icons'>arrow_forward_ios</i>
                  </span>
                </Link>
                <Link className='a' to='/wallet_history'>
                  <img src={tran_img} alt="" />
                  <span className="sp">
                    <p>Transactions</p>
                    <i className='material-icons'>arrow_forward_ios</i>
                  </span>
                </Link>
                <Link className='a'>
                  <img src={ad_img} alt="" />
                  <span className="sp">
                    <p>Ad list</p>
                    <i className='material-icons'>arrow_forward_ios</i>
                  </span>
                </Link>
              </div>
                

            </div>
        </section>
        <section className="section_accts">
          <p className="save">
            Saved accounts
            <p className="p1" onClick={openNew}><p className='spp'>+</p> Add new</p>
          </p>


          <div className="accts">
              <Account_info_crd img={bank2} acct_name={'Peter Williams'} acct_no={'40196789894'} acct_currency={'USD'} />
              <Account_info_crd img={bank1} acct_name={'Peter Williams'} acct_no={'40196789894'} acct_currency={'USD'} />
              <Account_info_crd img={bank2} acct_name={'Peter Williams'} acct_no={'40196789894'} acct_currency={'USD'} />
              <Account_info_crd img={bank1} acct_name={'Peter Williams'} acct_no={'40196789894'} acct_currency={'USD'} />
              <Account_info_crd img={bank2} acct_name={'Peter Williams'} acct_no={'40196789894'} acct_currency={'USD'} />
              <Account_info_crd img={bank1} acct_name={'Peter Williams'} acct_no={'40196789894'} acct_currency={'USD'} />
          </div>
        </section>
      </main>
    
    <Foot />
</body>
  )
}

export default Seller_profile