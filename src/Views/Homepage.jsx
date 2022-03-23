import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Donation from '../Components/Donations/donation'
import Victim from '../Components/kills/Victim'
import config from '../config';

import './homepage.css';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topDonationLastWeek: [],
      topDonationLastMonth: [],
      kills: [],
    };
  }

  componentDidMount() {
    axios.get('https://n1b.ch/api/donations/top', {
      params: {
        days: 7,
        limit: 4,
      },
    }).then((res) => {
      const topDonationLastWeek = res.data.map(obj => obj) || [];
      this.setState({ topDonationLastWeek });
    });
    axios.get('https://n1b.ch/api/donations/top', {
      params: {
        days: 30,
        limit: 4,
      },
    }).then((res) => {
      const topDonationLastMonth = res.data.map(obj => obj) || [];
      this.setState({ topDonationLastMonth });
    });
    axios.get(config.apiUrl + '/motd/kills')
      .then((res) => {
        const kills = res.data || [];
        this.setState({ kills });
      });
  }
  render() {
    const { topDonationLastWeek, topDonationLastMonth, kills } = this.state;

    kills.sort((a, b) =>
      parseFloat(b.totalValue) - parseFloat(a.totalValue),
    );

    return (
      <div className="contentContainer homepageContainer">
        <div>
          <h1>The NPSI Community For Cloakies</h1>
          <p className="homepageTitle">The “Not Purple Shoot It” fleets allow cloaky enthusiasts from all over New Eden to come together in a fleet.<br/><br/>
            <b>
              No corporations. <br/>
              No politics.  <br/>
              Just pretty explosions and Green Killboards.
            </b>
          </p>            
        </div>
        <div id="wrapper">
          <div id="grid">
            <a href="https://discord.gg/8HnFGnP" target="_blank" rel="noopener noreferrer" >
              <div className="homepageButtonContainer-button">
                <div className="logo-service" id="discord"></div>
                <h3><span className="name">Discord</span></h3>
              </div>
            </a>
            <a href="ts3server://voice.bombersbar.org?port=9987">
              <div className="homepageButtonContainer-button">
                <div className="logo-service" id="teamspeak"></div>
                <h3><span className="name">Teamspeak (comms)</span></h3>
              </div>
            </a>
            <Link to="/fittings">
              <div className="homepageButtonContainer-button">

                <div className="logo-service" id="fittings"></div>
                <h3><span className="name">Fittings</span></h3>
              </div>
            </Link>
            <Link to="/obombercare">
              <div className="homepageButtonContainer-button">
                <div className="logo-service" id="care"></div>
                <h3><span className="name">O'bombercare (SRP)</span></h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="howToJoinOuter">
          <div className="howToJoinInner">
            <h1> How to join a fleet?</h1>
            <table >
              <tbody>
                <tr>
                  <td width='33%'>
                    <h3>STEP 1</h3>
                    <p className="howToJoinContents">
                      Join the in game chat channel “Bombers Bar”, the discord channel linked above, and install Teamspeak3 and bookmark the Bombers Bar teamspeak comms also linked above.
                      </p>
                  </td>
                  <td width='33%'>
                    <h3> STEP 2</h3>
                    <p className="howToJoinContents">
                      Check out time and date for the next fleet. Fleets are in the BB channel MOTD and will be listed in the announcements channel of the discord. Consider having your ship fitted and ready in place well in advance of fleet start.
                      </p>
                  </td>
                  <td width='33%'>
                    <h3>STEP 3</h3>
                    <p className="howToJoinContents">
                      Bring your ship to the preannounced staging system, and X up in the linked Xup channel when that channel gets linked as the scheduled fleet time approaches. Accept the fleet invite and you’re in!
                      </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>Bombers Bar does not have a static staging system but it is recommended to have clones & ships ready in: Jita, Amarr, and Thera as well as other major trade hubs.</h4>
          </div>
        </div>


        <h1>Reasons To Join Bombers Bar Fleets</h1>
        <table className="table">
          <tbody>
            <td>
              <tr>
                <ul className="tableList">
                  <li>
                    <h3> WE ARE VERY NEWBRO FRIENDLY</h3>
                    <p className="tableContents">
                      It doesnt matter when you've started playing EVE.
                      As soon as you can fly a cloaky ship you are welcome to join our fleets.
                    </p>
                  </li>
                  <li>
                    <h3>BROADEN YOUR HORIZONS</h3>
                    <p className="tableContents">
                      Get information about all different types of play from mining and incursions to the best fits for solo fights.
                    </p>
                  </li>
                  <li>
                    <h3>BE MORE THAN JUST AN F1 MONKEY!!</h3>
                    <p className="tableContents">
                      Take more responsibilty with sebo bombers to help recons or fly a recon or hunter yourself.
                    </p>
                  </li>
                  <li>
                    <h3>THIS IS NOT A CORP OR ALLIANCE!! </h3>
                    <p className="tableContents">
                      Theres no corp or alliance to join you just have to X-up and come along.
                    </p>
                  </li>
                  <li>
                    <h3>BLOW UP SHIT!!</h3>
                    <p className="tableContents">
                      Easy access to PVP and dank green killboards.
                    </p>
                  </li>
                  <li>
                    <h3>OBOMBERCARE</h3>
                    <p className="tableContents">
                      (sometimes referred to as SRP or Trumpedo care) <br />
                      Dont be afraid about losing your ship we will give you isk to completely or atleast partially for lose.
                      (If your flying bomber/recon/hunter others bring at your own risk)
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
                      One of the only permanent rules in Bombers Bar.
                      Fly with who you want to and who you enjoy flying with!
                    </p>
                  </li>
                  <li>
                    <h3>NETWORKING / MAKING FRIENDS</h3>
                    <p className="tableContents">
                      Meet people from all over EVE and build connections beyond your alliance/corp boundries
                      Your always welcome on bb comms to chill , ask questions, try get csm votes or to try start your own roam.
                    </p>
                  </li>
                  <li>
                    <h3>BE JUST AN F1 MONKEY!!</h3>
                    <p className="tableContents">
                      SCREW RESPONSIBILITY. JUST ALIGN OUT, HIT F1, WATCH EXPLOSIONS, GG
                    </p>
                  </li>
                  <li>
                    <h3>YOU COULD EARN ISK WHILE YOU PLAY</h3>
                    <p className="tableContents">
                      Hunters and FCs receive a portion of loot in fleets.
                    </p>
                  </li>
                  <li>
                    <h3>HAVE FUN!!</h3>
                    <p className="tableContents">
                      Come along and watch netflix while you wait or join in chatting do whatever will let you have fun.
                    </p>
                  </li>
                  <li>
                    <h3>BE LURED IN BY FALSE ADVERTISEMENT!</h3>
                    <p className="tableContents">
                      wait... what?
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
                  Armada is staged out of a wormhole with a null sec static.
                  This wormhole is rolled to get new regions and new targets.
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
                <h3>FLEET OBJECTIVE: HUNT AND KILL!</h3>
                <p className="tableContents">
                  Catch and kill as many high valued whales and seals as possible. Be careful about baits and counter-drops. Always be aligned and ready to warp off!
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
                <h3>FLEET OBJECTIVE: TOTAL DESTRUCTION</h3>
                <p className="tableContents">
                  Bombing runs are designed to eradicate entire fleets.
                  Bombers Bar was founded on doing those and has excelled in their execution ever since.
                  Nothing else in a game is as satisfactory as a successful bombing run!
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>Habakuk Fleets</h2>
            <ul className="tableList">
              <li>
                <h3>TARGET: INDIVIDUALS AND SMALL FLEETS</h3>
                <p className="tableContents">
                  Hotdrop on gatecamps and other targets of opportunity in low sec. Staging out of high sec makes for very chill fleet environment that can still move around to cover large swaths of space.
                </p>
              </li>
              <li>
                <h3>FAVORED: RECONS & HABAKUK FIT BOMBERS</h3>
                <p className="tableContents">
                  Bring Habakuk fit bombers for lots of ewar and damage application, or recons to make sure the fleets can't get away or shoot back at us.
                </p>
              </li>
              <li>
                <h3>FLEET OBJECTIVE: SHOCK AND AWE</h3>
                <p className="tableContents">
                  Overwhelm the unsuspecting victims with superior numbers and DPS. Render their ship powerless in an onslaught of ewar and fireworks before volleying them off the field.
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
                <h3>FLEET OBJECTIVE: GUDFITES</h3>
                <p className="tableContents">
                  Camp gates or roam and look good doing it. Using a mixture of bombs and torps to destroy enemy fleets.
                </p>
              </li>
            </ul>
          </div>

          {/*<div className="inline">*/}
          {/*  <div className="alignLeft">*/}
          {/*    {topDonationLastWeek.length > 0 ?*/}
          {/*      <div>*/}
          {/*        <h1>Top Donations Over the Last Week</h1>*/}
          {/*        <div>*/}
          {/*          { topDonationLastWeek.map((item, index) => (*/}
          {/*            <Donation item={item} key={index} />*/}
          {/*          ))}*/}
          {/*        </div>*/}
          {/*      </div>:*/}
          {/*      <div>*/}
          {/*        <h1>Top Donations Over the Last Month</h1>*/}
          {/*        <div>*/}
          {/*          { topDonationLastMonth.map((item, index) => (*/}
          {/*            <Donation item={item} key={index} />*/}
          {/*          ))}*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    }*/}
          {/*  </div>*/}
          {/*  <div className="alignRight">*/}
          {/*    <span className="bottomSpacing">*/}
          {/*      <h1> How to donate?</h1>*/}
          {/*      <h4> Go to bombers bar channel right click "The Bombers Bar" and click give money </h4>*/}
          {/*      <img src={require('../images/donation.png')} alt=''/>*/}
          {/*      */}{/*<h3 className="donationsSee">Want to see more <Link to="/donations">Donations?</Link></h3>*/}
          {/*    </span>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>


        {/*<h1>Recent Victims</h1>*/}
        {/*<h2> Highest Value Kills </h2>*/}
        {/*{ kills.map((kill, index) => (*/}
        {/*  <span>*/}
        {/*    {index < 2 &&*/}
        {/*    <Victim kill={kill} key={index} />*/}
        {/*    }*/}
        {/*  </span>*/}
        {/*))*/}
        {/*}*/}
        {/*<span className="bottomSpacing">*/}
        {/*  <h3 className="donationsSee">Want to see more <Link to="/motd">Kills?</Link></h3>*/}
        {/*  <h4> Check the <Link to="/motd">MOTD</Link> to find out when the next fleet is so you can be on the next big killmail </h4>*/}
        {/*</span>*/}
      </div>
    );
  }
}

