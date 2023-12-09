import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import EscrowDataContext from '../Contexts/EscrowDataContext';

import AccountContext from '../Contexts/AccountContext';
import AuthDataContext from '../Contexts/AuthDataContext';
import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';
import TradeContexts from '../Contexts/TradeContexts';
  // const { currencyCalcData } = useContext(CurrencyCalcContext);

  import BuyerAccountContext from '../Contexts/BuyerAccountContext';

import BankOpt from './BankOpt.js';
import CryptoWalletOpt from './CryptoWalletOpt.js';
import BankSelectModal from './BankSelectModal';
import OriginAcctDataContext from '../Contexts/OriginAcctDataContext';

function Originating_account_auth({ display, onclick, backclick }) {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('fiat');
  const [bankOption, setBankOption] = useState('');
  const [account_type, setAccount_type] = useState('');
  // const [currency, setCurrency] = useState('');
  const [holder_name, setHolder_name] = useState('');
  const [bank_or_network, setBank_or_network] = useState('');
  const [number_or_address, setNumber_or_address] = useState('');


  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const location = useLocation();
  const { updateContextData } = useContext(AuthDataContext);
  const [inputData, setInputData] = useState('');



  const {contextData } = useContext(AuthDataContext);
  const accessKey  = contextData.accessKey;
  const { tradeContextData } = useContext(TradeContexts);
  const { currencyCalcData } = useContext(CurrencyCalcContext);

  const { updateEscrowData } = useContext(EscrowDataContext);
  const { updateCurrencyCalcData } = useContext(CurrencyCalcContext);
  const { updateAccountContextData, addToPaymentAccounts } = useContext(AccountContext);
  const { updateBuyerAccountContextData } = useContext(BuyerAccountContext);

  const [isAcctComplete, setIsAcctComplete  ] = useState(false);
  const [isAccountCreated, setIsAccountCreated  ] = useState(false);



    
  const { updateTradeContextData } = useContext(TradeContexts);
  const [amount, setAmount] = useState(""); // State to hold the input amount


 const currency = currencyCalcData.currency_calc_fromcurrency;


 const [bankNameInput, setBankNameInput] = useState(''); // State to store the input value
 const [isModalVisible, setModalVisible] = useState(false);
 const [selectedBank, setSelectedBank] = useState(null); // State to store the selected bank

//  const [origin_acct_type, setOrigin_acct_type] = useState('');
//  const [origin_currency, setOrigin_currency] = useState('');
//  const [origin_holder_name, setOrigin_holder_name] = useState('');
//  const [origin_bank_or_network, setOrigin_bank_or_network] = useState('');
//  const [origin_number_or_address, setOrigin_number_or_address] = useState('');
 const { updateOriginAcctData } = useContext(OriginAcctDataContext);



 // Function to toggle the visibility of the modal
 const toggleModal = () => {
   setModalVisible(!isModalVisible);
 };

 // Function to update the selected bank
 const handleBankSelect = (selectedBankValue) => {
   setSelectedBank(selectedBankValue);
 };

 // Function to update the input value
 const handleBankNameInputChange = (value) => {
   setBankNameInput(value);
 };



  const handleAccountSubmit = async (e) => {
    e.preventDefault();

    try {

      // onclick();

      const response = await axios.post(
        'https://finstack-production.herokuapp.com/wallets/accounts/',
        {
          account_type: 'Fiat',
          currency,
          holder_name,
          bank_or_network: bankOption,
          number_or_address,
        },
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

        const origin_currency = currency;
        const origin_bank_or_network = bankOption;


      updateOriginAcctData({  origin_currency,  origin_bank_or_network });


      // await handleEscrowTest();

      console.log('your selected account_type:', account_type);
      console.log('your selected bank:', bankOption);
      console.log('your selected currency:', currency);
      console.log('your selected holder_name:', holder_name);
      console.log('your selected bank_or_network:', bank_or_network);

      // updateBuyerAccountContextData({ buyer_payment_account });

            console.log('Signup successful:', response.data);
      console.log('your selected account_type:', account_type);
      console.log('your selected bank:', bankOption);
      console.log('your selected currency:', currency);
      console.log('your selected holder_name:', holder_name);
      console.log('your selected bank_or_network:', bank_or_network);
    
      const buyer_payment_account = response.data.data.public_id;
      updateBuyerAccountContextData({ buyer_payment_account });

      setIsAcctComplete(true);

      console.log('isAccountCreated successful?', isAcctComplete);

      setIsAcctComplete(true);



      onclick();
      setIsAcctComplete(true);



    } catch (error) {
      console.error('escrow failed:', error.escrowTestResponse.data);
    }
  };





  const [isOtherBankSelected, setIsOtherBankSelected] = useState(false); // New state for tracking if "other option" is selected

  // Function to handle the selection of the bank option
  const handleSelectedBank = (selectedValue) => {
    setBankOption(selectedValue);

    // Check if the selected option is "other option" and toggle the display accordingly
    setIsOtherBankSelected(selectedValue === '');
  };



  console.log('your currency', currency)
  console.log('your BANK ACCOUNT', bankOption)
  console.log('your holder name', holder_name)




  console.log('your bankname FROM GRAA', bankNameInput)
  console.log('bankNameInput in Originating_account_auth:', bankNameInput);



 

  return (
    <form action="" className="frm Idi" style={{ display }} onSubmit={handleAccountSubmit} >
      {/* <BankSelectModal /> */}
      {/* {isModalVisible && (
        <BankSelectModal
          inputValue={bankNameInput} // Pass the input value as a prop
          onInputChange={handleBankNameInputChange} // Pass the callback function
        />
      )} */}


      <p className="t1">Originating account</p>
      <p className="t2">Where are you sending from?</p>

      <div className="qs">
        {/* <span className="spq">
          <span className="sp sp2">
            <label htmlFor="fname">Method of payment</label>
            <span className="els">
              <span className="el">
                <input
                  type="radio"
                  id="el2"
                  name="el"
                  value="fiat"
                  checked={paymentMethod === 'fiat'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="el2">Fiat</label>
              </span>
              <span className="el">
                <input
                  type="radio"
                  id="el"
                  name="el"
                  value="crypto"
                  checked={paymentMethod === 'crypto'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="el">Crypto</label>
              </span>
            </span>
          </span>
        </span> */}

        {paymentMethod === 'fiat' && (
        <span className="qs fiat_div">    
            {/* <span className="spq">
              <span className="sp sp2 spC">
                <label htmlFor="fname">Select type</label>
                <div className="box">
                  <BankTransferOpt />
                </div>
              </span>
            </span> */}

            <span className="spq">
              <div className="line"></div>
            </span>

            <span className="spq">
              <span className="sp sp2 spC">
                <label htmlFor="fname">Bank</label>
                <div className="box">
                <BankOpt onBankSelect={handleSelectedBank} />

                </div>
              </span>
            </span>


          <span className="spq otherbank" style={{ display: isOtherBankSelected ? 'flex' : 'none' }}>
            <span className="sp sp2">
              
              <label htmlFor="fname">Other Bank</label>
              <input type="text" name="fname" id="" placeholder="Enter other bank"
                value={bankOption}
                onChange={(e) => setBankOption(e.target.value)}
              />

            </span>
        </span>


        <span className="spq">
            <span className="sp sp2">

              <label htmlFor="fname">Account number</label>
              <input type="text" name="fname" id="" placeholder="Account number"
                value={number_or_address}
                onChange={(e) => setNumber_or_address(e.target.value)}
              />

            </span>
        </span>



        <span className="spq">
            <span className="sp sp2">
              <label htmlFor="fname">Account holder’s name</label>
              <input type="text" name="fname" id="" placeholder="Maverick Owen" className='uneditable_inpu '
              value={holder_name}
              onChange={(e) => setHolder_name(e.target.value)}
              />
            </span>
         </span>



        </span> 


       

        
        )}

        {paymentMethod === 'crypto' && (
        <span className="qs crypto_div">     
            <span className="spq">
              <span className="sp sp2">
                <label htmlFor="fname">Network</label>
                <div className="box">
                  <CryptoWalletOpt />
                </div> 
                </span>
            </span>

            <span className="spq">
              <span className="sp sp2">
                <label htmlFor="fname">Wallet address</label>
                <input type="text" name="fname" id="" placeholder="Wallet address"/>
              </span>
            </span>

            <span className="spq">
                <span className="sp sp2">
                  <label htmlFor="fname">Wallet holder’s name</label>
                  <input type="text" name="fname" id="" placeholder="Maverick Owen" className='uneditable_input '/>
                </span>
             </span>



        </span> 
        
        )}

       






        <span className="spq">
          <div className="links">
            <button onClick={backclick} className="a a1">
              Back
            </button>
            <button onClick={handleAccountSubmit} type="submit" className="a a2">
              Save & Continue
            </button>
          </div>
        </span>
      </div>
    </form>
  );
}

export default Originating_account_auth;
