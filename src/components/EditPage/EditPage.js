import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Card } from '@material-ui/core';
import './EditPage.css';


class editPage extends Component {
    state = {
        addUserData: {
            id: '',
            user_id: '',
            date: '',
            lake: '',
            weather: '',
            wind: '',
            waterTemp: '',
            waterClarity: '',
            fishCaught: '',
            fishSaw: '',
            lures: '',
            notes: ''
        }
    }
    componentDidMount() {
        this.getFormInfo();
    }
    componentDidUpdate() {

        if (this.state.addUserData.id !== this.props.store.edit.id) {
            this.setState({
                addUserData: this.props.store.edit
            })
        }
    }

    getFormInfo = () => {
        this.props.dispatch({ type: 'FETCH_WIND' });
        this.props.dispatch({ type: 'FETCH_WEATHER' });
        this.props.dispatch({ type: 'FETCH_LAKE' });
    }
    handleChange = (propertyName, event) => {
        this.setState({
            addUserData: {
                ...this.state.addUserData,
                [propertyName]: event.target.value
            }
        })
    }
    // }
    updateInfo = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'EDIT_DATA', payload: this.state.addUserData })
        this.props.history.push('/home');
    }

    render() {
        const info = this.props.store.edit

        return (

            <Card className="editTable">
                <h2 className='text'>Edit Trip</h2>
                <ul>
                    <li>
                        {info.date &&
                            <input type="date" value={info.date.slice(0, 10)}
                                onChange={(event) => this.handleChange("date", event)}></input>}
                    </li>
                    {this.props.store.userReducer}
                    <li>
                        <label>Lake:</label>
                        <select defaultValue={info.lake} onChange={(event) => this.handleChange("lake_id", event)} >
                            <option value={info.lake} >{info.lake}</option>
                            {this.props.store.getDropDownInfo.getLake.map((lake) => {
                                return <option key={lake.id} value={lake.id}>{lake.lake}</option>
                            })}
                        </select>
                    </li>
                    <br />
                    <li>
                        <label>Weather:</label>
                        <select defaultValue={info.weather}
                            onChange={(event) => this.handleChange("weather_id", event)} >
                            <option value={info.weather} >{info.weather}
                            </option>
                            {this.props.store.getDropDownInfo.getWeather.map((weather) => {
                                return <option key={weather.id} value={weather.id}>{weather.weather}
                            </option>
                            })}
                        </select>
                    </li>
                    <br />
                    <li>
                        <label>Wind:</label>
                        <select defaultValue={info.wind}
                            onChange={(event) => this.handleChange("wind_id", event)} >
                            <option value={info.wind} >{info.wind}</option>
                            {this.props.store.getDropDownInfo.getWind.map((wind) => {
                                return <option key={wind.id} value={wind.id}>{wind.wind}</option>
                            })}
                        </select>
                        mph
                    </li>
                    <br />
                    <li>
                        <label>Water Temp</label>
                        <input type='number' placeholder='Water Temp' defaultValue={info.water_temp} onChange={(event) =>
                            this.handleChange("waterTemp", event)}></input>
                        °F
                    </li>
                    <br />
                    <li>
                        <label>Water Clarity</label>
                        <input type='number' defaultValue={info.water_clarity} onChange={(event) =>
                            this.handleChange("waterClarity", event)}></input>
                        ft.
                    </li>
                    <br /><li>
                        <label>Amount of fish caught:</label>
                        <input type='number' placeholder='Fish caught' defaultValue={info.fish_count}
                            onChange={(event) => this.handleChange("fishCaught", event)}></input>
                    </li>
                    <br />
                    <li>
                        <label>How many fish were seen:</label>
                        <input type='number' placeholder='Fish saw' defaultValue={info.see_fish}
                            onChange={(event) => this.handleChange("fishSaw", event)}></input>
                    </li>
                    <br />
                    <li>
                        <label>Best lures:</label>
                        <input placeholder='Best Lures of the day' defaultValue={info.lures}
                            onChange={(event) => this.handleChange("lures", event)}></input>
                    </li>
                    <br />
                    <li>
                        <label className="notes">Notes:</label>
                        <textarea className="textArea" placeholder='Notes' defaultValue={info.notes}
                            onChange={(event) => this.handleChange("notes", event)}></textarea>
                    </li>

                </ul>

                <Button className="btn" variant="contained" onClick={this.updateInfo}>Update</Button>
            </Card>

        )
    }
}



export default connect(mapStoreToProps)(editPage);




