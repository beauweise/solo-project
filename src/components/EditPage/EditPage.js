import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';



class editPage extends Component {
    state = {
        addUserData: {
            id:'',
            user_id:'',
            date: '',
            lake: '',
            weather: '',
            wind: '',
            waterTemp: 0,
            waterClarity: 0,
            fishCaught: 0,
            fishSaw: 0,
            lures: '',
            notes: ''
        }
    }
    componentDidMount() {
        this.editInfo();
        this.getFormInfo();
    }
    editInfo = ()=>{
        this.setState({
            addUserData:{
            date: (this.props.store.editData),
            lake: (this.props.store.editData),
            weather: (this.props.store.editData),
            wind: (this.props.store.editData),
            waterTemp: (this.props.store.editData),
            waterClarity: (this.props.store.editData),
            fishCaught: (this.props.store.editData),
            fishSaw:(this.props.store.editData),
            lures: (this.props.store.editData),
            notes: (this.props.store.editData)
            }
        })
    }

    getFormInfo = () => {
        this.props.dispatch({ type: 'FETCH_WIND' });
        this.props.dispatch({ type: 'FETCH_WEATHER' });
        this.props.dispatch({ type: 'FETCH_LAKE' });
    }
    handleChange = (propertyName, event) => {
        if (propertyName === "waterTemp" || propertyName === "waterClarity"
            || propertyName === "fishCaught" || propertyName === "fishSaw") {
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
    updateInfo = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'RESET_DATA', payload: this.state.addUserData })
        this.props.history.push('/home');

    }

    render() {
        const info = this.props.store.edit
        return (
            <div>

                <form key={info.id} id="resetForm">
                    <ul>
                        
                        <li>
                            <input type="date" defaultValue = {info.date}
                            onChange={(event) => this.handleChange("date", event)}></input>
                        </li>
                        {this.props.store.userReducer}
                        <li>
                            <label>Lake:</label>
                            <select defaultValue = {info.lake} onChange={(event) => this.handleChange("lake", event)} >
                                <option hidden value= '' >Lake</option>
                                {this.props.store.getDropDownInfo.getLake.map((lake) => { 
                                    return  <option key={lake.id} value={lake.id}>{lake.lake}</option>
                                })}
                            </select>
                        </li>
                        <br />
                        <li>
                            <label>Weather:</label>
                            <select defaultValue = {info.weather}
                            onChange={(event) => this.handleChange("weather", event)} >
                                <option hidden value=''>Weather</option>
                                {this.props.store.getDropDownInfo.getWeather.map((weather) => {
                                    return <option key={weather.id} value={weather.id}>{weather.weather}</option>
                                })}
                            </select>
                        </li>

                        <br />

                        <li>
                            <label>Wind:</label>
                            <select defaultValue = {info.wind}
                            onChange={(event) => this.handleChange("wind", event)} >
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
                            <input type='number' placeholder='Water Temp'  defaultValue = {info.water_temp} onChange={(event) =>
                                this.handleChange("waterTemp", event)}></input>
                        °F
                    </li>
                        <br />
                        <li>
                            <label>Water Clarity</label>
                            <input type='number' defaultValue = {info.water_clarity} onChange={(event) =>
                                this.handleChange("waterClarity", event)}></input>
                        ft.
                    </li>
                        <br /><li>
                            <label>Amount of fish caught:</label>
                            <input type='number' placeholder='Fish caught' defaultValue = {info.fish_count}
                            onChange={(event) => this.handleChange("fishCaught", event)}></input>
                        </li>
                        <br />
                        <li>
                            <label>How many fish were seen:</label>
                            <input type='number' placeholder='Fish saw' defaultValue = {info.see_fish} 
                            onChange={(event) => this.handleChange("fishSaw", event)}></input>
                        </li>
                        <br />
                        <li>
                            <label>Best lures:</label>
                            <input placeholder='Best Lures of the day' defaultValue = {info.lures}
                            onChange={(event) => this.handleChange("lures", event)}></input>
                        </li>
                        <br />
                        <li>
                            <label>Notes:</label>
                            <input placeholder='Notes' defaultValue = {info.notes}
                            onChange={(event) => this.handleChange("notes", event)}></input>
                        </li>

                    </ul>
                </form>
                <Button variant="contained" onClick={this.updateInfo}>Update</Button>
            </div>
        )
    }
}



export default connect(mapStoreToProps)(editPage);




