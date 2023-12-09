import React, { useState } from 'react';
import './BankSelectModal.css';

const BankSelectModal = (props) => {
  const [bankNameInput, setBankNameInput] = useState(props.bankNameInput); // Set the initial value from the prop

  const handleInputChange = (event) => {
    setBankNameInput(event.target.value);
    props.onInputChange(event.target.value); // Call the parent's callback function to update the input value
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.onBankSubmit(bankNameInput); // Call the parent's callback function
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.onBankSubmit(bankNameInput); // Call the parent's callback function
  };

  return (
    <div className='bankSelectModal'>
      <form action="" className="bankform" >
        <div className="close_icon"><i className="material-icons">close</i></div>
        <div className="img_bck_div"></div>
        <div className="bank_input_div">
          <input
            type="text"
            className='bank_input_field'
            placeholder='Enter Bank name'
            value={bankNameInput}
            onChange={handleInputChange}
          />
          <button type="submit" className='submit_btn' onClick={handleSubmit}>Submit bank</button>
        </div>
      </form>
    </div>
  );
};

export default BankSelectModal;
