import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.css';

function IndexView() {
  return (
    <div className="homepageButtonContainer">
    	<div>
      	<h2>The NPSI Community For Cloakies</h2>
      	<p>The “Not Purple Shoot It” doctrine allows stealth enthusiasts from all over New Eden to come together in a fleet.
              No corporations. No politics. Just explosions.</p>
      </div>
      <div className='homepageButtonContainer'>
      	<div className='homepageButtonContainer-button'>
	      	<a target="_blank" href="http://imgur.com/yHxrdg4" type="button">
	      		Join Slack
	      	</a>
      	</div>
      	<div className='homepageButtonContainer-button'>
	      	<a href="ts3server://199.231.184.177?port=9987">
	      		Join Teamspeak
	      	</a>
      	</div>
      	<div className='homepageButtonContainer-button'>
	      	<Link to="/fittings">
	      		Fittings
	      	</Link>
      	</div>
      	<div className='homepageButtonContainer-button'>
	      	<Link to="/obombercare">
	      		O'bombercare (SRP)
	      	</Link>
      	</div>
      </div>
    </div>
  );
}

export default IndexView;
