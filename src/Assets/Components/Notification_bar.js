import React from 'react'
import Blog_nav from './Blog_nav'
import './Notification_bar.css'
import noti_deposit from './images/noti_deposit.svg';
import noti_success from './images/noti_success.svg';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


function closeNote(){
  document.getElementById('Note').style.right = '-150%';
}



const Notification_bar = () => {
  return (
    <div className='not_bar' id='Note'>
        <p className="top">
          Notification
          <i className="fa-solid fa-x" onClick={closeNote}></i>
        </p>
        <div  className="nots">
          <Link className='inf'>
            <div className="img_div color_r"> <img src={noti_success} alt="" /> </div>
              <div className="txt">
                <p className="p1">Your wallet has been credited!</p>
                <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                <p className="p3">Just now</p>
              </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            <Link className='inf'>
              <div className="img_div color_g"> <img src={noti_deposit} alt="" /> </div>
                  <div className="txt">
                    <p className="p1">Your wallet has been credited!</p>
                    <p className="p2">Your wallet has been credited with $1,5000 jhvjgvmhfcfcgnfnn</p>
                    <p className="p3">Just now</p>
                  </div>
              <div className="dot"></div>
            </Link>
            
        </div>
    </div>
  )
}

export default Notification_bar