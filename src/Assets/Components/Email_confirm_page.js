import React from 'react'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import email_img from './images/email_img.gif'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Email_confirm_page = () => {
  return (
    <body> 
        <main>
                <section className="sectioni">
                    <img src={logo} alt="" className="logo" />
                    <img src={email_img} alt="" className="email_img gif" />
                    <p className="t1">Email Confirmation</p>
                    <p className="et2">We have sent an email to you with a link to confirm your account</p>
                    <p className="to ea">Didn’t get the email? <a href="">Resend</a></p>
                    <Link to={-1} className="gbck">
                        <i className="material-icons">chevron_left</i>
                        Go back
                    </Link>
                </section>
                <Sect2 />
        </main>
    </body>    
  )
}

export default Email_confirm_page