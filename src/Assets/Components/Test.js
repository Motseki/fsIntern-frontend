import Select from "react-select";
import React, { useState } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import './Home.css'
import './Dropdown.css'
import Landing_nav from './Landing_nav';
import Sidenav from './Sidenav';
import arrow_img from './images/two-arrow.png'
import icon_img1 from './images/Frame.svg'
import icon_img2 from './images/Frame (1).svg'
import icon_img3 from './images/Vector.svg'
import icon_img4 from './images/Vector (1).svg'
import cntry_img1 from './images/country_image (1).svg'
import cntry_img2 from './images/country_image (2).svg'
import cntry_img3 from './images/country_image (3).svg'
import cntry_img4 from './images/country_image (4).svg'
import cntry_img5 from './images/country_image (5).svg'
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


const Test = () => {
  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];

  return (
    <section className="">
    <Select options={options} 
     placeholder='Select Currency'

     styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          // borderColor: state.isFocused ? 'grey' : 'red',
          padding: 0, paddingLeft: 0,
          display:'flex', borderRadius: 30,
        }),
      }}
    

      classNames={{
        control: (state) =>
          state.isFocused ? 'input select' : 'input select',
      }}
     />
 </section>

  );
};

export default Test;