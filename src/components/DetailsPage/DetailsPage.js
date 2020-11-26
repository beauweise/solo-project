import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {  Button } from '@material-ui/core';


class AboutPage extends Component {
 backButton = () => {
   this.props.history.push('/');
}

  render() {
    const details = this.props.store.details
    return (
      <div>
        <h1>Details!</h1>
                <p>Date:{details.date.slice(5, 7) + '/' + details.date.slice(8, 10)
                 + '/' + details.date.slice(0, 4)}</p>
                <p>Lake:{details.lake}</p>
                <p>Weather:{details.weather}</p>
                <p>Wind:{details.wind}</p>
                <p>Water Temp:{details.water_temp}°F</p>
                <p>Water Clarity:{details.water_clarity}ft.</p>
                <p>Total Fish Caught:{details.fish_count}</p>
                <p>Total Fish Saw:{details.see_fish}</p>
                <p>Best Lures of the Trip:{details.lures}</p>
                <p>Notes for the Trip:{details.notes}</p>


                <br/>
               
               

                <br />
                <Button variant="contained" onClick={this.backButton}>Back to History</Button>
      </div>
    );
  }
}



export default connect(mapStoreToProps)(AboutPage);
