import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import AuthDataContext from '../Contexts/AuthDataContext.js';

import {BrowserRouter, Routes, Route } from "react-router-dom";
import Auth_content from './Auth_content.js'


function CalcIdAuth({ display, onclick, backclick }){
  const [country, setCountry] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [residential_address, setResidential_address] = useState('');
  const [region, setRegion] = useState('');
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const { updateContextData } = useContext(AuthDataContext);
  const location = useLocation();
  const [inputData, setInputData] = useState('');

  const {contextData } = useContext(AuthDataContext);

  const accessKey  = contextData.accessKey;

  // const handleApplyToTrack = async () => {
  //   setLoading(true);

  //   try {
  //     const response = await courseManager.ApplyToTrack(trackId);
  //     notification(response?.message[0], 'success');
  //     navigate('/portal')
  //   } catch (error: any) {
  //     notification(error?.response?.data?.message[0], 'error');
  //     if (error?.response?.data?.message[0] === 'Already enrolled') {
  //       return navigate('/portal');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    try {


      const response = await axios.post(
        'https://finstack-production.herokuapp.com/users/personal-informations/',
        {
          country,
          first_name,
          last_name,
          phone_number,
          date_of_birth,
          residential_address,
          region,
        },
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
            'Content-Type': 'application/json',
          },
        }
      );



      // Handle the response from the signup API as needed.
      // console.log('Signup successful:', response.data);
      console.log('Personal info submit successful:', response.status);
      // console.log('yhep it worked PART2 2', );

      console.log('Personal info submit successful:', response.data.message);
      // console.log('yhep it worked PART2 3', );
      // console.log('yhep it worked PART2 4', );


      console.log(isSignupComplete)
     

      // Set the state variable to indicate that the signup is complete.
      setIsSignupComplete(true);

      onclick();
    

    } catch (error) {
      // Handle any errors that occurred during the signup process.
      console.error('Signup failed:', error.response.data);
    }
  };

 

  // console.log(accessKey)
  console.log(' access key ', contextData.accessKey);


  return (
    <form action="" className="frm PID" onSubmit={handlePersonalInfoSubmit}>
    <p className="t1">Personal information</p>
    <p className="t2">Enter your personal details as required {contextData.last_name} </p>


    <div className="qs">
      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">First name</label>
          <input type="text" name="fname" id="" placeholder="Enter your first name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </span>
        
        <span className="sp">
          <label htmlFor="lname">Last name</label>
          <input type="text" name="lname" id="" placeholder="Last name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
        </span>
      </span>
      
      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">Phone number</label>
          <input type="text" name="fname" id="" placeholder="238 2378 891"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
          />
        </span>
        
        <span className="sp">
          <label htmlFor="lname">Date of birth</label>
          <input type="text" name="lname" id="" placeholder="YYYY-MM-DD"
            value={date_of_birth}
            onChange={(e) => setDate_of_birth(e.target.value)}
          />
        </span>
      </span>
      
       <span className="spq">
        <span className="sp sp2">
          <label htmlFor="fname">Address</label>
          <input type="text" name="fname" id="" placeholder="Enter Address"
            value={residential_address}
            onChange={(e) => setResidential_address(e.target.value)}
          />
        </span>
      </span>

      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">Country</label>
          <input type="text" name="fname" id="" placeholder="Select country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </span>
        
        <span className="sp">
          <label htmlFor="lname">Postal code</label>
          <input type="text" name="lname" id="" placeholder="Postal code"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </span>
      </span>



     

      <span className="spq">
        <p className="dt_info"><i className="material-icons-outlined">event_note</i> Ensure your name matches the name on your ID card</p>
      </span>

      <span className="spq">
        <div className="links">
          <button onClick={onclick} className="a a33">Skip</button>
          {/* <button  onclick={handlePersonalInfoSubmit}   type="submit" className="a a2" >Save & continue</button> */}
          <button  onClick={handlePersonalInfoSubmit}   type="submit" className="a a2" >Save & continue</button>
        </div>
      </span>


    </div>
  </form>
  )
}

export default CalcIdAuth