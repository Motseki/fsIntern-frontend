// import React from 'react'
import React, { useState } from 'react'

import './Auth_content.css'
// import li_icon1 from "./im"
import Sidenav from './Sidenav';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pid from './Pid';
import Idi from './Idi';
import BAS_prev from './BAS_prev';
// import Close_auth from './Close_auth';
import Close_auth from './Close_auth';
import Seller_details_success from './Seller_details_success';
import Auth_nav from './Auth_nav'
import Calc_Bd from './Calc_Bd'
import CalcIdAuth from './CalcIdAuth';
import CalcAmount from './CalcAmount';
import CalcTransferDetails from './CalcTransferDetails';
import Receiving_account_auth from './Receiving_account_auth';
import Originating_account_auth from './Originating_account_auth';

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


const Auth_content = () => {
  const [personal, setPersonal] = useState(true)
  const [idInfo, setIdInfo] = useState(false)
  const [detailShow, setDetailShow] = useState(false)
  const [detailShow2, setDetailShow2] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [success, setSuccess] = useState(false)
  const [stepOne, setStepOne] = useState(`last`)
  const [stepTwo, setStepTwo] = useState(`last`)
  const [stepThree, setStepThree] = useState(`last`)
  const [stepFour, setStepFour] = useState(`last`)
  const [stepFive, setStepFive] = useState(`last`)

  const [step, setStep] = useState(0); // Track the current step


  return (
    <body>
    <header>
        <Auth_nav />
    </header>
    
    
{/* </body> */}
    <div className="cont">
      <Close_auth />
    <main className='Aumain'>
     
      <section className='section'>
        <div className="lists">
          <p className="p1">Complete registration</p>
          <p className="p2">Create or accept offers at your preferred rate.</p>
          <ul>
              <li className={step === 0 ? 'active' : 'done'}>
                <span><i className="material-icons-outlined">account_circle</i> </span>
                <p className=''>Personal information <i className="material-icons ic">check</i></p>
              </li>
              <li className={step === 1 ? 'active' : step > 1 ? 'done' : ''}>
                <span><i className="material-icons-outlined">payment</i> </span>
                <p>ID information <i className="material-icons ic">check</i></p>
              </li>
              <li className={step === 2 ? 'active' : step > 2 ? 'done' : ''}>
                <span><i className="material-icons-outlined">text_snippet</i> </span>
                <p>Preview  <i className="material-icons ic">check</i></p>
              </li>

          </ul>
        </div>
        <div className="cnt">
          <div className="fl1">

              {step === 0 && (
                <Pid
                  display={'flex'}
                  backclick={() => setStep(0)}
                  onclick={() => setStep(1)}
                />
              )}
              {step === 1 && (
                <Idi
                  display={'flex'}
                  backclick={() => setStep(0)}
                  onclick={() => setStep(2)}
                />
              )}
              {step === 2 && (
                <BAS_prev
                  display={'flex'}
                  backclick={() => setStep(1)}
                  onclick={() => setStep(3)}
                />
              )}
          </div>
          
          {/* <p className="cl"  onClick={openCloseModal}><i className="fa-solid fa-x"></i> Close</p> */}
        </div>
        </section>
    </main>
    </div>
</body>
    
  )
}

export default Auth_content