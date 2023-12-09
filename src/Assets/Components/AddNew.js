// import React, { useState } from 'react';
// import './AddNew.css'
// import BankDrp from './BankDrp'
// import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Seller_profile from './Seller_profile';

// function closeNew() {
//     document.getElementById('add_new_modal').style.display = 'none';
// }

// const AddNew = () => {

    

//   return (
//     <div className="add_new_modal" id='add_new_modal' >
//         <div className="modal">
//             <p className="top">Add account <i class="material-symbols-sharp" onClick={closeNew}>close</i></p>
//             <form action="">
//                 <label htmlFor="">
//                     Bank
//                     <BankDrp />
//                 </label>
//                 <label htmlFor="">
//                     Account number
//                     <input className='r_input' type="text" placeholder='Account number' />
//                 </label>
//                 <label htmlFor="">
//                     Account holder's name
//                     <input className='r_input neut' type="text" placeholder='Maverick Owen' readOnly />
//                 </label>

//                 <div className="sub">
//                     <Link className="a" onClick={closeNew}>Cancel</Link>
//                     <button className='a a2' type='submit' >Save</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default AddNew



import React, { useState, useEffect, useRef } from 'react';
// import React, { useState } from 'react';
import './AddNew.css'
import BankDrp from './BankDrp'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Seller_profile from './Seller_profile';

const AddNew = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        document.getElementById('add_new_modal').style.display = 'none';
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className='add_new_modal' id='add_new_modal'>
        <div className="modal" ref={modalRef}>
            <p className="top">Add account <i class="material-symbols-sharp" onClick={() => document.getElementById('add_new_modal').style.display = 'none'}>close</i></p>
            <form action="">
                <label htmlFor="">
                    Bank
                    <BankDrp />
                </label>
                <label htmlFor="">
                    Account number
                    <input className='r_input' type="text" placeholder='Account number' />
                </label>
                <label htmlFor="">
                    Account holder's name
                    <input className='r_input neut' type="text" placeholder='Maverick Owen' readOnly />
                </label>

                <div className="sub">
                    <Link className="a" onClick={() => document.getElementById('add_new_modal').style.display = 'none'}>Cancel</Link>
                    <button className='a a2' type='submit' >Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddNew;
