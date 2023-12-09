import React, { useState } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import './Home.css'
import './Dropdown.css'
import Landing_nav from './Landing_nav';
import Sidenav from './Sidenav';
import Select from './Select';
import arrow_img from './images/two-arrow.png'
import icon_img1 from './images/Frame.svg'
import icon_img2 from './images/Frame (1).svg'
import icon_img3 from './images/Vector.svg'
import icon_img4 from './images/Vector (1).svg'
import usd_img from './images/country_image (1).svg'
import gbp_img from './images/country_image (2).svg'
import eth_img from './images/country_image (4).svg'
import usdt_img from './images/country_image (5).svg'
import ngn_img from './images/country_image (6).svg'
import ghn_img from './images/country_image (7).svg'
import btc_img from './images/btc_img.svg'
import ltc_img from './images/ltc_img.svg'
import bnb_img from './images/bnb_img.svg'
import bag_icon1 from './images/Group(3).svg'
import bag_icon2 from './images/Group.svg'
import bag_icon3 from './images/Group (1).svg'
import bk_img1 from './images/blg_img.svg'
import bk_img2 from './images/blg_img2.svg'
import bk_img3 from './images/blg_img3.svg'
import big_logo from './images/big_logo.svg'
import Foot from './Foot';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dropdowns from './CurrencyDrp';
import Test from './Test';
import CustomSelect from './CustomSelect';
import ImgNCurrencySelect from './ImgNCurrencySelect';
import CurrencyCalculator from './CurrencyCalculator';
import ImgNCurrency from './ImgNCurrency';
import ImgOnlySelect from './ImgOnlySelect';

const currencyLisitings = () => {
  return (
<section className='section3'>
          <div className='top'>
            <span className='sp1'>
              <p className='t1'>Currency Price Listings</p>
              <p className='t2'><i className='material-icons'>calendar_today</i> Last Updated: Feb 02, 2023 </p>
            </span>
            <form>
              <ImgOnlySelect />
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
              <Link to="/signup" className='lists'>
                <span className="c c1"><img src={usd_img} alt="" /> <span className='ct2'><h4>Dollar</h4><p>USD</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
              <Link to="/signup" className='lists'>
                <span className="c c1"><img src={gbp_img} alt="" /> <span className='ct2'><h4>Pounds</h4><p>GBP</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 905</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
              <Link to="/signup" className='lists'>
                <span className="c c1"><img src={ngn_img} alt="" /> <span className='ct2'><h4>Naira</h4><p>NGN</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 745</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
              <Link to="/signup" className='lists'>
              <span className="c c1"><img src={eth_img} alt="" /> <span className='ct2'><h4>Ethereum</h4><p>ETH</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
              <Link to="/signup" className='lists'>
              <span className="c c1"><img src={usdt_img} alt="" /> <span className='ct2'><h4>USDT</h4><p>USDT</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
            </div>
            <div className='items'>
            <div className='lists top_lists top_lists2'>
                <span className="c c1"><p>Currency</p></span>
                <span className="c c2"><p>Price</p></span>
                <span className="c c3"><p>Change</p></span>
              </div>
              <Link to="/signup" className='lists'>
                <span className="c c1"><img src={btc_img} alt="" /> <span className='ct2'><h4>Dollar</h4><p>USD</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
              <Link to="/signup" className='lists'>
                <span className="c c1"><img src={bnb_img} alt="" /> <span className='ct2'><h4>BNB</h4><p>BNB</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 905</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
              <Link to="/signup" className='lists'>
                <span className="c c1"><img src={ltc_img} alt="" /> <span className='ct2'><h4>Lite coin</h4><p>LTC</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 745</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
              <Link to="/signup" className='lists'>
              <span className="c c1"><img src={eth_img} alt="" /> <span className='ct2'><h4>Ethereum</h4><p>ETH</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
              <Link to="/signup" className='lists'>
              <span className="c c1"><img src={usdt_img} alt="" /> <span className='ct2'><h4>USDT</h4><p>USDT</p></span></span>
                <span className="c c2"><p className='price'><p className="N">N</p> 730</p></span>
                <span className="c c3"><p className='perct'>+0.87%</p></span>
                <span className="c c4"><Link to="/signup" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
              </Link>
            </div>
          </div>
          <div className="see">
            <Link to="/listings">See all Listings <i className="material-icons">chevron_right</i></Link>
          </div>
        </section>
  )
}

export default currencyLisitings
