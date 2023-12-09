import React from 'react'
import './Blog_nav.css'
import './Blog_index.css'
import './Blog_page.css'
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



const Blog_page = () => {
  return (
    <body>
        <header>
             <Blog_nav />
        </header>
        <main className="blg_main">
            <section className="section_breadcrumbs">
                <ul>
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/blog_index" >Our blog</Link></li>
                  <li><Link to=""  className='t'>Impact of Emmigration on Currency Exchange Value</Link></li>
                </ul>
            </section>
            <section className='title1'>
                <h1>Impact of Emmigration on Currency Exchange Value</h1>
                <span className="read"><p><i className="material-icons">schedule</i> 5 mins read</p><p><i className="material-icons">calendar_today</i> Uploaded 02/12/2022</p></span>
            </section>
            <section className='blg_bk1'>
                <div className="img" style={{backgroundImage: `url(${bk_img4})`}}></div>
            </section>
            <section className="cnt">
              <p className="t1">
              Android Auto, which allows you to connect your Android phone to your car display, has a new experience that is rolling out to everyone starting today. First previewed at Google I/O, the design updates and feature improvements will give you a more personal, easy-to-use experience from behind the wheel.
The new design prioritizes three important goals for drivers: navigating where you’re going, communicating with friends and family, and playing your music or podcasts. Maps is now closer to the driver’s seat so that you can see where you're going at a glance. The new media card includes the best of Material You to feature your favorite album art, and the added quick launcher lets you quickly access recently-used apps. Also, because Android Auto is compatible with all major carmarkers, the split screen layout is also adaptable to different screen sizes, so it looks great whether your car has a widescreen, portrait or another size screen.
              </p>
              <p className="t2">New Money Capitalism</p>
              <p className="t1">
              Android Auto, which allows you to connect your Android phone to your car display, has a new experience that is rolling out to everyone starting today. First previewed at Google I/O, the design updates and feature improvements will give you a more personal, easy-to-use experience from behind the wheel.
The new design prioritizes three important goals for drivers: navigating where you’re going, communicating with friends and family, and playing your music or podcasts. Maps is now closer to the driver’s seat so that you can see where you're going at a glance. The new media card includes the best of Material You to feature your favorite album art, and the added quick launcher lets you quickly access recently-used apps. Also, because Android Auto is compatible with all major carmarkers, the split screen layout is also adaptable to different screen sizes, so it looks great whether your car has a widescreen, portrait or another size screen.
              </p>
            </section>
            <section className="blg_bk2">
                <div className="img" style={{backgroundImage: `url(${bk_img7})`}}></div>
            </section>
            <section className="cnt">
              <p className="t2">Monopolistic Market Competition</p>
              <p className="t1">
              Android Auto, which allows you to connect your Android phone to your car display, has a new experience that is rolling out to everyone starting today. First previewed at Google I/O, the design updates and feature improvements will give you a more personal, easy-to-use experience from behind the wheel.
The new design prioritizes three important goals for drivers: navigating where you’re going, communicating with friends and family, and playing your music or podcasts. Maps is now closer to the driver’s seat so that you can see where you're going at a glance. The new media card includes the best of Material You to feature your favorite album art, and the added quick launcher lets you quickly access recently-used apps. Also, because Android Auto is compatible with all major carmarkers, the split screen layout is also adaptable to different screen sizes, so it looks great whether your car has a widescreen, portrait or another size screen.
              </p>
              <p className="t1">
              Android Auto, which allows you to connect your Android phone to your car display, has a new experience that is rolling out to everyone starting today. First previewed at Google I/O, the design updates and feature improvements will give you a more personal, easy-to-use experience from behind the wheel.
The new design prioritizes three important goals for drivers: navigating where you’re going, communicating with friends and family, and playing your music or podcasts. Maps is now closer to the driver’s seat so that you can see where you're going at a glance. The new media card includes the best of Material You to feature your favorite album art, and the added quick launcher lets you quickly access recently-used apps. Also, because Android Auto is compatible with all major carmarkers, the split screen layout is also adaptable to different screen sizes, so it looks great whether your car has a widescreen, portrait or another size screen.
              </p>
            </section>
        </main>
        
        <Foot  />
    </body>
  )
}

export default Blog_page