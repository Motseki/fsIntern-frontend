import React, { useState, useRef } from 'react';
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import email_img from './images/email_img.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import SectS from './SectS';

import Auth_content from './Auth_content.js'
import ProcessingAnimation from './ProcessingAnimation';


const WalletWithdrawEmail = ({ display, onclick, backclick }) => { 

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
  
  const navigate = useNavigate();

  function handleLinkClick(event) {
    event.preventDefault();
    const spqElements = document.querySelectorAll('.sectioni');
    spqElements.forEach((element) => {
      element.style.display = 'none';
    });

    const spyElement = document.querySelector('.spy');
    spyElement.style.display = 'flex';
    setTimeout(() => {
      navigate('/WalletWithdrawAuth_success');
    }, 3000);
  }

  function copyAccountNumber() {
    const accountNumberElement = document.querySelector('.tx2');
    navigator.clipboard
      .writeText(accountNumberElement.textContent)
      .then(() => {
        console.log('Account number copied successfully');
      })
      .catch((err) => {
        console.error('Failed to copy account number: ', err);
      });
  }



  return (  
        <body className='mnWalletWithdrawEmail'> 
             {/* <main> */}
        <section className="sectioni WalletWithdrawEmail">
                            <p className="t1 d ">Verify transaction</p>
                            <p className="t2 d ">Verify transaction to help us know it’s really you</p>
                            <p className="to d">
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
                    <p className="to to2">Didn’t get the code? <Link to="" className='a'>Resend code</Link></p>

                    {/* <button type='submit'>Continue</button> */}

                    {/* <p className="already"><Link to="/login">Go back</Link></p> */}

                    {/* <div className="frm"> */}
                       {/* <div className="qs">      */}
                            {/* <span className="spq"> */}
                                <div className="links">
                                  <button onClick={backclick} className="a a1">Back</button>
                                  <button onClick={handleLinkClick} type="submit" className="a a2">Proceed</button>
                                </div>

                            {/* </span> */}
                        {/* </div> */}
                    {/* </div> */}


            </form>
                                      

            </section> 


       <span className="spq spy" style={{ display: 'none' }}>
                                    <ProcessingAnimation text='Processing, please wait ...' />
                                    </span>

        {/* //     </main> */}
        </body>   
    )
}

export default WalletWithdrawEmail