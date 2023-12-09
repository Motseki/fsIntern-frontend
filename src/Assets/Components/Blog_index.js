import React from 'react'
import './Blog_nav.css'
import './Blog_index.css'
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
import Nxt_sect from './Nxt_sect';



const Blog_index = () => {
  return (
    <body>
        <header className='blog_head'>
             <Blog_nav />
        </header>
        <main className="blg_main">
            <section className="section_breadcrumbs">
                <ul>
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/blog_index"  className='t'>Our blog</Link></li>
                </ul>
            </section>
            <section className="sec_blg2">
              <p className="t1">Our Blog</p>
              <span className="dropdown">
                <p className="t">Recently added</p>
                <i className="material-icons">arrow_forward_ios</i>
              </span>
            </section>
            <section className="sec_blg3">
                  <Link to="/blog_page" className="c c1">
                    <div className="img" style={{backgroundImage: `url(${bk_img4})`}}></div>
                    <span className="text">
                      <p className="t1">Impact of Emmigration on Currency Exchange Value</p>
                      <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                      <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                    
                  </Link>
                  <Link to="/blog_page" className="c c2">
                    <div className="img" style={{backgroundImage: `url(${bk_img1})`}}></div>
                    <span className="text">
                      <p className="t1">Impact of Emmigration on Currency Exchange Value</p>
                      <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                      <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                  </Link>
            {/* </section> */}
            {/* <section className="sec_blg3"> */}
                  <Link to="/blog_page" className="c c2">
                    <div className="img" style={{backgroundImage: `url(${bk_img5})`}}></div>
                    <span className="text">
                        <p className="t1">CBN on Digital Asset Tax</p>
                        <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                        <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                  </Link>
                  <Link to="/blog_page" className="c c2">
                  <div className="img" style={{backgroundImage: `url(${bk_img6})`}}></div>
                    <span className="text">
                      <p className="t1">Impact of Emmigration on Currency Exchange Value</p>
                      <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                      <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                  </Link>
                  <Link to="/blog_page" className="c c2">
                  <div className="img" style={{backgroundImage: `url(${bk_img7})`}}></div>
                    <span className="text">
                      <p className="t1">Impact of Emmigration on Currency Exchange Value</p>
                      <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                      <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                  </Link>
                  <Link to="/blog_page" className="c c2">
                  <div className="img" style={{backgroundImage: `url(${bk_img7})`}}></div>
                    <span className="text">
                      <p className="t1">Impact of Emmigration on Currency Exchange Value</p>
                      <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                      <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                  </Link>
                  <Link to="/blog_page" className="c c2">
                  <div className="img" style={{backgroundImage: `url(${bk_img7})`}}></div>
                    <span className="text">
                      <p className="t1">Impact of Emmigration on Currency Exchange Value</p>
                      <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                      <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                  </Link>
                  <Link to="/blog_page" className="c c2">
                  <div className="img" style={{backgroundImage: `url(${bk_img7})`}}></div>
                    <span className="text">
                      <p className="t1">Impact of Emmigration on Currency Exchange Value</p>
                      <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                      <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                  </Link>
                  <Link to="/blog_page" className="c c2">
                  <div className="img" style={{backgroundImage: `url(${bk_img7})`}}></div>
                    <span className="text">
                      <p className="t1">Impact of Emmigration on Currency Exchange Value</p>
                      <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our P2P sect...</p>
                      <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
                      <p className="t3">Read more <i className="material-icons">arrow_forward_ios</i></p>
                    </span>
                  </Link>
            </section>
            <Nxt_sect />
        </main>
        
        <Foot />
    </body>
    
    
  )
}

export default Blog_index