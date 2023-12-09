import React from 'react'
// import Prof_img from './Profp_img.svg';
import prof_img from './images/file_img.svg'


function Profp_img(props){
  return (
    <li className='li_img'>
        <p className="p1">{props.p1}</p> 
        <span className="img">
            <img src={prof_img} alt="" />
            <span className="txt">
              <p className="name">mavrick.eth_International_passport.img</p>
              <p className="size">Size: 70kb</p>
            </span>
            
        </span>
    </li>

  )
}

export default Profp_img