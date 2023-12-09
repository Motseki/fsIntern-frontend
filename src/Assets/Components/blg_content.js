import React from 'react'
import './blg_content.css'
import bk_img1 from './images/blg_img.svg'
import bk_img2 from './images/blg_img2.svg'
import bk_img3 from './images/blg_img3.svg'


const blg_content = () => {
  return (
    <div className="contentab">
            <a href="" className='ab'>
              <div className="img" style={{backgroundImage: `url(${bk_img1})`}}></div>
              <p className="t1">CBN on Digital Asset Tax</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </a>
            <a href="" className='ab'>
              <div className="img" style={{backgroundImage: `url(${bk_img2})`}}></div>
              <p className="t1">Future of Gold and Silver</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </a>
            <a href="" className='ab'>
            <div className="img" style={{backgroundImage: `url(${bk_img3})`}}></div>
              <p className="t1">Impact of Emmigration on Currenc ...</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </a>
      </div>
  )
}

export default blg_content