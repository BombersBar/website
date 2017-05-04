import React from 'react';
import axios from 'axios';
import Donation from '../Components/Donations/donation'
import "./Donation.css";


export default class Donations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      donationsTop: [],
      donationsTopEver: [],
      topDonationLastMonth:[]
    };
  }

  componentDidMount() {
    axios.get('https://n1b.ch/api/donations/top',{
                params: {
                  offset:1
                }
            })
            .then(res => {
                const donationsTop = res.data.map((obj) => obj) || [];
                this.setState({ donationsTop });
            });

    axios.get('https://n1b.ch/api/donations/top',{
                params: {
                    limit: 1
                }
            })
            .then(res => {
                const donationsTopEver = res.data.map(obj => obj) || [];
                this.setState({ donationsTopEver });
            });
      axios.get('https://n1b.ch/api/donations/top',{
                params: {
                    days: 7,
                    limit: 5
                }
            })
            .then(res => {
                const topDonationLastMonth= res.data.map(obj => obj) || [];
                this.setState({ topDonationLastMonth});
            });
  }

  render() {
    const{ donationsTop, donationsTopEver, topDonationLastMonth}=this.state;


    return (
    <div className="donationContainer">
      <h1>Largest Donation Ever Recieved</h1>
            { donationsTopEver.map((item, index) => (
              <Donation item={item} key={index}  />
          )) }

        <h1>Top Donations of all Time</h1>
          { donationsTop.map((item, index) => (
            <div style={{  display: 'inline-block'}}>
            {!(index === 0) &&
             <Donation item={item} key={index} />
            }
            </div>
          )) }

           <h1>Top Donations Over the Last Month</h1>
          { topDonationLastMonth.map((item, index) => (
             <Donation item={item} key={index} />
          )) }
    </div>
    );
  }
}
