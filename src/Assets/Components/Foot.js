import React from 'react'
import logo from './images/logo.svg';
import './Landing_nav.css';
import MaterialIcon from 'react-google-material-icons'
import './Footer.css'
// import FontAwesomeIcon from 'FontAwesomeIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Foot = () => {
  return (
    <footer>
        <div className="one">
            <span className="sp">
                <img src={logo} alt="" className="logo" />
                <p className="t">Finstack is a non-profit organization or accept offers at your preferred rate on our Peer to peer marketplace.</p>
            </span>
            <span className="sp asp">
                <a href="" className="title">REACH US</a>
                <Link to="/blog_index">our blog</Link>
                <Link to="/contactus">Contact us</Link>
                <Link to="/seller_up">Become a seller</Link>
            </span>
            <span className="sp">
                <p className="tt1">Subscribe to our Newsletter</p>
                <p className="tt2">Never stay out of the loop.</p>
                <form action="">
                    <input type="email" name="" id="" placeholder='email@domain.co'/>
                    <button type="submit"><i className="material-icons">east</i></button>
                </form>
            </span>
        </div>
        <div className="two">
            <span className="sp1">
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa fa-twitter"></i></a>
                <a href=""><i className="fa fa-instagram"></i></a>
            </span>
            <span className="sp2">
                <a href="">Terms and conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">&copy; All rights reserved. Finstack 2022.</a>
            </span>
        </div>
    </footer>
  )
}

export default Foot