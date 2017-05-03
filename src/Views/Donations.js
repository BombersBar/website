import React from 'react';
import axios from 'axios';
import "./Donation.css";


export default class Donations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      donationsTop: [],
      donations: []
    };
  }

  componentDidMount() {
    axios.get('https://n1b.ch/api/donations/top')
      .then(res => {
        const donationsTop = res.data.map((obj) => obj) || [];
        this.setState({ donationsTop });
      });
      axios.get('https://n1b.ch/api/donations')
      .then(res => {
        const donations= res.data.map(obj => obj) || [];
        this.setState({ donations });
      });
  }

  render() {
    const{ donations, donationsTop}=this.state

    return (
    <div className="donationContainer">
    <h1>Donations</h1>
      { donationsTop.map((item, index) => (
        <div className="donation" key={index}>
          {/* number after character id is for the size of the image*/}
          <img className="bblogo" src={'https://image.eveonline.com/Character/'+item.characterId+"_200.jpg"}/>
          <h3 className="name"><strong>{item.characterName}</strong></h3>
          <p className="amount"><strong>{item.amount}</strong></p>
        </div>
      )) }
    </div>
    );
  }
}
