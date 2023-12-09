import React, { useContext, useState } from 'react';
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
import PidAuthData from '../Contexts/PidAuthData.js';
 
const Contextstest = () => {
  const { token, updateToken, user, updateUser, contextData } = useContext(AuthDataContext);
  const { userInfoData } = useContext(UserInfoContext);
  const { currencyCalcData } = useContext(CurrencyCalcContext);
  const { tradeContextData } = useContext(TradeContexts);
  const { buyerAccountContextData } = useContext(BuyerAccountContext);
  const { receiverAccountContextData } = useContext(ReceiverAccountContext);
  const { escrowData } = useContext(EscrowDataContext);
  const { originAcctData } = useContext(OriginAcctDataContext);
  const { transferData } = useContext(TransferDataContext);

  const { trade_Data } = useContext(TradeDataContexts);


  const { updateTransferData } = useContext(TransferDataContext);
  const { updateTrade_Data } = useContext(TradeDataContexts);


  const [transfer_acct_number, setTransfer_acct_number] = useState('');
  const [trade_public_id, setTrade_public_id] = useState('');
  const [trade_escrow, setTrade_escrow] = useState('');
  const [trade_purchase_amount, setTrade_purchase_amount] = useState('');

  const {pidcontextData } = useContext(PidAuthData);

  const handleSubmit = e => {
    updateTransferData({
      transfer_acct_number,
      // transfer_acct_name,
      // transfer_bank,
      // transfer_exp_pay
    })
    updateTrade_Data({
      trade_public_id,
      trade_escrow,
      trade_purchase_amount,
    })
  };


  return (
    <div>
      <div>
        <h2>Token: {token}</h2>
        {/* <button onClick={() => updateToken('new-token-value')}>Update Token</button> */}
        <h2>User Email: {contextData.email}</h2>

        <h1>originAcctData</h1>


        <h2>origin_acct {originAcctData.origin_acct}</h2>
        <br />
        <h2>origin_acct {originAcctData.origin_currency}</h2>
        <br />
        <h2>origin_acct {originAcctData.origin_bank_or_network}</h2>



        <br />
        <br />

        <h1>TradeDataContext</h1>


        <h2>trade_public_id {trade_Data.trade_public_id}</h2>
        <h2>trade_escrow {trade_Data.trade_escrow}</h2>
        <h2>trade_purchase_amount {trade_Data.trade_purchase_amount}</h2>


        <br />

        <br />


        <h1>TransferDataContext</h1>

        <h2>transfer_acct_type {transferData.transfer_acct_type}</h2>
        <h2>transfer_acct_number {transferData.transfer_acct_number}</h2>
        <h2>transfer_acct_name {transferData.transfer_acct_name}</h2>
        <h2>transfer_bank {transferData.transfer_bank}</h2>
        <h2>transfer_currency {transferData.transfer_currency}</h2>
        <h2>transfer_id {transferData.transfer_id}</h2>


        <br />

        <br />
        <br />



      <h1>ESCROW</h1>

        <h2>User account_type: {escrowData.escrow_account_type}</h2>
        <h2>User account_number: {escrowData.escrow_account_number}</h2>
        <h2>User holder_name: {escrowData.escrow_holder_name}</h2>
        <h2>User bank_or_network: {escrowData.escrow_bank_or_network}</h2>
        <h2>User expected_payment: {escrowData.escrow_expected_payment}</h2>
        <h2>User currency: {escrowData.escrow_currency}</h2>
        <h2>User public_id: {escrowData.escrow_public_id}</h2>
        <h2>User escrow_tradeId: {escrowData.escrow_escrow_tradeId}</h2>


        <h1>ESCROW ENDS HERE</h1>





        <br />


      <h1>currencyCalcData</h1>

        <h2>fromcurrency: {currencyCalcData.currency_calc_fromcurrency}</h2>
        <h2>fromcurrency: {currencyCalcData.currency_calc_tocurrency}</h2>
        <h2>amount: {currencyCalcData.currency_calc_amount}</h2>
        <h2>public_id: {currencyCalcData.currency_calc_public_id}</h2>
        <h2>rate: {currencyCalcData.currency_calc_rate}</h2>
        {/* <h2>rate: {currencyCalcData.buyer_payment_account}</h2> */}

<br />

        <h1>buyerAccountContextData</h1>

        <h2>buyer_payment_account: {buyerAccountContextData.buyer_payment_account}</h2>
        <h2>buyer_receive_account: {receiverAccountContextData.buyer_receive_account}</h2>



<br />
  <h1>contextData</h1>
 <br />

        <h2>contextData Password: {contextData.password}</h2>
        <h2>contextData email: {contextData.email}</h2>

        <h2>isAuthenticated: {contextData.isAuthenticated}</h2>


        <h2>contextData accessKey: {contextData.accessKey}</h2>
        <h2>contextData first_name: {userInfoData.first_name}</h2>
        <h2>contextData last_name: {userInfoData.last_name}</h2>
        <h2>contextData phone_number: {userInfoData.public_id}</h2>

<br />
        <h2>contextData buyer_payment_account: {tradeContextData.buyer_payment_account}</h2> <br />
        <h2>contextData buyer_receive_account: {tradeContextData.buyer_receive_account}</h2>
<br />

        <h2>contextData date_of_birth: {contextData.date_of_birth}</h2>
        <h2>contextData residential_address: {contextData.residential_address}</h2>
        <h2>contextData region: {contextData.region}</h2>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        <h2>pidcontextData : {pidcontextData.first_name}</h2>
        <h2>pidcontextData : {pidcontextData.last_name}</h2>
        <h2>pidcontextData : {pidcontextData.phone_number}</h2>

        <h2>pidcontextData : {pidcontextData.date_of_birth}</h2>
        <h2>pidcontextData : {pidcontextData.country}</h2>
        <h2>pidcontextData : {pidcontextData.region}</h2>
        <h2>pidcontextData : {pidcontextData.residential_address}</h2>



        {/* <button onClick={() => updateUser({ email: 'new-email', password: 'new-password', accessKey: 'new-access-key' })}>Update User</button> */}
      </div>
      <DataInputForm />

    <form onMouseOver={handleSubmit}>
       <input
        type="text"
        value={transfer_acct_number}
        onChange={e => setTransfer_acct_number(e.target.value)}
        placeholder="setTransfer_acct_number"
      />

        <br />

       <input
        type="text"
        value={trade_public_id}
        onChange={e => setTrade_public_id(e.target.value)}
        placeholder="setTrade_public_id"
      />
 <br/>
 <br />

<input
 type="text"
 value={trade_escrow}
 onChange={e => setTrade_escrow(e.target.value)}
 placeholder="setTrade_escrow"
/>


<br />
<br />

<input
 type="text"
 value={trade_purchase_amount}
 onChange={e => setTrade_purchase_amount(e.target.value)}
 placeholder="setTrade_purchase_amount"
/>


<br />
<br />

<button type="submit">Update Data</button>

    </form>

     
    </div>
  );
};

export default Contextstest;
