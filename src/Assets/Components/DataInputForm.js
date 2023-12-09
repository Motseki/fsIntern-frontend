import React, { useContext, useState } from 'react';
// import { AuthDataContext } from '../Contexts/AuthDataContext';
import AuthDataContext from '../Contexts/AuthDataContext';
import CurrencyCalcContext from '../Contexts/CurrencyCalcContext';
import TradeContexts from '../Contexts/TradeContexts';
import BuyerAccountContext from '../Contexts/BuyerAccountContext';
import ReceiverAccountContext from '../Contexts/ReceiverAccountContext';
import OriginAcctDataContext from '../Contexts/OriginAcctDataContext';
import TransferDataContext from '../Contexts/TransferDataContext';

const DataInputForm = () => {
  const { updateContextData } = useContext(AuthDataContext);
  const { updateCurrencyCalcData } = useContext(CurrencyCalcContext);
  const { updateOriginAcctData } = useContext(OriginAcctDataContext);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const [country, setCountry] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [residential_address, setResidential_address] = useState('');
  const [region, setRegion] = useState('');
  const [fromcurrency, setFromcurrency] = useState('');
  const [fromcurrencyamount, setFromcurrencyamount] = useState('');
  const [tocurrency, setTocurrency] = useState('');
  const [tocurrencyamount, setTocurrencyamount] = useState('');
  
  const { updateTradeContextData } = useContext(TradeContexts);
  const [amount, setAmount] = useState(""); // State to hold the input amount
  const [buyer_payment_account, setBuyer_payment_account] = useState(''); // State to hold selected currency
  const [buyer_receive_account, setBuyer_receive_account] = useState(''); // State to hold selected currency

  const { updateBuyerAccountContextData } = useContext(BuyerAccountContext);
  const { updateReceiverAccountContextData } = useContext(ReceiverAccountContext);
  const { updateTransferData } = useContext(TransferDataContext);

  const [origin_acct_type, setOrigin_acct_type] = useState('');
  const [origin_currency, setOrigin_currency] = useState('');
  const [origin_holder_name, setOrigin_holder_name] = useState('');
  const [origin_bank_or_network, setOrigin_bank_or_network] = useState('');
  const [origin_number_or_address, setOrigin_number_or_address] = useState('');
  // const [origin_acct_type, setOrigin_acct_type] = useState('');
  // const [origin_acct_type, setOrigin_acct_type] = useState('');
  const [transfer_acct_number, setTransfer_acct_number] = useState('');

  

  const handleSubmit = e => {
    e.preventDefault();
    updateContextData({ email, password, accessKey, country,
      first_name,
      last_name,
      phone_number,
      date_of_birth,
      residential_address,
      region, });

      updateCurrencyCalcData({
        fromcurrency,
        fromcurrencyamount,
        tocurrency,
        tocurrencyamount,
      });

      updateTradeContextData({buyer_payment_account, buyer_receive_account, amount})
      updateBuyerAccountContextData({ buyer_payment_account });
      updateReceiverAccountContextData({ buyer_receive_account });

      updateOriginAcctData({ origin_acct_type, origin_currency, origin_holder_name, origin_bank_or_network, origin_number_or_address });
      updateTransferData({
        transfer_acct_number,
        // transfer_acct_name,
        // transfer_bank,
        // transfer_exp_pay
      })
  };

  return (
    <form onSubmit={handleSubmit}>
       <input
        type="text"
        value={origin_acct_type}
        onChange={e => setOrigin_acct_type(e.target.value)}
        placeholder="Enter origin_acct_type"
      />
      <br />

<br />
<br />

<input
        type="text"
        value={transfer_acct_number}
        onChange={e => setTransfer_acct_number(e.target.value)}
        placeholder="setTransfer_acct_number"
      />
      <br />
<br />
<br />
<br />



      <input
        type="text"
        value={buyer_payment_account}
        onChange={e => setBuyer_payment_account(e.target.value)}
        placeholder="Enter buyer_payment_account"
      />
      <br />
      <input
        type="text"
        value={buyer_receive_account}
        onChange={e => setBuyer_receive_account(e.target.value)}
        placeholder="Enter buyer_receive_account"
      />
      <br />
      <input
        type="text"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <br />
      {/* <input
        type="text"
        value={buyer_payment_account}
        onChange={e => setBuyer_payment_account(e.target.value)}
        placeholder="Enter buyer_payment_account"
      /> */}
      <br />
      <input
        type="text"
        value={buyer_receive_account}
        onChange={e => setBuyer_receive_account(e.target.value)}
        placeholder="Enter buyer_receive_account"
      />
      <br />

<br />
<br />


      <input
        type="text"
        value={fromcurrency}
        onChange={e => setFromcurrency(e.target.value)}
        placeholder="Enter fromcurrency"
      />
      <br />
      <input
        type="text"
        value={fromcurrencyamount}
        onChange={e => setFromcurrencyamount(e.target.value)}
        placeholder="Enter fromcurrencyamount"
      />
      <br />
      <input
        type="text"
        value={tocurrency}
        onChange={e => setTocurrency(e.target.value)}
        placeholder="Enter tocurrency"
      />
      <br />
      <input
        type="text"
        value={tocurrencyamount}
        onChange={e => setTocurrencyamount(e.target.value)}
        placeholder="Enter tocurrencyamount"
      />
      <br />




      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <br />
       <input
        type="text"
        value={accessKey}
        onChange={e => setAccessKey(e.target.value)}
        placeholder="Enter access key"
      />
      <br />
      <input
        type="text"
        value={first_name}
        onChange={e => setFirst_name(e.target.value)}
        placeholder="first name"
      />
      <br />
        <input
        type="text"
        value={last_name}
        onChange={e => setLast_name(e.target.value)}
        placeholder="last_name"
      />
      <br />
        <input
        type="text"
        value={phone_number}
        onChange={e => setPhone_number(e.target.value)}
        placeholder="phone_number"
      />
      <br />
        <input
        type="text"
        value={date_of_birth}
        onChange={e => setDate_of_birth(e.target.value)}
        placeholder="date_of_birth"
      />
      <br />
        <input
        type="text"
        value={residential_address}
        onChange={e => setResidential_address(e.target.value)}
        placeholder="residential_address"
      />
      <br />
        <input
        type="text"
        value={region}
        onChange={e => setRegion(e.target.value)}
        placeholder="region"
      />
      <br />
      
      
      <button type="submit">Update Data</button>
    </form>
  );
};

export default DataInputForm;
