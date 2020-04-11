import React from 'react';

import formatIskAmount from "../helper/formatIsk.js"
import "../../Views/Motd.css";

export default class Victim extends React.Component {

  render(){
    const{kill} = this.props;
    return(
      <div className="kill">
        <div className="killTitle">
            {kill.victim}
          </div>
        <div className="body">
          <img className="shipPortrait" alt='' src={'https://image.eveonline.com/Render/'+kill.shipTypeID+"_256.png"}/>
            <strong>
              <p className="details">{kill.ship} </p>
              <p  className="details">{formatIskAmount(kill.totalValue)}</p>
              <p className="details">
                <a target="_blank" rel="noopener noreferrer" href={"https://zkillboard.com/kill/"+kill.killID} type="button">
                  zKill
                </a>
              </p>
            </strong>
          </div>
        </div>
      )
    }
  }

