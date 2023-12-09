import React, { useState, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';import logo from './images/logo.svg';
import axios from 'axios';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route} from "react-router-dom";



const Forgot_password_page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const location = useLocation();


    // Use the useNavigate hook to navigate to the SignupOTPPage page and pass the email variable as a query parameter.
    const navigate = useNavigate(); // Call useNavigate directly inside the component.


  const sendOTP = async () => {
    try {
      const emailParam = encodeURIComponent(email);
      navigate(`/forgot_pin?email=${emailParam}`);
      // Replace 'YOUR_OTP_API_ENDPOINT' with the actual URL of your OTP endpoint.
      const otpResponse = await axios.post('https://finstack-production.herokuapp.com/users/otp/', {
        action: 'send',
        email,
      });

      // Handle the response from the OTP API as needed.
      console.log('OTP sent successfully:', otpResponse.data);

    } catch (error) {
      // Handle any errors that occurred during OTP generation.
      console.error('Failed to send OTP:', error.response.data);
      // You can show an error message to the user or handle the error in any way you prefer.
    }
  };

  return (
            

<body> 
<main>
<section className="sectioni">
                <img src={logo} alt="" className="logo" />
                <p className="t1">Forgot Password</p>
                <p className="t2">Fill in your details to continue</p>
                <form onSubmit={sendOTP}>
                    <span className='spf'>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="" id="" placeholder='Email address'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </span>

                    <button type="submit">Send reset link</button>                    
                
                    <p className="already">Remember Password? <Link to={-1}>Login</Link></p>
                </form>
            </section> 
        <Sect2 />
</main>
</body>    
  )
}

export default Forgot_password_page