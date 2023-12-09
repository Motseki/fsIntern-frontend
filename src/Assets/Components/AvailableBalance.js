import React from 'react'
import './AvailableBalance.css'
import wallet_img from './images/wallet.svg'
import wallet_img_gray from './images/wallet_img_gray.svg'

const AvailableBalance = () => {
  return (
    <div className='AvailableBalance'>
        <img src={wallet_img_gray} alt="" />
        <div className="txt">
            <p className="amount">$00.0</p>
            <p className="sub_txt">Available balance</p>
        </div>

    </div>
  )
}

export default AvailableBalance