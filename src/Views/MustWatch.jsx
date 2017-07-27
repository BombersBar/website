
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import YoutubeEmbeddedVideo from '../Components/Youtube/YoutubeEmbeddedVideo';
import './MustWatch.css';

const mustWatchData = [
  {
    header: 'PRE-FLEET RULES AND INSTRUCTIONS',
    youtubeId: 'whw4B4AFwRA',
  },
  {
    header: 'HOW TO TAKE A BLACK OPS BRIDGE',
    youtubeId: '44dWsAbOKw4',
  },
  {
    header: 'NEWBRO SPEECH, CLOAK UP!',
    youtubeId: 'FRiSiD4egXc',
  },
  {
    header: 'HOW TO BOMB',
    youtubeId: 'SxUS_aAmrF0',
  },
  {
    header: 'HOW TO WARP OFF AFTER BOMBING',
    youtubeId: 'PYdwWx1Zr8I',
  },
];

export default class MustWatchView extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      }, {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      }],
    };
    return (
      <div className='MustWatchContainer'>
        <h2>NEWBRO Videos</h2>
        <Slider {...settings}>
          { mustWatchData.map((data, index) => (
            <div key={index}>
              <h2>{data.header}</h2>
              <YoutubeEmbeddedVideo videoId={data.youtubeId} />
            </div>
           )) }
        </Slider>
      </div>
    );
  }
}
