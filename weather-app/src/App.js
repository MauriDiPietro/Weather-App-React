import React from 'react';

import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';

function App() {

function getWeather(e){
  const {city, country} = e.target.elements;
  const cityValue = city.value;
  const countryValue = country.value;
  console.log(city, country)
  e.preventDefault();
}

  return (
    <div className="container p-4">
      <div className="row">
        <div className='col-md-6 mx-auto'>
            <WeatherForm getWeather={getWeather}/>
            <WeatherInfo/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
