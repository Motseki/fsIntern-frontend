import React, { createContext, useState, useEffect } from 'react';

const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
  const [userInfoData, setuserInfoData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    public_id: '',
    // email: '',

    // first_name: '',
    // last_name: '',
    phone_number: '',
    date_of_birth: '',
    country: '',
    region: '',
    residential_address: '',
    

    isAuthenticated: false,
    userRole: 'user' ,
  });

  useEffect(() => {
    const storedData = localStorage.getItem('userInfoData');
    if (storedData) {
      setuserInfoData(JSON.parse(storedData));
    }
  }, []);

  const updateuserInfoData = newData => {
    // setuserInfoData(newData);
    setuserInfoData(prevData => ({
             ...prevData,
             ...newData,
             isAuthenticated: newData.isAuthenticated, // Ensure this property is updated correctly
           }));
           localStorage.setItem('userInfoData', JSON.stringify(newData));
         };
   
  return (
    <UserInfoContext.Provider value={{ userInfoData}}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoContext;
