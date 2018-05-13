
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import YoutubeEmbeddedVideo from '../Components/Youtube/YoutubeEmbeddedVideo';
import './MustWatch.css';

const newBroData = [
  {
    header: 'Fleet Training',
    youtubeId: 'EHhOhUhEOAU',
  },
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

const bomberGandaData = [
  {
    header: '80 Bombers Melt a Rorqual',
    youtubeId: 'xrVEekw5lg8',
  },
  {
    header: 'Hunter Training',
    youtubeId: 'mCLWEA_15Z8',
  },
  {
    header: 'Recon Training',
    youtubeId: 'D5jkmquoQJA',
  },
  {
    header: 'RIP NYX',
    youtubeId: 'yzAJbGoV1jE',
  },
  {
    header: 'Kill a Thanny, kill a NYX and steal the Rorqual!!',
    youtubeId: 'aP8NVzZ_xCM',
  },
  {
    header: 'Bombing a Fortizar Battle',
    youtubeId: 'vC2tpPY_cL8',
  },
  {
    header: 'Tempelman "Rolled"',
    youtubeId: 'L78YSUBhXwE',
  },
];

export default class MustWatchView extends React.Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      swipe: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
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
          arrows: false,
        },
      }],
    };
    return (
      <div className='MustWatchContainer'>
        <div className='NewBroVideos'>
          <h2>NewBro Videos</h2>
          <Slider {...settings}>
            { newBroData.map((data, index) => (
              <div key={index}>
                <h2>{data.header}</h2>
                <YoutubeEmbeddedVideo videoId={data.youtubeId} />
              </div>
             )) }
          </Slider>
        </div>
        <div className='BomberGandaVideos'>
          <h2>BomberGanda Videos</h2>
          <Slider {...settings}>
            { bomberGandaData.map((data, index) => (
              <div key={index}>
                <h2>{data.header}</h2>
                <YoutubeEmbeddedVideo videoId={data.youtubeId} />
              </div>
             )) }
          </Slider>
        </div>
      </div>
    );
  }
}
