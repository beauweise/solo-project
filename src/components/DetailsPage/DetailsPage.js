import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {  Button } from '@material-ui/core';


class AboutPage extends Component {
 backButton = () => {
   this.props.history.push('/');
}

  render() {
    return (
      <div>
        <h1>Details!</h1>

                <p>Date:{this.props.store.details.date}</p>
                <p>Lake:{this.props.store.details.lake}</p>
                <p>Weather:{this.props.store.details.weather}</p>
                <p>Wind:{this.props.store.details.wind}</p>
                <p>Water Temp:{this.props.store.details.water_temp}°F</p>
                <p>Water Clarity:{this.props.store.details.water_clarity}ft.</p>
                <p>Total Fish Caught:{this.props.store.details.fish_count}</p>
                <p>Total Fish Saw:{this.props.store.details.see_fish}</p>
                <p>Best Lures of the Trip:{this.props.store.details.lures}</p>
                <p>Notes for the Trip:{this.props.store.details.notes}</p>


                <br/>
               
               

                <br />
                <Button variant="contained" onClick={this.backButton}>Back to History</Button>
      </div>
    );
  }
}



export default connect(mapStoreToProps)(AboutPage);
