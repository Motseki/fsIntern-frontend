import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';

import AuthDataContext from '../Contexts/AuthDataContext';


import Auth_content from './Auth_content.js'
import axios from 'axios';
import CountryOpt from './CountryOpt.js';
import DateofBirthOpt from './DateofBirthOpt.js';
import PidAuthData from '../Contexts/PidAuthData.js';

function Pid({ display, onclick, backclick }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setcountry] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [residential_address, setResidential_address] = useState('');
  const [region, setRegion] = useState('');



  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const location = useLocation();
  const { updateContextData } = useContext(AuthDataContext);

  const { updatePidContextData } =  useContext(PidAuthData);

  const [inputData, setInputData] = useState('');
  const {contextData } = useContext(AuthDataContext);
  const {pidcontextData } = useContext(PidAuthData);

  const accessKey  = contextData.accessKey;

  const handleSelectedDOB = (selectedValue) => {
    setDate_of_birth(selectedValue);
  };

  console.log(date_of_birth, 'this is DATE OF BIRTH');

  

  const handlePersonalinfoSubmit  = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('https://finstack-production.herokuapp.com/users/personal-informations/', {
       
        first_name,
        last_name,
        phone_number,
        date_of_birth,
        country,
        region,
        residential_address,
      },
      {
        headers: {
          Authorization: `Bearer ${accessKey}`,
          'Content-Type': 'application/json',
        },
      }
      );

  
        // const accessKey = response.data.data.access; // Extract access key from response

        // Update the context data with the email, password, accessKey, and isAuthenticated
        updateContextData({ email, password, accessKey, isAuthenticated: true });
        updatePidContextData({ 
          first_name,
          last_name,
          phone_number,
          date_of_birth,
          country,
          region,
          residential_address,
        });

      // Handle the response from the signup API as needed.
      console.log('Signup successful:', response.data);

      // Set the state variable to indicate that the signup is complete.
      setIsSignupComplete(true);
      onclick()

    } catch (error) {
      // Handle any errors that occurred during the signup process.
      console.error('Signup failed:', error.response.data);
    }
  };

  console.log('first_name', first_name);
  console.log('last_name', last_name);
  console.log('phone_number', phone_number);
  console.log('date_of_birth', date_of_birth);
  console.log('country', country);
  console.log('region', region);
  console.log('residential_address', residential_address);

  const handleSelectedCountry = (selectedValue) => {
    setcountry(selectedValue);
  };


  return (
    <form action="" className="frm PID" onSubmit={handlePersonalinfoSubmit}>
    <p className="t1">Personal information</p>
    <p className="t2">Enter your personal details as required below</p>

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
          <input type="text" name="lname" id="" placeholder="Enter your last name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            />
        </span>
      </span>

      {/* <span className="spq">
        <span className="sp">
          <label htmlFor="fname">Other name</label>
          <input type="text" name="oname" id="" placeholder="Other name (s)"
            // value={last_name}
            // onChange={(e) => setLast_name(e.target.value)}
          />
        </span>
        
        <span className="sp">
          <label htmlFor="lname">Preffered username</label>
          <input type="text" name="lname" id="" placeholder="Enter your username"/>
        </span>
      </span> */}

      <span className="spq">
        <span className="sp">
          <label htmlFor="fname">Phone number</label>
          <input type="text" name="fname" id="" placeholder="+1 1325 1899"
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
          />
        </span>
        
        {/* <span className="sp sp2 spC">
              <label htmlFor="fname">Date of birth</label>
              <div className="box">
                <DateofBirthOpt onBankSelect={handleSelectedDOB}  />
              </div>
            </span> */}
        
        <span className="sp">
          <label htmlFor="fname">Date of birth</label>
          <input type="date" name="fname" id="" placeholder="+234 1325 1899"
              value={date_of_birth}
              onChange={(e) => setDate_of_birth(e.target.value)}
          />
        </span>

      </span>


      {/* <span className="spq">
      <span className="sp sp2 spC">
              <label htmlFor="fname">Country of residence</label>
              <div className="box">
                <CountryOpt  />
              </div>
            </span>
        
          <span className="sp sp2 spC">
            <label htmlFor="fname">Nationality</label>
            <div className="box">
              <CountryOpt  />
            </div>
          </span>


      </span> */}

      <span className="spq">

        <span className="sp sp2 spC">
          <label htmlFor="fname">Country of residence</label>
          <div className="box">
            <CountryOpt onBankSelect={handleSelectedCountry} />
          </div>
        </span>
        
        <span className="sp">
          <label htmlFor="lname">Region / state</label>
          <input type="text" name="lname" id="" placeholder="Region / state"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
          />
        </span>

      </span>

      
      <span className='spq' >

        <span className="sp">
          <label htmlFor="fname">Local Government Area</label>
          <input type="text" name="fname" id="" placeholder="Enter LGA"
              value={residential_address}
              onChange={(e) => setResidential_address(e.target.value)}
          />
        </span>

      {/* <span className="spq"> */}
        <span className="sp">
          <label htmlFor="fname">Residential address</label>
          <input type="text" name="fname" id="" placeholder="Residential Address"/>
        </span>
      {/* </span> */}
      </span>

      <span className="spq">
        <p className="dt_info"><i className="material-icons-outlined">event_note</i> Ensure your name matches the name on your ID card</p>
      </span>

      <span className="spq">
        <div className="links">
          <button onClick={backclick} className="a a1">Go Back</button>
          <button  type="submit" className="a a2">Save & continue</button>
        </div>
      </span>

    </div>
  </form>
  )
}

export default Pid