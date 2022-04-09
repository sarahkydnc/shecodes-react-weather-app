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
      <div>
        <div className="row">
          <div className="col-9 current-temperature" id="current-temp">
            {Math.round(props.celsius)}°
          </div>
          <div className="col-3">
            <div className="temperature-convert justify-content-end fs-4">
              <button href="/" className="btn mb-3" id="metric-button">
                C
              </button>
              <button
                href="/"
                className="btn"
                id="imperial-button"
                onClick={showImperial}
              >
                F
              </button>
            </div>
          </div>
        </div>

        <div className="row temperature-range text-middle">
          <div className="col-4">
            <p className="current-feel">
              Feels like
              <br />
              <span className="data-highlight">{props.feel}°</span>
            </p>
          </div>
          <div className="col-4">
            <p className="temperature-low">
              Low
              <br />
              <span className="data-highlight low-data">{props.low}°</span>
            </p>
          </div>
          <div className="col-4">
            <p className="temperature-high">
              High
              <br />
              <span className="data-highlight high-data">{props.high}°</span>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let fahrenheitFeel = (props.feel * 9) / 5 + 32;
    let fahrenheitLow = (props.low * 9) / 5 + 32;
    let fahrenheitHigh = (props.high * 9) / 5 + 32;

    return (
      <div>
        <div className="row">
          <div className="col-9 current-temperature" id="current-temp">
            {Math.round(fahrenheit)}°
          </div>
          <div className="col-3">
            <div className="temperature-convert justify-content-end fs-4">
              <button
                href="/"
                className="btn mb-3"
                id="metric-button"
                onClick={showMetric}
              >
                C
              </button>
              <button href="/" className="btn" id="imperial-button">
                F
              </button>
            </div>
          </div>
        </div>

        <div className="row temperature-range text-middle">
          <div className="col-4">
            <p className="current-feel">
              Feels like
              <br />
              <span className="data-highlight">
                {Math.round(fahrenheitFeel)}°
              </span>
            </p>
          </div>
          <div className="col-4">
            <p className="temperature-low">
              Low
              <br />
              <span className="data-highlight low-data">
                {Math.round(fahrenheitLow)}°
              </span>
            </p>
          </div>
          <div className="col-4">
            <p className="temperature-high">
              High
              <br />
              <span className="data-highlight high-data">
                {Math.round(fahrenheitHigh)}°
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherTemp;
