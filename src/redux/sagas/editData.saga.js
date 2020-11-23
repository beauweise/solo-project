import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* dataReset(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        const historyResponse = yield axios.get(`/api/history`);
        console.log(historyResponse.data);
        
        yield put({ type: 'GET_HISTORY', payload: historyResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* resetData() {
    yield takeLatest('RESET_DATA', dataReset);
  }

export default resetData;
