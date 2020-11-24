import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* dataReset(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        yield axios.put('/api/userData', action.payload);
    } catch (error) {
        console.log('error in post', error);
    }
}
function* resetData() {
    yield takeLatest('RESET_DATA', dataReset);
  }

export default resetData;
