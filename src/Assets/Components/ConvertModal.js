import React, { useState, useEffect, useRef } from 'react';
import './ConvertModal.css'
import './AddNew.css'
import BankDrp from './BankDrp'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Seller_profile from './Seller_profile';
import Wallet_index from './Wallet_index';
import ImgNCurrencySelect from './ImgNCurrencySelect';
import AvailableBalance from './AvailableBalance';
import EditableCurrencyOpt from './EditableCurrencyOpt';
import EditableCurrencyOptAll from './EditableCurrencyOptAll';
import EditableCurrencyOptAllO from './EditableCurrencyOptAllO';
import LoadingSuccesModal from './LoadingSuccesModal';

const ConvertModal = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        document.getElementById('ConvertModal').style.display = 'none';
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);


  function handleProcess(event) {
    event.preventDefault();
    // const spyElement = document.querySelector('.spy');
    // spyElement.style.display = 'flex';
     const loder = document.getElementById('LoadingSuccesModal')
        loder.style.display = 'flex';

    setTimeout(() => {
      const lod = document.getElementById('lod')
      lod.style.display = 'none';

      const suc = document.getElementById('success')
      suc.style.display = 'flex';

    }, 3000);
  }

  return (
    <div className='ConvertModal add_new_modal' id='ConvertModal'>
      {/* <LoadingSuccesModal /> */}
        <div className="modal" ref={modalRef}>
      <LoadingSuccesModal />

            <p className="top">Convert Currency <i class="material-symbols-sharp" onClick={() => document.getElementById('ConvertModal').style.display = 'none'}>close</i></p>
            <form action="">
                <label htmlFor="">
                    I want to convert
                    <ImgNCurrencySelect />
                    <AvailableBalance />
                    <EditableCurrencyOptAllO placeholder="Enter amount"  />
                </label>
                <label htmlFor="">
                     ...and get in return
                    <ImgNCurrencySelect />

                    <input className='r_input g_input' type="number" placeholder='₦3,500,00.34' readOnly />
                    {/* <ImgNCurrencySelect /> */}

                </label>


                <div className="sub">
                    <Link className="a" onClick={() => document.getElementById('ConvertModal').style.display = 'none'}>Cancel</Link>
                    <button className='a a2' type='submit' onClick={handleProcess} >Convert Now</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ConvertModal;
