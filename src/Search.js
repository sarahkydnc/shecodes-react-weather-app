import React from "react";
import { useState } from "react";
import axios from "axios";

import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";

function Search() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      temperatureLow: Math.round(response.data.main.temp_min),
      temperatureHigh: Math.round(response.data.main.temp_max),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: Math.round(response.data.main.pressure),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <form id="find-city-form">
          <div className="input-group mb-3">
            <input
              type="text"
              autoFocus="on"
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

        <WeatherToday temperature={temperature} />
      </div>
    );
  } else {
    let cityAPI = `Singapore`;
    const unitAPI = `metric`;
    const keyAPI = `7847c8cdbdd3f4d4e829321a937f5c42`;
    const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityAPI}&appid=${keyAPI}&units=${unitAPI}`;
    axios.get(urlAPI).then(handleResponse);

    return `Loading...`;
  }
}

export default Search;
