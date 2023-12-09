import React from 'react'
import './DynamicHistoryCrd.css'



const DynamicHistoryCrd = ({ rows, columns }) => {
  return (
    <div className="DynamicHistoryCrd">
      <div className="sect1">
        <p className="source">GTBank</p>
        <p className="amount"><i class="material-symbols-outlined">add</i> $1,500,000.00</p>
      </div>
      <div className="sect1">
        <p className="dateTime">27th Jan 2023 | 15:43</p>
        <p className="status">completed</p>
      </div>
    </div>
  )
}

export default DynamicHistoryCrd