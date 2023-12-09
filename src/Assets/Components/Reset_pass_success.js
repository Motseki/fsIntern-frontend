import React from 'react'
import logo from './images/logo.svg';
import success from './images/success.Gif';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import email_img from './images/email_img.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Reset_pas_success = () => {
  return (
    <body> 
        <main>
                <section className="sectioni">
                    <img src={logo} alt="" className="logo" />
                    <img src={success} alt="" className="email_img gif" />
                    <p className="t1">Password reset successful</p>
                    <p className="t2">Password reset successful</p>
                    <form action="">
                      
                          <button ><Link to="/login" className='link_btn'>  Proceed to  login  </Link></button>
                     
                    </form>
                   
                    
                </section>
                <Sect2 />
        </main>
    </body>    
  )
}

export default Reset_pas_success