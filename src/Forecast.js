import React from "react";
import PartlyCloudyIcon from "./icons/02d.svg";

function Forecast() {
  return (
    <div className="weather-forecast py-4 px-2 shadow-md">
      <p className="subtitle">
        Here's your <strong>FORECAST:</strong>
      </p>

      <div className="forecast-days container-fluid" id="forecast">
        <div className="divider mb-3"></div>

        <div className="row">
          <div className="col-3">
            <p className="forecast-day">Sun</p>
          </div>
          <div className="col-3">
            <img
              src={PartlyCloudyIcon}
              alt="weather-icon"
              id="icon"
              className="w-100 forecast-icon"
            />
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
            <img
              src={PartlyCloudyIcon}
              alt="weather-icon"
              id="icon"
              className="w-100 forecast-icon"
            />
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
            <img
              src={PartlyCloudyIcon}
              alt="weather-icon"
              id="icon"
              className="w-100 forecast-icon"
            />
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
            <img
              src={PartlyCloudyIcon}
              alt="weather-icon"
              id="icon"
              className="w-100 forecast-icon"
            />
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
            <img
              src={PartlyCloudyIcon}
              alt="weather-icon"
              id="icon"
              className="w-100 forecast-icon"
            />
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
            <img
              src={PartlyCloudyIcon}
              alt="weather-icon"
              id="icon"
              className="w-100 forecast-icon"
            />
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
            <img
              src={PartlyCloudyIcon}
              alt="weather-icon"
              id="icon"
              className="w-100 forecast-icon"
            />
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
