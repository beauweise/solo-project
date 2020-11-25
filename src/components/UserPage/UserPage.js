import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';


class UserPage extends Component {

  componentDidMount() {
    this.getHistory()
  }
  //getting data for page load from GET_MOVIES
  getHistory = () => {
    this.props.dispatch({ type: 'FETCH_HISTORY' })
    this.props.dispatch({ type: 'FETCH_LAKE' });

  }
  filterPage = (event) => {
    this.props.dispatch({ type: 'FILTER_DATA', payload: event.target.value })
  }
  //getting details to be sent to details page on click of image
  //also redirecting page to details page
  getDetails = (date, lake, weather, wind, water_temp, water_clarity,
    fish_count, see_fish, lures, notes) => {
    this.props.dispatch({
      type: 'SET_DETAILS',
      payload: {
        date: date, lake: lake, weather: weather, wind: wind,
        water_temp: water_temp, water_clarity: water_clarity,
        fish_count: fish_count, see_fish: see_fish, lures: lures, notes: notes
      }
    });
    this.props.history.push('/Details');
  }
  editInfo = (id, date, lake, lake_id, weather,weather_id, wind,wind_id, water_temp, water_clarity,
    fish_count, see_fish, lures, notes) => {
      this.props.dispatch({
      type: 'CHANGE_DATA',
      payload: {
        id: id, date: date, lake: lake, lake_id:lake_id, weather: weather,weather_id:weather_id, wind:wind, wind_id: wind_id,
        water_temp: water_temp, water_clarity: water_clarity,
        fish_count: fish_count, see_fish: see_fish, lures: lures, notes: notes
      }
      
    });
    this.props.history.push('/edit')
  }
  deleteInfo = (historyId) => {

    this.props.dispatch({ type: "DELETE_INFO", payload: historyId })
  }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}! Let's view your trip History!</h1>
        <p>Please select a trip for more details</p>

        <select onChange={(event) => this.filterPage(event)} >
          <option hidden value=''>Lake</option>
          {this.props.store.getDropDownInfo.getLake.map((lake) => {
            return <option key={lake.id} value={lake.id}>{lake.lake}</option>
          })}
        </select>
        {this.props.store.lakeFilter.length === 0 ?
          <p>
            {this.props.store.getHistory.map((history) => {
              return <li className='history' key={history.id}>
                Date:{history.date.slice(5, 7) + '/' + history.date.slice(8, 10) + '/' +
                  history.date.slice(0, 4)} Lake:{history.lake}Wind:{history.wind} Weather:{history.weather}

                <Button variant="contained" onClick={() => this.getDetails(history.date, history.lake, history.weather,
                  history.wind, history.water_temp, history.water_clarity, history.fish_count,
                  history.see_fish, history.lures, history.notes)}>Details</Button>
                <Button variant="contained" onClick={() => this.editInfo(history.id, history.date, history.lake,history.lake_id, 
                history.weather,history.weather_id,history.wind,history.wind_id, history.water_temp, history.water_clarity, history.fish_count,
                  history.see_fish, history.lures, history.notes)}>Edit</Button >
                <Button variant="contained" onClick={() => this.deleteInfo(history.id)}>Delete</Button></li>
            })}

          </p>
          :
          
          <p>{this.props.store.lakeFilter.map((history) => {
            return <li className='history' key={history.id}>
              Date:{history.date.slice(5, 7) + '/' + history.date.slice(8, 10) + '/' +
                history.date.slice(0, 4)} Lake:{history.lake}Wind:{history.wind}Weather:{history.weather}
  
              <Button variant="contained" onClick={() => this.getDetails(history.date, history.lake, history.weather,
                history.wind, history.water_temp, history.water_clarity, history.fish_count,
                history.see_fish, history.lures, history.notes)}>Details</Button>
              <Button variant="contained" onClick={() => this.editInfo(history.id, history.date, history.lake,history.lake_id, 
                history.weather,history.weather_id,history.wind,history.wind_id, history.water_temp, history.water_clarity, history.fish_count,
                  history.see_fish, history.lures, history.notes)}>Edit</Button >
              <Button variant="contained" onClick={() => this.deleteInfo(history.id)}>Delete</Button></li>
          })}</p>
        }
        
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

