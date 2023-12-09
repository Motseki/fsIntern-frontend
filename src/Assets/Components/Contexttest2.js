import React, { useContext } from 'react';
import AuthDataContext from '../Contexts/AuthDataContext';
import DataInputForm from './DataInputForm';
import AccountContext from '../Contexts/AccountContext';

const Contexttest2 = () => {
  const { contextData } = useContext(AuthDataContext);
  const { accountContextData } = useContext(AccountContext);

  return (
    <div>
        <h1>CONTEXT TEST 2 HERE</h1>
      <h1>{contextData.email}</h1>
      <h1>Your buyer_payment_account  {accountContextData.buyer_payment_account}</h1>
      <h1>Your buyer_receive_account  {accountContextData.buyer_receive_account}</h1>


      {/* <DataInputForm /> */}
    </div>
  );
};

export default Contexttest2;
