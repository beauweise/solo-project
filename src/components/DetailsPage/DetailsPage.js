import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Card, Paper } from '@material-ui/core';
import './Details.css';


class AboutPage extends Component {
  backButton = () => {
    this.props.history.push('/');
  }

  render() {
    const details = this.props.store.details
    return (

      <>
        <h1>Trip Details!</h1>
        <div className='container'>
          <Paper elevation={20} className='details'>
            {details.date &&
            <p>Date:{this.props.store.details.date.slice(5, 7)
                + '/' + this.props.store.details.date.slice(8, 10)
                + '/' + this.props.store.details.date.slice(0, 4)}</p>}
            <p>Lake:{details.lake}</p>
            <p>Weather:{details.weather}</p>
            <p>Wind:{details.wind}</p>
            <p>Water Temp:{details.water_temp}°F</p>
            <p>Water Clarity:{details.water_clarity}ft.</p>
            <p>Total Fish Caught:{details.fish_count}</p>
            <p>Total Fish Saw:{details.see_fish}</p>
            <p>Best Lures of the Trip:{details.lures}</p>
            <p>Notes for the Trip:{details.notes}</p>


            <br />



            <br />
            <Button variant="contained" onClick={this.backButton}>Back to History</Button>
          </Paper>
        </div>
      </>
    );
  }
}



export default connect(mapStoreToProps)(AboutPage);
