import React from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content.js'
import upload_img from './images/upload.svg';
import bk_img1 from './images/blg_img.svg'
import Profp from './Profp.js';
import Profp_img from './Profp_img.js';
import prof_img from './images/file_img.svg'
// import Auth_content from './Auth_content'
import Auth_nav from './Auth_nav'
import Close_auth from './Close_auth';
import suc_img from './images/sel_details.svg'
import success from './images/success.Gif';

import './Auth_content.css'


function sidebarOpen(){
    document.getElementById('sidebar').style.top = 0;
    document.getElementById('i').style.display = 'none';
    document.getElementById('x').setAttribute('style', 'display:block !important');
  }
  
  function openCloseModal(){
    document.getElementById('close_auth').style.display = 'flex';
  }
  
  function closeCloseModal(){
    document.getElementById('close_auth').style.display = 'none';
  }

function WalletDepositAuth_success({ display }){
  return (
    <body>
        <header>
            <Auth_nav />
        </header>
        <Close_auth />
        <main className='Aumain'>
            <section className='section'>
                <div className="cnt">
                    <div className="fl1">
                            <div className="success">
                                <img src={success } alt="" className='gif'/>
                                <p className="p1">Deposit Order Submitted</p>
                                <p className="p2">You’ll be notified once you’ve been credited</p>
                                <Link to='/wallet_index' className='a a1'>View Wallet</Link>
                                <Link  className='a at2'>Resume P2P transaction</Link>
                                <Link  className='a at3'>Close and exit</Link>

                            </div>
                    </div>
                    <p className="cl"  onClick={openCloseModal}><i className="fa-solid fa-x"></i> Close</p>
                </div>
            </section>
        </main>
        
    </body>
  )
}

export default WalletDepositAuth_success