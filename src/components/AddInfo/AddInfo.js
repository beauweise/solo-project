import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Card } from '@material-ui/core';
import './AddInfo.css';



class AddInfo extends Component {
    state = {
        addUserData: {
            date: '',
            lake: '',
            weather: '',
            wind: '',
            waterTemp: 0,
            waterClarity: 0,
            fish_count: 0,
            fishSaw: 0,
            lures: '',
            notes: ''
        }
    }
    componentDidMount() {
        //gets all information on page load.
        this.getFormInfo();
        console.log(this.props.store.getWeather);

    }
    //getting data for page load from GET_MOVIES
    getFormInfo = () => {
        //gets the information for all my drop downs to be mapped.
        this.props.dispatch({ type: 'FETCH_WIND' });
        this.props.dispatch({ type: 'FETCH_WEATHER' });
        this.props.dispatch({ type: 'FETCH_LAKE' });
    }
    handleChange = (propertyName, event) => {
        //takes in all handle changes and makes sure all that have numbers 
        // are converted from strings to number when places in state.
        if (propertyName === "waterTemp" || propertyName === "waterClarity"
            || propertyName === "fish_count" || propertyName === "fishSaw") {
            this.setState({
                addUserData: {
                    ...this.state.addUserData,
                    [propertyName]: Number(event.target.value)
                }
            })
        } else {
            this.setState({
                addUserData: {
                    ...this.state.addUserData,
                    [propertyName]: event.target.value
                }
            })
        }
    }
    submitInfo = (event) => {
        //sends all info in form to the post request and sends user to homepage.
        this.props.dispatch({ type: 'ADD_DATA', payload: this.state.addUserData })
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <Card className="AddInfo" >
                    <h2 className="text">Log New Trip</h2>
                    <ul className ='list'>
                        <li>
                            <input type="date" onChange={(event) => this.handleChange("date", event)}></input>
                        </li>
                        {this.props.store.userReducer}
                        <li>
                            <label>Lake:</label>
                            <select onChange={(event) => this.handleChange("lake", event)} >
                                <option hidden value=''>Lake</option>
                                {this.props.store.getDropDownInfo.getLake.map((lake) => {
                                    return <option key={lake.id} value={lake.id}>{lake.lake}</option>
                                })}
                            </select>
                        </li>
                        <br />
                        <li>
                            <label>Weather:</label>
                            <select onChange={(event) => this.handleChange("weather", event)} >
                                <option hidden value=''>Weather</option>
                                {this.props.store.getDropDownInfo.getWeather.map((weather) => {
                                    return <option key={weather.id} value={weather.id}>{weather.weather}</option>
                                })}
                            </select>
                        </li>
                        <br />
                        <li>
                            <label>Wind:</label>
                            <select onChange={(event) => this.handleChange("wind", event)} >
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
                            <input type='number' placeholder='Water Temp' onChange={(event) =>
                                this.handleChange("waterTemp", event)}></input>
                        °F
                    </li>
                        <br />
                        <li>
                            <label>Water Clarity</label>
                            <input type='number' placeholder='Water Clarity' onChange={(event) =>
                                this.handleChange("waterClarity", event)}></input>
                        ft.
                    </li>
                        <br /><li>
                            <label>Amount of fish caught:</label>
                            <input type='number' placeholder='Fish caught' onChange={(event) =>
                                this.handleChange("fish_count", event)}></input>
                        </li>
                        <br />
                        <li>
                            <label>How many fish were seen:</label>
                            <input type='number' placeholder='Fish saw' onChange={(event) =>
                                this.handleChange("fishSaw", event)}></input>
                        </li>
                        <br />
                        <li>
                            <label>Best lures:</label>
                            <input placeholder='Best Lures of the day' onChange={(event) =>
                                this.handleChange("lures", event)}></input>
                        </li>
                        <br />
                        <li >
                            <label className = "notes">Notes:</label>
                            <textarea className= "textArea" placeholder='Notes' onChange={(event) =>
                                this.handleChange("notes", event)}></textarea>
                        </li>
                    </ul>               
                <Button className= 'btn' variant="contained" onClick={this.submitInfo}>Submit</Button>
            </Card>
            </div>
        )
    }
}



export default connect(mapStoreToProps)(AddInfo);




