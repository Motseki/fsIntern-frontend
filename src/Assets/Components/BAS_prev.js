import React, { useContext, useState } from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth_content from './Auth_content';
import upload_img from './images/upload.svg';
import bk_img1 from './images/blg_img.svg';
import Profp from './Profp';
import Profp_img from './Profp_img.js';
import prof_img from './images/file_img.svg';
import AuthDataContext from '../Contexts/AuthDataContext';
import UserInfoContext from '../Contexts/UserInfoContext';
import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';
import DataInputForm from './DataInputForm';
import TradeContexts from '../Contexts/TradeContexts';
import BuyerAccountContext from '../Contexts/BuyerAccountContext';
import ReceiverAccountContext from '../Contexts/ReceiverAccountContext';
import EscrowDataContext from '../Contexts/EscrowDataContext';
import OriginAcctDataContext from '../Contexts/OriginAcctDataContext';
import TransferDataContext from '../Contexts/TransferDataContext';
import TradeDataContexts from '../Contexts/TradeDataContexts';
import PidAuthData from '../Contexts/PidAuthData';
import Auth_nav from './Auth_nav';
import Header from '../steppers/Header';

// import React, {useContext} from "react";
// import { UserContext } from "./contexts/UserContext";
import { UserPrevDetailsContext } from '../Contexts/UserPrevDetailsContext';
import Idi from './Idi.js';
import { NavContext } from '../Contexts/NavContent';
import { NavInfoContext } from '../Contexts/NavInfoContext';





function BAS_prev( {props, display, onclick, backclick } ){

  const {ShowPrevInfo} = useContext(NavContext);

  const [ShowIdInfo, setShowIdInfo] = useState(false);

  const { token, updateToken, user, updateUser, contextData } = useContext(AuthDataContext);
  const { userInfoData } = useContext(UserInfoContext);
  const { currencyCalcData } = useContext(CurrencyCalcContext);
  const { tradeContextData } = useContext(TradeContexts);
  const { buyerAccountContextData } = useContext(BuyerAccountContext);
  const { receiverAccountContextData } = useContext(ReceiverAccountContext);
  const { escrowData } = useContext(EscrowDataContext);
  const { originAcctData } = useContext(OriginAcctDataContext);
  const { transferData } = useContext(TransferDataContext);
  const {pidcontextData } = useContext(PidAuthData);

  const {country, first_name, last_name, phone_number, date_of_birth, residential_address, region} = useContext(UserPrevDetailsContext);

  return (

    <body>
      <NavInfoContext.Provider value={{ShowIdInfo, setShowIdInfo}}>
      {ShowIdInfo && !ShowPrevInfo ?  (
    <form action="" className="frm BAS_prev" style={{display: display,}}>
    <p className="t1">Confirm details</p>
    <p className="t2">Subtext comes here on identity details</p>

    <div className="qs qf">
        <span className="spq">
            <div className="profile">
                <span className="img">
                    <p>ME</p>
                    {/* <div className="bck" style={{backgroundImage: `url(${bk_img1})`}}></div> */}
                </span>
                <span className="user">
                    <p className="p1">{first_name} {last_name}</p>
                    <p className="p2">{contextData.email}</p> 
                </span>
            </div>
        </span>

        <span className="spq">
            <ul className="prof">
              <Profp p1='Phone number' p2={phone_number} />  
              <Profp p1='Email' p2={contextData.email} />
              <Profp p1='Nationality' p2={country} /> 
              <Profp p1='Country of residence' p2={country}/>
              <Profp p1='State/province/region' p2={region} />
              <Profp p1='Address' p2={residential_address} /> 
              {/* <Profp p1='ID Type' p2={formData.} /> */}
              {/* <Profp p1='Issuing country' p2='Nigeria' /> */}
              {/* <Profp_img p1='ID Upload' img_name='' />
              <Profp_img p1='Finstack requested selfie' img_name='' /> */}


            </ul>
        </span>

        <span className="spq">
          <div className="links">
            <Link onClick={backclick} className="a a1">Back</Link>
            {/* <button type="submit" className="a a2">Save & continue</button> */}
            <Link to="/Seller_details_success" className="a a2">Save & continue</Link>

          </div>
        </span>
    </div>
  </form>)
  :<Idi/>}
  </NavInfoContext.Provider>
</body>
  ) 
}

export default BAS_prev