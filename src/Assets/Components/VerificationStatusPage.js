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

import waitinggif from './images/waiting gif.gif';
import waitingforagent from './images/wait for agent2.svg';


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

function Seller_details_success({ display }){
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
                        <div className="success status_img_div_container">
                            <div className="status_img_div">
                                <img src={waitinggif} alt="" className='gif'/>
                            </div>
                            <div className="text_img_div">
                                <p className="important_txt"><b>Note:</b> Ensure to consistently check your email or simply login to revisit your authentication status page. Thank you. </p>
                                <div className="verification_status">
                                    <p className="v_txt">Verification status: </p>
                                    <p className="verification_status_txt">Unverified</p>
                                </div>
                                <div className="proceed_div">
                                    <Link to={-1} className='proceed_link' >Back</Link>
                                    <Link to="/blog_page" className='proceed_link proceed_link_proceed ' >Proceed to Login <i className="material-icons">chevron_right</i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <p className="cl"  onClick={openCloseModal}><i className="fa-solid fa-x"></i> Close</p> */}
                </div>
            </section>
        </main>
        
    </body>
  )
}

export default Seller_details_success