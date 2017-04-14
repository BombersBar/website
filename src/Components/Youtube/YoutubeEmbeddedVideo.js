import React from 'react';

function getVideoEmbedUrl (videoId) {
  return `https://www.youtube.com/embed/${videoId}?&hd=1&autohide=1&wmode=transparent`;
};

function YoutubeEmbeddedVideo({ videoId, width = 560, height = 315, allowFullScreen = true, frameBorder = 0 }) {
  return (
    <iframe width={width}
      height={height}
      src={getVideoEmbedUrl(videoId)}
      frameBorder={frameBorder}
      allowFullScreen={allowFullScreen}
      wmode="Opaque">
    </iframe>
  );
}

export default YoutubeEmbeddedVideo;
