import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import {getWeather, clearWeather} from './redux/actions/weatherActions';

const { API_KEY_OPEN } = process.env

function App() {
const dispatch = useDispatch();

const [loading, setLoading] = useState(true);

const [temperature, setTemperature] = useState('');
const [description, setDescription] = useState('');
const [humidity, setHumidity] = useState('');
const [windSpeed, setWindSpeed] = useState('');
const [city, setCity] = useState('');
const [country, setCountry] = useState('');

const weather = useSelector((state) => state.weatherReducer.weather);

async function getButton(e){
  e.preventDefault();
  const {city, country} = e.target.elements;
  const cityValue = city.value;
  const countryValue = country.value;
  //`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q&q=${cityValue}&days=3&aqi=no&alerts=no`
  setCity(cityValue)
  setCountry(countryValue)
  // const API_URL = `api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY_OPEN}&units=metric`;
  // const response = await fetch(API_URL);

  //const data = await response.json();
  
}

useEffect(() => {
  dispatch(clearWeather())
  
  dispatch(getWeather(city, country));
  if (weather !== null) {
    setLoading(false);
  }
}, []);


  return (
    <div className="container p-4">
      <div className="row">
        <div className='col-md-6 mx-auto'>
          <h1>Search Weather of your city</h1>
            <WeatherForm getButton={getButton}/>
            <WeatherInfo/>
            
            {loading ? 
            <h1>Cargando</h1>
           : 
            weather &&
                weather.map(w => (
                  <p>{w.name}</p>
                  ))
          
}
        </div>
      </div>
     
    </div>
  )
}   
  

export default App;
