import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



function* getHistory(action) {
    //getting information for the filter when selection is made and refreshed the selection
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
