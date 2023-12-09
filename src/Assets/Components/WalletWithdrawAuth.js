// import React from 'react'
import React, { useState } from 'react'

import './Auth_content.css'
// import li_icon1 from "./im"
import Sidenav from './Sidenav';
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Pid from './Pid';
import Idi from './Idi';
import BAS_prev from './BAS_prev';
// import Close_auth from './Close_auth';
import Close_auth from './Close_auth';
import Seller_details_success from './Seller_details_success';
import Auth_nav from './Auth_nav'
import Calc_Bd from './Calc_Bd'
import ChooseWallet from './ChooseWallet'
import WalletAmount from './WalletAmount'
import WalletPaymentMethod from './WalletPaymentMethod'
import TransferDetails from './TransferDetails';
import ChooseWalletWithdraw from './ChooseWalletWithdraw';
import WalletWithdrawPaymentMethod from './WalletWithdrawPaymentMethod';
import WalletWithhdrawAmount from './WalletWithhdrawAmount';
import WalletWithdrawEmail from './WalletWithdrawEmail';
import WalletDepositAuth_success from './WalletDepositAuth_success';

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


const WalletWithdrawAuth = () => {
  const [personal, setPersonal] = useState(true)
  const [idInfo, setIdInfo] = useState(false)
  const [detailShow, setDetailShow] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [success, setSuccess] = useState(false)
  const [stepOne, setStepOne] = useState(`last`)
  const [stepTwo, setStepTwo] = useState(`last`)
  const [stepThree, setStepThree] = useState(`last`)
  const [stepFour, setStepFour] = useState(`last`)
  const navigate = useNavigate();


  function handleLinkClick(event) {
    event.preventDefault();
    const spqElements = document.querySelectorAll('.spq');
    spqElements.forEach((element) => {
      element.style.display = 'none';
    });
    const spyElement = document.querySelector('.spy');
    spyElement.style.display = 'flex';
    setTimeout(() => {
      // onclick();
    navigate('/WalletDepositAuth_success');
        
    }, 3000);
    // onclick();
  }

  return (
    <body>
    <header>
        <Auth_nav />
    </header>
    
    
{/* </body> */}
    <div className="cont">
      <Close_auth back={-1} />
    <main className='Aumain'>
     
      <section className='section'>
        <div className="lists">
          <p className="p1">Wallet Withdrawal </p>
          <p className="p2">Create or accept offers at your preferred rate.</p>
          <ul>
          <li className={ personal ? `active` : `${stepOne}` }><span><i className="material-icons-outlined">account_balance_wallet</i> </span><p>Choose wallet { stepOne === `done` && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ idInfo ? `active` : `${stepTwo}` }><span><i className="material-icons-outlined">payment</i> </span><p>Means of acceptance { stepTwo === `done`  && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ detailShow ? `active` : `${stepThree}` } ><span><i className="material-icons-outlined"> text_snippet</i> </span><p>Withdrawal Amount  { stepThree === `done` && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ showPreview ? `active` : `${stepFour}` } ><span><i className="material-icons-outlined">account_balance</i> </span><p>Email verification  { stepFour === `done` && <i className="material-icons ic">check</i>}</p> </li>
          </ul>
        </div>
        <div className="cnt">
          <div className="fl1">

            { personal && <ChooseWalletWithdraw
                  backclick={(e) => {
                    e.preventDefault();
                    setStepOne(`last`)

                    // alert(`There is no where to go to!`)
                    return;
                  }} 
                  onclick={(e) => {
                    e.preventDefault();
                    setPersonal(false)
                    setIdInfo(true)
                    setStepOne(`done`)
                  }}
                  display={'flex'}
                />}


                { idInfo && <WalletWithdrawPaymentMethod
                  backclick={(e) => {
                    e.preventDefault();
                    setPersonal(true)
                    setIdInfo(false)
                    setStepTwo(`last`)


                  }}
                  onclick={(e) => {
                    e.preventDefault();
                    setIdInfo(false)
                    setDetailShow(true)
                    setStepTwo(`done`)
                  }}
                 display={'flex'} id="idi"/>}


                { detailShow && <WalletWithhdrawAmount
                    backclick={(e) => {
                      e.preventDefault();
                      setDetailShow(false)
                      setIdInfo(true)
                    }}
                    onclick={(e) => {
                        e.preventDefault();
                        
                        // function handleLinkClick(event) {
                          // event.preventDefault();
                          const spqElements = document.querySelectorAll('.spq');
                          spqElements.forEach((element) => {
                            element.style.display = 'none';
                          });
                          const spyElement = document.querySelector('.spy');
                          spyElement.style.display = 'flex';
                          setTimeout(() => {
                            // onclick();
                          // navigate('/WalletDepositAuth_success');
                              setDetailShow(false)
                        setShowPreview(true)
                        setStepThree(`done`)
                          }, 3000);
                          // onclick();
                        // }
                      
                      }}
                   display={'flex'} />
                   
                   
                   
                   
                   }


                { showPreview && <WalletWithdrawEmail
                    backclick={(e) => {
                      e.preventDefault();
                      setDetailShow(true)
                      setShowPreview(false)
                    }}
                    onclick={(e) => {
                        e.preventDefault();
                        setShowPreview(false)
                        setSuccess(true)
                        setStepFour(`done`)
                      }}
                   display={'flex'} />}

                  { success && <WalletDepositAuth_success
                    onclick={(e) => {
                      e.preventDefault();
                      // alert(`There is no where to go to!`)
                      setSuccess(true)
                      // setStepFour(false)

                    }}
                   display={'flex'} />}
          </div>
          
          <p className="cl"  onClick={openCloseModal}><i className="fa-solid fa-x"></i> Close</p>
        </div>
        </section>
    </main>
    </div>
</body>
    
  )
}

export default WalletWithdrawAuth