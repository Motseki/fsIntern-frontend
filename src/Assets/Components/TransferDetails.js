import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProcessingAnimation from './ProcessingAnimation';

function TransferDetails({ display, onclick, backclick }) {
  const navigate = useNavigate();

  function handleLinkClick(event) {
    event.preventDefault();
    const spqElements = document.querySelectorAll('.spq');
    spqElements.forEach((element) => {
      element.style.display = 'none';
    });
    const spyElement = document.querySelector('.spy');
    spyElement.style.display = 'flex';
    setTimeout(() => {
      navigate('/WalletDepositAuth_success');
    }, 3000);
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

  return (
    <form action="" className="frm Idi" style={{ display }}>
      <div className="qs qs2">
        <span className="spq spq2">
          <span className="sp sp2 sp3">
            <p className="top">Kindly make your transfer into the account below</p>
          </span>
        </span>

        <span className="spq">
          <span className="sp sp2">
            <div className="details">
              <div className="det">
                <p className="tx tx1">Account Number</p>
                <span className="spt">
                  {' '}
                  <p className="tx tx2">0464791406 </p>{' '}
                  <i class="material-symbols-outlined" onClick={copyAccountNumber}>
                    file_copy
                  </i>
                </span>
              </div>
              <div className="det">
                <p className="tx tx1">Account Name</p>
                <span className="spt">
                  {' '}
                  <p className="tx tx2">Peter Mavrick Jones </p>
                </span>
              </div>
              <div className="det">
                <p className="tx tx1">Bank</p>
                <span className="spt">
                  {' '}
                  <p className="tx tx2">Guaranty Trust Bank </p>
                </span>
              </div>
              <div className="det">
                <p className="tx tx1">Expected payment</p>
                <span className="spt">
                  {' '}
                  <p className="tx tx2">₦150,000.00 </p>
                </span>
              </div>
            </div>
          </span>
        </span>

        <span className="spq">
          <div className="links">
            <Link to="/WalletDepositAuth_success" className="a a2 a3" onClick={handleLinkClick}>
              I have made the transfer!
            </Link>
          </div>
        </span>

        <span className="spq">
          <p className="pr">
            Having issues? <Link className="a" onclick={backclick} >Try another account</Link>
          </p>
        </span>

        <span className="spq spy" style={{ display: 'none' }}>
          <ProcessingAnimation text='Processing, please wait ...' />
        </span>
      </div>
    </form>
  );
}


export default TransferDetails;
