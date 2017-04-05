import React from 'react';

const fittingData = [
  {
    name: "Manticore",
    fittings: [
      {
        title: "Whaling",
        id: "90463",
        privateToken: "4612757230515650560"
      },
    ]
  },
  {
    name: "Nemesis",
    fittings: [
      {
        title: "Whaling",
        id: "90452",
        privateToken: "6227052913856872448"
      }
    ]
  }

];

let getFittingOsmiumUrl = (fitting) => {
  return `https://o.smium.org/api/convert/${fitting.id}/svg/${fitting.id}.svg?privatetoken=${fitting.privateToken}`;
};

const FittingsView = () => (
  <div>
    { fittingData.map((ship) => (
      <div key={ship.name}>
        <h2>{ship.name}</h2>
        { ship.fittings.map(fitting => (
          <div key={fitting.id} 
            className={fitting.title.replace(/\ /g, '-')}>

            <h3>{fitting.title}</h3>
            
            <object type="image/svg+xml" 
              data={getFittingOsmiumUrl(fitting)}>
            </object>

          </div>
        )) }
      </div>
    ) )}
  </div>
);

export default FittingsView;
