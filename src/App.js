import React, { useState, useContext } from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import AuthDataContext, { AuthDataProvider } from './Assets/Contexts/AuthDataContext';
import UserInfoContext, { UserInfoProvider } from './Assets/Contexts/UserInfoContext';
import CurrencyCalcContext, { CurrencyCalchDataProvider } from './Assets/Contexts/CurrencyCalcContext';

import ProtectedRoute from './ProtectedRoute';
// import BAS_prev from './BAS_prev';
// import Seller_details_success from './Seller_details_success';

import Home from './Assets/Components/Home';
import Email_confirm_page from './Assets/Components/Email_confirm_page';
import Signup_page from './Assets/Components/Signup_page';
import Login_page from './Assets/Components/Login_page';
import Forgot_password_page from './Assets/Components/Forgot_password_page';
import Page404 from './Assets/Components/Page404';
import Landing_nav from "./Assets/Components/Landing_nav";
import './App.css';
import Homme from './Homme';
import Forgot_password_pin from './Assets/Components/Forgot_password_pin';
import Reset_pass from './Assets/Components/Reset_pass';
import Reset_pass_success from './Assets/Components/Reset_pass_success';
import Blog_index from './Assets/Components/Blog_index';
import Blog_page from './Assets/Components/Blog_page';
import All_listings from './Assets/Components/All_listings';
import Contactus from './Assets/Components/Contactus';
import Seller_signup from './Assets/Components/Seller_signup';
import Seller_email from './Assets/Components/Seller_email';
// import BAS_auth from './Assets/Components/BAS_auth';
import Seller_details_success from './Assets/Components/Seller_details_success';
import Seller_profile from './Assets/Components/Seller_profile';
import ScrollToTop from "./ScrollToTop";
import Test from './Assets/Components/Test';
import Calc_auth from './Assets/Components/Calc_auth';
import Auth_content from './Assets/Components/Auth_content';
import Wallet_auth from './Assets/Components/WalletDepositAuth';
import Wallet_index from './Assets/Components/Wallet_index';
import Wallet_history from './Assets/Components/Wallet_history';
import WalletDepositAuth from './Assets/Components/WalletDepositAuth';
import WalletDepositAuth_success from './Assets/Components/WalletDepositAuth_success';
import WalletWithdrawAuth from './Assets/Components/WalletWithdrawAuth';
import WalletWithdrawAuth_success from './Assets/Components/WalletWithdrawAuth_success';
import CalcAuthSuccess from './Assets/Components/CalcAuthSuccess';
import CalcSuccessRate from './Assets/Components/CalcSuccessRate';
import P2PIndex from './Assets/Components/P2PIndex';
import Signup_otp from './Assets/Components/Signup_otp';


// import Idi from './Assets/Components/IdiModified';
import Idi from './Assets/Components/Idi';
// import Idi from './Assets/Components/IdiModified';

import SignpOTPPage from './Assets/Components/useNavigateToOTPPage';
import Contextstest from './Assets/Components/Contextstest';
import Contexttest2 from './Assets/Components/Contexttest2';
import Signup_info from './Assets/Components/Signup_info';
import BAS_prev from './Assets/Components/BAS_prev';


import VerificationStatusPage from './Assets/Components/VerificationStatusPage';
import TradeContexts, { TradeContextProvider } from './Assets/Contexts/TradeContexts';
import AccountContext, { AccountContexthDataProvider } from './Assets/Contexts/AccountContext';
import { BuyerAccountContextDataProvider } from './Assets/Contexts/BuyerAccountContext';
import { ReceiverAccountContextProvider } from './Assets/Contexts/ReceiverAccountContext';
import { EscrowDataProvider } from './Assets/Contexts/EscrowDataContext';
import P2Pgiftcards from './Assets/Components/P2Pgiftcards';
import { OriginAcctDataProvider } from './Assets/Contexts/OriginAcctDataContext';
import EscrowProcessingPage from './Assets/Components/EscrowProcessingPage';
import CalcPaymentConfirmation from './Assets/Components/CalcPaymentConfirmation';
import { TransferDataProvider } from './Assets/Contexts/TransferDataContext';
import { TradeDataProvider } from './Assets/Contexts/TradeDataContexts';
import ErrorBoundary from './Assets/Components/ErrorBoundary';
import axios from 'axios';
import ErrorModal from './ErrorModal';
import { PidAuthDataProvider } from './Assets/Contexts/PidAuthData';
import SuccessModal from './SuccessModal';
import RequireAuth from './Assets/Components/RequireAuth'; // Update the path if required
import { UserInfoDetailsContext } from './Assets/Contexts/UserInfoDetailsContext';

// Set up Axios interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log the error or send it to a server for tracking
    console.error(error);
    // Display a user-friendly error message
    if (error.response) {
      // Handle HTTP error responses (e.g., 404, 500)
      console.log("ok there's and error");
    } else if (error.request) {
      // Handle network issues (e.g., no internet connection)
      console.log("ok there's and error 2");

    } else {
      // Handle other errors
      console.log("ok there's and error 3");

    }
    return Promise.reject(error);
  }
);


function App() {
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // State for success message
  // Motseki Form Details
  const [formData, setFormData] = useState({country: "", 
                                            first_name: "" , 
                                            last_name: "", 
                                            phone_number: "", 
                                            date_of_birth: "",
                                            residential_address: "", 
                                            region: ""});
  // const [country, setCountry] = useState('');
  // const [first_name, setFirst_name] = useState('');
  // const [last_name, setLast_name] = useState('');
  // const [phone_number, setPhone_number] = useState('');
  // const [date_of_birth, setDate_of_birth] = useState('');
  // const [residential_address, setResidential_address] = useState('');
  // const [region, setRegion] = useState('');

  const showErrorModal = (errorMessage) => {
    setError(errorMessage);
  };

  const closeErrorModal = () => {
    setError(null);
  };

  const showSuccessModal = (successMessage) => {
    setSuccess(successMessage);
    setTimeout(() => {
      setSuccess(null);
    }, 3000); // Close the success modal after 3 seconds (adjust time as needed)
  };



  // Set up Axios interceptor
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // Log the error or send it to a server for tracking
      console.error(error);
      
      // Display a user-friendly error message and show the modal
      if (error.response) {
        // Handle HTTP error responses (e.g., 404, 500)
        console.log("ok there's an error");
        showErrorModal( error.response.data.message);
      } else if (error.request) {
        // Handle network issues (e.g., no internet connection)
        console.log("ok there's an error 2");
        showErrorModal(" Unable to reach the server");
      } else {
        // Handle other errors
        console.log("ok there's an error 3");
        showErrorModal("An unexpected error occurred");
      }
      
      return Promise.reject(error);
    }
  );


  window.onerror = function (message, source, lineno, colno, error) {
    console.error(error);
    // You can handle or log the error here
  };
  
  return (
    
    <ErrorBoundary>

    {/* </ErrorBoundary> */}

    <BuyerAccountContextDataProvider>

    <PidAuthDataProvider >

    {/* </PidAuthDataProvider> */}

    {/* </BuyerAccountContextDataProvider> */}
    <ReceiverAccountContextProvider>

    {/* </ReceiverAccountContextProvider> */}
    <AuthDataProvider>
    <UserInfoProvider>
    {/* <TradeContexts></TradeContexts> */}
    <TradeContextProvider>



    {/* </EscrowDataProvider> */}

      <CurrencyCalchDataProvider>
        <AccountContexthDataProvider>

      {/* </TradeContextProvider> */}
    <EscrowDataProvider>
      <OriginAcctDataProvider>

<TransferDataProvider>

{/* </TransferDataProvider> */}
      {/* </OriginAcctDataProvider> */}

      <TradeDataProvider>


        {/* Motseki Form Provider Details */}
        <UserInfoDetailsContext.Provider value={{formData, setFormData}}>
     {/* {ShowUserDetails ? <UserDetails/> :  <UserForm />}  */}
    
        
      {/* </TradeDataProvider> */}
      {error && <ErrorModal message={error} onClose={closeErrorModal} />}
      {/* {success && <SuccessModal message={error} onClose={closeErrorModal} />} */}


      <BrowserRouter><ScrollToTop />
      <Routes>
      <Route path='/' element={<Home />}></Route>

      {/* {error && <ErrorModal message={error} onClose={closeErrorModal} />} */}

      {/* <button onClick={() => { throw new Error('Test error'); }}>Trigger Error</button> */}

        <Route path='/Home' element={<Home />}></Route>
        <Route path='/contexttest' element={<Contextstest />}></Route>
        <Route path='/contexttest2' element={<Contexttest2 />}></Route>
        <Route path='/signup' element={<Signup_page />}></Route>
        <Route path='/signup_otp' element={<Signup_otp />}></Route>


        <Route path='/id_info' element={<Idi />}></Route>
        <Route path='/BAS_prev' element={<BAS_prev />}></Route>
       

        {/* <Route path='/SignpOTPPage' element={<SignpOTPPage />}   ></Route> */}
        <Route path='/login' element={<Login_page />}></Route>
        <Route path='/email_confirmation' element={<Email_confirm_page />}></Route>
        <Route path='/forgot_pass' element={<Forgot_password_page />}></Route>
        <Route path='/forgot_pin' element={<Forgot_password_pin />}></Route>
        <Route path='/reset_pass' element={<Reset_pass />}></Route>
        <Route path='/reset_pass_success' element={<Reset_pass_success />}></Route>
        <Route path='/blog_index' element={<Blog_index />}></Route>
        <Route path='/blog_page' element={<Blog_page />}></Route>
        <Route path='/listings' element={<All_listings />}></Route>
        <Route path='/contactus' element={<Contactus />}></Route>
        <Route path='/seller_up' element={<Seller_signup />}></Route>
        <Route path='/seller_email' element={<Seller_email />}></Route>
        <Route path='/pid_authentication' element={<Auth_content />}></Route>
        <Route path='/Seller_details_success' element={<Seller_details_success />}></Route>
        <Route path='/VerificationStatusPage' element={<VerificationStatusPage />}></Route>
        <Route path='/seller_profile' element={<Seller_profile />}></Route>
        <Route path='/Test' element={<Test />}></Route>

         
        <Route path='/wallet_index' element={<Wallet_index />}></Route>
        <Route path='/wallet_history' element={<Wallet_history />}></Route>
        {/* <Route path='/Calc_auth' element={<Calc_auth />}></Route> */}
        <Route path="/calc_auth" element={<RequireAuth component={Calc_auth} />} />


        <Route path='/CalcPaymentConfirmation' element={<CalcPaymentConfirmation />}></Route>
        <Route path="/CalcPaymentConfirmation/:trade" element={<CalcPaymentConfirmation />} />


        <Route path='/Signup_info' element={<Signup_info />}></Route>

    {/* <Route path='/Calc_auth' element={<ProtectedRoute component={Calc_auth} requiredRole="user" />} /> */}
    {/* <Route path='/wallet_index' element={<ProtectedRoute component={Wallet_index} requiredRole="user" />} /> */}
    {/* <Route path='/wallet_history' element={<ProtectedRoute component={Wallet_history} requiredRole="user" />} /> */}

        <Route path='/WalletDepositAuth' element={<WalletDepositAuth />}></Route>
        <Route path='/WalletWithdrawAuth' element={<WalletWithdrawAuth />}></Route>
        <Route path='/WalletDepositAuth_success' element={<WalletDepositAuth_success />}></Route>
        <Route path='/WalletWithdrawAuth_success' element={<WalletWithdrawAuth_success />}></Route>
        <Route path='/CalcAuthSuccess' element={<CalcAuthSuccess />}></Route>
        <Route path='/CalcSuccessRate' element={<CalcSuccessRate />}></Route>

        <Route path='/EscrowProcessingPage' element={<EscrowProcessingPage />}></Route>

        <Route path='/P2PIndex' element={<P2PIndex />}></Route>
        <Route path='/P2Pgiftcards' element={<P2Pgiftcards />}></Route>

        <Route path='/Page' element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>

    </UserInfoDetailsContext.Provider>
    </TradeDataProvider>


</TransferDataProvider>


    </OriginAcctDataProvider>


    </EscrowDataProvider>


    </AccountContexthDataProvider>


    </CurrencyCalchDataProvider>
    </TradeContextProvider>

    </UserInfoProvider>
  </AuthDataProvider>
  </ReceiverAccountContextProvider>
  </PidAuthDataProvider>

  </BuyerAccountContextDataProvider>

  </ErrorBoundary>

    
  );
}

export default App