import './CurrencyBrkCard.css'
import React, { useState } from 'react';

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

const CurrencyBrkCard = (props) => {
  const [isConverted, setIsConverted] = useState(false);
    const [isAsterisks, setIsAsterisks] = useState(false);
    const [isVis, setIsVis] = useState(false);
    const [buttonText, setButtonText] = useState("visibility");
    // const [originalText, setOriginalText] = useState(props.originalText);



    function handleLock() {
      
      setIsConverted(!isConverted);
      setButtonText(isConverted ? "visibility" : "visibility_off");
      setIsAsterisks(!isAsterisks);
      // setIsVis(isVis ? "visibility" : "menu")

    }

    const currency = '$';
  

    // const originalText = props.originalText || '$0.00';
    // const originalText = props.originalText ? parseFloat(props.originalText).toLocaleString() : "0.00";
    const originalText = props.originalText ? currency + `${props.originalText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`+'.00' : "$0.00";

    const escrowedClassName = props.esc ? "esc" : "esc none";

    const asterisks = '*'.repeat(10);
    const displayText = isAsterisks ? asterisks : originalText;
    // const buttonText = isAsterisks ? 'Original Text' : 'Asterisks';
 
  return (
    <div className='CurrencyBrkCard'>
        <span className="img">
            <img src={props.img} alt="" />
            <p className={escrowedClassName}>Escrowed: {props.esc}</p>
        </span>
        
        <p className="t1">{props.currency} <p className="tt1">USD</p></p>
        <p className="cr"><p className="crt">{displayText} </p> <i class="material-symbols-outlined"onClick={handleLock}>{buttonText}</i> </p>
    </div>
  )
}

export default CurrencyBrkCard