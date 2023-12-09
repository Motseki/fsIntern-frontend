import React, { useState, useRef } from 'react';
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import email_img from './images/email_img.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SectS from './SectS';


const Seller_email = () => { 

    const inputRefs = useRef([]);

    const handleInput = (e, index) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(-1);
      }
      if (e.target.value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };
  
    const handleBackspace = (e, index) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };
  
    const handleDelete = (e, index) => {
      if (e.key === 'Delete' && !e.target.value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };
  
    const handleLastInput = (e) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(-1);
      }
    };
  


  return (  
        <body> 
            <main>
            <section className="sectioni">
                            <img src={logo} alt="" className="logo" />
                            <p className="t1">Verify Email</p>
                            <p className="t2">Fill in your details to continue</p>
                            <p className="to">
                            Kindly enter the 6-digit code sent to your email <br /><span className='ap'> gb********43@gmail.com</span>
                            </p>
                            <form action="" className='form2'>
                                <span className="ct">
                                <input
                type="number"
                name=""
                id=""
                ref={(el) => (inputRefs.current[0] = el)}
                onInput={(e) => handleInput(e, 0)}
              />
              <input
                type="number"
                name=""
                id=""
                min="0"
                max="9"
                step="1"
                ref={(el) => (inputRefs.current[1] = el)}
                onInput={(e) => handleInput(e, 1)}
                onKeyDown={(e) => handleBackspace(e, 1)}
              />
              <input
                type="number"
                name=""
                id=""
                min="0"
                max="9"
                step="1"
                ref={(el) => (inputRefs.current[2] = el)}
                onInput={(e) => handleInput(e, 2)}
                onKeyDown={(e) => handleBackspace(e, 2)}
              />
               <input
                type="number"
                name=""
                id=""
                min="0"
                max="9"
                step="1"
                ref={(el) => (inputRefs.current[3] = el)}
                onInput={(e) => handleInput(e, 3)}
                onKeyDown={(e) => handleBackspace(e, 3)}
              />
               <input
                type="number"
                name=""
                id=""
                min="0"
                max="9"
                step="1"
                ref={(el) => (inputRefs.current[4] = el)}
                onInput={(e) => handleInput(e, 4)}
                onKeyDown={(e) => handleBackspace(e, 4)}
              />
              <input
                type="number"
                name=""
                id=""
                min="0"
                max="9"
                step="1"
                ref={(el) => (inputRefs.current[5] = el)}
                onInput={(e) => handleInput(e, 5)}
                onKeyDown={(e) => handleBackspace(e, 5)}
                                    />
                                </span>

                                <p className="to to2">Expires in  <span className='ap'> 00:34</span> </p>
                                <p className="to to2">Didn’t get the code? <Link to="" className='a'>Resend</Link></p>

                                <button type='submit'>Continue</button>

                                <p className="already"><Link to="/login">Go back</Link></p>

                            </form>
                        </section> 
                    <SectS />
            </main>
        </body>   
    )
}

export default Seller_email