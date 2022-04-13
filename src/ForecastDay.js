import React from "react";

import WeatherIcon from "./WeatherIcon";

function ForecastDay(props) {
  function forecastMax() {
    let tempMax = Math.round(props.data.temp.max);
    return `${tempMax}°`;
  }

  function forecastMin() {
    let tempMin = Math.round(props.data.temp.min);
    return `${tempMin}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = date.getDay();

    return days(day);
  }

  return (
    <div>
      <div className="col-3">
        <p className="forecast-day">{day}</p>
      </div>
      <div className="col-3">
        <WeatherIcon
          code={props.data.weather[0].icon}
          id="icon"
          className="w-100 forecast-icon"
        />
      </div>
      <div className="col-3">
        <p className="forecast-high">{forecastMax}</p>
      </div>
      <div className="col-3">
        <p className="forecast-low">{forecastMin}</p>
      </div>
    </div>
  );
}

export default ForecastDay;
