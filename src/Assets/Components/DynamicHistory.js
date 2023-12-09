import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./DynamicHistory.css";
import DynamicHistoryCrd from './DynamicHistoryCrd';
import './DynamicHistoryCrd.css';
import success_img from './images/success.Gif';


const DynamicHistory = ({ rows, columns }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setSelectedRow(null);
    setModalOpen(false);
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedRow.txnId)
      // .then(() => {
      //   alert('Transaction ID copied to clipboard!');
      // })
      // .catch((error) => {
      //   console.error('Failed to copy transaction ID: ', error);
      // });
  }
  

  return (
    <div className="DynamicHistory">
      {rows.map((row, index) => (
        <div key={index} className="DynamicHistoryCrd" onClick={() => handleRowClick(row)}>
          <div className="sect1">
            <p className="source">{row.source}</p>
            <p className="amount"><i className="material-symbols-outlined">{row.type === 'credit' ? 'add' : 'remove'}</i> {row.amount}</p>
          </div>
          <div className="sect1">
            <p className="dateTime">{row.dateTime}</p>
            <p className={`status ${row.status}`}>{row.status}</p>
          </div>
        </div>
      ))}
      {modalOpen && selectedRow && (
        <div className="modal">
          <div className="modal-content">
            <p className='bck'><i className="material-symbols-outlined close" onClick={handleModalClose}>navigate_before</i> Go back</p>
            
            <span className="amount_div">
              <div className="top"> <p className={`status ${selectedRow.status}`}>{selectedRow.status}</p> </div>
              <span className="amt">
                <p className="amount"><i className="material-symbols-outlined">{selectedRow.type === 'credit' ? 'add' : 'remove'}</i> {selectedRow.amount}</p>
                <span className="mindet">
                  <p className='typ'>Type <p className={`status ${selectedRow.type}`}>{selectedRow.type}</p> </p>    
                  <p className='typ'>Transaction Amount <p className='sub-typ'>{selectedRow.amount}</p></p>    
                  <p className='typ'>Source <p className='sub-typ'>{selectedRow.source}</p></p>    

                </span>
                {/* <p className={`status ${selectedRow.type}`}>{selectedRow.type}</p>  */}
              </span>
              <span className="details">
                <p className='typ'>Date / Time <p className='sub-typ'>{selectedRow.dateTime} </p></p>
                <p className='typ'>Txn ID <p className='sub-typ txn'><p className='p1'> {selectedRow.txnId}</p> <i className="material-icons-outlined" onClick={handleCopyClick}>file_copy</i></p></p>
              </span>
            </span>


            {/* <h2>{selectedRow.source}</h2>
            <p>{selectedRow.amount}</p>
            <p>{selectedRow.type}</p>
            <p>{selectedRow.wallet}</p>
            <p>{selectedRow.status}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default DynamicHistory;
