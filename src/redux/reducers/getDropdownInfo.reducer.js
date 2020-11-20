import { combineReducers } from 'redux';



const getWind = (state = [], action) => {
    switch (action.type) {
        case 'GET_WIND_INFO':
            return action.payload;
        default:
            return state;
    }
}
const getWeather = (state = [], action) => {
    switch (action.type) {
        case 'GET_WEATHER_INFO':
            return action.payload;
        default:
            return state;
    }
}
const getLake = (state = [], action) => {
    switch (action.type) {
        case 'GET_LAKE_INFO':
            return action.payload;
        default:
            return state;
    }
}
export default combineReducers
    ({getWind,
    getWeather,
    getLake})
  ;
