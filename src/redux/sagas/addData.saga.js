import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addData(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        yield axios.post('/api/userData', action.payload);
        
    } catch (error) {
        console.log('error in post', error);
    }
}


function* addUserData() {
    yield takeLatest('ADD_DATA', addData);
  }

export default addUserData;
