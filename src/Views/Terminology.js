import React from 'react';
import "./Terminology.css";

// This the faq data, it is mapped to HTML elements below!
// The reason for this as an array is that we can extract into a rest call later down the line, if we introduce a server
const terminologyData = [
  {
    header: "Starburst",
    subList:[{body:"Burn away in a random direction, but don’t warp off. You should probably cloak as soon as possible while you are moving away."}]
  },
  {
    header: "Cloak",
    subList:[{body:"Really?"}]
  },
  {
    header: "Ewar only",
    subList:[{body:"Do <b><u>NOT</u></b> shoot the target, but <b><u>DO</u></b> scram/point damp paint it. But do not shoot. Often called on sub-Capital engagements"}]
  },
  {
    header: "Hold DPS",
    subList:[{body:"Do <b><u>NOT</u></b> shoot the target, but <b><u>DO</u></b> scram/point damp paint it. But do not shoot. Often called on sub-Capital engagements"}]
  },
  {
    header: "Jump",
    subList:[
      {body:"Take the gate"},
      {body:"Take the <a target='_blank' href='https://www.youtube.com/watch?v=44dWsAbOKw4'>Bridge</a>"}
    ]
  },
  {
    header: "Bridge",
    subList:[
      {body:"Take the <a target='_blank' href='https://www.youtube.com/watch?v=44dWsAbOKw4'>Bridge</a>"},
      {body:"Like an artificial short-term wormhole, created by the BlackOps Battleship from here to the Cyno"}
    ]
  },
  {
    header: "Scram",
    subList:[{body:"The short range version of a point, but disables Micro-warp/jump-drives"}]
  },
  {
    header: "Point",
    subList:[{body:"The long range Warp Disruptor"}]
  },
  {
    header: "Tackle",
    subList:[{body:"Warp disrupt/scramble a hostile ship"}]
  },
  {
    header: "Hunter",
    subList:[{body:"A special ship that is moving around systems trying to tackle hostile ships"}]
  },
  {
    header: "Cyno",
    subList:[{body:"A short-term beacon a BlackOps Battleship can lock onto, to open a bridge (wormhole)"}]
  },
  {
    header: "Blops",
    subList:[{body:"The BlackOps Battleship. Always keep it on your Fleet-Watchlist"}]
  },
  {
    header: "Align",
    subList:[{body:"Moving in the direction of something you can warp to <b>At LEAST 75%</b> of your max velocity"}]
  },
  {
    header: "Focused Void (Bomb)",
    subList:[{body:"A special type of Bomb that does no damage but removes a lot of capacitor of one capital ship, if it explodes right on 0(zero) on the Capital ship"}]
  },
  {
    header: "(Force)Recon",
    subList:[
      {body:"A special type of cruiser that can covertOps-Cloak and take BlackOps Battleship bridges"},
      {body:"<b>Falcon:</b> Strong long range ECM (Jams)"},
      {body:"<b>Rapier:</b> Long range stasis webifying"},
      {body:"<b>Arazu:</b> Long range tackle (can point/scram up to 40/80km)"},
      {body:"<b>Pilgrim:</b> Long range strong Capacitor neutralizing(not used much in fleets)"}
    ]
  },
  {
    header: "Jams",
    subList:[{body:"ECM. Reduces the max lockable Targets of a ship to 0(zero) effectivly breaking any Locks and prohibiting the ship from relockicking for a time"}]
  },
  {
    header: "Bomb/Fuel Truck",
    subList:[{body:"A covertOps hauler filled with supplies for the Bombers or filled with fuel for the Blops (Every ship that takes a Bridge uses some fuel from the Blops’s cargo)"}]
  },
  {
    header: "Whale",
    subList:[{body:"A capital Ship. Mostly carriers"}]
  },
  {
    header: "SuperNova",
    subList:[{body:"Some Bomb/MJDFG shenannigans we will tell you about during fleet. OPSEC"}]
  },
  {
    header: "Freeburn",
    subList:[{body:"You are free to go to a certain system (Destination) in your own best speed, no need to wait on gates. (The route <b>SHOULD</b> already be scouted at that point, but if you see something call it out on comms)"}]
  },
  {
    header: "NPSI",
    subList:[{body:"<b>N</b>ot <b>P</b>urple, <b>S</b>hoot It. Means we do not care for politics, we will hunt everything that does not belong to our fleet (hence purple)"}]
  },
  {
    header: "Watchlist",
    subList:[
      {body:"When you are in a fleet, you can “watchlist” a few people, so they will always be visible/accessible to you, without the need to find them on your overview/fleetchat"},
      {body:"To add someone, rightclick the name -> fleet->add to watchlist"}
    ]
  },
  {
    header: "+1ing",
    subList:[{body:"If the fleet is moving to a destination, there should be someone who is “+1ing”, which means she/he always stays 1 jump ahead of the main fleet to scout the systems/path"}]
  },
  {
    header: "OpSec",
    subList:[{body:"Operations Security. Keep secret stuff secret"}]
  },
  {
    header: "Comms",
    subList:[{body:"Teamspeak"}]
  },
  {
    header: "Primary (secondary/tertiary)",
    subList:[
      {body:"The order of targets during a fight. The primary is the current main target of the fleet, everyone should shoot the primary. Secondary is the target that will become primary next. Always lock up those targets to enable quick target switching."},
      {body:"There will be roles who do not follow the target order, but those special roles should know what the are doing anyway *fingers crossed*"}
    ]
  },
];

function terminologyView() {
  return (
    <div className="contentContainer terminologyContainer">
    <h1>Terminology</h1>
    <h3>These are certain terms used during fleet that you need to know and understand</h3>
      { terminologyData.map((item, index) => (
        <div className="terminologyData" key={index}>
          <h4 className="terminologyHeader"><strong>{item.header}</strong></h4>
          <ul>
          {item.subList.map((item, index) => (
            <li key={index}><p dangerouslySetInnerHTML={{ __html: item.body }} className="terminologySub"/></li>
            ))}
          </ul>
        </div>
      )) }

    </div>
  );
}

export default terminologyView;