import React from 'react'
import './Sidenav.css'
import Landing_nav from './Landing_nav'
import logo from './images/logo.svg';
// import './Landing_nav.css';
import MaterialIcon from 'react-google-material-icons'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


function sidebarClose(){
    document.getElementById('sidebar').style.top = '-110%';
    document.getElementById('i').style.display = 'flex';
    document.getElementById('x').setAttribute('style', 'display:none !important');
    // document.body.style.overflow = 'scroll';
}

// function sidebarOpen(){
//   document.getElementById('sidebar').style.top = 0;
//   document.getElementById('i').style.display = 'none';
//   document.getElementById('x').setAttribute('style', 'display:block !important');
//   document.getElementById('x').style.display = 'block';

// }

const Sidenav = () => {
  return (
    <div className='sidebar' id='sidebar'>


        <div className="sd">
          <div className="main_sidenav">
            <header>
                <nav>
                    <a href='' className='logo_a'> <img src={logo} alt="wame" className='logo' /></a>
                    <i className="x ii material-icons" id='x' onClick={sidebarClose}>close</i>
                </nav>
            </header>
      
            <div className="nav_items">
              <span className="sp"> <Link to="/" className='a' onClick={sidebarClose}>Home <i className="material-icons">navigate_next</i></Link> </span>
              <span className="sp"> <Link to="/blog_index" className='a'>Our blog <i className="material-icons">navigate_next</i></Link></span>
              <span className="sp"> <Link to="/seller_up" className='a'>Become a seller <i className="material-icons">navigate_next</i></Link></span>
              <span className="sp"> <Link to="/" className='a'>P2P marketplace<i className="material-icons">navigate_next</i></Link></span>
              <span className="sp"> <Link to="/contactus" className='a'>Contact us</Link></span>
              <span className="sp"> <Link to="/listings" className='a'>All currency listings</Link></span>
              {/* <span className="sp"> <Link to="" className='a'>Our blog <i className="material-icons">navigate_next</i></Link></span> */}
              <div className="st">
                <span className="sp1">
                  <a href=""><i className="fa-brands fa-facebook"></i></a>
                  <a href=""><i className="fa fa-twitter"></i></a>
                  <a href=""><i className="fa fa-instagram"></i></a>
                </span>
                <span className="sp2">
                    <a href="">Terms and conditions. Privacy Policy</a>
                    <a href="">&copy; All rights reserved. Finstack 2022.</a>
                </span>
              </div>
            </div>
      
            <div className="in">
              <Link to="/login" className="a">Sign in <i className="material-icons">chevron_right</i></Link>
            </div>
          </div>

          <div className="products">

          </div>
        </div>
      
      
    </div>
  )
}

export default Sidenav