// import React, { useRef } from 'react'
import React, {useRef, useState, useEffect, useContext } from 'react';

import AuthDataContext from '../Contexts/AuthDataContext';
import axios from 'axios';

import debounce from 'lodash/debounce';
import './Blog_nav.css'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidenav from './Sidenav';
import Notification_bar from './Notification_bar';
// import { useState, useEffect } from 'react';
import { Functs } from '../../Functs';
import UserInfoContext from '../Contexts/UserInfoContext';


function sidebarOpen(){
  document.getElementById('sidebar').style.top = 0;
  document.getElementById('i').style.display = 'none';
  document.getElementById('x').setAttribute('style', 'display:block !important');
}

function openNote(){
  document.getElementById('Note').style.right = 0;
}

const Auth_nav = () => {
  const { updateContextData } = useContext(AuthDataContext);
  const [inputData, setInputData] = useState('');
  const {contextData } = useContext(AuthDataContext);
  const { userInfoData } = useContext(UserInfoContext);

  const [profModal, setIsprofModal] = React.useState(false);
  const handleProfile = () => {
    console.log(profModal)
    setIsprofModal((prevState) => !prevState)
  }

  let profRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', (event) => {
      if (!profRef.current.contains(event.target)){
          setIsprofModal(false)
      }
    });
  });

  const [navbarClass, setNavbarClass] = useState('nav-fixed');

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 5) {
        setNavbarClass('nav-fixed nav-active');
      } else {
        setNavbarClass('nav-fixed');
      }
    }, 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <nav className={navbarClass}>
      
      <Notification_bar />
      <Sidenav />
     <Link to='/' className='logo_a'> <img src={logo} alt="wame" className='logo' /></Link>

      <div className="user">
        {/* <div className="n_icon" onClick={openNote}>
          <i className="material-icons-outlined bell">notifications</i>
          <div className="not"></div>
        </div> */}
        
        <div className="profile">
          <div  className='prof' onClick={handleProfile} ref={profRef}>
            <div className="user_descrpt">
              <p className="username">{userInfoData.first_name} {userInfoData.last_name}</p>
              <p className="usermail">{contextData.email}</p>
            </div>
            <div className="userimage">
              <p className="me">ME</p>
              <div className="img"></div>
            </div>
            <i className="material-icons-outlined dwn">arrow_forward_ios</i>
          </div>
         {profModal &&  <div className="profile_modal" id='profile_modal' >
              <Link to={-1} className='a'><i className="material-icons-outlined">person</i> My Profile</Link>
              <Link className='a'><i className="material-icons-outlined">payment</i> Deposit</Link>
              <Link className='a'><i className="material-icons-outlined">sell</i> Sell</Link>
              <Link className='a'><i className="material-icons-outlined">account_balance_wallet</i> Wallet</Link>
              <Link className='a'><i className="material-icons-outlined">insert_drive_file</i> Transaction history</Link>
              <Link className='a'><i className="material-icons-outlined">logout</i> Logout</Link>
              
            </div>
          }
        </div>
           
      </div>
    <i className="i ii material-icons" id='i' onClick={sidebarOpen}>menu</i>
      {/* <i className="x ii material-icons" id='x'>close</i> */}

  </nav>
  )
}

export default Auth_nav