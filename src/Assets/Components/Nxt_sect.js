import React from 'react'
import './Blog_nav.css'
import './Blog_index.css'
import './Nxt_sect.css'
import logo from './images/logo.svg';
import google_img from './images/Google Logo.svg'
import str_user from './images/str_user.svg'
import Sect2 from './Sect2';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidenav from './Sidenav';
import Blog_nav from './Blog_nav';
import bk_img1 from './images/blg_img.svg'
import bk_img2 from './images/blg_img2.svg'
import bk_img3 from './images/blg_img3.svg'
import bk_img4 from './images/blg_img4.svg'
import bk_img5 from './images/blg_img5.svg'
import bk_img6 from './images/blg_img6.svg'
import bk_img7 from './images/blg_img7.svg'
import bk_img8 from './images/blg_img8.svg'
import bk_img9 from './images/blg_img9.svg'
import bk_img10 from './images/blg_img10.svg'
import bk_img11 from './images/blg_img11.svg'
import Foot from './Foot';

const Nxt_sect = () => {
  return (
    <section className="nxt">
              <Link className="a null ii"><i className="material-icons">chevron_left</i></Link>
                  <ul>
                    <li><Link className='a active'>1</Link></li>
                    <li><Link className='a'>2</Link></li>
                    <li><Link className='a'>3</Link></li>
                    <li><Link className='a'>...</Link></li>
                  </ul>
              <Link className="a ii"><i className="material-icons">chevron_right</i></Link>
    </section>
  )
}

export default Nxt_sect