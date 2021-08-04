import axios from 'axios';
import {
    GET_WEATHER,
    CLEAR_WEATHER
} from '../constants';

const { API_KEY_OPEN } = process.env

export const getWeather = (city, country) => {
    console.log("esta es la ubicacion",city, country)
    return function(dispatch) {
        axios
            .get(`api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY_OPEN}&units=metric`)
            .then((r) => r.data)
            .then((data)=> {
                dispatch({
                    type: GET_WEATHER,
                    payload: data
                });
            });
    }
}
export const clearWeather = () => {
    return{
        type: CLEAR_WEATHER
    }
}