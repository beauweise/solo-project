import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Date from '../Date/Date';
class AddInfo extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Date />
                    </li>
                    <li>
                        <label>Lake</label>
                        <input placeholder="lake"></input>
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
                        <label>Water Temp in degrees F</label>
                        <input placeholder='Water Temp'></input>
                    </li>
                    <br />
                    <li>
                        <label>Water Clarity in Feet</label>
                        <input placeholder='Water Clarity'></input>
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
            </div>
        )
    }
}



export default connect(mapStoreToProps)(AddInfo);




