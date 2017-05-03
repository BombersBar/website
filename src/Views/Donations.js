import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import Donation from '../Components/Donations/donation'
=======
>>>>>>> Started donations
import "./Donation.css";


export default class Donations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      donationsTop: [],
      donationsTopEver: [],
      topDonationLastMonth:[],
      allDonations: []
    };
  }

  componentDidMount() {
    axios.get('https://n1b.ch/api/donations/top',{
                params: {
                  offset:1,
                  limit:5
                }
            })
            .then(res => {
                const donationsTop = res.data.map((obj) => obj) || [];
                this.setState({ donationsTop });
            });

    axios.get('https://n1b.ch/api/donations',{
                params: {
                }
            })
            .then(res => {
                const allDonations = res.data.map((obj) => obj) || [];
                this.setState({ allDonations });
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
    const{ donationsTop, donationsTopEver, topDonationLastMonth, allDonations}=this.state;


    return (
    <div className="donationContainer">
      <h1>Largest Donation of Last Month</h1>
            { donationsTopEver.map((item, index) => (
              <Donation item={item} key={index}  />
          )) }

      <h1>Top Donations Over the Last Week</h1>
        { topDonationLastMonth.map((item, index) => (
            <Donation item={item} key={index} />
        ))}

      <h1>Top 5 Donations of last month</h1>
        { donationsTop.map((item, index) => (
          <div style={{  display: 'inline-block'}}>
          {!(index === 0) &&
            <Donation item={item} key={index} />
          }
          </div>
        ))}

      <h1>Honorable mentions for all of our <br/> donators over past month</h1>
        {allDonations.map((item,index)=> (
          <h3> {item.characterName} </h3>
        ))}
    </div>
    );
  }
}
