import React from 'react'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import success_img from './images/success.Gif';
import load_img from './images/loading.gif';
import './LoadingSuccesModal.css'

function closeModal(){
  document.getElementById('ConvertModal').style.display = 'none'
  document.getElementById('LoadingSuccesModal').style.display = 'none'
  document.getElementById('success').style.display = 'none'
}

const LoadingSuccesModal = ({handleProcess}) => {
  return (
    <div className='LoadingSuccesModal' id='LoadingSuccesModal'>
        <div className="mode">
            <div className="div lod" id='lod'>
                <img src={load_img} className='gif' alt="" />
                <p className="t1">Converting...</p>
                <p className="t2">Please wait..</p>
            </div>
            <div className="div success" id='success'>
                <img src={success_img} className='gif' alt="" />
                <p className="t1">Successful!</p>
                <p className="t2">Convertion completed!</p>
                <Link onClick={closeModal} >Awesome thanks !</Link>             
              </div>
        </div>
    </div>
  )
}

export default LoadingSuccesModal