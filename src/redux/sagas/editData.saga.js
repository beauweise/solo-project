import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* dataReset(action) {
    //getting genre to set on page load for the add movie page dropdown selection
   
    try {
    let response = yield axios.put('/api/userData', action.payload)
        yield put({type:'FETCH_HISTORY', payload: response.data });
    } catch (error) {
        console.log('error in post', error);
    }
}
function* resetData() {
    yield takeLatest('EDIT_DATA', dataReset);
  }

export default resetData;
