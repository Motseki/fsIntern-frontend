import React from 'react'
import './Name_profile.css'
import bk_img1 from './images/blg_img.svg'
import bk_img2 from './images/blg_img2.svg'
import bk_img3 from './images/blg_img3.svg'
import big_logo from './images/big_logo.svg'

const Name_profile = (props) => {
  return (
    <div className='name_profile'>   
        <div className="u_img">
            <p className="txt">ME</p>
            <div className="img" style={{backgroundImage: `url(${props.img})`}}></div>
        </div>
        <div className="u_txt">
            <p className="p1">{props.username}
             {/* Mavrick Egbuson */}
             </p>
            <p className="p2">{props.sub_txt} 
            {/* @mavrick.eth */}
            </p>
        </div>
    </div>
  )
}

export default Name_profile