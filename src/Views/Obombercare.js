import React from 'react';
import "./obombercare.css";

function ObombercareView() {
  return (
    <div className="OutsideContainer">
      <img className="iskIcon" src={require('../images/u01B5.png')} alt=''/>
      <div className="InsideContainer">
        <span className="titleObombercare">ENJOY O'BOMBERCARE!</span>
        <p className="titleObombercare">Search “Vova Nalentis” in game, read the instructions below or in her bio, and send her the killmail accordingly.</p>

        <p>To handle your payout, I need to have:</p>
        <ul>
          <li>Name of your FC,</li>
          <li>The killmail,</li>
          <li>In the case of a T3 or other expensive hunter ship: Amount of donations you have received from the fleet.</li>
        </ul>

        <p>Kill mails older than 1 week are no longer eligible for SRP, so make sure to send them on time.</p>
        <p>Note: I usually do not answer mails. You only get the ISK transferred into your account and that’s it.</p>
        <p>Intel: This character is not for intel and I will hate you if you send me any.</p>
        <p>If you happen to have intel, ask for an FC in Bombers Bar or send it to bombersbarnpsi@gmail.com</p>

        <p>Payout (updated March 14th, 2021):</p>
        <ul>
          <li>Capsules - Not covered.</li>
          <li>Bombers - 40m</li>
          <li>Polarized Bombers - 70m</li>
          <li>Recons - 200m</li>
          <li>Fuel/Loot Truck - 150m (srp'd at FC's discretion)</li>
          <li></li>
          <li>Hunters:</li>
          <li>Dictors - 70m</li>
          <li>T3 Cruiser - 250m</li>
          <li>Covops - 60m</li>
          <li></li>
          <li>Bait:</li>
          <li>Industrial - 10m</li>
          <li>Battleship - 75m</li>
          <li></li>
          <li>RobberKnights:</li>
          <li>Stratios - 230m</li>
        </ul>
      </div>
    </div>
  );
}

export default ObombercareView;
