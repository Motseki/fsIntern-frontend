import React from 'react'
import qmark_img from './images/qmark.svg'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './Close_auth.css'
import Auth_content from './Auth_content';

function openCloseModal(){
  document.getElementById('close_auth').style.display = 'flex';
}

function closeCloseModal(){
  document.getElementById('close_auth').style.display = 'none';
}

function openModalq(){
  document.getElementById('modalq').style.display = 'flex';
}

function openOtherReason(){
  document.getElementById('otherReason').style.visibility = 'visible';
  document.getElementById('otherReason').style.height = '130px';
}

const Close_auth = (props) => {
  return (
    <div className="Close_auth" id='close_auth'>

      <div className="modal">
          <span className='sp1'><i className="material-icons-outlined" onClick={closeCloseModal}>close</i></span>
          <img src={qmark_img} alt="" />
          <p className="p1">Are you sure to cancel ?</p>
          <p className="p2">You wil lose your data.</p>
          <span className="links">
            <Link to="" className='a a1' onClick={closeCloseModal}>Continue with order</Link>
            <Link to="" className='a a2' onClick={openModalq}>Yes, cancel</Link>
          </span>
      </div>

      <div className="modalq" id='modalq'>
        <p className="top">Reason for Cancellation <i className="fa-solid fa-x" onClick={closeCloseModal}></i></p>
        <p className="info">
          <i className="material-icons-outlined">info</i>
          Ensure you have not made any payment in the process before this cancellation, else, the fund is gone. Ensure you have not made any payment.
        </p>
        <form action="" className="frm_inf" id='frm_inf'>
          <span className='sp'>
          <input type="radio" id="f1" name="f"  />
          <label for="f1">Just trying things out</label>          
          </span>
          <span className='sp'>
            <input type="radio" id="f2"  name="f" />
            <label htmlFor="f2">Lost interest in the process</label>            
          </span>
          <span className='sp'>
            <input type="radio" id="f3"  name="f" />
            <label htmlFor="f3">Just carrying out a research</label>            
          </span>
          <span className='sp'>
            <input type="radio" id="f4"  name="f" />
            <label htmlFor="f4">I prefer to use another merchant</label>            
          </span>      
          <span className='sp'>
            <input type="radio" id="f5"  name="f" />
            <label htmlFor="f5">Poor customer service</label>            
          </span>
          <span className='sp' onClick={openOtherReason}>
            <input type="radio" id="f6"  name="f" />
            <label htmlFor="f6">Others</label>            
          </span>

          <textarea name="" id="otherReason" cols="30" rows="30" placeholder='Please state your reason for cancellation'></textarea>
          
          <span className="links">
            <Link to="" className='a a1' onClick={closeCloseModal}>Go Back</Link>
            <Link to={props.back} type="submit " className='a a2'>Cancel</Link>
            {/* <button type="submit " className='a a2'>Cancel</button> */}
          </span>
        </form>

      </div>
    </div>
    
  )
}

export default Close_auth