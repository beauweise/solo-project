import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getHistory(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        const lakeResponse = yield axios.get(`/api/history`);
        yield put({ type: 'GET_HISTORY', payload: lakeResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* setHistory() {
    yield takeLatest('FETCH_HISTORY', getHistory);
  }

export default setHistory;
