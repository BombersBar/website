import React from 'react';

import OsmiumFittingWidget from "../Components/Eve/OsmiumFittingWidget";

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

function FittingsView() {
  return (
    <div>
      { fittingData.map((ship) => (
        <div key={ship.name}>
          <h2>{ship.name}</h2>
          { ship.fittings.map(fitting => (
            <div key={fitting.id}
            // eslint-disable-next-line
              className={fitting.title.replace(/\ /g, '-')}>

              <h3>{fitting.title}</h3>

              <OsmiumFittingWidget fitting={fitting} />
            </div>
          )) }
        </div>
      ) )}
    </div>
  );
}

export default FittingsView;
