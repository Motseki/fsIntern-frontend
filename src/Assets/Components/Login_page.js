import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';

import AuthDataContext from '../Contexts/AuthDataContext';
import UserInfoContext from '../Contexts/UserInfoContext';

import axios from 'axios';import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route } from "react-router-dom";





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

const Login_page = () => {
  const [email, setEmail] = useState('');
  const { token, updateToken, user, updateUser, contextData } = useContext(AuthDataContext);

  const [password, setPassword] = useState('');
  const [isLoginComplete, setIsLoginComplete] = useState(false);
  const location = useLocation();
  const { updateContextData } = useContext(AuthDataContext);
    const { userInfoData } = useContext(UserInfoContext);
  const { updateuserInfoData } = useContext(UserInfoContext);



    const navigate = useNavigate(); // Call useNavigate directly inside the component.


  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('https://finstack-production.herokuapp.com/users/login/', {
        email,
        password,
      });

      const accessKey = response.data.data.access;
      const first_name = response.data.data.first_name;
      const last_name = response.data.data.last_name;
      const public_id = response.data.data.public_id;
      updateContextData({
        email,
        password,
        accessKey,
        first_name,
        last_name,
        public_id,
        isAuthenticated: true, // Setting isAuthenticated to true upon successful login
      });
      
        updateuserInfoData({ first_name, last_name, public_id, email });


      // Handle the response from the Login API as needed.
      console.log('Login successful:', response.data);

      console.log('Updated Context Data:', contextData);

      // Set the state variable to indicate that the Login is complete.
      setIsLoginComplete(true);
      navigate(`/wallet_index`);
      console.log(' Your access key ',accessKey)
      console.log(' Your first_name key ',first_name)
      console.log(' Your last_name key ',last_name)
      console.log(' Your public key ',public_id)



    } catch (error) {
      // Handle any errors that occurred during the Login process.
      console.error('Login failed:', error.response.data);
      // You can show an error message to the user or handle the error in any way you prefer.
    }
  };

  
  return (
           

<body> 
<main>
<section className="sectioni">
                <img src={logo} alt="" className="logo" />
                <p className="t1">Welcome, Let's get you back in</p>
                <p className="t2">Fill in your details to continue.</p>
                <form onSubmit={handleLogin}>
                    <span className='spf'>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="" id="" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='Example@gmail.com'/>
                    </span>
                    
                    <span className="spf">
                        <label htmlFor="password">Password</label>
                    <span className='inp'><input type="password" name="" id="pass" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Password'/><i className="material-icons-outlined" id='vis' onClick={passFunction}>visibility</i></span>
                    <Link to="/forgot_pass" className="forgot">Forgot Password?</Link>

                    </span>
                    
                    <button type="submit">Log in</button>
                    
                    {/* <div className="or"><span></span><p>OR</p><span></span></div>
                    
                    <div className="social_in">
                        <a href=""><img src={google_img} alt="" /> Continue with Google</a>
                    </div> */}
                    <p className="already">Don't have an account? <Link to="/signup">Sign up</Link></p>
                </form>
            </section>  
        <Sect2 />
</main>
</body>    
  )
}

export default Login_page