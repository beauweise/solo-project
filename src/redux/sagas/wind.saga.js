import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getWind(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        const windResponse = yield axios.get(`/routes/wind.router`);
        yield put({ type: 'GET_DROPDOWN_INFO', payload: windResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* getWeather(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        const weatherResponse = yield axios.get(`/routes/weather.router`);
        yield put({ type: 'GET_DROPDOWN_INFO', payload: weatherResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* getLake(action) {
    //getting genre to set on page load for the add movie page dropdown selection
    try {
        const lakeResponse = yield axios.get(`/routes/lake.router`);
        yield put({ type: 'GET_DROPDOWN_INFO', payload: lakeResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* setWind() {
    yield takeLatest('FETCH_WIND', getWind);
    yield takeLatest('FETCH_WIND', getWeather);
    yield takeLatest('FETCH_WIND', getLake);
  }

export default setWind;
