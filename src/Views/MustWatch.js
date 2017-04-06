import React from 'react';

import YoutubeEmbeddedVideo from '../Components/Youtube/YoutubeEmbeddedVideo';

const mustWatchData = [
  {
    header: "PRE-FLEET RULES AND INSTRUCTIONS",
    youtubeId: "whw4B4AFwRA"
  },
  {
    header: "HOW TO TAKE A BLACK OPS BRIDGE",
    youtubeId: "44dWsAbOKw4"
  },
  {
    header: "NEWBRO SPEECH, CLOAK UP!",
    youtubeId: "FRiSiD4egXc"
  },
  {
    header: "HOW TO BOMB",
    youtubeId: "SxUS_aAmrF0"
  },
  {
    header: "HOW TO WARP OFF AFTER BOMBING",
    youtubeId: "PYdwWx1Zr8I"
  }
];

function MustWatchView() {
  return (
    <div>
      { mustWatchData.map((data, index) => (
        <div key={index}>
          <h2>{data.header}</h2>
          <YoutubeEmbeddedVideo videoId={data.youtubeId} />
        </div>
      )) }
    </div>
  );
};

export default MustWatchView;
