import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import AuthDataContext from '../Contexts/AuthDataContext.js';



import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content';
import upload_img from './images/upload.svg';
import BankOpt from './BankOpt.js';
import IdtypeOpt from './IdtypeOpt';
import CountryOpt from './CountryOpt';
import PidAuthData from '../Contexts/PidAuthData';
import Auth_nav from './Auth_nav';
import Header from '../steppers/Header';
import BAS_prev from './BAS_prev.js';
import { NavContext } from '../Contexts/NavContent.js';
import { NavInfoContext } from '../Contexts/NavInfoContext.js';




function Idi({props, display, onclick, backclick }){

  const {setShowIdInfo} = useContext(NavInfoContext);


  const [ShowPrevInfo, setShowPrevInfo] = useState(true);

  const [issuing_country, setissuing_country] = useState('');
  const [identity_type, setidentity_type] = useState('');
  const [identity_image, setidentity_image] = useState('');
  const [selfie, setselfie] = useState('');
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const { updateContextData } = useContext(AuthDataContext);
  const location = useLocation();
  const [inputData, setInputData] = useState('');

  const {contextData } = useContext(AuthDataContext);

  const accessKey  = contextData.accessKey;
  const {pidcontextData } = useContext(PidAuthData);

    const navigate = useNavigate();

  const handleIdInfoSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('issuing_country', issuing_country);
      formData.append('identity_type', identity_type);
      formData.append('identity_image', identity_image);
      formData.append('selfie', selfie);
    
      const response = await axios.post(
        'https://finstack-production.herokuapp.com/users/identity-informations/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // navigate('/BAS_prev')
      setShowPrevInfo(false)
      setShowIdInfo(true)

      if (response && response.data) {
        console.log('Signup successful:', response.data);
        setIsSignupComplete(true);
        onclick();
      } else {
        console.error('Signup failed: No data received in the response.');
      }
    } catch (error) {
      console.error('Signup failed:', error.response?.data || error.message);
    }
  };
  
  console.log(issuing_country)
  console.log( identity_type)
  console.log(identity_image)
  console.log(selfie)


  console.log(accessKey)

// Update file handling functions to correctly set the file data in state
const handleSelectedId = (selectedValue) => {
  setidentity_type(selectedValue);
};

const handleSelectedCountry = (selectedValue) => {
  setissuing_country(selectedValue);
};

const handleIdentityImageUpload = (e) => {
  const file = e.target.files[0];
  setidentity_image(file);
};

const handleSelfieUpload = (e) => {
  const file = e.target.files[0];
  setselfie(file);
};

  console.log(identity_type)
  console.log(issuing_country)
  console.log(identity_image)
  console.log(selfie)


  // <UserContext.Provider value={{formData, setFormData, UserDetails, setShowUserDetails}}>
  //       {ShowUserDetails ? <UserDetails/> : <UserForm/>}
  //    </UserContext.Provider>

  return (
    <body>
    <NavContext.Provider value={{ShowPrevInfo, setShowPrevInfo}}>
    {ShowPrevInfo ? (
    <form action="" className="frm Idi" style={{display: display,}}>
    <p className="t1">Identity information</p>
    <p className="t2">Subtext comes here on identity details</p>

    <div className="qs">

        <span className="spq">
          <span className="sp sp2 spC"  >
            <label htmlFor="fname">Select ID type</label>
            <div className="box" style={{ width: 350 }}>
              <IdtypeOpt onBankSelect={handleSelectedId} />
            </div>
          </span>
        </span>

        <span className="spq">
          <span className="sp sp2 spC">
            <label htmlFor="fname">Issuing country</label>
            <div className="box" style={{ width: 350 }}>
              <CountryOpt onBankSelect={handleSelectedCountry} />
            </div>
          </span>
        </span>


        <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Upload mean of identity</label>
                <span className="sp_inp" >
                    <span className="msg">
                        <img src={upload_img} alt="img" />
                        <p className="p1">upload image</p>
                        <p className="p2">Accepted format: .pdf, .img, .jpg, .png should not be more than 100kb</p>
                    </span>

                    <input
  type="file"
  name="identity_image"
  id=""
  onChange={handleIdentityImageUpload}
/>
                </span>
            </span>
        </span>

      <span className="spq">
        <div className="line"></div>
      </span>

      <span className="spq">
        <div className="nt">
            <p className="p1"><i className="material-icons-outlined">info</i> NOTE</p>
            <p className="p2">Upload a selfie of you holding the identity card and a piece of paper bearing the word FINSTACk and today’s date. Remove any hat or glasses and avoid using a camera filter at this point. Also, ensure enough illumination in the surrounding area.</p>
        </div>
      </span>

      <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Upload mean of identity</label>
                <span className="sp_inp">
                    <span className="msg">
                        <img src={upload_img} alt="img" />
                        <p className="p1">upload image</p>
                        <p className="p2">Accepted format: .pdf, .img, .jpg, .png should not be more than 100kb</p>
                    </span>
                    <input
  type="file"
  name="selfie"
  id=""
  onChange={handleSelfieUpload}
/>
                </span>
            </span>
        </span>

      <span className="spq">
        <div className="links">
          <button onClick={backclick} className="a a1">Back</button>
          <button onClick={handleIdInfoSubmit} type="submit" className="a a2">Save & continue</button>
        </div>
      </span>


    </div>
  </form>)
  : (<BAS_prev/>)}
  </NavContext.Provider>
</body>
  ) 
}

export default Idi
