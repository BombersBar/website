import React from 'react';
import axios from 'axios';
import "./Motd.css";
import Victim from '../Components/kills/Victim';
import config from '../config';

export default class Motd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      motd: [],
      kills: []
    };
  }

  componentDidMount() {
    axios.get(config.apiUrl + '/motd/text')
            .then(res => {
                const motd = res.data || [];
                this.setState({ motd });
            });

    axios.get(config.apiUrl + '/motd/kills')
            .then(res => {
                const kills = res.data || [];
                this.setState({ kills });
            });
  }

  render() {
    const{ motd, kills } = this.state;

    return (
      <div className="motdContainer">
        <div className="InnerDiv">
          <div>
            <h1>Message Of The Day</h1>
            <h2> From ingame BB channel </h2>

            { motd.map((line, index) => (
              <div key={index}>
                <p className="motdLine"><strong>{line}</strong></p>
              </div>
              ))
            }
          </div>
          {kills.length > 0 &&
            <div>
              <h1>Recent Victims</h1>
              <h2> From ingame BB channel </h2>
              { kills.map((kill, index) => (
                <Victim kill={kill} key={index} />
              ))
              }
            </div>
          }
        </div>
      </div>
    );
  }
}
