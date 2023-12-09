import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';

import AuthDataContext from '../Contexts/AuthDataContext';

import axios from 'axios';
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg';
import str_user from './images/str_user.svg';
import Sect2 from './Sect2';



const Signup_page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const location = useLocation();
  const { updateContextData } = useContext(AuthDataContext);
  const [inputData, setInputData] = useState('');

  

    // Use the useNavigate hook to navigate to the SignupOTPPage page and pass the email variable as a query parameter.
    const navigate = useNavigate(); // Call useNavigate directly inside the component.


  const handleSignup = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('https://finstack-production.herokuapp.com/users/signup/', {
        email,
        password,
      });

      // const handleSubmit = e => {
        // e.preventDefault();
        // updateContextData({ email, password, isAuthenticated: true});
        const accessKey = response.data.data.access; // Extract access key from response

        // Update the context data with the email, password, accessKey, and isAuthenticated
        updateContextData({ email, password, accessKey, });

      // Handle the response from the signup API as needed.
      console.log('Signup successful:', response.data);

      // Set the state variable to indicate that the signup is complete.
      setIsSignupComplete(true);

    } catch (error) {
      // Handle any errors that occurred during the signup process.
      console.error('Signup failed:', error.response.data);
    }
  };

 

  useEffect(() => {
    // Send the OTP once the signup is verified
    if (isSignupComplete) {
      sendOTP();
    }
  }, [isSignupComplete]);

  const sendOTP = async () => {
    try {
      // const emailParam = encodeURIComponent(email);
      navigate(`/Signup_otp`);
      // Replace 'YOUR_OTP_API_ENDPOINT' with the actual URL of your OTP endpoint.
      const otpResponse = await axios.post('https://finstack-production.herokuapp.com/users/otp/', {
        action: 'send',
        email,
      });

      // window./

      // Handle the response from the OTP API as needed.
      console.log('OTP sent successfully:', otpResponse.data);

    } catch (error) {
      // Handle any errors that occurred during OTP generation.
      console.error('Failed to send OTP:', error.response.data);
      // You can show an error message to the user or handle the error in any way you prefer.
    }
  };

  function passFunction() {
    var x = document.getElementById('pass');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
    var y = document.getElementById('vis');
    if (y.innerHTML === 'visibility_off') {
      y.innerHTML = 'visibility';
    } else {
      y.innerHTML = 'visibility_off';
    }
  }

  return (
    <body>
      <main>
        <section className="sectioni">
          <img src={logo} alt="" className="logo" />
          <p className="t1">Welcome, Let's get you onboard</p>
                <p className="t2">Fill in your email address to continue.</p>
          {!isSignupComplete ? (
            <form onSubmit={handleSignup}>
              <div className="spf">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="spf">
                <label htmlFor="password">Password</label>
                <span className="inp">
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i className="material-icons-outlined" onClick={passFunction} id="vis">
                    visibility
                  </i>
                </span>
              </div>

              <button type="submit">Create account</button>
              <p className="tc">By continuing you agree to our <a href="">Terms and conditions</a> and <a href="">Privacy Policy</a> </p>
                    {/* <div className="or"><span></span><p>OR</p><span></span></div>
                    <div className="social_in">
                        <a href=""><img src={google_img} alt="" /> Continue with Google</a>
                        <a href=""><img src={str_user} alt="" /> Sign in as a Guest</a>
                    </div> */}
                    <p className="already">Already have an account? <Link to="/login">Log in</Link></p>
            </form>
          ) : (
            <p className="t2">Signup complete. Redirecting to OTP verification...</p>
          )}
        </section>
        <Sect2 />
      </main>
    </body>
  );
};

export default Signup_page;
