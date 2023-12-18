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
import { NavContext } from '../Contexts/NavContent';
import { NavInfoContext } from '../Contexts/NavInfoContext';
import { DisplayContext } from '../Contexts/DisplayContext';




function Idi({props, display, onclick, backclick }){

  
  const [file, setFile] = useState(true);

  const [selfieFile, setSelfieFile] = useState(true);

  const {setShowIdInfo} = useContext(NavInfoContext);

  const {setPrevReport} = useContext(DisplayContext);


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
      setShowPrevInfo(false);
      setShowIdInfo(true);

      setPrevReport(true);

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
  setFile(false)
  // onChange={(e) => setFile(e.target.files[0])}
};

const handleSelfieUpload = (e) => {
  const selfie = e.target.files[0];
  setselfie(selfie);

  setSelfieFile(false);
};

  console.log(identity_type)
  console.log(issuing_country)
  console.log(identity_image)
  console.log(selfie)


  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
}

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

{/* 
        <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Upload mean of identity</label>
               
                  
                <input type="file"  style={{ width: 370 }} onChange={handleChange} />
            <img src={file} className="sp sp2 sp_inp"  style={{ width: 370 }} alt="" /> 
       
            </span>
        </span> */}

          {/* // input */}
          {/* <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
          />

         
          <img src={file ? URL.createObjectURL(file) : "https://default-image.jpg"} alt="" /> */}


        <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Upload mean of identity</label>
                <span className="sp_inp" >  
                {file ?
                  (
                    <span className="msg">
                    <img src={upload_img} alt="" /> 
                        <p className="p1">upload image</p>
                        <p className="p2">Accepted format: .pdf, .img, .jpg, .png should not be more than 100kb</p>
                        </span>
                    ) : ''}

                <input
                  type="file"
                  id="file"
                  onChange={handleIdentityImageUpload}
                />

                {/* // preview */}
                <img src={identity_image ? URL.createObjectURL(identity_image) : "https://default-image.jpg"} alt="" />
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
                  {selfieFile ? (
                    <span className="msg">
                        <img src={upload_img} alt="img" />
                        <p className="p1">upload image</p>
                        <p className="p2">Accepted format: .pdf, .img, .jpg, .png should not be more than 100kb</p>
                    </span>
                  ) : ''}

                <input
                    type="file"
                    name="selfie"
                    id=""
                    onChange={handleSelfieUpload}
                  />

                   {/* // preview */}
                <img src={selfie ? URL.createObjectURL(selfie) : "https://default-image.jpg"} alt="" />
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
