import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* setWind(action) {
    //getting wind to set on page load for the wind dropdown selection
    try {
        const windResponse = yield axios.get(`/api/wind`);
        yield put({ type: 'GET_WIND_INFO', payload: windResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* setWeather(action) {
    //getting weather to set on page load for the weather dropdown selection
    try {
        const weatherResponse = yield axios.get(`/api/weather`);
        yield put({ type: 'GET_WEATHER_INFO', payload: weatherResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* setLake(action) {
    //getting lake to set on page load for the lake dropdown selection
    try {
        const lakeResponse = yield axios.get(`/api/lake`);
        yield put({ type: 'GET_LAKE_INFO', payload: lakeResponse.data })
    } catch (error) {
        console.log(error,action.payload);
    }
}
function* setDropdown() {
    yield takeLatest('FETCH_WIND', setWind);
    yield takeLatest('FETCH_WEATHER', setWeather);
    yield takeLatest('FETCH_LAKE', setLake);
  }

export default setDropdown;
