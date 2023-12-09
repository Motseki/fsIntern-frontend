import React, { useState, useEffect } from 'react';
import logo from './images/logo.svg';
import debounce from 'lodash/debounce';

import MaterialIcon from 'react-google-material-icons'
import Sidenav from './Sidenav';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Functs } from '../../Functs';
import './Landing_nav.css';

    function sidebarOpen(){
        document.getElementById('sidebar').style.top = 0;
        document.getElementById('i').style.display = 'none';
        document.getElementById('x').setAttribute('style', 'display:block !important');
    }
    
//     const navbar = document.querySelector('.nav-fixed');
// window.onscroll = () => {
//     if (window.scrollY > 200) {
//         navbar.classList.add('nav-active');
//     } else {
//         navbar.classList.remove('nav-active');
//     }
// };

   
const Landing_nav = () => {
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
      <Sidenav />
       <Link to='/' className='logo_a'> <img src={logo} alt="wame" className='logo' /></Link>
        <div className='sp'>
            <Link to='/blog_index' className='link'>Our blog</Link>
            <Link to='/contactus' className='link'>Contact us</Link>
            <Link to="/seller_up" className='link'>Become a seller</Link>
            <Link to='/P2PIndex' className='link'>P2P marketplace</Link>
        </div>
        <span className='log'>
            <Link to="/login" className='link login'>Login</Link>
            <Link to="/signup" className='link signup'>Get Started</Link>
        </span>
      <i className="i ii material-icons" id='i' onClick={sidebarOpen}>menu</i>
        {/* <i className="x ii material-icons" id='x'>close</i> */}

    </nav>
  )
}

export default Landing_nav