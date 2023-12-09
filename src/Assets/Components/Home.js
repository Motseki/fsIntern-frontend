import React, { useRef, useContext, useEffect, useState } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import axios from 'axios'; // Import Axios
import AuthDataContext from '../Contexts/AuthDataContext';


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
import currencyLisitings from './currencyLisitings';
import CurrencyLisitings from './CurrencyListings';

const Home = () => {
  const [selected, setSelected] = useState(null)
  const [selected2, setSelected2] = useState(null)
  const {contextData } = useContext(AuthDataContext);
  const accessKey  = contextData.accessKey;



  const data1 = [
    {
      topic: 'How does Finstack really work?',
      content: 'Create or a Lorem ipsum dolor sit amet.'
    },
    {
      topic: 'How does Finstack really work?',
      content: 'Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.1'
    },
    {
      topic: 'How does Finstack really work?',
      content: 'Create or a Lorem ipsum dolor sit amet.'
    },
  ];

  const data2 = [
    {
      tpc: 'How does Finstack really work?',
      cont: 'Create or a Lorem ipsum dolor sit amet.'
    },
    {
      tpc: 'How does Finstack really work?',
      cont: 'Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.1'
    },
    {
      tpc: 'How does Finstack really work?',
      cont: 'Create or a Lorem ipsum dolor sit amet.'
    },
    {
      tpc: 'How does Finstack really work?',
      cont: 'Create or a Lorem ipsum dolor sit amet.'
    },
    {
      tpc: 'How does Finstack really work?',
      cont: 'Create or a Lorem ipsum dolor sit amet.'
    },
  ]

  const onTog1 = i => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
    console.log(selected)
  }

  
  const onToggle = q => {
    if(selected2 === q){
      return setSelected2(null)
    }

    setSelected2(q)
    console.log(selected2)
  }




  return (
    <body>

   
    <header className='home_main'>
      <Landing_nav />
       {/* <Dropdowns /> */}
      <section className="sectioni1">
      {/* <Dropdowns /> */}

        {/* </div> */}
        <div className='div div1'>
          <p className='txt1'>BANKING THE UNBANKED</p>
          <h1>Currency Trading Made Simple and Easy</h1>
          <p className='txt2'>Creating seamless exchange procedure for everyone. Buy, sell, save, trade and exchange fiat currencies with 3 simple steps. </p>
          <span className='links'>
            <Link to="/signup" className='a1'>Get Started</Link>
            <a href='' className='a2'>Buy/Sell Currency <i className="material-icons" >chevron_right</i></a>
          </span>
        </div>
       
        <div className='div div2'>
          <div className='inp'>
            <p className='t1'>Currency Converter</p>
            <p className='t2'>Check live foreign currency exchange rates </p>
            <CurrencyCalculator />
                
          </div>
        </div>

      </section>
      <div className='div3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #0A1128" fill-opacity="1" d="M0,128L1440,320L1440,320L0,320Z"></path></svg>
      </div>
    </header>

    {/* <Dropdowns /> */}
    {/* <CustomSelect /> */}



    <div className='Main'>
   

        <section className='section_descrpt '>
          {/* span. */}
            <div>
              <div className='img'></div>
            </div>
            <div className='text'>
              <p className='txt1'>WE ARE ON AN INVALUABLE MISSION</p>
              <p className='txt2'> Reducing the hassle of currency exchange</p>
              <span className='spans'>
                <span className='bc'><img src={icon_img1} alt='wame' /></span>
                <span className='txt'>
                  <p className='top'>Peer to Peer Marketplace</p>
                  <p className='btm'>Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
                </span>
              </span>
              <span className='spans'>
                <span className='bc'><img src={icon_img2} alt='wame' /></span>
                <span className='txt'>
                  <p className='top'>Exchange Giftcards</p>
                  <p className='btm'>Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
                </span>
              </span>
              <span className='spans'>
                <span className='bc'><img src={icon_img3} alt='wame' /></span>
                <span className='txt'>
                  <p className='top'>Fast and Secure Transactions</p>
                  <p className='btm'>Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
                </span>
              </span>
              <span className='spans'>
                <span className='bc'><img src={icon_img4} alt='wame' /></span>
                <span className='txt'>
                  <p className='top'>24/7 Customer Support</p>
                  <p className='btm'>Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
                </span>
              </span>
              <span className='links'>
                  <Link to="/signup" className='a1'>Get Started</Link>
                  <a href='' className='a2'>Start trading <i className='material-icons'>chevron_right</i></a>
              </span>
            </div>
        </section>
        <section className='section2'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #0A1128" fill-opacity="1" d="M0,192L1440,64L1440,0L0,0Z"></path></svg>        
        </section>



        <CurrencyLisitings />



        <section className="section4">
            <p className="t1">3 EASY STEPS</p>
            <p className="t2">How It Works</p>
            <p className="t3">Create or accept offers at your preferred rate on our Peer to peer marketplace</p>
          <div className="fl">
            <span>
             <div className="box"><img src={bag_icon1} alt="wame" /></div>
             <p className="txt1">Select currency pair</p>
              <p className="t">Create or accept offers at your preferred rate on our Peer to peer marketplace
                offers at your preferred</p>
            </span>
            <span>
              <div className="box"><img src={bag_icon2} alt="wame" /></div>
              <p className="txt1">Transfer Local Money</p>
              <p className="t">Create or accept offers at your preferred rate on our Peer to peer marketplace
                offers at your preferred</p>
            </span>
            <span>
              <div className="box"><img src={bag_icon3} alt="wame" /></div>
              <p className="txt1">Receive funds</p>
              <p className="t">Create or accept offers at your preferred rate on our Peer to peer marketplace
                offers at your preferred</p>
            </span>
          </div>
        </section>







        <section className="section5">
          <p className="t1">TESTIMONIAL</p>
          <p className="t2">Hear what our customers say about us</p>
          <div className="twit">
          
          <div className="sp">
            <TwitterTweetEmbed
              tweetId={'1636672121429524480'}
              options={{width: '350px', align: 'right', outerHeight: '200px', cards:'hidden', dnt: true, conversation: 'none', }}
            />
            <TwitterTweetEmbed
              tweetId={'1638835223692734464'}
              options={{width: '350px', align: 'right',  cards:'hidden',}}
            />
          </div>

          <div className="sp">
            <TwitterTweetEmbed
              tweetId={'1638835223692734464'}
              options={{width: '350px', align: 'right',  }}
            />
          </div>

          <div className="sp">
            <TwitterTweetEmbed
              tweetId={'1636672121429524480'}
              options={{width: '350px', align: 'right', outerHeight: '200px', cards:'hidden', dnt: true, conversation: 'none', }}
            />
            <TwitterTweetEmbed
              tweetId={'1638835223692734464'}
              options={{width: '350px', align: 'right',  cards:'hidden',}}
            />
          </div>         

            
          </div>
        </section>






       
        <section className='section6'>
          <div className="content">
            <div>
              <span className="img"></span>
            </div>
            <div className="text">
              <p className="t1">BECOME A SELLER</p>
              <p className="t2">Become a Seller. Place your offer on the Peer 2 Peer Marketplace</p>
              <p className="t3">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers at your preferred rate on our Peer to peer marketplaceCreate or accept offers at your preferred rate on our Peer to peer marketplace</p>
              <span className='links'>
                <Link to="/seller_up" className="a1">Start registration</Link>
                <Link className="a2">Start selling <i className="material-icons">chevron_right</i> </Link>
              </span>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,320L1440,96L1440,320L0,320Z"></path></svg>
        </section>
        <section className='section7' id='FAQ'>
        <div className="content">
            <div className="sp">
              <div className="txt">
                  <p className="t1">Frequently Asked Questions</p>
                  <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or accept offers.</p>
              </div>
              { data1.map((item, i) => (
                <div className="scp" >
                  <a className="top" onClick={() => onTog1(i)}>{ item.topic }
                    <i className="material-icons">{ selected === i ? (`expand_less`) : (`expand_more`) }</i>
                  </a>
                  <div className={selected === i ? `answer` : `answer_none`} id='oo'>
                      <p className="det">{ item.content }</p>
                  </div>
                </div> 
              ))}


            </div>
            <div className="sp">
            { data2.map((ite, q) => (
                <div className="scp" >
                  <a className="top" onClick={() => onToggle(q)}>{ ite.tpc }
                    <i className="material-icons">{ selected2 === q ? (`expand_less`) : (`expand_more`) }</i>
                  </a>
                  <div className={selected2 === q ? `answer` : `answer_none`} id='oo'>
                      <p className="det">{ ite.cont }</p>
                  </div>
                </div> 
              ))}

            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A1128" fill-opacity="1" d="M0,160L1440,288L1440,320L0,320Z"></path></svg>
        </section>
        <section className="section8">
          <div className="top">
              <span className="sp">
                <p className="t1">Stay up to date</p>
                <p className="t2">Stay on the grind. Stay on the grind. Stay on the grind</p>
              </span>
              <Link to="/blog_index"><p>View all updates</p><i className="material-icons">chevron_right</i></Link>
          </div>

          <div className="content">
            <Link to="/blog_index">
              <div className="img" style={{backgroundImage: `url(${bk_img1})`}}></div>
              <p className="t1">CBN on Digital Asset Tax</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </Link>
            <Link to="/blog_index">
              <div className="img" style={{backgroundImage: `url(${bk_img2})`}}></div>
              <p className="t1">Future of Gold and Silver</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </Link>
            <Link to="/blog_index">
            <div className="img" style={{backgroundImage: `url(${bk_img3})`}}></div>
              <p className="t1">Impact of Emmigration on Currencyfkgfkg</p>
              <p className="t2">Create or accept offers at your preferred rate on our Peer to peer marketplace Create or...</p>
              <p className="t3">Read more <i className="material-icons">chevron_right</i></p>
            </Link>
          </div>
        </section>
        <section className="section9">
          <div className="back">
            <img src={big_logo} alt="" />
            <img src={big_logo} alt=""  className='img2'/>
          </div>
          <div className="text">
            <p className="t1">Ready to join the train?</p>
            <p className="t2">One - liner body text comes here</p>
            <Link to="/signup" >Create a free account</Link>
          </div>
        </section>  
    </div>
    <Foot />
    </body>
  )
}

export default Home