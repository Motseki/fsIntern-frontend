import React from 'react'
import success from './images/success.Gif';
import load_gif from './images/load.gif';
import './ProcessingAnimation.css'

const ProcessingAnimation = (props) => {
  return (
    <div className='ProcessingAnimation'>
        <img src={load_gif} alt="" />
        {/* <p>Processing, please wait ...</p> */}
        <p>{props.text}</p>
    </div>
  )
}

export default ProcessingAnimation