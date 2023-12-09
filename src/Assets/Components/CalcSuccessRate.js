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
import happyGif from './images/happy.gif';
import mini_facebook_img from './images/mini_facebook_img.svg';
import mini_twitter_img from './images/mini_twitter_img.svg';


import './Auth_content.css'
import StarRating from './StarRating.js';


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



function CalcSuccessRate({ display }){
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
                                <img src={happyGif } alt="" className='gif'/>
                                <p className="p1">Woohoo!</p>
                                <p className="p2">Thank you for choosing FinStack!</p>
                                
                                
                                <div className="rate_div">
                                  <p className="pt1">Rate our service</p>
                                  <StarRating />
                                </div>

                                <div className="rate_div review_div">
                                  <p className="pt1">Leave a review on</p>
                                  <a href="" className='aa af'><img src={mini_facebook_img} alt="" /> Facebook</a>
                                  <a href="" className="aa a2"><img src={mini_twitter_img} alt="" /> Twitter</a>
                                </div>

                            </div>
                    </div>
                    <p className="cl"  onClick={openCloseModal}><i className="fa-solid fa-x"></i> Close</p>
                </div>
            </section>
        </main>
        
    </body>
  )
}

export default CalcSuccessRate