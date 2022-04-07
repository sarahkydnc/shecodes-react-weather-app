import React from "react";
import WeatherIcon from "./icons/01d.svg";
import Timestamp from "./Timestamp";

function WeatherToday(props) {
  return (
    <div className="weather-today py-4 px-2 shadow-md">
      <div className="container-fluid">
        <div className="row">
          <p className="subtitle text-middle mt-2 mb-4 fs-2">
            Here's the <strong>CURRENT WEATHER:</strong>
          </p>
        </div>

        <div className="divider mb-3"></div>

        <div className="row text-start mt-4">
          <div className="col-6">
            <h2 className="current-country">{props.data.country}</h2>
          </div>

          <div className="col-6">
            <p className="current-date mt-2 text-end">
              <Timestamp date={props.data.date} />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1 className="current-city text-start text-uppercase">
              {props.data.city}
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-4 justify-content-center">
            <div className="row mt-3">
              <img
                src={WeatherIcon}
                alt="weather-icon"
                id="icon"
                className="w-100"
              />
            </div>
            <div className="row">
              <p className="current-condition mt-5">{props.data.description}</p>
            </div>
          </div>

          <div className="col-8">
            <div className="row">
              <div className="d-flex weather-temperature justify-content-center">
                <p className="current-temperature float-left" id="current-temp">
                  {props.data.temperature}°
                </p>
                <div className="float-left">
                  <p className="temperature-convert fs-4 px-5 py-5"> C | F </p>
                </div>
              </div>
            </div>

            <div className="row temperature-range text-middle">
              <div className="col-4">
                <p className="current-feel">
                  Feels like
                  <br />
                  <span className="data-highlight">
                    {props.data.feelsLike}°
                  </span>
                </p>
              </div>
              <div className="col-4">
                <p className="temperature-low">
                  Low
                  <br />
                  <span className="data-highlight low-data">
                    {props.data.temperatureLow}°
                  </span>
                </p>
              </div>
              <div className="col-4">
                <p className="temperature-high">
                  High
                  <br />
                  <span className="data-highlight high-data">
                    {props.data.temperatureHigh}°
                  </span>
                </p>
              </div>
            </div>

            <div className="row weather-others text-middle mt-2">
              <div className="col-4">
                <p className="current-humidity">
                  Humidity
                  <br />
                  <span className="data-highlight">{props.data.humidity}%</span>
                </p>
              </div>
              <div className="col-4">
                <p className="current-wind">
                  Wind Speed
                  <br />
                  <span className="data-highlight">{props.data.wind} km/h</span>
                </p>
              </div>
              <div className="col-4">
                <p className="current-pressure">
                  Pressure
                  <br />
                  <span className="data-highlight">
                    {props.data.pressure} mb
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherToday;
