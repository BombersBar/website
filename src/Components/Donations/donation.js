import React from 'react';
import "../../Views/Donation.css";

function donation(donation) {
  function formatNumber(n){
            return n.toFixed(1).replace(/\.?0+$/,"");
    }

    function formatIskAmount(amount){
        if(amount > 1e9){
            amount /= 1e9;
            return formatNumber(amount) + " bil"
        }

        if(amount > 1e6){
            amount /= 1e6;
            return formatNumber(amount) + " mil"
        }

        if(amount > 1e3){
            amount /= 1e3;
            return formatNumber(amount) + "k"
        }

        return amount;
    }

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
