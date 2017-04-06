import React from 'react';

function getFittingOsmiumUrl (fitting) {
  return `https://o.smium.org/api/convert/${fitting.id}/svg/${fitting.id}.svg?privatetoken=${fitting.privateToken}`;
};

function OsmiumFittingWidget ({ fitting }) {
  return (
    <object type="image/svg+xml" 
      data={getFittingOsmiumUrl(fitting)}>
    </object>
  );
}

export default OsmiumFittingWidget;
