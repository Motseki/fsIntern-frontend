import React from 'react'
import './Blog_nav.css'
import './Blog_index.css'
import './Blog_page.css'
import './All_listings.css'
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
import bk_img12 from './images/blg_img12.svg'
import './Home.css'
import cntry_img1 from './images/country_image (1).svg'
import cntry_img2 from './images/country_image (2).svg'
import cntry_img3 from './images/country_image (3).svg'
import cntry_img4 from './images/country_image (4).svg'
import cntry_img5 from './images/country_image (5).svg'
import Foot from './Foot';
import Nxt_sect from './Nxt_sect'


const All_listings = () => {
  return (
    <body>
        <header>
             <Blog_nav />
        </header>
        <main className="blg_main">
            <section className="section_breadcrumbs">
                <ul>
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/listings"  className='t'>Currency price listing</Link></li>
                </ul>
            </section>
            <section className="blg_bk2">
                <div className="img" style={{backgroundImage: `url(${bk_img12})`}}></div>
            </section>
        <section className='section_currency'>
            <div className='top'>
              <span className='sp1'>
                <p className='t1'>Currency Price Listings</p>
                <p className='t2'><i className='material-icons'>calendar_today</i> Last Updated: Feb 02, 2023 </p>
              </span>
              <form>
                <select>
                <option className='opt'>Select Currency</option>
                        <option className='opt'>2</option>
                        <option className='opt'>3</option>
                        <option className='opt'>4</option>
                        <option className='opt'>5</option>
                </select>
              </form>
            </div>
            <div className='wame'>
              <div className='items'>
                <div className='lists top_lists'>
                  <span className="c c1"><p>Currency</p></span>
                  <span className="c c2"><p>Price</p></span>
                  <span className="c c3"><p>Change</p></span>
                  <span className="c c4"> </span>
                </div>
                <a href='' className='lists'>
                  <span className="c c1"><img src={cntry_img1} alt="" /> <span className='ct2'><h4>Dollar</h4><p>USD</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
                <a href='' className='lists'>
                  <span className="c c1"><img src={cntry_img2} alt="" /> <span className='ct2'><h4>Pounds</h4><p>GBP</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 905</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
                <a href='' className='lists'>
                  <span className="c c1"><img src={cntry_img3} alt="" /> <span className='ct2'><h4>Euro</h4><p>EUR</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 745</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
                <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img4} alt="" /> <span className='ct2'><h4>Ethereum</h4><p>ETH</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
                <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img5} alt="" /> <span className='ct2'><h4>USDT</h4><p>USDT</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
              </div>
              <div className='items'>
              <div className='lists top_lists top_lists2'>
                  <span className="c c1"><p>Currency</p></span>
                  <span className="c c2"><p>Price</p></span>
                  <span className="c c3"><p>Change</p></span>
                </div>
                <a href='' className='lists'>
                  <span className="c c1"><img src={cntry_img1} alt="" /> <span className='ct2'><h4>Dollar</h4><p>USD</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
                <a href='' className='lists'>
                  <span className="c c1"><img src={cntry_img2} alt="" /> <span className='ct2'><h4>Pounds</h4><p>GBP</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 905</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
                <a href='' className='lists'>
                  <span className="c c1"><img src={cntry_img3} alt="" /> <span className='ct2'><h4>Euro</h4><p>EUR</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 12,000,000</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
                <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img4} alt="" /> <span className='ct2'><h4>Ethereum</h4><p>ETH</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
                <a href='' className='lists'>
                <span className="c c1"><img src={cntry_img5} alt="" /> <span className='ct2'><h4>USDT</h4><p>USDT</p></span></span>
                  <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                  <span className="c c3"><p className='perct'>+0.87%</p></span>
                  <span className="c c4"><Link to="/listings" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                </a>
              </div>
            </div>
            <Nxt_sect />
        </section>
        </main>

        <Foot />
    </body>
    )
}

export default All_listings