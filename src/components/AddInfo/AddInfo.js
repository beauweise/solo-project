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
    }
    //getting data for page load from GET_MOVIES
    getFormInfo = () => {
        this.props.dispatch({ type: 'FETCH_WIND' })

    }
    handleChange

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Date />
                    </li>
                    <li>
                        <label>Lake:</label>
                        <select>
                            <option></option>
                        </select>
                    </li>
                    <br />
                    <li>
                        <label>Weather:</label>
                        <select>
                            <option></option>
                        </select>
                    </li>
                    <br />
                    <li>
                        <label>Wind:</label>
                        <select onChange={(event) => this.handleChange(event)} >
                            <option hidden value=''>Wind</option>
                            {this.props.store.getWindReducer.map((wind) => {
                                return <option key={wind.id} value={wind.id}>{wind.name}</option>
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




