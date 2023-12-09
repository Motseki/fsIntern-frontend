import React, { useState } from 'react'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SectS from './SectS';

function passFunction() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  var y = document.getElementById("vis");
  if (y.innerHTML === "visibility_off") {
    y.innerHTML = "visibility";
  } else {
    y.innerHTML = "visibility_off";
  }
}

const Seller_signup = () => {
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasAlphanumeric, setHasAlphanumeric] = useState(false);
  const [hasOther, setHasOther] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const regexUppercase = /[A-Z]/;
    const regexLowercase = /[a-z]/;
    const regexAlphanumeric = /[0-9]/;
    const regexOther = /[^A-Za-z0-9]/;

    setHasUppercase(regexUppercase.test(password));
    setHasLowercase(regexLowercase.test(password));
    setHasAlphanumeric(regexAlphanumeric.test(password));
    setHasOther(regexOther.test(password));

    // Check if all password conditions are met
    if (regexUppercase.test(password) && regexLowercase.test(password) && regexAlphanumeric.test(password) && regexOther.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }

    setSubmitEnabled(regexUppercase.test(password) && regexLowercase.test(password) && regexAlphanumeric.test(password) && regexOther.test(password));

  };

  const handleSubmit = (event) => {
    const confirmPassword = document.getElementById("confirm-password").value;
    const createPassword = document.getElementById("pass").value;

    if(confirmPassword === createPassword){

    } else{
      event.preventDefault();

    }
    // if( 
        
    // Submit form data
    // event.preventDefault();
    if (hasUppercase && hasLowercase && hasAlphanumeric && hasOther) {
      // if (hasUppercase && hasLowercase && hasAlphanumeric && hasOther && confirmPassword === event.target.password.value) {

    }
     else {
      // Password conditions are not met, do not submit form data
      // ...
      
      // event.preventDefault();
    }
    
  };


  
  const getClassName = (condition) => {
    return condition ? 'ggg' : '';
  };

  return (
    <body> 
      <main>
        <section className="sectioni">
          <img src={logo} alt="" className="logo" />
          <p className="t1">Become a Seller</p>
          <p className="t2">Fill in your details to continue</p>
          <form action="" onSubmit={handleSubmit}>
            <span className="spf">
              <label htmlFor="email">Email</label>
              <span className='inp'><input type="email" name="" id="" placeholder='Enter email'/></span>
            </span>

            <span className="spf">
              <label htmlFor="password">Create password</label>
              <span className='inp'>
                <input type="password" name="" id="pass" placeholder='Password' onChange={handlePasswordChange}/>
                <i className="material-icons-outlined" id='vis' onClick={passFunction}>visibility</i>
              </span>
            </span>

            <div className="pass">
              <span className="sp">
                <h3><div className={getClassName(hasUppercase)}></div> At least one uppercase</h3>
                <h3><div className={getClassName(hasAlphanumeric)}></div> At least one alphanumeric</h3>
              </span>
              <span className="sp">
                <h3><div className={getClassName(hasLowercase)}></div> At least one lowercase</h3>
                <h3><div className={getClassName(hasOther)}></div> At least one other thing</h3>
              </span>
            </div>

            <span className="spf">
              <label htmlFor="password">Confirm password</label>
              <span className='inp'><input type="password" name="" id="confirm-password" placeholder='Password'/></span>
            </span>

            <button type="submit" >Continue</button>                                    
          </form>
        </section> 
        <SectS />
      </main>
    </body>    
  )
}

export default Seller_signup
