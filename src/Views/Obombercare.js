import React from 'react';
import "./obombercare.css";

function ObombercareView() {
  return (
    <div className="OutsideContainer">
    <span>ENJOY O'BOMBERCARE!</span>
    <p>Search “Chaos Amphal” in game, read the instructions below or in her bio, and send her the killmail accordingly.</p>

      <p>To handle your payout, I need to have:</p>
      <ul>
        <li>Name of your FC,</li>
        <li>The killmail,</li>
        <li>In the case of a T3 hunter ship: Amount of donations you have received from the fleet.</li>
      </ul>

    <p>Kill mails older than 1 week are no longer eligible for SRP, so make sure to send them on time.</p>
    <p>Note: I usually do not answer mails. You only get the ISK transferred into your account and that’s it.</p>
  <p>Intel: This character is not for intel and I will hate you if you send me any.</p>
  <p>If you happen to have intel, ask for an FC in Bombers Bar or send it to bombersbarnpsi@gmail.com</p>

    <p>Payout:</p>
    <ul>
    <li>Capsules: Not covered.</li>
    <li>Bombers: 30m</li>
    <li>Polarized Bombers: 50m</li>
    <li>Recons: 200m</li>
    <li>Hunters, bubblers and CDs: Flil up to 150m</li>
    <li>T3 hunters: Up to 500m (tell us how many donations you got and we’ll pay the difference up to total lost value or 500m. Insurance is taken into account as 30m).</li>
    </ul>
    </div>
  );
}

export default ObombercareView;