import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {

  componentDidMount() {
    this.getHistory()
  }
  //getting data for page load from GET_MOVIES
  getHistory = () => {
    this.props.dispatch({ type: 'FETCH_HISTORY' })
  }

  //getting details to be sent to details page on click of image
  //also redirecting page to details page
  getDetails = (date, lake, weather, wind, water_temp, water_clarity, 
    fish_count, see_fish, lures, notes) => {
    this.props.dispatch({
      type: 'SET_DETAILS',
      payload: { date: date, lake: lake, weather: weather, wind: wind, 
        water_temp: water_temp, water_clarity: water_clarity, 
        fish_count: fish_count, see_fish: see_fish, lures: lures, notes: notes }
    });
    this.props.history.push('/Details');
  }
  // handleChange = (event)=>{
  //     console.log(event.target.value);

  //     this.props.dispatch({type:'RESET_MOVIES',payload:event.target.value})
  // }
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}! Lets view your trip History!</h1>
        <p>Please select a trip for more details</p>


        {this.props.store.getHistory.map((history) => {
          return <li className='history' key={history.id}
            onClick={() => this.getDetails(history.date, history.lake, history.weather, 
              history.wind, history.water_temp, history.water_clarity, history.fish_count, 
              history.see_fish, history.lures, history.notes)}
          >Date:{history.date}Lake:{history.lake}Wind:{history.wind}</li>
        })}


        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
// onClick={() => this.getDetails()} */}
// key={movie.id} alt="" src={movie.poster} /> */
// })}