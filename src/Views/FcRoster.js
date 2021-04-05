import React from 'react';
import "./FcRoster.css";

// This the faq data, it is mapped to HTML elements below!
// The reason for this as an array is that we can extract into a rest call later down the line, if we introduce a server
const rosterList = [
  {
    "name": "Analee Tsasa",
    "corp": "",
    "bio": "",
    "profilePic": "analeetsasa_profilepic.png"
  }, 
  {
    "name": "Asgart Zaacaar",
    "corp": "",
    "bio": "",
    "profilePic": "asgartzaacaar_profilepic.png"
  }, 
  {
    "name": "Azedi Zucow",
    "corp": "",
    "bio": "",
    "profilePic": "Azedizucow_profilepic.png"
  }, 
  {
    "name": "bandht UngaBungas",
    "corp": "",
    "bio": "",
    "profilePic": "bandhtungabungas_profilepic.png"
  }, 
  {
    "name": "Cammeron Stacks",
    "corp": "",
    "bio": "",
    "profilePic": "cammeronstacks_profilepic.png"
  }, 
  {
    "name": "Claevyan",
    "corp": "",
    "bio": "",
    "profilePic": "claevyan_profilepic.png"
  }, 
  {
    "name": "cryon levitacis",
    "corp": "",
    "bio": "",
    "profilePic": "cryonlevitacis_profilepic.png"
  }, 
  {
    "name": "De W Javqe",
    "corp": "",
    "bio": "",
    "profilePic": "dewjavqe_profilepic.png"
  }, 
  {
    "name": "Diane Agrewal",
    "corp": "",
    "bio": "Literally a sentient toaster",
    "profilePic": "dianeagrewal_profilepic.png"
  },
  {
    "name": "Dracoth",
    "corp": "",
    "bio": "",
    "profilePic": "dracoth_profilepic.png"
  }, 
  {
    "name": "Duke Kazee",
    "corp": "",
    "bio": "",
    "profilePic": "dukekazee_profilepic.png"
  }, 
  {
    "name": "gnusal",
    "corp": "",
    "bio": "",
    "profilePic": "gnusal_profilepic.png"
  }, {
    "name": "Hazzzard haz",
    "corp": "",
    "bio": "",
    "profilePic": "hazzzardhaz_profilepic.png"
  }, {
    "name": "hellspawn9",
    "corp": "",
    "bio": "",
    "profilePic": "hellspawn9_profilepic.png"
  }, {
    "name": "Jonny Guns McGuire",
    "corp": "",
    "bio": "",
    "profilePic": "jonnygunsmcguire_profilepic.png"
  },
  {
    "name": "Katya Itzimaru",
    "corp": "",
    "bio": "",
    "profilePic": "katyaitzimaru_profilepic.png"
  },
  {
    "name": "Lord InsidiousTroll",
    "corp": "",
    "bio": "That guy with the voice.",
    "profilePic": "lordinsidioustroll_profilepic.png"
  },
  
  {
    "name": "Nova Valentis",
    "corp": "",
    "bio": "",
    "profilePic": "novavalentis_profilepic.png"
  },
  {
    "name": "Pippinthehobbit",
    "corp": "",
    "bio": "",
    "profilePic": "pippinthehobbit_profilepic.png"
  },
  {
    "name": "princess abbie",
    "corp": "",
    "bio": "",
    "profilePic": "princessabbie_profilepic.png"
  },
  {
    "name": "Rathor Gro-Kash",
    "corp": "",
    "bio": "",
    "profilePic": "rathorgro-kash_profilepic.png"
  },
  {
    "name": "Shimeo Tokila",
    "corp": "",
    "bio": "",
    "profilePic": "shimeotokila_profilepic.png"
  },
  {
    "name": "sin Alarma",
    "corp": "",
    "bio": "",
    "profilePic": "sinalarma_profilepic.png"
  },
  {
    "name": "techfreak",
    "corp": "",
    "bio": "",
    "profilePic": "techfreak_profilepic.png"
  },
  {
    "name": "Xackattack Avianson",
    "corp": "",
    "bio": "",
    "profilePic": "xackattackavianson_profilepic.png"
  },
  {
    "name": "Zane en Grantinus",
    "corp": "",
    "bio": "",
    "profilePic": "zaneengrantinus_profilepic.png"
  }
]

function RosterView() {
  return (
    <div className="rosterContainer">
      <h1>FC Roster</h1>
      { rosterList.map(function (item, index) {
        var picStyle = "background: " + "../images/".concat(item.profilePic);
        return (
          <div className="rosterData" key={index}>
            <div className="rosterProfilePic" style={{ picStyle }}/>
            <h3 className="rosterHeader"><strong>{item.name}</strong></h3>
            <h4 className="rosterCorp">{item.corp}</h4>
            <p className="rosterBody"><strong>{item.bio}</strong></p>
          </div>
        );
      })}
    </div>
  );
}

export default RosterView;
