import React from 'react';
import axios from 'axios';

export default class Motd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      kills: []
    };
  }

  componentDidMount() {
    axios.get('https://n1b.ch/api/motd/text')
            .then(res => {
                const lines = res.data || [];
                this.setState({ lines });
            });

    axios.get('https://n1b.ch/api/motd/kills')
            .then(res => {
                const kills = res.data || [];
                this.setState({ kills });
            });
  }

  render() {
    const{ lines, kills } = this.state;

    console.log('Render: ' + lines);

    return (
      <div className="motdContainer">
        { 
          lines.map((l) => (
              <p>{ l }</p>
            ))
        }
      </div>
    );
  }
}
