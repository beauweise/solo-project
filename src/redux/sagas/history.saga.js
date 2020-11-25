import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getHistory(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    console.log('222222222222222222222',action.payload);
    
    try {
        const historyResponse = yield axios.get(`/api/history`);
        console.log(historyResponse.data);
        
        yield put({ type: 'GET_HISTORY', payload: historyResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* setHistory() {
    yield takeLatest('FETCH_HISTORY', getHistory);
  }

export default setHistory;
