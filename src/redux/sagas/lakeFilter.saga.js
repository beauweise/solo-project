import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* getHistory(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        const historyResponse = yield axios.get(`/api/userData/${action.payload}`);
        console.log(historyResponse.data);
        
        yield put({ type: 'RESET_DATA', payload: historyResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* setlakeFilter() {
    yield takeLatest('FILTER_DATA', getHistory);
  }

export default setlakeFilter;
