import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class AboutPage extends Component {
 backButton = () => {
   this.props.history.push('/');
}

  render() {
    return (
      <div>
        <h1>Details!</h1>

                <p>{this.props.store.details.lake} </p>
          
                <br/>
               
               
                {/* <p type = 'text' className = 'details' >{this.props.reduxState.oneMovie.details}</p> */}
                <br />
                <button onClick={this.backButton}>Back to History</button>
      </div>
    );
  }
}



export default connect(mapStoreToProps)(AboutPage);
