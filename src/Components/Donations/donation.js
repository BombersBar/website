import React from 'react';

import formatIskAmount from "../helper/formatIsk.js"
import "../../Views/Donation.css";

function donation(donation) {

  return(
    <div className="donation">
      <div className="donationTitle">
        { donation.item.characterName }
      </div>
      <div className="body">
          {/* number after character id is for the size of the image*/}
          <img className="characterPortrait" alt='' src={'https://image.eveonline.com/Character/'+donation.item.characterId+"_256.jpg"}/>
          <div className="item donatorDetailsContainer">
            <p className="amount"><strong>Amount</strong></p>
            <p className="amount"><strong>{formatIskAmount(donation.item.amount)}</strong></p>
          </div>
        </div>
      </div>
    )
  }

export default donation;
