import React from 'react'
import './Blog_nav.css'
import './Blog_index.css'
import './Blog_page.css'
import './Contactus.css'
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
import s_facbook from './images/s_facebook.svg'
import s_twit from './images/s_twitter.svg'
import s_insta from './images/s_insta.svg'
import Foot from './Foot';



const Contactus = () => {
  return (
    <body>
        <header>
             <Blog_nav />
        </header>
        <main className="mcontact">
             <section className="sect1">
                <p className="t1">Get in touch</p>

                <span className='sp1'>
                    <p className="t2">Address</p>
                    <span className='ss'>
                         <p className="t3">Zone A, Adedeji crescent, Victoria Island,</p>
                        <p className="t3">Lagos Nigeria</p>
                        <p className="t3">PMB 1011101</p>
                    </span>
                    <span className='ss'>
                         <p className="t3">Zone A, Adedeji crescent, Victoria Island,</p>
                        <p className="t3">Lagos Nigeria</p>
                        <p className="t3">PMB 1011101</p>
                    </span>
                </span>

                <span className='sp1'>
                    <p className="t2">Email</p>
                    <span className='ss'>
                         <p className="t3">mavrick.eth873942@finstack.com</p>
                        <p className="t3">peter.btc 7613t87@finstack.com</p>
                    </span>
                </span>

                <span className='sp1'>
                    <p className="t2">Phone number(s)</p>
                    <span className='ss'>
                         <p className="t3">+234 459 2479 458</p>
                         <p className="t3">+234 120 8923 243</p>
                    </span>
                </span>

                <span className='sp1'>
                    <p className="t2">Socials</p>
                    <span className='ss1'>
                         <a href=""><img src={s_facbook} alt="" /></a>
                         <a href=""><img src={s_twit} alt="" /></a>
                         <a href=""><img src={s_insta} alt="" /></a>
                    </span>
                </span>
             </section>
             <section className="sect2">
                <form action="">
                    <p className="t1">Need to talk?</p>

                    <span className="sp">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder='Enter name or business name' />
                    </span>
                    <span className="sp">
                        <label htmlFor="name">Email</label>
                        <input type="text" placeholder='Enter email address' />
                    </span>
                    <span className="sp">
                        <label htmlFor="name">Phone number</label>
                        <input type="text" placeholder='Phone number' />
                    </span>
                    <span className="sp">
                        <label htmlFor="name">Your message</label>
                        <textarea name="" id="" cols="60" rows="10" placeholder='Type here ...'></textarea>
                    </span>

                    <button type="submit">Send message</button>
                </form>
             </section>
        </main>

        <Foot />
    </body>
  )
}

export default Contactus