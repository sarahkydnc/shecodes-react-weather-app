import React from "react";
import { useState } from "react";
import axios from "axios";

import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";
import Music from "./Music";

function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [location, setLocation] = useState(props.defaultLocation);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      temperatureLow: Math.round(response.data.main.temp_min),
      temperatureHigh: Math.round(response.data.main.temp_max),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: Math.round(response.data.main.pressure),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    processSearch();
  }

  function handleLocation(event) {
    setLocation(event.target.value);
  }

  function processSearch() {
    const unitAPI = `metric`;
    const keyAPI = `7847c8cdbdd3f4d4e829321a937f5c42`;
    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyAPI}&units=${unitAPI}`;
    axios.get(urlAPI).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-sm-8">
          <form id="find-city-form" onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                autoFocus="on"
                onChange={handleLocation}
                className="form-control"
                placeholder="Enter a city (e.g. San Francisco)"
                id="find-input"
              />
              <button className="btn btn-outline-warning" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <p id="current-location" className="mt-4 text-center">
            Use my current location
          </p>
          <WeatherToday data={weatherData} />
        </div>

        <div className="col-sm-4">
          <Forecast coordinates={weatherData.coordinates} />
          <br />
          <Music />
        </div>
      </div>
    );
  } else {
    processSearch();
    return <div className="text-warning">Loading...</div>;
  }
}

export default Search;
