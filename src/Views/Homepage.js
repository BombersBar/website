import React from 'react';
import axios from 'axios';
import Donation from '../Components/Donations/donation'

import { Link } from 'react-router-dom';

import './homepage.css';

export default class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      topDonationLastWeek:[],
      topDonationLastMonth:[]
    };
  }

  componentDidMount() {
      axios.get('https://n1b.ch/api/donations/top',{
                params: {
                    days: 7,
                    limit: 5
                }
            })
            .then(res => {
                const topDonationLastWeek=res.data.map(obj => obj) || [];
                this.setState({ topDonationLastWeek});
            });
      axios.get('https://n1b.ch/api/donations/top',{
                params: {
                    days: 30,
                    limit: 5
                }
            })
            .then(res => {
                const topDonationLastMonth=res.data.map(obj => obj) || [];
                this.setState({ topDonationLastMonth});
            });
  }
  render(){
        const{topDonationLastWeek, topDonationLastMonth}=this.state;

  return (
    <div className="homepageContainer">
    	<div>
      	<h1>The NPSI Community For Cloakies</h1>
      	<p className="homepageTitle">The “Not Purple Shoot It” fleets allow cloaky enthusiasts from all over New Eden to come together in a fleet.
              No corporations. No politics. Just explosions and Green Killboards.</p>
      </div>
      <div className='homepageButtonContainer'>
      	<div className='homepageButtonContainer-button'>
	      	<a target="_blank" href="https://docs.google.com/document/d/1Lgcex_yERG14VTJTahP6_vksZFbIC7oj8nOm9Vqci0o/edit" type="button">
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
      {topDonationLastWeek.length > 0 ?
        <div>
          <h1>Top Donations Over the Last Week</h1>
            <div>
                { topDonationLastWeek.map((item, index) => (
                   <Donation item={item} key={index} />
            ))}
            </div>
        </div>:
        <div>
           <h1>Top Donations Over the Last Month</h1>
          <div>
              { topDonationLastMonth.map((item, index) => (
                 <Donation item={item} key={index} />
          ))}
          </div>
        </div>
      }
      <span className="bottomSpacing">
        <h3 className="donationsSee">Want to see more <Link to="/donations">Donations?</Link></h3>

        <h1> How to donate?</h1>
        <h4> Go to bombers bar channel right click "The Bombers Bar" and click give money </h4>
        <img src={require('../../public/donation.png')} alt=''/>
      </span>
      <h1>Reasons To Come Join Bombers Bar</h1>
      <table className="table">
        <tbody>
          <td>
            <tr>
              <ul className="tableList">
                <li>
                  <h3> WE ARE NEWBRO FRIENDLY</h3>
                  <p className="tableContents">
                    It doesnt matter when you've started playing EVE. As soon as you can fly a cloaky ship you are welcome to join our fleets.
                    We will do our best to help you learn and feel free to ask any questions you may have.
                  </p>
                </li>
                <li>
                  <h3>YOU CAN THRIVE AND FLOURISH</h3>
                  <p className="tableContents">
                    Becoming a BB regular gives you new ways to play EVE with other people who love cloaky flying. Be a part of an ever growing community, and also learn from some of the best players in EVE.
                  </p>
                </li>
                <li>
                  <h3>YOU HAVE ZERO COMMITMENT</h3>
                  <p className="tableContents">
                    You are never forced to do anything in Bombers Bar (other than cloaking up). All participation and most contribution is a fully volunteer basis. For fuel costs we do refund costs.
                    Come Fly with us whenever you feel like!
                  </p>
                </li>
              </ul>
            </tr>
          </td>
          <td>
          <tr>
            <ul className="tableList">
              <li>
                <h3>WE HAVE NO POLITICS AND NO DRAMA</h3>
                <p className="tableContents">
                  One of the only permanent rules in Bombers Bar. Theres no corp or alliance to join you just have to X-up and come along.
                  We want to provide an impartial environment as much as possible this is key to bringing people together from all different backgrounds.
                  Fly with who you want to and who you enjoy flying with!
                </p>
              </li>
              <li>
                <h3>WE ARE INCLUSIVE</h3>
                <p className="tableContents">
                  You don’t have to be an FC to go on a roam with some fellow Bombers. Just send a message on the in game chat channel or slack.
                  To blow some up together all you need is to take initiative and fly together. Or you could always join the FC team ,new Junior FCs are always welcome
                </p>
              </li>
              <li>
                <h3>IT CAN BE REWARDING</h3>
                <p className="tableContents">
                  Hunters and FCs receive a portion of loot in fleets. All the more incentive to take initiative and hunt/FC for Bombers Bar.
                  The rest of the loot goes to Bombers Bar and is used to fund O'bombercare aswell as our fuel/other fleet costs.
                </p>
              </li>
            </ul>
          </tr>
        </td>
      </tbody>
    </table>

    <div className="doctrine">
      <h1 className="doctrineTitle">Bombers Bar Fleet Types</h1>
        <div>
          <h2>Whaling / Armada Fleets</h2>
          <ul className="tableList">
            <li>
              <h3>DIFFERENCES: ARMADA & WHALING</h3>
              <p className="tableContents">
                Armada is staged out of a wormhole with a null sec static. This wormhole is rolled to get new regions and new targets.
                While normal Whaling the blops moves around null sec to try give range to get targets.
              </p>
            </li>
            <li>
              <h3>TARGET: WHALES AND SEALS</h3>
              <p className="tableContents">
                Hunt and kill whales (supercapitals and capitals) and seals (battleships and cruisers) and kill them when they least expect it.
              </p>
            </li>
            <li>
              <h3>FAVORED: HUNTERS & FVB BOMBERS</h3>
              <p className="tableContents">
                Bring focused void bombers to drain the cap of enemy whales or hunting ships to start your renowned covert cyno hunter career.
              </p>
            </li>
            <li>
              <h3>GOAL: HUNT AND KILL!</h3>
              <p className="tableContents">
                Catch and kill as many high valued whales and seals as possible. Be careful about baits and counter-drops. Always be aligned and ready to warp off!
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Wolfpack Fleets</h2>
          <ul className="tableList">
            <li>
              <h3>TARGET: SMALL AND MEDIUM FLEETS</h3>
              <p className="tableContents">
                A bomber fleet that can and will brawl. This is a fleet to fight with small and medium sized fleets.
                These can also be part of armada/whaling fleets and can allow us to fight rather than run when counter dropped
              </p>
            </li>
            <li>
              <h3>FAVORED: RECONS & WOLFPACK FIT BOMBERS</h3>
              <p className="tableContents">
                Bring wolfpact fit bombers (wolfpack fits available in the fitting page and in game channels) for maximum range and damage application, or recons to make sure the fleets cant get away.
              </p>
            </li>
            <li>
              <h3>GOAL: GUDFITES</h3>
              <p className="tableContents">
                Camp gates or roam and look good doing it. Using a mixture of bombs and torps to destroy enemy fleets.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Bombing Fleets</h2>
          <ul className="tableList">
            <li>
              <h3>TARGET: LARGE FLEETS</h3>
              <p className="tableContents">
                Bomb huge battleship, battlecruiser and cruiser fleets in the most brutal while surprisingly elegant ways.
                Here we have what makes bombers famous. Squads of bombers perfectly timed for mass destruction and is one of the best ways to keep your killboards green.
              </p>
            </li>
            <li>
              <h3>FAVORED: BOMBING BOMBERS</h3>
              <p className="tableContents">
                Bring bombers with damage bombs and the most important thing is to bring a hyperspatial rig this means we warp faster.
                We all warp at the same speed in the Squads so dont be the one to slow everyone down.
                Dont forget to Immediately warp out after launching your bomb!
              </p>
            </li>
            <li>
              <h3>GOAL: PURE WIPEOUT</h3>
              <p className="tableContents">
                Bombing runs are designed to eradicate entire fleets. Bombers Bar was founded on doing those and has excelled in their execution ever since.
                Nothing else in a game is as satisfactory as a successful bombing run!
              </p>
            </li>
          </ul>
        </div>
        <div className="howToJoinOuter">
          <div className="howToJoinInner">
            <h1> How to join a fleet?</h1>
            <table >
              <tbody>
                <tr>
                  <td>
                    <h3>STEP 1</h3>
                    <p className="howToJoinContents">
                      Join the in game chat channel “Bombers Bar” , the mailing list “Bombers Bar ML”, and sign up for the Bombers Bar slack.
                    </p>
                  </td>
                  <td>
                    <h3> STEP 2</h3>
                    <p className="howToJoinContents">
                      Check out time and date for the next fleet. Preannounced fleets are in the BB channel MOTD and will be announced on Slack. Rageform fleets which are announced on Slack and in game.
                    </p>
                  </td>
                  <td>
                    <h3>STEP 3</h3>
                    <p className="howToJoinContents">
                      Bring your ship to the preannounced staging system, and X up in the channel when the fleet time comes. Accept the fleet invite and You’re in!
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>Bombers Bar does not have a static staging system but it is recommended to have clones & ships ready in: Thera, Jita & Amarr.</h4>
          </div>
        </div>
      </div>
    </div>
  )};
}

