import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';

import AuthDataContext from '../Contexts/AuthDataContext';

import { DisplayContext } from '../Contexts/DisplayContext';

import './Auth_content.css'
// import li_icon1 from "./im"
import Sidenav from './Sidenav';
import Pid from './Pid.js';
// import Idi from './IdiModified.js';
import Idi from './Idi'
import BAS_prev from './BAS_prev';
// import Close_auth from './Close_auth';
import Close_auth from './Close_auth';
import Seller_details_success from './Seller_details_success';
// import Auth_content from './Auth_content'
import Auth_nav from './Auth_nav'
import CalcIdAuth from './CalcIdAuth';


// Motseki
// import React, {useState} from 'react';
import Header from '../steppers/Header';
// import Card1 from '../steppers/Card1';
// import Card2 from '../steppers/Card2';
// import Card3 from '../steppers/Card3';
// import Card4 from '../steppers/Card4';
// import Card5 from '../steppers/Card5';
// import Form1 from '../steppers/Form1';
// import Form2 from '../steppers/Form2'
// import AuthDataContext from '../Contexts/AuthDataContext';
// End

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

  const [showReport, setPrevReport] = useState(false)

  const [success, setSuccess] = useState(false)
  const [stepOne, setStepOne] = useState(`last`)
  const [stepTwo, setStepTwo] = useState(`last`)
  const [stepThree, setStepThree] = useState(`last`)


// Motseki
// const [display, setDisplay] = useState(1);
const [details, setDetails] = useState({});
const [status, setStatus] = useState(1); 
//  const [plan, setPlan] = useState("");
//  const [mode, setMode] = useState("Monthly");
//  const [addOns, setAddOns] = useState([]);

// const handleUserDetails = (name, email, phone) =>{
//    setDetails({name, email, phone});
//  }
const handleUserDetails = (country,
  first_name,
  last_name,
  phone_number,
  date_of_birth,
  residential_address,
  region,) =>{
   setDetails({country,
    first_name,
    last_name,
    phone_number,
    date_of_birth,
    residential_address,
    region,});
}


// const capitalizeFirstWord = (str) => !str ? str : str.charAt(0).toUpperCase() + str.slice(1);

//  const handlePlanSelection = (plan) => {
//    setPlan(plan);
//  }

//  const handleModeSelection = (slider) => {
//    if (slider === 1) setMode("Monthly");
//    else setMode("Yearly");
//  }

//  const handleAddOnSelection = (addOn) => {
//    addOn = capitalizeFirstWord(addOn);
//    setAddOns((prev) => {
//      if (prev.includes(addOn)) return prev.filter((item) => item !== addOn);
//      else return [...prev, addOn];
//   });
//  };

const handleNextClick = () => {
  setDisplay(display + 1);
};

const handleGoBackClick = () => {
  setDisplay(display - 1);
};

useEffect(() => { 
  setStatus(display)
  //since we are using count, we have to pass it as a dependency 
}, [display])

const handlePlanChange = () => {
   if (window.confirm("Are you sure you want to change plan.")) setDisplay(2);
 }
// End

  return (
    <body>
    <DisplayContext.Provider value={{personal, setPersonal, idInfo, setIdInfo, showPreview, setShowPreview, showReport, setPrevReport}}> 
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

          {/* <Header step={display} />  */}

          <ul>
          <li className={ personal ? `active` : `${stepOne}` }><span><i className="material-icons-outlined">account_circle</i> </span><p>Personal information { stepOne === `done` && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ idInfo ? `active` : `${stepTwo}` }><span><i className="material-icons-outlined">payment</i> </span><p>ID information  { stepTwo === `done`  && <i className="material-icons ic">check</i>}</p> </li>
                  <li className={ showReport ? `active` : `${stepThree}` } ><span><i className="material-icons-outlined">text_snippet</i> </span><p>Preview  { stepThree === `done` && <i className="material-icons ic">check</i>}</p> </li>
          </ul>
        </div>
        <div className="cnt">
          <div className="fl1">

      {/* <Card1 status={display} handleDetails={handleUserDetails} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick}/>
      <Card2 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} handlePlan={handlePlanSelection} handleMode={handleModeSelection}/>
      <Card3 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} handleAddOns={handleAddOnSelection} selectedAddOns={addOns}/>
      <Card4 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} selectedPlan={plan} selectedAddOns={addOns} selectedMode={mode} handlePlanChange={handlePlanChange}/>
      <Form1 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} userDetails={details}/>
      <Form2 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} userDetails={details}/>
      <Card5 status={display} onNextClick={handleNextClick} onGoBackClick={handleGoBackClick} userDetails={details}/>
     */}

     {display === 1 ?  <CalcIdAuth status={display} handleDetails={handleUserDetails}  onNextClick={handleNextClick}/> : '' }
     {display === 2 ? <Idi status={display} onNextClick={handleNextClick}/> : ''}
     {display === 3 ?  <BAS_prev  status={display} onNextClick={handleNextClick}/> : '' }
     {display === 4 ?  <Seller_details_success   status={display} onNextClick={handleNextClick}/> : '' }
    

            {/* {status === 1 && personal && <CalcIdAuth
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
                />} */}

{/* 
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
                 />} */}

{/* 
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
                   />} */}

                  {/* {status === 4 && success && <Seller_details_success
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
                   />} */}
          </div>
          
          <p className="cl"  onClick={openCloseModal}><i className="fa-solid fa-x"></i> Close</p>
        </div>
        </section>
    </main>
    </div>
    </DisplayContext.Provider>
</body>
    
  )
}

export default Signup_info