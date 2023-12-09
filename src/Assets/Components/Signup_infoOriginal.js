import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';

import AuthDataContext from '../Contexts/AuthDataContext.js';


import './Auth_content.css'
// import li_icon1 from "./im"
import Sidenav from './Sidenav.js';
import Pid from './Pid.js';
import Idi from './Idi.js';
import BAS_prev from './BAS_prev.js';
// import Close_auth from './Close_auth';
import Close_auth from './Close_auth.js';
import Seller_details_success from './Seller_details_success.js';
// import Auth_content from './Auth_content'
import Auth_nav from './Auth_nav.js'
import CalcIdAuth from './CalcIdAuth.js';

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


const Signup_info = (pops) => {
  const [display, setDisplay] = useState(1);
  const [personal, setPersonal] = useState(true)
  const [idInfo, setIdInfo] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [success, setSuccess] = useState(false)
  const [stepOne, setStepOne] = useState(`last`)
  const [stepTwo, setStepTwo] = useState(`last`)
  const [stepThree, setStepThree] = useState(`last`)


  const handleNextClick = () => {
    setDisplay(display + 1);
  };

  const handleGoBackClick = () => {
    setDisplay(display - 1);
  };

 let status = display;

  return (
    <body>
    <header>
        <Auth_nav />
    </header>
    
    
{/* </body> */}
    <div className="cont">
      <Close_auth back={'/'} />
    <main className='Aumain'>
     
      <section className='section'>
        <div className="lists">
          <p className="p1">Complete registration</p>
          <p className="p2">Create or accept offers at your preferred rate.</p>
          <ul>
          <li className={ personal ? `active` : `${stepOne}` }><span><i className="material-icons-outlined">account_circle</i> </span><p>Personal information { stepOne === `done` && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ idInfo ? `active` : `${stepTwo}` }><span><i className="material-icons-outlined">payment</i> </span><p>ID information  { stepTwo === `done`  && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ showPreview ? `active` : `${stepThree}` } ><span><i className="material-icons-outlined">text_snippet</i> </span><p>Preview  { stepThree === `done` && <i className="material-icons ic">check</i>}</p> </li>
          </ul>
        </div>
        <div className="cnt">
          <div className="fl1">
            {/* <Pid display={'flex'}/>
            <Idi display={'flex'} id="idi"/> 
            <BAS_prev display={'flex'} />  */}

            {status === 1 && personal && <CalcIdAuth
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
                  // status={handleNextClick}
                  onNextClick = {(e) => {

                    e.preventDefault();
                    setPersonal(false)
                    setIdInfo(true)
                    setStepOne(`done`)

                    // handleNextClick()
                  }}
                />}


                {status === 2 && idInfo && <Idi
                  backclick={(e) => {
                    e.preventDefault();
                    setPersonal(true)
                    setIdInfo(true)
                    setStepTwo(`last`)


                  }}
                  onclick={(e) => {
                    e.preventDefault();
                    setIdInfo(false)
                    setShowPreview(true)
                    setStepTwo(`done`)

                  }}
                 
                  onNextClick = {(e) => {
                    handleNextClick()
                  }}
                 />}


                {status === 3 && showPreview && <BAS_prev
                    backclick={(e) => {
                      e.preventDefault();
                      setShowPreview(false);
                      setIdInfo(true)
                    }}
                    onclick={(e) => {
                      e.preventDefault();
                      // alert(`There is no where to go to!`)
                    }}
                    onNextClick = {(e) => {
                      handleNextClick()
                    }}
                   />}

                  {status === 4 && success && <Seller_details_success
                    backclick={(e) => {
                      e.preventDefault();
                      setIdInfo(false);
                      setSuccess(true)
                      setStepThree(`last`)

                    }}
                    onclick={(e) => {
                      e.preventDefault();
                      // alert(`There is no where to go to!`)
                      setStepThree(`done`)

                    }}
                    onNextClick = {(e) => {
                      handleNextClick()
                    }}
                   />}
          </div>
          
          <p className="cl"  onClick={openCloseModal}><i className="fa-solid fa-x"></i> Close</p>
        </div>
        </section>
    </main>
    </div>
</body>
    
  )
}

export default Signup_info