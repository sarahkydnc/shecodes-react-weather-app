import React from "react";
import WeatherIcon from "./WeatherIcon";

function Forecast() {
  return (
    <div className="weather-forecast px-2">
      <p className="subtitle fs-5">
        Here's your <strong>FORECAST:</strong>
      </p>

      <div className="forecast-days container-fluid" id="forecast">
        <div className="divider mt-4 mb-4"></div>

        <div className="row">
          <div className="col-3">
            <p className="forecast-day">Sun</p>
          </div>
          <div className="col-3">
            <WeatherIcon code="01d" id="icon" className="w-100 forecast-icon" />
          </div>
          <div className="col-3">
            <p className="forecast-high">31°</p>
          </div>
          <div className="col-3">
            <p className="forecast-low">26°</p>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <p className="forecast-day">Mon</p>
          </div>
          <div className="col-3">
            <WeatherIcon code="02d" id="icon" className="w-100 forecast-icon" />
          </div>
          <div className="col-3">
            <p className="forecast-high">31°</p>
          </div>
          <div className="col-3">
            <p className="forecast-low">26°</p>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <p className="forecast-day">Tue</p>
          </div>
          <div className="col-3">
            <WeatherIcon code="03d" id="icon" className="w-100 forecast-icon" />
          </div>
          <div className="col-3">
            <p className="forecast-high">31°</p>
          </div>
          <div className="col-3">
            <p className="forecast-low">26°</p>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <p className="forecast-day">Wed</p>
          </div>
          <div className="col-3">
            <WeatherIcon code="04d" id="icon" className="w-100 forecast-icon" />
          </div>
          <div className="col-3">
            <p className="forecast-high">31°</p>
          </div>
          <div className="col-3">
            <p className="forecast-low">26°</p>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <p className="forecast-day">Thu</p>
          </div>
          <div className="col-3">
            <WeatherIcon code="09d" id="icon" className="w-100 forecast-icon" />
          </div>
          <div className="col-3">
            <p className="forecast-high">31°</p>
          </div>
          <div className="col-3">
            <p className="forecast-low">26°</p>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <p className="forecast-day">Fri</p>
          </div>
          <div className="col-3">
            <WeatherIcon code="10d" id="icon" className="w-100 forecast-icon" />
          </div>
          <div className="col-3">
            <p className="forecast-high">31°</p>
          </div>
          <div className="col-3">
            <p className="forecast-low">26°</p>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <p className="forecast-day">Sat</p>
          </div>
          <div className="col-3">
            <WeatherIcon code="11d" id="icon" className="w-100 forecast-icon" />
          </div>
          <div className="col-3">
            <p className="forecast-high">31°</p>
          </div>
          <div className="col-3">
            <p className="forecast-low">26°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
