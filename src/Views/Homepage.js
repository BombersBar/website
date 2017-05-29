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
      	<p className="homepageTitle">The “Not Purple Shoot It” doctrine allows stealth enthusiasts from all over New Eden to come together in a fleet.
              No corporations. No politics. Just explosions.</p>
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
      <h1>Why Join Bombers Bar?</h1>
      <table className="table">
        <tbody>
          <td>
            <tr>
              <ul className="tableList">
                <li>
                  <h3>NEWBRO FRIENDLY</h3>
                  <p className="tableContents">
                    Did you start Eve just a month ago? You will not feel lost in a Bombers Bar fleet, and it will be a cosy learning environment.
                  </p>
                </li>
                <li>
                  <h3>THRIVE AND FLOURISH</h3>
                  <p className="tableContents">
                    Becoming a BB regular grants you access to many niche ways of playing cloaky in Eve. Become part of a squad, and learn from some of the best players.
                  </p>
                </li>
                <li>
                  <h3>ZERO COMMITMENT</h3>
                  <p className="tableContents">
                    You never “have to” do anything in Bombers Bar. All participation and contribution is fully volunteer basis. Fleet up with us whenever you feel like!
                  </p>
                </li>
              </ul>
            </tr>
          </td>
          <td>
          <tr>
            <ul className="tableList">
              <li>
                <h3>NO POLITICS, NO DRAMA</h3>
                <p className="tableContents">
                  The only permanent rule in Bombers Bar. An impartial environment is the key to bring together capsuleers from all backgrounds. Fly with whom you enjoy flying!
                </p>
              </li>
              <li>
                <h3>INCLUSIVE</h3>
                <p className="tableContents">
                  You don’t have to be an FC to look for fellow cloakies to fleet up in the in game chat channel. Just take initiative and explode stuff together. Or join the FC team!
                </p>
              </li>
              <li>
                <h3>REWARDING</h3>
                <p className="tableContents">
                  Hunters and FCs receive a portion of loot in whaling fleets. All the more incentive to take initiative and hunt/FC for Bombers Bar. PvP ISK best ISK!
                </p>
              </li>
            </ul>
          </tr>
        </td>
      </tbody>
    </table>

    <div className="doctrine">
      <h1 className="doctrineTitle">Bombers Bar Doctrines</h1>
        <div>
          <h2>Whaling Fleets</h2>
          <ul className="tableList">
            <li>
              <h3>TARGET: WHALES AND SEALS</h3>
              <p className="tableContents">
                Hunt and kill player owned PvE ships. Catch whales (supercapitals and capitals) and seals (battleships and cruisers) and kill them in “non-consensual” combat.
              </p>
            </li>
            <li>
              <h3>FAVORED: HUNTERS & FVB BOMBERS</h3>
              <p className="tableContents">
                Bring focused void bombers to cap out enemy whales or hunting ships to get into the renowned covert cyno career.
              </p>
            </li>
            <li>
              <h3>GOAL: HUNT AND KILL!</h3>
              <p className="tableContents">
                Catch and kill as many whales as possible. Be careful about baits and counter-drops. Always be aligned!
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
                Who says bomber fleets cannot brawl? Fight with small to medium sized fleets in this trademark doctrine of Bombers Bar.
              </p>
            </li>
            <li>
              <h3>FAVORED: RECONS & GUIDANCE BOMBERS</h3>
              <p className="tableContents">
                Bring guidance bombers (wolfpack fits available in the fitting page) for maximum range and damage application, or recons for all kinds of ewar.
              </p>
            </li>
            <li>
              <h3>GOAL: GUDFITES</h3>
              <p className="tableContents">
                Dominate the battle, camp gates or roam. Use a mixture of bombs and torps to overcome enemy fleets.
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
                Bomb huge battleship, battlecruiser and cruiser fleets in most sophisticated and elegant ways orchestrated by Bombers Bar.
              </p>
            </li>
            <li>
              <h3>FAVORED: BOMBING BOMBERS</h3>
              <p className="tableContents">
                Bring bombers with damage bombs and join a bomber squadron. Immediately warp out after launching your bomb!
              </p>
            </li>
            <li>
              <h3>GOAL: PURE WIPEOUT</h3>
              <p className="tableContents">
                Bombing runs are designed to eradicate entire fleets. Bombers Bar was found on doing those and excelled ever since. Eve doesn’t get more satisfactory than a successful bombing run!
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
                      Check out time for the next fleet. Preannounced fleets are in the BB channel MOTD. Rageform fleets which are announced on Slack.
                    </p>
                  </td>
                  <td>
                    <h3>STEP 3</h3>
                    <p className="howToJoinContents">
                      Bring your ship to the preannounced staging system, and X up in the channel when the fleet time comes. You’re in!
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

