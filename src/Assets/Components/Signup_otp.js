import React, { useState, useRef, useEffect, useContext } from 'react';
import AuthDataContext from '../Contexts/AuthDataContext';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg';
import str_user from './images/str_user.svg';
import Sect2 from './Sect2';
import { useSelector } from 'react-redux';


// import { useHistory } from 'react-router-dom';


const Signup_otp = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { contextData } = useContext(AuthDataContext);


  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');

  const [verificationStatus, setVerificationStatus] = useState(null);
  const concatenatedOTP = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = contextData.email;






  const [countdown, setCountdown] = useState(60); // State for countdown

  // ... (rest of the component remains the same)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          clearInterval(countdownInterval);
          return 0;
        }
      });
    }, 1000); // Update every second (1000 milliseconds)
  
    return () => clearInterval(countdownInterval); // Cleanup on unmount or re-render
  }, [countdown]); // Update based on countdown
  
  useEffect(() => {
    // Set the initial countdown to 10 minutes when the component mounts
    setCountdown(600);
  }, []); // Run once on initial render

  
  
  let expirationText;
  if (countdown === 0) {
    expirationText = <p className="to to2"><span className='ap'>Expired</span></p>;
  } else {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    expirationText = (
      <p className="to to2">
        Expires in <span className='ap'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
      </p>
    );
  }






  const handleOTPSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('https://finstack-production.herokuapp.com/users/otp/', {
        action: 'verify',
        email,
        otp: concatenatedOTP, // Send the concatenated OTP to the server
      });

      // Handle the response from the OTP verification API as needed.
      console.log('OTP verification successful:', response.data);

      // Set the verification status to true to indicate successful verification.
      setVerificationStatus(true);
      navigate('/signup_info');

      

    } catch (error) {
      // Handle any errors that occurred during OTP verification.
      console.error('OTP verification failed:', error.response.data);

      // Set the verification status to false to indicate failed verification.
      setVerificationStatus(false);
    }
  };

  const handleOTPresend = async (e) => {
    try {
      const otpResponse = await axios.post('https://finstack-production.herokuapp.com/users/otp/', {
        action: 'send',
        email,

      });

      console.log('OTP sent successfully:', otpResponse.data);
      alert('OTP was successfully resend, please check your email!');

    } catch (error) {
      console.error('Failed to re-send OTP:', error.response.data);
    }
  };



  

  console.log(email);

  
  console.log(concatenatedOTP);

  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(-1);
    }
    if (e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleDelete = (e, index) => {
    if (e.key === 'Delete' && !e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleLastInput = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(-1);
    }
  };

const asteriskMiddle = (email) => {
  if (email && email.length > 6) {
    const atIndex = email.indexOf('@');
    if (atIndex > 3) {
      const start = email.slice(0, 2); // Up to 2 characters before the '@'
      const middle = '*'.repeat(atIndex - 3); // Asterisks for the middle
      const end = email.slice(atIndex - 2); // Including the last two characters before '@'
      return start + middle + end;
    }
  }
  return email;
};


  return (
    <body>
      <main>
        <section className="sectioni">
          <img src={logo} alt="" className="logo" />
          <p className="t1">OTP</p>
          <p className="to">
            Kindly enter the 6-digit code sent to your email <br />
            <span className="ap">{asteriskMiddle(email)}</span> {/* Use the asterisked email */}
          </p>
          <form action="" className="form2" onSubmit={handleOTPSubmit}>
            <span className="ct">
              <input
                type="number"
                name="otp1"
                id="otp1"
                value={otp1}
                onChange={(e) => setOtp1(e.target.value)}
                maxLength="1"
                ref={(el) => (inputRefs.current[0] = el)}
                onInput={(e) => handleInput(e, 0)}
              />
              <input
                type="number"
                name="otp2"
                id="otp2"
                value={otp2}
                onChange={(e) => setOtp2(e.target.value)}
                maxLength="1"
                ref={(el) => (inputRefs.current[1] = el)}
                onInput={(e) => handleInput(e, 1)}
                onKeyDown={(e) => handleBackspace(e, 1)}
              />
              <input
                type="number"
                name="otp3"
                id="otp3"
                value={otp3}
                onChange={(e) => setOtp3(e.target.value)}
                maxLength="1"
                ref={(el) => (inputRefs.current[2] = el)}
                onInput={(e) => handleInput(e, 2)}
                onKeyDown={(e) => handleBackspace(e, 2)}
              />

              <input
                type="number"
                name="otp4"
                id="otp4"
                value={otp4}
                onChange={(e) => setOtp4(e.target.value)}
                maxLength="1"
                ref={(el) => (inputRefs.current[3] = el)}
                onInput={(e) => handleInput(e, 3)}
                onKeyDown={(e) => handleBackspace(e, 3)}
              />
              <input
                type="number"
                name="otp5"
                id="otp5"
                value={otp5}
                onChange={(e) => setOtp5(e.target.value)}
                maxLength="1"
                ref={(el) => (inputRefs.current[4] = el)}
                onInput={(e) => handleInput(e, 4)}
                onKeyDown={(e) => handleBackspace(e, 4)}
              />
              <input
                type="number"
                name="otp6"
                id="otp6"
                value={otp6}
                onChange={(e) => setOtp6(e.target.value)}
                maxLength="1"
                ref={(el) => (inputRefs.current[5] = el)}
                onInput={(e) => handleInput(e, 5)}
                onKeyDown={(e) => handleBackspace(e, 5)}
              />
            </span>
            {/* <span className="ap">{finalEmail}</span> */}


            {verificationStatus === false && (
              <p className="error">OTP verification failed. Please try again.</p>
            )}

            <button type="submit">Continue</button>

            <p className="">{expirationText}</p>
            <p className="to to2">
              Didn’t get the code? 
              <p to="" className="a" onClick={handleOTPresend}  >
                Resend
              </p>
            </p>

            <p className="already">
              <Link to="/login">Go back</Link>
            </p>
          </form>
        </section>
        <Sect2 />
      </main>
    </body>
  );
};

export default Signup_otp;
