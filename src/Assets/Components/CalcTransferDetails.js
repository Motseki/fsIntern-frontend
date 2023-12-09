import React, { useRef, useContext, useEffect, useState } from 'react';
import EscrowDataContext from '../Contexts/EscrowDataContext';
import AuthDataContext from '../Contexts/AuthDataContext';

import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';
import { Link, useNavigate } from 'react-router-dom';
import ProcessingAnimation from './ProcessingAnimation';
import axios from 'axios'; // Import Axios

import TransferDataContext from '../Contexts/TransferDataContext';

import TradeDataContexts from '../Contexts/TradeDataContexts';


function CalcTransferDetails({ display, onclick, backclick }) {

  const { transferData } = useContext(TransferDataContext);


  const { updateTransferData } = useContext(TransferDataContext);


  const navigate = useNavigate();
  const { currencyCalcData } = useContext(CurrencyCalcContext);
  const { escrowData } = useContext(EscrowDataContext);
  const [tradeData, setTradeData] = useState(null);

  const {contextData } = useContext(AuthDataContext);
  const accessKey  = contextData.accessKey;
  const { updateEscrowData } = useContext(EscrowDataContext);

  const { trade_Data } = useContext(TradeDataContexts);



  useEffect(() => {
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



        
        // const transfer_acct_number = response.data.data.account_type;
        // const transfer_bank = response.data.data.bank_or_network;
        // const transfer_acct_name = response.data.data.holder_name;
        // const transfer_exp_pay = response.data.data.purchase_amount;

        // const transfer_acct_type = response.data.data.account_type;
        // const transfer_bank = response.data.data.bank_or_network;
        // const transfer_acct_name = response.data.data.holder_name;
        // const transfer_currency = response.data.data.currency;
        // const transfer_acct_number = response.data.data.number_or_address;
        // const transfer_id = response.data.data.public_id;
  
        // updateTransferData({
        //   transfer_currency,
        //   transfer_acct_type,
        //   transfer_acct_number,
        //   transfer_acct_name,
        //   transfer_bank,
        //   transfer_id
        // })
  
        const transfer_acct_type = response.data.data.account_type;
        const transfer_bank = response.data.data.escrow_account.bank_or_network;
        const transfer_acct_name = response.data.data.escrow_account.holder_name;
        const transfer_currency = response.data.data.buy_currency;
        const transfer_acct_number = response.data.data.escrow_account.number_or_address;
        // const transfer_id = response.data.data.public_id;
  
        updateTransferData({
          transfer_currency,
          // transfer_acct_type,
          transfer_acct_number,
          transfer_acct_name,
          transfer_bank,
          // transfer_id
        })
  
  

        // setTimeout(fetchTradeData, 2500); // Delay for 1 second (adjust as needed)

      } catch (error) {
        console.error('Error fetching trade data:', error);
      }
    } 

    // if (trade_Data.trade_public_id) {
    //   fetchTradeData();
    // }
    // setTimeout(fetchTradeData, 1000); // Delay for 1 second (adjust as needed)

  }, [trade_Data.trade_public_id]);

  setTimeout(fetchTradeData, 4500); // Delay for 1 second (adjust as needed)


  console.log(' THE TRADE DATA', tradeData)


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



      
      // const transfer_acct_number = response.data.data.account_type;
      // const transfer_bank = response.data.data.bank_or_network;
      // const transfer_acct_name = response.data.data.holder_name;
      // const transfer_exp_pay = response.data.data.purchase_amount;

      const transfer_acct_type = response.data.data.account_type;
      const transfer_bank = response.data.data.escrow_account.bank_or_network;
      const transfer_acct_name = response.data.data.escrow_account.holder_name;
      const transfer_currency = response.data.data.buy_currency;
      const transfer_acct_number = response.data.data.escrow_account.number_or_address;
      // const transfer_id = response.data.data.public_id;

      updateTransferData({
        transfer_currency,
        // transfer_acct_type,
        transfer_acct_number,
        transfer_acct_name,
        transfer_bank,
        // transfer_id
      })



    } catch (error) {
      console.error('Error fetching trade data:', error);
    }
  } 




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
        if (response.data.data.status === "Confirmed") {
          navigate('/CalcAuthSuccess');
        } else {
          // If the status is not "Confirmed", call the function again after a delay
          setTimeout(fetchTradeData, 4000); // Delay for 1 second (adjust as needed)
        }
        
        } catch (error) {
          console.error('Error fetching trade data:', error);
        }
      }
  
      if (trade_Data.trade_public_id) {
        fetchTradeData();
      }
  
      // console.error('unfortunate');
    }









  function copyAccountNumber() {
    const accountNumberElement = document.querySelector('.tx2');
    navigator.clipboard
      .writeText(accountNumberElement.textContent)
      .then(() => {
        console.log('Account number copied successfully');
      })
      .catch((err) => {
        console.error('Failed to copy account number: ', err);
      });
  }

  // Define a function to render the currency symbol based on the escrowData.currency
  function renderCurrencySymbol() {
    switch (transferData.transfer_currency) {
      case 'NGN':
        return '₦';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'THE':
        return '₮'; // Replace with the actual symbol for 'THE'
      default:
        return ''; // Default to an empty string if currency is not recognized
    }
  }

  return (
    <form action="" className="frm Idi" style={{ display }}>
      <div className="qs qs2 CalcPaymentConfirmation_div">
        <span className="spq spq2">
          <span className="sp sp2 sp3">
            <p className="top">Kindly make your transfer into the account below</p>
          </span>
        </span>

        <span className="spq" >
          <span className="sp sp2">
            <div className="details">
              <div className="det">
                <p className="tx tx1">Account Number</p>
                <span className="spt">
                  {' '}
                  <p className="tx tx2">{transferData.transfer_acct_number}</p>{' '}
                  <i className="material-symbols-outlined" onClick={copyAccountNumber}>
                    file_copy
                  </i>
                </span>
              </div>
              <div className="det">
                <p className="tx tx1">Account Name</p>
                <span className="spt">
                  {' '}
                  <p className="tx tx2">{transferData.transfer_acct_name}</p>
                </span>
              </div>
              <div className="det">
                <p className="tx tx1">Bank</p>
                <span className="spt">
                  {' '}
                  <p className="tx tx2">{transferData.transfer_bank}</p>
                </span>
              </div>
              <div className="det">
                <p className="tx tx1">Expected payment</p>
                <span className="spt">
                  {' '}
                  <p className="tx tx2">
                    {renderCurrencySymbol()} {trade_Data.trade_purchase_amount}
                  </p>
                </span>
              </div>
            </div>
          </span>
        </span>

        <span className="spq">
          <div className="links">
            <button className="a a2 a3" onClick={handleLinkClick}>
              I have transferred<b> {renderCurrencySymbol()} {trade_Data.trade_purchase_amount} </b>to the account above!
            </button>
          </div>
        </span>

        <span className="spq">
          <p className="pr">
            Having issues? <Link className="a" onClick={backclick} >Try another account</Link>
          </p>
        </span>

        <span className="spq spy" style={{ display: 'none' }} onClick={handleLinkClick} onMouseOver={handleLinkClick} >
          <ProcessingAnimation text='Processing, please wait ...' />
        </span>
      </div>
    </form>
  );
}

export default CalcTransferDetails;
