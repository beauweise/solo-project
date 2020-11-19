import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getWind(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        const genreResponse = yield axios.get(`/routes/wind.router`);
        yield put({ type: 'GET_WIND', payload: genreResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* setWind() {
    yield takeLatest('FETCH_WIND', getWind);
  }

export default setWind;
