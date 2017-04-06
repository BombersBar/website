import React from 'react';

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

let getVideoEmbedUrl = (videoId) => {
  return `http://www.youtube.com/embed/${videoId}?&hd=1&autohide=1&wmode=transparent`;
};

const MustWatchView = () => {
  return (
    <div>
      { mustWatchData.map((data, index) => (
        <div key={index}>
          <h2>{data.header}</h2>
          <iframe width="560" height="315" src={getVideoEmbedUrl(data.youtubeId)} frameBorder="0" allowFullScreen={true} wmode="Opaque"></iframe>
        </div>
      )) }
    </div>
  );
};


export default MustWatchView;
