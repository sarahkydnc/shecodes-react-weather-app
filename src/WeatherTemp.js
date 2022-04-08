import React from "react";
import { useState } from "react";

function WeatherTemp(props) {
  const [unit, setUnit] = useState(`metric`);

  function showImperial(event) {
    event.preventDefault();
    setUnit(`imperial`);
  }

  function showMetric(event) {
    event.preventDefault();
    setUnit(`metric`);
  }

  if (unit === `metric`) {
    return (
      <div className="d-flex weather-temperature justify-content-center">
        <p className="current-temperature float-left" id="current-temp">
          {Math.round(props.celsius)}°
        </p>
        <div className="float-left">
          <div className="temperature-convert fs-4 px-5 py-5">
            <button href="/" className="btn btn-outline-light mb-3 active">
              C
            </button>
            <button
              href="/"
              className="btn btn-outline-warning"
              onClick={showImperial}
            >
              F
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="d-flex weather-temperature justify-content-center">
        <p className="current-temperature float-left" id="current-temp">
          {Math.round(fahrenheit)}°
        </p>
        <div className="float-left">
          <div className="temperature-convert fs-4 px-5 py-5">
            <button
              href="/"
              className="btn btn-outline-light mb-3"
              onClick={showMetric}
            >
              C
            </button>
            <button href="/" className="btn btn-outline-warning active">
              F
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherTemp;
