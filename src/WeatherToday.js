import React from "react";
import WeatherIcon from "./icons/01d.svg";

function WeatherToday() {
  return (
    <div className="weather-today py-4 px-2 shadow-md">
      <div className="container-fluid">
        <div className="row">
          <p className="subtitle text-middle mt-2 fs-2">
            Here's the <strong>CURRENT WEATHER:</strong>
          </p>
        </div>

        <div className="divider mb-3"></div>

        <div className="row text-start">
          <div className="col-6">
            <h2 className="current-country">Singapore</h2>
          </div>

          <div className="col-6">
            <p className="current-date mt-2 text-end">
              Thursday, 10 March 2022, 15:30
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1 className="current-city text-start text-uppercase">
              Marina Bay
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
              <p className="current-condition mt-5">Clear Skies</p>
            </div>
          </div>

          <div className="col-8">
            <div className="row">
              <div className="d-flex weather-temperature justify-content-center">
                <p className="current-temperature float-left" id="current-temp">
                  31°
                </p>
                <div className="float-left">
                  <p className="current-temperature fs-4 px-5 py-5 mt-3">
                    {" "}
                    C | F{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="row temperature-range text-middle">
              <div className="col-4">
                <p className="current-feel">
                  Feels like: <span className="data-highlight">37°</span>
                </p>
              </div>
              <div className="col-4">
                <p className="temperature-low">
                  Low:
                  <br />
                  <span className="data-highlight low-data">29°</span>
                </p>
              </div>
              <div className="col-4">
                <p className="temperature-high">
                  High:
                  <br />
                  <span className="data-highlight high-data">34°</span>
                </p>
              </div>
            </div>

            <div className="row weather-others text-middle mt-2">
              <div className="col-4">
                <p className="current-humidity">
                  Humidity:
                  <br />
                  <span className="data-highlight">67%</span>
                </p>
              </div>
              <div className="col-4">
                <p className="current-wind">
                  Wind Speed:
                  <br />
                  <span className="data-highlight">8 km/h</span>
                </p>
              </div>
              <div className="col-4">
                <p className="current-pressure">
                  Pressure:
                  <br />
                  <span className="data-highlight">1007 mb</span>
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
