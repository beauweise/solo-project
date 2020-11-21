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
// getDetails = (id, image, details) => {
//     this.props.dispatch({
//         type: 'SET_MOVIE_DETAILS',
//         payload: { id: id, image: image, details: details }
//     });
//     this.props.history.push('/Details');
// }
// handleChange = (event)=>{
//     console.log(event.target.value);
    
//     this.props.dispatch({type:'RESET_MOVIES',payload:event.target.value})
// }
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>

        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
