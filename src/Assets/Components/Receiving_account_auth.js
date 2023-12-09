import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EscrowDataContext from '../Contexts/EscrowDataContext';
import AuthDataContext from '../Contexts/AuthDataContext';


import ProcessingAnimation from './ProcessingAnimation';

import TradeDataContexts from '../Contexts/TradeDataContexts';


import AccountContext from '../Contexts/AccountContext';
import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';
import TradeContexts from '../Contexts/TradeContexts';
  // const { currencyCalcData } = useContext(CurrencyCalcContext);

import BuyerAccountContext from '../Contexts/BuyerAccountContext';
import BankOpt from './BankOpt.js';
import CryptoWalletOpt from './CryptoWalletOpt.js';
import ReceiverAccountContext from '../Contexts/ReceiverAccountContext';
import BankSelectModal from './BankSelectModal';
import OriginAcctDataContext from '../Contexts/OriginAcctDataContext';
import TransferDataContext from '../Contexts/TransferDataContext';

function Receiving_account_auth({ display, onclick, backclick }) {

  const { updateTransferData } = useContext(TransferDataContext);

  const { trade_Data } = useContext(TradeDataContexts);
  const { updateTrade_Data } = useContext(TradeDataContexts);



  const navigate = useNavigate(); // Call useNavigate directly inside the component.
  const { escrowData } = useContext(EscrowDataContext);
  const [tradeData, setTradeData] = useState(null);


  const [paymentMethod, setPaymentMethod] = useState('fiat');
  const [bankOption, setBankOption] = useState('');
  const [account_type, setAccount_type] = useState('');
  // const [currency, setCurrency] = useState('');
  const [holder_name, setHolder_name] = useState('');
  const [bank_or_network, setBank_or_network] = useState('');
  const [number_or_address, setNumber_or_address] = useState('');

  const { updateEscrowData } = useContext(EscrowDataContext);


  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const location = useLocation();
  const { updateContextData } = useContext(AuthDataContext);

  const [inputData, setInputData] = useState('');

  const {contextData } = useContext(AuthDataContext);
  const accessKey  = contextData.accessKey;
  const { tradeContextData } = useContext(TradeContexts);
  const { currencyCalcData } = useContext(CurrencyCalcContext);
  const { updateCurrencyCalcData } = useContext(CurrencyCalcContext);
  const { updateAccountContextData, addToReceiveAccounts } = useContext(AccountContext);
  const { updateBuyerAccountContextData } = useContext(BuyerAccountContext);
  const { updateReceiverAccountContextData } = useContext(ReceiverAccountContext);

    
  const { updateTradeContextData } = useContext(TradeContexts);
  const [amount, setAmount] = useState(""); // State to hold the input amount
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isTradeCreated, setIsTradeCreated] = useState(false);


 const currency = currencyCalcData.currency_calc_fromcurrency;

 const { originAcctData } = useContext(OriginAcctDataContext);

//  Trade contexts

 const { buyerAccountContextData } = useContext(BuyerAccountContext);
 const { receiverAccountContextData } = useContext(ReceiverAccountContext);


  const handleAccountSubmit = async (e) => {
    e.preventDefault();
 
    try {

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


      const buyer_receive_account = response.data.data.public_id;
      updateReceiverAccountContextData({ buyer_receive_account });


      console.log('Signup successful:', response.data);
      console.log('your selected account_type:', account_type);
      console.log('your selected bank:', bankOption);
      console.log('your selected currency:', currency);
      console.log('your selected holder_name:', holder_name);
      console.log('your selected bank_or_network:', bank_or_network);
      console.log('your selected number_or_address:', number_or_address);
      setIsAccountCreated(true);
      // onclick();
      createTrade();
      // const spqElements = document.querySelectorAll('.spq');
      // spqElements.forEach((element) => {
      //   element.style.display = 'none';
      // });
      // const spyElement = document.querySelector('.spy');
      // spyElement.style.display = 'flex';
    
  

      

    } catch (error) {
      console.error('Signup failed:', error.response.data);


    }
  };


  // useEffect(() => {
  //   // Send the OTP once the signup is verified
  //   if (isAccountCreated) {
  //     createTrade();
  //     // handleEscrowTest();

  //   }
  // }, [isAccountCreated]);


  const createTrade = async () => {
    try {

      const buy_acct = buyerAccountContextData.buyer_payment_account;
      const rec_acct = receiverAccountContextData.buyer_receive_account;
      const obj_id = currencyCalcData.currency_calc_public_id;
      const pri_ce = currencyCalcData.currency_calc_rate;
      const buy_cury = currencyCalcData.currency_calc_fromcurrency;
      const amnt = currencyCalcData.currency_calc_amount;

      const response = await axios.post(
        'https://finstack-production.herokuapp.com/trades/',
        {
          seller: "finstack",
          buyer_payment_account: buyerAccountContextData.buyer_payment_account,
          buyer_receive_account: receiverAccountContextData.buyer_receive_account,
          object_public_id: currencyCalcData.currency_calc_public_id,
          price: currencyCalcData.currency_calc_rate,
          buy_currency: currencyCalcData.currency_calc_fromcurrency,
          amount: currencyCalcData.currency_calc_amount,
        },
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('TRADE creation successfull', response.data);
      console.log('TRADE creation details', response.data.listings);

      const trade_public_id = response.data.data.public_id;
      const trade_escrow = response.data.data.escrow;
      const trade_purchase_amount = response.data.data.purchase_amount;
      const trade_status = response.data.data.status;


      updateTrade_Data({
        trade_public_id,
        trade_escrow,
        trade_purchase_amount,
        trade_status
      })

      console.log('trade_public_id:', trade_public_id );
      console.log('trade_escrow:', trade_escrow );
      console.log('trade_purchase_amount:', trade_purchase_amount );


      setIsTradeCreated(true)
        

    } catch (error) {
      // Handle any errors that occurred during OTP generation.
      console.error('Failed to create TRADE:', error.response.data);
      setIsTradeCreated(false)

      // You can show an error message to the user or handle the error in any way you prefer.
    }
  };

// ESCROW TEST
  
useEffect(() => {
  // Send the OTP once the signup is verified
  if (isTradeCreated) {
    handleEscrowTest();
  }
}, [isTradeCreated]);


  

  const handleEscrowTest = async () => {

        const spqElements = document.querySelectorAll('.spq');
    spqElements.forEach((element) => {
      element.style.display = 'none';
    });
    const spyElement = document.querySelector('.spy');
    spyElement.style.display = 'flex';
  

    try {

      // const originacct = originAcctData.origin_acct;
      const orgincurrency = originAcctData.origin_currency;
      const originbnkacct = originAcctData.origin_bank_or_network;


      const escrowTestResponse = await axios.post(
        'https://finstack-production.herokuapp.com/wallets/transactions/escrow-account/',
        {
          account_type: "Fiat",
          currency: originAcctData.origin_currency,
          bank_or_network: originAcctData.origin_bank_or_network,
        },
        {
          headers: {
            Authorization: `Bearer ${accessKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      

      const transfer_acct_type = escrowTestResponse.data.data.account_type;
      const transfer_bank = escrowTestResponse.data.data.bank_or_network;
      const transfer_acct_name = escrowTestResponse.data.data.holder_name;
      const transfer_currency = escrowTestResponse.data.data.currency;
      const transfer_acct_number = escrowTestResponse.data.data.number_or_address;
      const transfer_id = escrowTestResponse.data.data.public_id;

      updateTransferData({
        transfer_currency,
        transfer_acct_type,
        transfer_acct_number,
        transfer_acct_name,
        transfer_bank,
        transfer_id
      })


      console.log('escrow successful:', escrowTestResponse.data);


      onclick();

    } catch (error) {

      // navigate('/CalcPaymentConfirmation');
      // onclick();

        // Uncomment here
      handleLinkClick();
      console.error('Failed to load escrow:', error.response.data);
      
      
      const spqElements = document.querySelectorAll('.spq');
      spqElements.forEach((element) => {
        element.style.display = 'none';
      });
      const spyElement = document.querySelector('.spy');
      spyElement.style.display = 'flex';
    
    } 
  };


      // Uncomment here

  function handleLinkClick(event) {
    event.preventDefault();
    const spqElements = document.querySelectorAll('.spq');
    spqElements.forEach((element) => {
      element.style.display = 'none';
    });
    const spyElement = document.querySelector('.spy');
    spyElement.style.display = 'flex';
  
      // Fetch trade data using the public_id from escrowData
      async function fetchTradeData() {
        try {
          const response = await axios.get(`https://finstack-production.herokuapp.com/trades/${trade_Data.trade_public_id}`, {
            headers: {
              Authorization: `Bearer ${accessKey}`,
              'Content-Type': 'application/json',
            },
          });
          // Assuming the trade data is returned as JSON
          setTradeData(response.data);
          console.log(' THE TRADE DATA', tradeData)


                 // Check if the status is "Confirmed" and navigate to the success page
        if (response.data.data.escrow_account !== null) {
          onclick();
      console.error('YAYYYY');

        } else {
          // If the status is not "Confirmed", call the function again after a delay
          setTimeout(fetchTradeData, 4000); // Delay for 1 second (adjust as needed)
      console.error('unfortunate');

        }
        
        } catch (error) {
          console.error('Error fetching trade data:', error);
        }
      }
  
      if (escrowData.escrow_tradeId) {
        fetchTradeData();
      }
  
  }



// console.log( 'The trade id is here',escrowData.escrow_tradeId)


   








  const handleSelectedBank = (selectedValue) => {
    setBankOption(selectedValue);
  };



  return (
    <form action="" className="frm Idi" style={{ display }}>
      {/* <BankSelectModal /> */}

      <p className="t1">Receving account</p>
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
                  {/* <BankOpt onBankSelect={handleBankOptChange} /> */}
                  <BankOpt onBankSelect={handleSelectedBank} />
                </div>
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

        <span className="spq spy" 
        style={{ display: 'none' }} 

        onMouseOver={handleLinkClick} 

         >
          <ProcessingAnimation text='ESCROW Processing ...' />
        </span>
      </div>
    </form>
  );
}

export default Receiving_account_auth;
