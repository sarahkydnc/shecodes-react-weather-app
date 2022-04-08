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
          {Math.round(props.celsius)}
        </p>
        <div className="float-left">
          <p className="temperature-convert fs-4 px-5 py-5">
            {" "}
            C |{" "}
            <a href="/" onClick={showImperial}>
              F
            </a>{" "}
          </p>
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
          <p className="temperature-convert fs-4 px-5 py-5">
            {" "}
            <a href="/" onClick={showMetric}>
              C
            </a>{" "}
            | F{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default WeatherTemp;
