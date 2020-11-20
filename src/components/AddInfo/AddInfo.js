import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Date from '../Date/Date';


class AddInfo extends Component {
    state = {
        addUserInfo: {
            date: '',
            lake: '',
            weather: '',
            wind: '',
            waterTemp: '',
            waterClarity: '',
            fishCaught: '',
            fishSaw: '',
            lures:'',
            notes:''
        }
    }
    componentDidMount() {
        this.getFormInfo()
        console.log(this.props.store.getWeather);
        
    }
    //getting data for page load from GET_MOVIES
    getFormInfo = () => {
        this.props.dispatch({ type: 'FETCH_WIND' });
        this.props.dispatch({ type: 'FETCH_WEATHER' });
        this.props.dispatch({ type: 'FETCH_LAKE' });
    }
    handleChange = (propertyName, event) => {
       
        this.setState({
            addUserInfo: {
                ...this.state.addUserInfo,
                [propertyName]: event.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Date />
                    </li>
                    <li>
                        <label>Lake:</label>
                    <select onChange={(event) => this.handleChange("lake",event)} >
                            <option hidden value=''>Weather</option>
                            {this.props.store.getDropDownInfo.getLake.map((lake) => {
                                return <option key={lake.id} value={lake.id}>{lake.lake}</option>
                            })}
                        </select>
                    </li>
                    <br />
                    <li>
                    <label>Weather:</label>
                    <select onChange={(event) => this.handleChange("weather",event)} >
                            <option hidden value=''>Weather</option>
                            {this.props.store.getDropDownInfo.getWeather.map((weather) => {
                                return <option key={weather.id} value={weather.id}>{weather.weather}</option>
                            })}
                        </select>
                    </li>
                    <br />

                    <li>
                        <label>Wind:</label>
                        <select onChange={(event) => this.handleChange("wind",event)} >
                            <option hidden value=''>Wind</option>
                            {this.props.store.getDropDownInfo.getWind.map((wind) => {
                                return <option key={wind.id} value={wind.id}>{wind.wind}</option>
                            })}
                        </select>
                        mph
                    </li>
                    <br />
                    <li>
                        <label>Water Temp</label>
                        <input placeholder='Water Temp'></input>
                        °F
                    </li>
                    <br />
                    <li>
                        <label>Water Clarity</label>
                        <input placeholder='Water Clarity'></input>
                        ft.
                    </li>
                    <br /><li>
                        <label>Amount of fish caught:</label>
                        <input placeholder='Fish caught'></input>
                    </li>
                    <br />
                    <li>
                        <label>How many fish were seen:</label>
                        <input placeholder='Fish saw'></input>
                    </li>
                    <br />
                    <li>
                        <label>Best lures:</label>
                        <input placeholder='Best Lures of the day'></input>
                    </li>
                    <br />
                    <li>
                        <label>Notes:</label>
                        <input placeholder='Notes'></input>
                    </li>

                </ul>
                <button onClick={this.submitInfo}>Submit</button>
            </div>
        )
    }
}



export default connect(mapStoreToProps)(AddInfo);




