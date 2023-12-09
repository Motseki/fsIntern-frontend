import React, { useRef, useContext, useEffect, useState } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import axios from 'axios'; // Import Axios

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

import AuthDataContext from '../Contexts/AuthDataContext';
import usa_img from './images/country_image (1).svg'
import uk_img from './images/country_image (2).svg'


const   CurrencyLisitings = () => {
  const {contextData } = useContext(AuthDataContext);
  const accessKey = contextData.accessKey;

  const [listings, setListings] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('NGN'); // Set a default currency


  const currencyImageMap = {
    USD: usd_img,
    GBP: gbp_img,
    ETH: eth_img,
    USDT: usdt_img,
    NGN: ngn_img,
    GHN: ghn_img,
    BTC: btc_img,
    LTC: ltc_img,
    BNB: bnb_img,
    // Add other currencies as needed
  };
  

  useEffect(() => {
    // Fetch trade data using the public_id from escrowData
    async function fetchTradeData() {
      try {
        const response = await axios.get(`https://finstack-production.herokuapp.com/trades/listings/currencies/finstack/?sell_currency=NGN`, {

        });

        console.log('LISTINGS', response.data);

        // Set the listings in your state
        setListings(response.data.data);
      } catch (error) {
        console.error('Error fetching Listings:', error);
      }
    }

    // Call the fetchTradeData function here
    fetchTradeData();
  }, [accessKey]);

 async function fetchTradeData() {
    try {
      const response = await axios.get(`https://finstack-production.herokuapp.com/trades/listings/currencies/finstack/?sell_currency=${selectedCurrency}`, {

      });

      console.log('LISTINGS', response.data);

      // Set the listings in your state
      setListings(response.data.data);
    } catch (error) {
      console.error('Error fetching Listings:', error);
    }
  }



  console.log(selectedCurrency, "This is the selected currency" )

  return (
<section className='section3'>
          <div className='top'>
            <span className='sp1'>
              <p className='t1' onClick={fetchTradeData} >Currency Price Listings</p>
              <p className='t2'><i className='material-icons'>calendar_today</i> Last Updated: Feb 02, 2023 </p>
            </span>
            <form onClick={fetchTradeData} onMouseOut={fetchTradeData} >
            {/* <ImgOnlySelect setSelectedCurrency={setSelectedCurrency} onClick={fetchTradeData} /> */}
            <ImgOnlySelect  />

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
              {listings.map((listing, index) => (

                  <Link to="/calc_auth" className='lists'>
                    <span className="c c1"><img src={currencyImageMap[listing.buy_currency]} alt="" /><span className='ct2'><h4>{listing.buy_currency}</h4><p>{listing.buy_currency}</p></span></span>
                    <span className="c c2"><p className='price'><p className="">{listing.sell_currency === 'NGN' ? '₦ ' : '$ '} </p> {listing.price}</p></span>
                    <span className="c c3"><p className='perct'>{listing.percentage_change}%</p></span>
                    <span className="c c4"><Link to="/calc_auth" href=""><p>Buy/Sell</p> <i className='material-icons' >chevron_right</i></Link> </span>
                  </Link>

              ))}

            </div>
            {/* <div className='items'>
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
             
            </div> */}
            
          </div>
          <div className="see">
            <Link to="/calc_auth" >See all Listings <i className="material-icons">chevron_right</i></Link>
          </div>
        </section>
  )
}

export default  CurrencyLisitings
