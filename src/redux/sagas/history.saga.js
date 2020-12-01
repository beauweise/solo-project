import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getHistory(action) {
    //getting information of all the info in the DB on page load for the history/home page  
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
